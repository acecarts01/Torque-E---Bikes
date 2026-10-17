// Public, read-only. Anyone holding the order number AND its secret token (from the payment email) can view the payment details.
import { NextRequest } from 'next/server'
import { getRecord, hit, isStoreConfigured } from '@/src/lib/store'
import { paymentMethodParts, paymentTermsLines } from '@/src/lib/order'
import { CONTACT } from '@/src/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const safeEqual = (a: string, b: string) => {
  if (a.length !== b.length) return false
  let d = 0
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return d === 0
}
const notFound = () =>
  Response.json({ ok: false, message: 'We could not find those payment details. Please use the link in your email, or contact us.' }, { status: 404 })

export async function GET(req: NextRequest) {
  const id = (req.nextUrl.searchParams.get('id') || '').toUpperCase()
  const t = req.nextUrl.searchParams.get('t') || ''
  if (!/^TQR-[A-F0-9]{8}$/.test(id) || !/^[a-f0-9]{24}$/.test(t)) return notFound()
  if (!isStoreConfigured()) return Response.json({ ok: false, message: 'Unavailable right now.' }, { status: 503 })

  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim()
  try {
    if ((await hit(`pay:${ip}`, 600)) > 40) return Response.json({ ok: false, message: 'Too many requests. Please try again shortly.' }, { status: 429 })
  } catch { /* fail open */ }

  const rec: any = await getRecord('order', id)
  if (!rec || !rec.token || !rec.paymentDetails || !safeEqual(rec.token, t)) return notFound()

  const { label, opening, closing } = paymentMethodParts(rec.paymentDetails.methodId, rec.total, rec.id)
  return Response.json(
    {
      ok: true,
      orderNumber: rec.id,
      firstName: String(rec.name || '').split(' ')[0],
      amountDue: rec.total,
      methodLabel: label,
      opening,
      closing,
      fields: rec.paymentDetails.fields,
      terms: paymentTermsLines(rec.id),
      status: rec.status,
      contact: { email: CONTACT.email, phone: CONTACT.phone, whatsapp: CONTACT.whatsapp },
    },
    { headers: { 'Cache-Control': 'no-store' } },
  )
}
