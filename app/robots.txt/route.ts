import { SITE } from '@/src/config/site'

// robots.txt: allow every crawler (search, AI retrieval and AI training) and keep private areas off limits for all bots.
// No Content-Signal line: it is not part of the robots.txt standard and audit tools flag it as a format error. One group only: a bot with its own group would ignore the * group.
export const dynamic = 'force-static'

export function GET() {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /thank-you-contact/',
    'Disallow: /thank-you-order/',
    'Disallow: /thank-you-wholesale/',
    'Disallow: /admin/',
    'Disallow: /order/',
    'Disallow: /checkout/',
    'Disallow: /api/',
    'Disallow: /abn-lookup/',
    'Disallow: /whatsapp/',
    '',
    `Sitemap: https://${SITE.domain}/sitemap.xml`,
    ''
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
}
