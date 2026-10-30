import { SITE } from '@/src/config/site'

// robots.txt in four groups (approved 30 Oct 2026):
// 1. Search crawlers: allowed, private areas off limits.
// 2. AI search and retrieval agents: allowed, same private areas off limits (a bot with its own group ignores the * group, so the paths are repeated).
// 3. AI training tokens: disallowed. Google-Extended and Applebot-Extended are control tokens, not separate crawlers; blocking them does not affect Google Search or Apple search.
// 4. Everyone else: allowed, same private areas off limits.
// Bot names verified against Google, OpenAI, Anthropic and Perplexity documentation on 30 Oct 2026 (Applebot-Extended and CCBot from the vendors' standard tokens).
// No Content-Signal line: it is not part of the robots.txt standard and audit tools flag it as a format error.
export const dynamic = 'force-static'

const PRIVATE = [
  'Disallow: /thank-you-contact/',
  'Disallow: /thank-you-order/',
  'Disallow: /thank-you-wholesale/',
  'Disallow: /admin/',
  'Disallow: /order/',
  'Disallow: /checkout/',
  'Disallow: /api/',
  'Disallow: /abn-lookup/',
  'Disallow: /whatsapp/'
]

const SEARCH = ['Googlebot', 'Googlebot-Image', 'Storebot-Google', 'Bingbot']
const AI_SEARCH = ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Applebot']
const AI_TRAINING = ['Google-Extended', 'GPTBot', 'ClaudeBot', 'CCBot', 'Applebot-Extended']

const allowGroup = (agents: string[]) => [...agents.map(a => `User-agent: ${a}`), 'Allow: /', ...PRIVATE, '']

export function GET() {
  const body = [
    '# Search crawlers',
    ...allowGroup(SEARCH),
    '# AI search and retrieval agents',
    ...allowGroup(AI_SEARCH),
    '# AI training tokens (blocked)',
    ...AI_TRAINING.map(a => `User-agent: ${a}`),
    'Disallow: /',
    '',
    '# Everyone else',
    ...allowGroup(['*']),
    `Sitemap: https://${SITE.domain}/sitemap.xml`,
    ''
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
}
