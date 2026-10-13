// app/api/sitemap.xml/route.ts
import { PRODUCTS, CATEGORIES, POSTS, SITE } from '@/src/config/site'

export async function GET() {
  const domain = `https://${SITE.domain}`
  const lastmod = new Date().toISOString().split('T')[0]

  const staticPages = [
    '',
    '/shop/',
    '/about/',
    '/faq/',
    '/contact/',
    '/wholesale/',
    '/search/',
    '/terms/',
    '/privacy/',
    '/shipping-returns/'
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${staticPages.map(page => `
  <url>
    <loc>${domain}${page}${page.endsWith('/') || page === '' ? '' : '/'}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${CATEGORIES.map(cat => `
  <url>
    <loc>${domain}/shop/${cat.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
  ${PRODUCTS.map(prod => `
  <url>
    <loc>${domain}/shop/${prod.category}/${prod.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${prod.images.map(img => `
    <image:image>
      <image:loc>${domain}${img}</image:loc>
      <image:title>${prod.name.replace(/&/g, '&amp;')}</image:title>
    </image:image>`).join('')}
  </url>`).join('')}
  ${POSTS.map(post => `
  <url>
    <loc>${domain}/blog/${post.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
