import React from 'react'
import { CATEGORIES } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'
import CategoryDetail from '@/src/components/CategoryDetail'
import CATEGORY_COPY from '@/src/config/category-copy.generated.json'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import { getSeo } from '@/src/lib/seo'
import { getPageFaq } from '@/src/lib/faq'

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({
    category: c.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params
  const category = CATEGORIES.find(c => c.slug === slug)
  if (!category) return { title: 'Category Not Found' }

  return generatePageMetadata({
    title: category.name,
    description: category.description,
    path: `/shop/${category.slug}/`,
    image: category.image
  })
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params
  const category = CATEGORIES.find(c => c.slug === slug)
  
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <AnnouncementBar />
      <Nav />
      <main className="flex-grow pt-32 pb-24">
        <CategoryDetail slug={slug} intro={(CATEGORY_COPY as Record<string, string[]>)[slug]} products={PRODUCTS.filter(p => p.category === slug)} h1={getSeo(`/shop/${slug}/`)?.h1} faq={getPageFaq(`/shop/${slug}/`)} />
      </main>
      <Footer />
    </div>
  )
}
