import { NextRequest } from 'next/server'
import { CONTACT } from '@/src/config/site'

// Short link to our WhatsApp chat: /whatsapp/ or /whatsapp/?text=Hello. People are sent straight to WhatsApp (GET -> 307).
// wa.me answers 429 to automated link checkers (Semrush, Rank Math), which reports every WhatsApp button on the site as a
// broken link. A HEAD request here answers 200. The destination itself is a working chat link.
const number = CONTACT.whatsapp.replace(/\D/g, '')

export function GET(req: NextRequest) {
  const text = (req.nextUrl.searchParams.get('text') || '').slice(0, 500)
  const to = `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`
  return new Response(null, { status: 307, headers: { Location: to, 'X-Robots-Tag': 'noindex, nofollow' } })
}

export function HEAD() {
  return new Response(null, { status: 200, headers: { 'X-Robots-Tag': 'noindex, nofollow' } })
}
