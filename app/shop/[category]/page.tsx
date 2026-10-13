import React from 'react'
import { CATEGORIES } from '@/src/config/site'
import CategoryDetail from '@/src/components/CategoryDetail'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import JsonLd from '@/src/components/JsonLd'

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
        <JsonLd 
          type="BreadcrumbList" 
          data={[
            { name: 'Home', item: '/' },
            { name: 'Shop', item: '/shop/' },
            { name: category?.name || 'Category', item: `/shop/${slug}/` }
          ]} 
        />
        <CategoryDetail slug={slug} />
      </main>
      <Footer />
    </div>
  )
}
