// Order intake: prices are recalculated on the server from the catalogue, never trusted from the browser.
import { PRODUCTS, SHOP, CONTACT } from '@/src/config/site'
import { saveRecord, isStoreConfigured } from '@/src/lib/store'
import { sendMail, shell, esc, nl2br, detailRow, detailTable, ownerAddress } from '@/src/lib/mailer'
import { EMAIL_RE, clean, makeRef } from '@/src/lib/enquiry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const METHODS: Record<string, string> = { 'bank-transfer': 'Bank transfer', payid: 'PayID / OSKO', crypto: 'Crypto (BTC / USDT)' }
const money = (n: number) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(n)
const round2 = (n: number) => Math.round(n * 100) / 100

export async function POST(req: Request) {
  let body: any
  try { body = await req.json() } catch { return Response.json({ success: false, message: 'Invalid request.' }, { status: 400 }) }

  if (clean(body.website, 200)) return Response.json({ success: true, orderReference: makeRef('TQR') })

  const name = clean(body.name, 120)
  const email = clean(body.email, 160)
  const phone = clean(body.phone, 40)
  const notes = clean(body.notes, 2000)
  const method = clean(body.paymentMethod, 30)
  const a = body.address || {}
  const address = {
    street: clean(a.street, 160), suburb: clean(a.suburb, 80),
    state: clean(a.state, 20), postcode: clean(a.postcode, 10),
  }

  if (!name || !EMAIL_RE.test(email) || phone.length < 6 || !address.street || !address.suburb || !address.state || !/^\d{4}$/.test(address.postcode) || !METHODS[method]) {
    return Response.json({ success: false, message: 'Please complete your name, email, phone, delivery address and payment method.' }, { status: 400 })
  }

  const rawItems: any[] = Array.isArray(body.items) ? body.items.slice(0, 30) : []
  const items = rawItems.flatMap(it => {
    const p = PRODUCTS.find(x => x.slug === String(it?.slug))
    const qty = Math.floor(Number(it?.qty))
    if (!p || !(qty >= 1) || qty > 50) return []
    return [{ slug: p.slug, name: p.name, category: p.category, offRoad: (p as any).compliance === 'off-road', qty, unit: Number(p.price), line: round2(Number(p.price) * qty) }]
  })
  if (!items.length) return Response.json({ success: false, message: 'Your order is empty.' }, { status: 400 })

  const subtotal = round2(items.reduce((s, i) => s + i.line, 0))
  if (subtotal < SHOP.minOrder) {
    return Response.json({ success: false, message: `The minimum order is ${money(SHOP.minOrder)}.` }, { status: 400 })
  }
  const baseShipping = subtotal > SHOP.freeShippingThreshold ? 0 : SHOP.shippingFee
  const shipping = round2(baseShipping - (subtotal >= SHOP.shippingDiscountThreshold ? baseShipping * SHOP.shippingDiscountRate / 100 : 0))
  const cryptoDiscount = method === 'crypto' ? round2((subtotal + shipping) * SHOP.cryptoDiscount / 100) : 0
  const total = round2(subtotal + shipping - cryptoDiscount)

  const reference = makeRef('TQR')
  const record = {
    id: reference, status: 'new', createdAt: new Date().toISOString(),
    name, email, phone, address, notes, paymentMethod: method, items, subtotal, shipping, cryptoDiscount, total,
  }

  let stored = false
  if (isStoreConfigured()) {
    try { await saveRecord('order', reference, record); stored = true } catch (e) { console.error('store failed', e) }
  }

  const itemRows = items.map(i =>
    `<tr><td style="padding:6px 8px 6px 0;border-bottom:1px solid #e5e7eb;">${esc(i.name)}</td><td style="padding:6px 8px;border-bottom:1px solid #e5e7eb;text-align:center;">${i.qty}</td><td style="padding:6px 0;border-bottom:1px solid #e5e7eb;text-align:right;">${money(i.line)}</td></tr>`).join('')
  const totalsRows =
    detailRow('Subtotal', money(subtotal)) + detailRow('Shipping', shipping === 0 ? 'Free' : money(shipping)) +
    (cryptoDiscount ? detailRow(`Crypto discount (${SHOP.cryptoDiscount}%)`, `-${money(cryptoDiscount)}`) : '') +
    detailRow('<b>Total (AUD)</b>', `<b>${money(total)}</b>`)
  const itemsTable = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;margin:8px 0 12px;"><tr><th align="left" style="padding:6px 8px 6px 0;color:#6b7280;">Item</th><th style="padding:6px 8px;color:#6b7280;">Qty</th><th align="right" style="padding:6px 0;color:#6b7280;">Amount</th></tr>${itemRows}</table>`
  const addrText = `${address.street}, ${address.suburb} ${address.state} ${address.postcode}`
  const offRoad = items.some(i => i.offRoad)

  const owner = await sendMail({
    to: ownerAddress(),
    replyTo: email,
    subject: `New order ${reference} - ${money(total)} - ${name}`,
    html: shell(`New order ${reference}`,
      detailTable(detailRow('Customer', esc(name)) + detailRow('Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`) + detailRow('Phone', esc(phone)) +
        detailRow('Deliver to', esc(addrText)) + detailRow('Payment', esc(METHODS[method]))) +
      itemsTable + detailTable(totalsRows) +
      (notes ? `<p style="margin:0 0 6px;color:#6b7280;">Customer notes</p><p style="margin:0 0 12px;">${nl2br(notes)}</p>` : '') +
      `<p style="margin:0;color:#6b7280;">Send payment details from the admin dashboard: ${esc(process.env.NEXT_PUBLIC_SITE_URL || 'https://torquee-bikesaustralia.com.au')}/admin/</p>`),
  })

  const ack = await sendMail({
    to: email,
    replyTo: CONTACT.email,
    subject: `Order ${reference} received - Torque E-Bikes`,
    html: shell('Thanks, we have your order',
      `<p>Hi ${esc(name)},</p>
       <p>We have received your order. <b>It is not paid yet.</b> The Torque Team will email you the payment details for your chosen method (${esc(METHODS[method])}) shortly, and will confirm stock and dispatch once payment clears.</p>
       ${detailTable(detailRow('Order reference', `<b>${esc(reference)}</b>`) + detailRow('Deliver to', esc(addrText)))}
       ${itemsTable}${detailTable(totalsRows)}
       <p>Please quote <b>${esc(reference)}</b> as your payment reference.</p>
       ${offRoad ? '<p style="font-size:13px;color:#6b7280;">Reminder: high-powered machines and kits in this order are for off-road, private property use only and are not for public roads or paths.</p>' : ''}
       <p>Questions? Reply to this email, call ${esc(CONTACT.phone)} or WhatsApp ${esc(CONTACT.whatsapp)}.</p>`),
  })

  if (!stored && !owner.sent) {
    return Response.json({ success: false, message: `We could not record your order. Please email ${CONTACT.email} or call ${CONTACT.phone}.` }, { status: 502 })
  }
  return Response.json({ success: true, orderReference: reference, total, acknowledged: ack.sent })
}
