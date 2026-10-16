import HomeClient from '@/src/components/HomeClient'
import { PRODUCTS } from '@/src/config/products'
import { HOME_FAQ } from '@/src/lib/faq'

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.featured)
  return <HomeClient featuredProducts={featuredProducts} homeFaq={HOME_FAQ} />
}
