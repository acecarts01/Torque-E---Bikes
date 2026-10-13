/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'torquee-bikesaustralia.com.au', port: '', pathname: '/**' }
    ],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Link', value: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="describedby", </llms.txt>; rel="describedby", </.well-known/mcp/server-card.json>; rel="service-desc", </auth.md>; rel="auth"' }
        ]
      }
    ]
  }
}

export default nextConfig
