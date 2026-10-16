import HomeClient from '@/src/components/HomeClient'
import { PRODUCTS } from '@/src/config/products'
import { HOME_FAQ } from '@/src/lib/faq'

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.featured)
  const heroProduct = featuredProducts[0] || PRODUCTS[0]
  return <HomeClient featuredProducts={featuredProducts} heroProduct={heroProduct} homeFaq={HOME_FAQ} />
}
