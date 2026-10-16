// src/components/HubPage.tsx
import React from 'react'
import Link from 'next/link'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import JsonLd from '@/src/components/JsonLd'
import ProductCard from '@/src/components/ProductCard'
import PageFaq from '@/src/components/PageFaq'
import RelatedGuides from '@/src/components/RelatedGuides'
import { getSeo } from '@/src/lib/seo'
import { getPageFaq } from '@/src/lib/faq'

type Card = React.ComponentProps<typeof ProductCard>['product']

export default function HubPage({
  path, name, eyebrow, intro, note, products, links, crumbs, gridHeading,
}: {
  path: string
  name: string
  eyebrow: string
  intro: string
  note?: string
  products: Card[]
  links?: { href: string; label: string; count?: number }[]
  crumbs: { name: string; item: string }[]
  gridHeading?: string
}) {
  const seo = getSeo(path)
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <AnnouncementBar />
      <Nav />
      <main className="flex-grow pt-32 pb-24">
        <JsonLd type="BreadcrumbList" data={crumbs} />
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <div className="bg-brand-accent p-8 md:p-12 border border-white/5 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-full bg-brand-red/5 blur-3xl rounded-full" />
              <div className="relative z-10 max-w-3xl">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-4">{eyebrow}</p>
                <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">{seo?.h1 || name}</h1>
                <p className="text-lg text-brand-gray font-medium leading-relaxed">{intro}</p>
                {note && <p className="mt-4 text-sm text-brand-gray">{note}</p>}
              </div>
            </div>
          </section>

          {links && links.length > 0 && (
            <nav aria-label={`${name} categories`} className="mb-12 flex flex-wrap gap-3">
              {links.map(l => (
                <Link key={l.href} href={l.href} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white hover:border-brand-red hover:text-brand-red transition-colors">
                  {l.label}{typeof l.count === 'number' ? ` (${l.count})` : ''}
                </Link>
              ))}
            </nav>
          )}

          <section aria-labelledby="hub-products">
            <h2 id="hub-products" className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-8">{gridHeading || `${name} products`}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {products.map(p => <ProductCard key={p.slug} product={p} />)}
            </div>
          </section>

          <RelatedGuides path={path} />
          <PageFaq items={getPageFaq(path)} heading={`${name} FAQs`} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
