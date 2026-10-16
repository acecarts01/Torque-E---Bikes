'use client'

import React from 'react'
import { motion } from 'motion/react'
import '@/src/lib/motion-setup'
import Nav from '@/src/components/Nav'
import Hero from '@/src/components/Hero'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import JsonLd from '@/src/components/JsonLd'
import SmartImage from '@/src/components/SmartImage'
import ProductCard from '@/src/components/ProductCard'
import ReviewSlider from '@/src/components/ReviewSlider'
import Link from 'next/link'
import { ArrowRight, ShieldAlert, Cpu, Wrench, Package, Radio, Gauge } from 'lucide-react'
import { CATEGORIES, BRAND } from '@/src/config/site'
import PageFaq from '@/src/components/PageFaq'
import type { FaqItem } from '@/src/lib/faq'
import { PUBLISHED } from '@/src/lib/blog'
import { cn } from '@/src/lib/utils'

// The server page (app/page.tsx) chooses the few products and FAQ items this page needs, so the browser never downloads the full catalogue.
export default function HomeClient({ featuredProducts, homeFaq }: { featuredProducts: any[]; homeFaq: FaqItem[] }) {

  return (
    <main className="flex-grow selection:bg-brand-red selection:text-[#140800]">
      <JsonLd type="Organization" />
      <AnnouncementBar />
      <Nav />
      <Hero />

      {/* Engineering Stats */}
      <section className="bg-brand-dark py-16 relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Dispatch', value: 'Express AU', icon: Package },
              { label: 'Tuning', value: 'Brisbane HQ', icon: Wrench },
              { label: 'Safety', value: 'DG Class 9', icon: ShieldAlert },
              { label: 'Stock', value: '100% Sync', icon: Radio }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/5">
                <stat.icon className="w-6 h-6 text-brand-red shrink-0" />
                <div>
                  <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-gray">{stat.label}</p>
                  <p className="text-sm font-black italic uppercase tracking-tighter text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories - Compact Grid */}
      <section className="py-24 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-[1px] bg-brand-red" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-red">The Platforms</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">
                PRECISION <span className="text-brand-red">HUB.</span>
              </h2>
            </div>
            <Link href="/shop/" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/5 px-6 py-4 rounded-xl hover:bg-brand-red transition-all border border-white/5">
              Browse All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              >
                <Link
                  href={`/shop/${cat.slug}/`}
                  className="group block overflow-hidden rounded-2xl border border-white/5 bg-brand-accent hover:border-brand-red/40 transition-colors"
                >
                  <div className="relative aspect-[4/3] bg-white">
                    <SmartImage src={cat.image} alt={cat.name} fill className="group-hover:scale-105 transition-transform duration-700 object-contain p-3" />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-xs sm:text-sm font-black italic uppercase tracking-tighter text-white leading-tight">{cat.name}</h3>
                    <p className="text-[9px] text-brand-gray font-bold uppercase tracking-wider mt-1">{cat.count} products</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products - Clean Alignment */}
      <section className="py-24 bg-brand-dark border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-16 space-y-4">
          <p className="text-[9px] font-black uppercase tracking-[0.5em] text-brand-red">High-Output Inventory</p>
          <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-white">BRISBANE&apos;S <span className="text-brand-red italic underline underline-offset-8 decoration-2">FINEST.</span></h2>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {featuredProducts.map((p, idx) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Link href="/shop/" className="px-10 py-5 bg-white/5 hover:bg-white/10 rounded-full font-black uppercase tracking-[0.3em] text-[10px] text-brand-gray hover:text-white transition-all border border-white/10">
              View All Specs
            </Link>
          </div>
        </div>
      </section>

      <ReviewSlider />

      {PUBLISHED.length > 0 && (
        <section className="bg-brand-dark px-4 pb-16" aria-labelledby="home-guides">
          <div className="container mx-auto max-w-5xl">
            <h2 id="home-guides" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-8">Latest guides</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 list-none p-0 m-0">
              {PUBLISHED.slice(0, 3).map(p => (
                <li key={p.slug}>
                  <Link href={p.url} className="block h-full rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-brand-red transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-red">{p.category}</span>
                    <span className="mt-2 block font-bold text-white">{p.title}</span>
                    <span className="mt-2 block text-sm text-brand-gray">{p.excerpt}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-brand-dark px-4 pb-24">
        <PageFaq items={homeFaq} heading="Torque E-Bikes FAQs" />
      </section>

      {/* Heritage Section - Compacted */}
      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="bg-brand-accent/30 rounded-[2.5rem] border border-white/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              <div className="p-12 lg:p-20 flex flex-col justify-center space-y-8">
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full text-[8px] font-black uppercase tracking-[0.3em] text-brand-red">EST. {BRAND.foundingYear}</span>
                  <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-white">
                    THE TORQUE <span className="text-brand-red italic">ENGINEERING</span> HERITAGE.
                  </h2>
                </div>
                <p className="text-lg text-brand-gray font-medium leading-relaxed uppercase tracking-wider">
                  {BRAND.description}
                </p>
                <div className="flex gap-10 border-t border-white/5 pt-8">
                  <div>
                    <p className="text-3xl font-black text-brand-red italic tracking-tighter leading-none">17YRS</p>
                    <p className="text-[8px] uppercase font-black tracking-widest text-brand-gray mt-1">Aus Operations</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-brand-red italic tracking-tighter leading-none">BRIS</p>
                    <p className="text-[8px] uppercase font-black tracking-widest text-brand-gray mt-1">Tech Labs</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <SmartImage src="/images/about-garage.webp" alt="Mechanic working on a motorcycle in a garage" fill className="object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 to-transparent lg:hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
