import { BRAND } from '@/src/config/site'

// Short link to our entry on ABN Lookup. People are sent straight to the government register (GET -> 307).
// abr.business.gov.au answers 404 to every HEAD request (even its own home page), which makes link checkers such as
// Rank Math report a broken link, so a HEAD request here answers 200. The destination itself is a working page.
export function GET() {
  return new Response(null, { status: 307, headers: { Location: BRAND.abnLookupUrl, 'X-Robots-Tag': 'noindex, nofollow' } })
}

export function HEAD() {
  return new Response(null, { status: 200, headers: { 'X-Robots-Tag': 'noindex, nofollow' } })
}
