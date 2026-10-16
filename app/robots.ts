import { SITE } from '@/src/config/site'

// Allow every crawler (search, AI retrieval and AI training). Private areas stay off limits for all bots.
// One group only: a bot with its own group would ignore the rules in the * group.
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
          '/admin/',
          '/order/',
          '/checkout/',
          '/api/'
        ],
      },
    ],
    sitemap: `https://${SITE.domain}/sitemap.xml`,
  }
}
