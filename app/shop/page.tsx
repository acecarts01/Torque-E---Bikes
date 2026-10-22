import ShopClient from '@/src/components/ShopClient'
import { PRODUCTS } from '@/src/config/products'
import JsonLd from '@/src/components/JsonLd'
import PageFaq from '@/src/components/PageFaq'
import { getPageFaq } from '@/src/lib/faq'

// The first page of cards is rendered on the server. The rest of the light catalogue (for filters and sorting)
// is fetched by the browser from /shop-index.json after the first paint, so it is not part of the page or its scripts.
export default function ShopPage() {
  const light = (p: (typeof PRODUCTS)[number]) => ({
    slug: p.slug, name: p.name, price: p.price, comparePrice: p.comparePrice, bestPrice: p.bestPrice, category: p.category,
    badge: p.badge, images: [p.images[0]], compliance: p.compliance, shortDescription: p.shortDescription, stock: p.stock,
    power: p.power, voltage: p.voltage, compatibility: p.compatibility,
  })
  return (
    <ShopClient initial={PRODUCTS.slice(0, 24).map(light)} total={PRODUCTS.length}>
      <JsonLd type="Breadcrumb" data={[{ name: 'Home', item: '/' }, { name: 'Shop', item: '/shop/' }]} />
      <PageFaq items={getPageFaq('/shop/')} heading="Shop FAQs" />
    </ShopClient>
  )
}
