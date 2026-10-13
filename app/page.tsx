'use client'

import React from 'react'
import { motion } from 'motion/react'
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
import { CATEGORIES, PRODUCTS, BRAND, FAQ } from '@/src/config/site'
import { cn } from '@/src/lib/utils'

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.featured)

  return (
    <main className="flex-grow selection:bg-brand-red selection:text-white">
      <JsonLd type="Organization" />
      <JsonLd type="FAQ" data={FAQ} />
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
                  <h4 className="text-sm font-black italic uppercase tracking-tighter text-white">{stat.value}</h4>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link 
                  href={`/shop/${cat.slug}/`} 
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 bg-brand-accent block"
                >
                  <SmartImage src={cat.image} alt={cat.name} fill className="group-hover:scale-105 transition-transform duration-700 object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">{cat.name}</h3>
                    <p className="text-[10px] text-brand-gray font-medium uppercase tracking-wider mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore Range
                    </p>
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
                    <h4 className="text-3xl font-black text-brand-red italic tracking-tighter leading-none">17YRS</h4>
                    <p className="text-[8px] uppercase font-black tracking-widest text-brand-gray mt-1">Aus Operations</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-brand-red italic tracking-tighter leading-none">BRIS</h4>
                    <p className="text-[8px] uppercase font-black tracking-widest text-brand-gray mt-1">Tech Labs</p>
                  </div>
                </div>
              </div>
              <div className="relative min-h-[400px]">
                <SmartImage src="about-torque.webp" alt="Engineering" fill className="object-cover grayscale" />
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
