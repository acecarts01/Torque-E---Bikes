import React from 'react'
import { PRODUCTS } from '@/src/config/products'
import ProductDetail from '@/src/components/ProductDetail'
import PRODUCT_COPY from '@/src/config/product-copy.generated.json'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import { getSeo } from '@/src/lib/seo'
import { getPageFaq } from '@/src/lib/faq'
import NOINDEX from '@/src/config/noindex-products.json'
import { notFound } from 'next/navigation'
import { ProductToc, ProductExtras } from '@/src/components/ProductExtras'
import { guideLinks } from '@/src/lib/blog'

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    category: p.category,
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) return { title: 'Machine Not Found' }

  const meta = generatePageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/shop/${product.category}/${product.slug}/`,
    image: product.images[0]
  })
  // Parts-only pages with no supplier specifications and no guide linking to them stay live for customers but are kept out of the index (list built by scripts/thin-products.mjs).
  return (NOINDEX as string[]).includes(product.slug) ? { ...meta, robots: { index: false, follow: true } } : meta
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) notFound()
  const path = `/shop/${product.category}/${product.slug}/`
  const seo = getSeo(path)
  const faq = getPageFaq(path)
  // Hero alt text: the product's transactional focus keyword first, then the descriptive part of the existing alt.
  const focus = ((seo?.kw as string[] | undefined) || [])[0]
  const rest = (seo?.alt || '').split(' — ')[1]
  const cap = (s: string) => s.replace(/\baustralia\b/g, 'Australia').replace(/\b(\w)/, c => c.toUpperCase())
  const nameLc = product.name.toLowerCase()
  const focusAlt = focus ? (focus.startsWith(nameLc) ? product.name + focus.slice(nameLc.length).replace(/\baustralia\b/g, 'Australia') : cap(focus)) : ''
  const heroAlt = focusAlt && rest ? `${focusAlt} — ${rest}` : seo?.alt
  const toc = [
    { id: 'overview', label: `About the ${product.name}` },
    { id: 'cost-to-your-door', label: 'Cost to your door' },
    { id: 'related-products', label: 'Related products' },
    ...(guideLinks(path).length ? [{ id: 'related-guides', label: 'Guides' }] : []),
    ...(faq.length ? [{ id: 'page-faq-heading', label: 'FAQs' }] : []),
  ]

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <AnnouncementBar />
      <Nav />
      <main className="flex-grow pt-32 pb-24">
        <ProductDetail product={product} copy={(PRODUCT_COPY as Record<string, string[]>)[slug]} h1={seo?.h1} alt={heroAlt} faq={faq} extrasTop={<ProductToc items={toc} />} extrasBottom={<ProductExtras product={product} />} />
      </main>
      <Footer />
    </div>
  )
}
