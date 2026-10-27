import brandRedirects from './src/config/brand-redirects.generated.json'

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: { cpus: 1 },
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'torquee-bikesaustralia.com.au', port: '', pathname: '/**' }
    ],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
  },
  // Thin brand pages and merged blog posts: send their old URLs to the page that replaced them (permanent).
  async redirects() {
    const merged = [
      { source: '/blog/talaria-electric-dirt-bikes', destination: '/blog/talaria-x3-mx3-and-mx4/' },
      { source: '/blog/electric-balance-bikes', destination: '/blog/kids-electric-dirt-bikes/' },
      { source: '/blog/best-electric-dirt-bikes-in-australia', destination: '/blog/electric-vs-petrol-dirt-bikes/' },
    ]
    return [...(brandRedirects as { source: string; destination: string }[]), ...merged].map(r => ({ source: r.source, destination: r.destination, permanent: true }))
  },
  async rewrites() {
    return [{ source: '/sitemap.xml', destination: '/api/sitemap.xml' }]
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
