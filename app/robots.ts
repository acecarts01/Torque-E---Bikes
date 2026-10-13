import { SITE } from '@/src/config/site'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/thank-you-contact/',
          '/thank-you-order/',
          '/thank-you-wholesale/',
          '/api/'
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-Web', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: `https://${SITE.domain}/sitemap.xml`,
  }
}
