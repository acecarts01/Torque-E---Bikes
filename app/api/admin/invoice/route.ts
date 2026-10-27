import { NextRequest } from 'next/server'
import { isAdmin } from '@/src/lib/adminAuth'
import { PRODUCTS } from '@/src/config/products'
import { CONTACT, REPLY } from '@/src/config/site'
import { getRecord, saveRecord, updateRecord, isStoreConfigured } from '@/src/lib/store'
import { sendMail, ownerAddress } from '@/src/lib/mailer'
import { documentEmail, type IssuedDoc } from '@/src/lib/emailDocuments'
import { parsePaymentDetail, findMethod } from '@/src/lib/order'
import { toCents } from '@/src/lib/pricing'
import { docTotals, addDays, todayBrisbane, DOC_PREFIX, INVOICE_DUE_DAYS, QUOTE_VALID_DAYS, type DocType } from '@/src/lib/quote'
import { productInstructions, generalAfterPayment } from '@/src/lib/instructions'
import { EMAIL_RE, clean, makeRef } from '@/src/lib/enquiry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const bySlug = (slug: string) => PRODUCTS.find(p => p.slug === slug)

/** A line for the builder, with the catalogue's category-aware instructions filled in. */
function draftItem(slug: string, qty: number, nameFallback?: string, unitFallback?: number) {
  const p = bySlug(slug) as any
  const unit = Number(p?.price ?? unitFallback ?? 0)
  return {
    slug, name: p?.name || nameFallback || slug, qty, unit, category: p?.category || '',
    instructions: p ? productInstructions({ slug: p.slug, name: p.name, category: p.category, compliance: p.compliance }) : [],
  }
}

// GET ?quote=ID | ?order=ID | ?doc=ID  -> a filled-in draft for the builder
// GET ?q=text                          -> product search for adding lines
export async function GET(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  const sp = req.nextUrl.searchParams

  const one = sp.get('product')
  if (one) {
    const p = bySlug(one)
    return p ? Response.json({ ok: true, item: draftItem(p.slug, 1) }) : Response.json({ ok: false, message: 'Product not found.' }, { status: 404 })
  }

  const q = sp.get('q')
  if (q !== null) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
    const hits = PRODUCTS.filter(p => terms.every(t => `${p.name} ${p.brand} ${p.slug}`.toLowerCase().includes(t))).slice(0, 12)
      .map((p: any) => ({ slug: p.slug, name: p.name, price: p.price, category: p.category }))
    return Response.json({ ok: true, products: hits })
  }

  if (!isStoreConfigured()) return Response.json({ ok: false, message: 'Storage is not connected.' }, { status: 503 })
  const quoteId = sp.get('quote'), orderId = sp.get('order'), docId = sp.get('doc')
  const kind = quoteId ? 'quote' : orderId ? 'order' : docId ? 'document' : null
  const id = quoteId || orderId || docId
  if (!kind || !id) return Response.json({ ok: false, message: 'Bad request.' }, { status: 400 })

  const rec: any = await getRecord(kind, id)
  if (!rec) return Response.json({ ok: false, message: `Could not find ${id}.` }, { status: 404 })

  if (kind === 'document') {
    // Re-issue: same client and lines, new number
    return Response.json({
      ok: true, draft: {
        docType: rec.docType, client: rec.client, items: rec.items.map((i: any) => ({ ...draftItem(i.slug, i.qty, i.name, i.unit), unit: i.unit, instructions: i.instructions })),
        paymentMethodId: rec.paymentMethodId, notes: rec.notes || '', source: { kind: 'document', id },
      },
    })
  }
  if (kind === 'quote') {
    return Response.json({
      ok: true, draft: {
        docType: (rec.docType as DocType) || 'quote',
        client: { name: rec.name, email: rec.email, phone: rec.phone, business: rec.business || '', abn: rec.abn || '', address: rec.address },
        items: rec.items.map((i: any) => draftItem(i.slug, i.qty, i.name, i.unit)),
        paymentMethodId: 'bank-transfer', notes: rec.notes ? `Customer notes: ${rec.notes}` : '', source: { kind: 'quote', id },
      },
    })
  }
  return Response.json({
    ok: true, draft: {
      docType: 'invoice',
      client: { name: rec.name, email: rec.email, phone: rec.phone, business: '', abn: '', address: rec.address },
      items: rec.items.map((i: any) => draftItem(i.slug, i.qty, i.name, i.unit)),
      paymentMethodId: rec.paymentMethod || 'bank-transfer', notes: rec.notes ? `Customer notes: ${rec.notes}` : '', source: { kind: 'order', id },
    },
  })
}

const lines = (v: unknown, max: number, each = 600) =>
  (Array.isArray(v) ? v : String(v || '').split(/\r?\n/)).map(x => clean(x, each)).filter(Boolean).slice(0, max)
const isoDate = (v: unknown, fallback: string) => (/^\d{4}-\d{2}-\d{2}$/.test(String(v)) ? String(v) : fallback)

// POST: validate, recalculate every figure, store the document, email the client (and a copy to the owner).
export async function POST(req: NextRequest) {
  if (!(await isAdmin(req))) return Response.json({ ok: false }, { status: 401 })
  const b = await req.json().catch(() => ({}))

  const docType: DocType = b.docType === 'invoice' ? 'invoice' : 'quote'
  const c = b.client || {}, a = c.address || {}
  const client = {
    name: clean(c.name, 120), email: clean(c.email, 160), phone: clean(c.phone, 40), business: clean(c.business, 160), abn: clean(c.abn, 40),
    address: { street: clean(a.street, 160), suburb: clean(a.suburb, 80), state: clean(a.state, 20), postcode: clean(a.postcode, 10) },
  }
  if (!client.name || !EMAIL_RE.test(client.email)) return Response.json({ ok: false, message: 'Enter the client name and a valid email.' }, { status: 400 })

  const items = (Array.isArray(b.items) ? b.items.slice(0, 40) : []).flatMap((it: any) => {
    const name = clean(it?.name, 200), qty = Math.floor(Number(it?.qty)), unit = Number(it?.unit)
    if (!name || !(qty >= 1) || qty > 500 || !(unit >= 0) || unit > 1e6) return []
    return [{ slug: clean(it?.slug, 120), name, qty, unit, line: toCents(unit) * qty / 100, instructions: lines(it?.instructions, 20) }]
  })
  if (!items.length) return Response.json({ ok: false, message: 'Add at least one line item.' }, { status: 400 })

  const methodId = findMethod(String(b.paymentMethodId)) ? String(b.paymentMethodId) : 'bank-transfer'
  const paymentFields = parsePaymentDetail(String(b.paymentDetails || '').slice(0, 4000))
  if (docType === 'invoice' && !paymentFields.length) return Response.json({ ok: false, message: 'Paste the payment details before sending an invoice.' }, { status: 400 })

  const t = docTotals(items.map((i: any) => toCents(i.line)), methodId, { shipping: b.shipping === '' ? null : b.shipping, discount: b.discount === '' ? null : b.discount })
  const issueDate = isoDate(b.issueDate, todayBrisbane())
  const dueDate = isoDate(b.dueDate, addDays(issueDate, docType === 'invoice' ? INVOICE_DUE_DAYS : QUOTE_VALID_DAYS))

  const id = makeRef(DOC_PREFIX[docType])
  const doc: IssuedDoc & Record<string, unknown> = {
    id, docType, issueDate, dueDate, client, items: items.map((i: any) => ({ ...i, instructions: i.instructions.map((l: string) => l.replace(/\{ref\}/g, id)) })), ...t,
    paymentMethodId: methodId, paymentFields, paymentNote: clean(b.paymentNote, 2000),
    afterPayment: lines(b.afterPayment, 12).map(l => l.replace(/\{ref\}/g, id)), notes: clean(b.notes, 3000),
    status: 'sent', createdAt: new Date().toISOString(),
    source: b.source && ['quote', 'order', 'document'].includes(b.source.kind) ? { kind: b.source.kind, id: clean(b.source.id, 40) } : null,
  }

  const mail = documentEmail(doc)
  const sent = await sendMail({ to: client.email, replyTo: CONTACT.email, ...mail })
  if (!sent.sent) return Response.json({ ok: false, message: `Email failed: ${sent.error}` }, { status: 502 })
  // Owner copy, so the sent document always lands in the website's own mailbox too.
  const copy = await sendMail({ to: ownerAddress(), replyTo: client.email, subject: `[Copy] ${mail.subject}`, html: mail.html })

  let stored = false
  if (isStoreConfigured()) {
    try {
      await saveRecord('document', id, doc)
      stored = true
      if (doc.source && (doc.source as any).kind === 'quote') await updateRecord('quote', (doc.source as any).id, { status: 'quoted', documentId: id, updatedAt: new Date().toISOString() })
    } catch (e) { console.error('store failed', e) }
  }
  return Response.json({ ok: true, record: doc, stored, ownerCopy: copy.sent, dispatchLine: REPLY.dispatchLine })
}
