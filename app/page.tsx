import HomeClient from '@/src/components/HomeClient'
import { PRODUCTS } from '@/src/config/products'
import { HOME_FAQ } from '@/src/lib/faq'
import AbnTrust from '@/src/components/AbnTrust'

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.featured)
  return (
    <>
      {/* Preload the hero photo that is the largest paint, one file per screen size, so it starts downloading with the HTML. */}
      <link rel="preload" as="image" href="/images/hero-home-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
      <link rel="preload" as="image" href="/images/hero-home.webp" media="(min-width: 768px)" fetchPriority="high" />
      <HomeClient featuredProducts={featuredProducts} homeFaq={HOME_FAQ} abnSection={<AbnTrust />} />
    </>
  )
}
