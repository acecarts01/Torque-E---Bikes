// app/api/sitemap.xml/route.ts
import { CATEGORIES, POSTS, SITE } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'
import { brandSlugs } from '@/src/lib/hubs'
import { getSeo } from '@/src/lib/seo'

// Date the catalogue and prices were last changed. Update it when products or prices change; it is a real date, not "today".
const CATALOGUE_UPDATED = '2026-10-16'

const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const url = (loc: string, lastmod?: string, images = '') =>
  `
  <url>
    <loc>${loc}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}${images}
  </url>`

export async function GET() {
  const domain = `https://${SITE.domain}`

  // Pages whose content follows the catalogue carry its update date; fixed pages carry no date rather than a made-up one.
  const catalogueHubs = ['/', '/shop/', '/electric-bikes/', '/electric-bikes/budget/', '/brands/', '/compare/']
  const fixedPages = ['/about/', '/faq/', '/contact/', '/wholesale/', '/blog/', '/tools/conversion-kit-finder/', '/terms/', '/privacy/', '/shipping-returns/']

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${
    catalogueHubs.map(p => url(domain + p, CATALOGUE_UPDATED)).join('')
  }${
    fixedPages.map(p => url(domain + p)).join('')
  }${
    CATEGORIES.map(cat => url(`${domain}/shop/${cat.slug}/`, CATALOGUE_UPDATED)).join('')
  }${
    brandSlugs().filter(b => getSeo(`/brands/${b}/`)).map(b => url(`${domain}/brands/${b}/`, CATALOGUE_UPDATED)).join('')
  }${
    PRODUCTS.map(prod => url(
      `${domain}/shop/${prod.category}/${prod.slug}/`,
      CATALOGUE_UPDATED,
      prod.images.map(img => `
    <image:image>
      <image:loc>${domain}${img}</image:loc>
      <image:title>${esc(prod.name)}</image:title>
    </image:image>`).join('')
    )).join('')
  }${
    POSTS.map(post => url(`${domain}/blog/${post.slug}/`, post.date)).join('')
  }
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  })
}
