// Quote / invoice requests from product pages. Prices are read from the catalogue on the server, never trusted from the browser.
import { CONTACT } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'
import { saveRecord, isStoreConfigured } from '@/src/lib/store'
import { sendMail, ownerAddress } from '@/src/lib/mailer'
import { quoteRequestNotificationEmail, quoteAckEmail } from '@/src/lib/emailDocuments'
import { toCents } from '@/src/lib/pricing'
import { EMAIL_RE, clean, makeRef } from '@/src/lib/enquiry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: Request) {
  let body: any
  try { body = await req.json() } catch { return Response.json({ success: false, message: 'Invalid request.' }, { status: 400 }) }

  // Honeypot: bots fill the hidden field. Pretend success, store nothing.
  if (clean(body.website, 200)) return Response.json({ success: true, reference: makeRef('TQRQ') })

  const docType = body.docType === 'invoice' ? 'invoice' : 'quote'
  const name = clean(body.name, 120)
  const email = clean(body.email, 160)
  const phone = clean(body.phone, 40)
  const business = clean(body.business, 160)
  const abn = clean(body.abn, 40)
  const notes = clean(body.notes, 2000)
  const a = body.address || {}
  const address = { street: clean(a.street, 160), suburb: clean(a.suburb, 80), state: clean(a.state, 20), postcode: clean(a.postcode, 10) }

  if (!name || !EMAIL_RE.test(email) || phone.length < 6 || !address.street || !address.suburb || !address.state || !/^\d{4}$/.test(address.postcode)) {
    return Response.json({ success: false, message: 'Please complete your name, email, phone and delivery address.' }, { status: 400 })
  }

  const rawItems: any[] = Array.isArray(body.items) ? body.items.slice(0, 30) : []
  const items = rawItems.flatMap(it => {
    const p = PRODUCTS.find(x => x.slug === String(it?.slug))
    const qty = Math.floor(Number(it?.qty))
    if (!p || !(qty >= 1) || qty > 50) return []
    return [{ slug: p.slug, name: p.name, category: p.category, compliance: (p as any).compliance || '', qty, unit: Number(p.price), line: toCents(Number(p.price)) * qty / 100 }]
  })
  if (!items.length) return Response.json({ success: false, message: 'Please choose at least one product.' }, { status: 400 })

  const subtotal = items.reduce((s, i) => s + toCents(i.line), 0) / 100
  const reference = makeRef('TQRQ')
  const record = { id: reference, docType, status: 'new', createdAt: new Date().toISOString(), name, email, phone, business, abn, address, notes, items, subtotal }

  let stored = false
  if (isStoreConfigured()) {
    try { await saveRecord('quote', reference, record); stored = true } catch (e) { console.error('store failed', e) }
  }

  const owner = await sendMail({ to: ownerAddress(), replyTo: email, ...quoteRequestNotificationEmail(record as any) })
  const ack = await sendMail({ to: email, replyTo: CONTACT.email, ...quoteAckEmail(record as any) })

  if (!stored && !owner.sent) {
    return Response.json({ success: false, message: `We could not record your request. Please email ${CONTACT.email} or call ${CONTACT.phone}.` }, { status: 502 })
  }
  return Response.json({ success: true, reference, acknowledged: ack.sent })
}
