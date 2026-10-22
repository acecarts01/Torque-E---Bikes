import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import { generatePageMetadata } from '@/src/lib/metadata'
import { brandSlugs, brandName, brandProducts } from '@/src/lib/hubs'
import { getSeo } from '@/src/lib/seo'
import JsonLd from '@/src/components/JsonLd'

export const metadata: Metadata = generatePageMetadata({
  title: 'Brands',
  description: 'Electric bike and e-moto brands at Torque E-Bikes',
  path: '/brands/',
})

export default function Page() {
  const brands = brandSlugs().filter(s => getSeo(`/brands/${s}/`)).map(s => ({ slug: s, name: brandName(s) as string })).sort((a, b) => a.name.localeCompare(b.name))
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <AnnouncementBar />
      <Nav />
      <main className="flex-grow pt-32 pb-24">
        <JsonLd type="Breadcrumb" data={[{ name: 'Home', item: '/' }, { name: 'Brands', item: '/brands/' }]} />
        <JsonLd type="CollectionPage" data={{ name: 'Brands at Torque E-Bikes', url: 'https://torquee-bikesaustralia.com.au/brands/', numberOfItems: brands.length }} />
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">Brands at Torque E-Bikes</h1>
          <p className="text-lg text-brand-gray max-w-2xl mb-12">Browse electric dirt bikes, e-bikes, parts and gear by brand. Each brand page lists every product with its price in Australian dollars.</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map(b => (
              <li key={b.slug}>
                <Link href={`/brands/${b.slug}/`} className="block rounded-xl border border-white/10 bg-white/5 p-4 hover:border-brand-red transition-colors">
                  <span className="font-bold text-white">{b.name}</span>
                  <span className="block text-xs text-brand-gray">{brandProducts(b.name).length} products</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
