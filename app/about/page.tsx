'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Zap, ShieldCheck, Truck, Trophy, MapPin, Calendar, Users, Award, ChevronRight, ArrowRight } from 'lucide-react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import { SITE, BRAND, CONTACT, CATEGORIES } from '@/src/config/site'
import JsonLd from '@/src/components/JsonLd'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Store", "Organization"],
    "name": SITE.name,
    "description": BRAND.description,
    "foundingDate": BRAND.foundingYear,
    "foundingLocation": {
      "@type": "Place",
      "name": BRAND.foundingLocation
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT.address.split(',')[0],
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "postalCode": "4000",
      "addressCountry": "AU"
    },
    "url": `https://${SITE.domain}/`,
    "logo": `https://${SITE.domain}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACT.phone,
      "contactType": "sales",
      "areaServed": "AU",
      "availableLanguage": "en"
    },
    "sameAs": BRAND.sameAs,
    "brand": {
      "@type": "Brand",
      "name": SITE.name
    }
  }

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": organizationSchema
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white">
      <JsonLd type="AboutPage" data={aboutPageSchema} />
      <Nav />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(230,57,70,0.1),transparent_50%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <Zap className="w-3 h-3 fill-brand-red" /> Est. {BRAND.foundingYear} Brisbane
                </div>
                <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] mb-8">
                  Engineered for <span className="text-brand-red">Maximum</span> Torque.
                </h1>
                <p className="text-xl md:text-2xl text-brand-gray font-medium leading-relaxed max-w-2xl italic border-l-4 border-brand-red pl-6">
                  {BRAND.description}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Narrative Section - Entity Rich */}
        <section className="py-24 bg-white/5 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-8">The <span className="text-brand-red">Torque Team</span> Legacy</h2>
                <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
                  <p>
                    Founded in {BRAND.foundingYear} in the heart of Brisbane, Queensland, TORQUE E - BIKES was born from a singular obsession: bridging the performance gap between lightweight mountain bikes and heavy-weight motocross machines. Our parent entity, {BRAND.entityName}, began as a boutique engineering firm specializing in high-current electrical systems before identifying the massive untapped potential in the Australian e-moto market.
                  </p>
                  <p>
                    In Australia, the landscape for electric performance is unique. From the coastal singletracks of the Gold Coast to the rugged interior trails of the Sunshine Coast, our terrain demands more than just &quot;standard&quot; off-the-shelf components. We realized early on that to survive the Australian climate and the demands of high-torque builds, components needed to be over-engineered.
                  </p>
                  <p>
                    Today, Torque E-Bikes is recognized as Australia&apos;s leading authority on 72V high-discharge architectures and extreme-output mid-drive conversions. We don&apos;t just sell parts; we curate high-performance ecosystems that are tested and verified in our Brisbane lab.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] bg-brand-dark rounded-3xl border border-white/5 overflow-hidden relative group">
                    <Image 
                      src="https://picsum.photos/seed/moto1/800/1000" 
                      alt="Torque E-Bikes Engineering" 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-8 bg-brand-red rounded-3xl flex flex-col justify-end min-h-[200px]">
                    <span className="text-5xl font-black italic tracking-tighter text-white">17+</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/80">Years in Engineering</span>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col justify-end min-h-[200px]">
                    <span className="text-5xl font-black italic tracking-tighter text-white">100%</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">Australian Owned</span>
                  </div>
                  <div className="aspect-[4/5] bg-brand-dark rounded-3xl border border-white/5 overflow-hidden relative group">
                    <Image 
                      src="https://picsum.photos/seed/moto2/800/1000" 
                      alt="Brisbane Lab Testing" 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-50 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Timeline */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-16 text-center">Our <span className="text-brand-red">Milestone</span> Timeline</h2>
            <div className="max-w-5xl mx-auto">
              {BRAND.milestones.map((milestone, index) => (
                <div key={index} className="flex gap-8 md:gap-16 items-start mb-12 last:mb-0 group">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-red flex items-center justify-center text-xl font-black italic shrink-0 group-hover:bg-brand-red transition-colors duration-500">
                      {milestone.year}
                    </div>
                    {index !== BRAND.milestones.length - 1 && (
                      <div className="w-[2px] h-24 bg-gradient-to-b from-brand-red to-transparent mt-4" />
                    )}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-2 text-white group-hover:text-brand-red transition-colors">{milestone.event.split(':')[0]}</h3>
                    <p className="text-brand-gray text-lg max-w-2xl">
                      {milestone.event.includes(':') ? milestone.event.split(':')[1] : milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiation Grid */}
        <section className="py-24 bg-brand-red">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-white mb-4">Why Build with <span className="text-black">Torque</span>?</h2>
              <p className="text-white/80 font-bold uppercase tracking-widest text-xs">The Unfair Advantage of Specialist Engineering</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BRAND.differentiation.map((diff, index) => (
                <div key={index} className="p-8 bg-black/10 backdrop-blur-xl border border-white/10 rounded-3xl group hover:bg-white transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
                    <Trophy className="w-6 h-6 text-white group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter text-white group-hover:text-black mb-4 leading-tight">
                    {diff}
                  </h3>
                  <p className="text-white/60 text-sm group-hover:text-brand-dark transition-colors leading-relaxed">
                    Engineered to withstand the extreme duty cycles of the Australian outback.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Authority / Geographic Footprint */}
        <section className="py-24 overflow-hidden relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-red blur-[120px] opacity-10" />
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center gap-4 text-brand-red">
                    <MapPin className="w-8 h-8" />
                    <span className="text-xl font-black uppercase tracking-[0.3em]">Brisbane HQ</span>
                  </div>
                  <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.9]">Australia-Wide <span className="text-brand-red">Performance</span> Network.</h2>
                  <p className="text-brand-gray text-lg leading-relaxed">
                    From our headquarters in Brisbane City, we coordinate high-performance dispatch to every state and territory in Australia. Our logistics chain is fully certified for **Class 9 Dangerous Goods**, ensuring your high-capacity lithium batteries arrive safely and legally via TNT/FedEx specialized DG networks.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <span className="block text-3xl font-black italic tracking-tighter mb-1 text-white uppercase">6 States</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">Serving all road authorities</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-black italic tracking-tighter mb-1 text-white uppercase">2 Territories</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">NT & ACT coverage</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 border-2 border-brand-red/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-12 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[4rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-5 transition-opacity" />
                    <Zap className="w-20 h-20 text-brand-red mx-auto mb-6 drop-shadow-[0_0_15px_rgba(230,57,70,0.5)]" />
                    <span className="block text-6xl font-black italic tracking-tighter mb-2">72V</span>
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-brand-gray">Industry Standard Bearer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white text-brand-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-5xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6">Ready to <span className="text-brand-red">Transform</span> Your Ride?</h2>
                <p className="text-lg font-medium text-brand-dark/70 mb-8 italic">
                  Explore our curated selection of high-torque conversion kits or step up to a complete ETM™ electric dirt bike.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Link href="/shop/" className="px-8 py-4 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-brand-red/20 inline-flex items-center gap-3">
                    Browse Shop <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact/" className="px-8 py-4 bg-brand-dark text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-red transition-colors inline-flex items-center gap-3">
                    Consult an Engineer <Zap className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                {CATEGORIES.slice(0, 4).map((cat) => (
                  <Link key={cat.slug} href={`/shop/${cat.slug}/`} className="p-6 bg-brand-dark/5 rounded-3xl border border-brand-dark/5 hover:border-brand-red/20 transition-all group">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-brand-red mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
                    <span className="text-lg font-black italic uppercase tracking-tighter block leading-tight">{cat.name.split('&')[0]}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
