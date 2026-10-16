// Order intake: prices are recalculated on the server from the catalogue, never trusted from the browser.
import { PRODUCTS, SHOP, CONTACT } from '@/src/config/site'
import { saveRecord, isStoreConfigured } from '@/src/lib/store'
import { sendMail, ownerAddress } from '@/src/lib/mailer'
import { orderNotificationEmail, orderConfirmationEmail } from '@/src/lib/emailTemplates'
import { money } from '@/src/lib/order'
import { EMAIL_RE, clean, makeRef } from '@/src/lib/enquiry'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const METHODS: Record<string, string> = { 'bank-transfer': 'Bank transfer', payid: 'PayID / OSKO', crypto: 'Crypto (BTC / USDT)' }
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

  const offRoad = items.some(i => i.offRoad)
  const ownerMail = orderNotificationEmail(record as any)
  const owner = await sendMail({ to: ownerAddress(), replyTo: email, ...ownerMail })
  const ackMail = orderConfirmationEmail(record as any, offRoad)
  const ack = await sendMail({ to: email, replyTo: CONTACT.email, ...ackMail })

  if (!stored && !owner.sent) {
    return Response.json({ success: false, message: `We could not record your order. Please email ${CONTACT.email} or call ${CONTACT.phone}.` }, { status: 502 })
  }
  return Response.json({ success: true, orderReference: reference, total, acknowledged: ack.sent })
}
