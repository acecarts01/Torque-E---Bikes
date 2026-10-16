'use client'

import React from 'react'
import { motion } from 'motion/react'
import '@/src/lib/motion-setup'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { REVIEWS } from '@/src/config/site'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Photo background: dark overlay keeps the text readable */}
      <picture className="absolute inset-0 block" aria-hidden="true">
        <source media="(min-width: 768px)" srcSet="/images/hero-home.webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-home-mobile.webp" alt="" className="h-full w-full object-cover" fetchPriority="high" decoding="async" />
      </picture>
      <div className="absolute inset-0 bg-brand-dark/80 md:bg-transparent md:bg-gradient-to-r md:from-brand-dark md:via-brand-dark/80 md:to-brand-dark/25 pointer-events-none" />
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.1),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div className="space-y-10 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full"
            >
              <div className="flex -space-x-2">
                {REVIEWS.slice(0, 3).map(r => (
                  <div key={r.id} aria-hidden="true" className="w-6 h-6 rounded-full border-2 border-brand-dark bg-brand-red text-[#140800] flex items-center justify-center text-[9px] font-black">
                    {r.author.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">Trusted by 2,000+ Aus Riders</span>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-black italic uppercase tracking-tighter leading-tight lg:leading-[0.9] text-white"
              >
                <span className="block text-xs md:text-sm lg:text-base not-italic font-bold tracking-[0.3em] text-brand-gray mb-4 normal-case">Electric dirt bikes, e-bikes and parts — shipped Australia-wide</span>
                LIMITLESS <span className="text-brand-red block drop-shadow-[0_0_30px_rgba(230,57,70,0.3)]">TORQUE.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-lg md:text-xl text-brand-gray max-w-xl leading-relaxed font-medium"
              >
                Australia&apos;s apex destination for high-voltage e-motos and 72V performance conversion systems.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/shop/" className="group relative bg-brand-red text-[#140800] px-10 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-brand-red/20 overflow-hidden">
                <span className="relative z-10">Deploy Power</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              </Link>
              <Link href="/wholesale/" className="px-10 py-6 glass-card hover:bg-white/10 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center transition-all border border-white/10">
                Dealer Inquiries
              </Link>
            </motion.div>

            {/* Performance Specs */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5">
              {[
                { label: 'Peak Output', value: '7kW', suffix: '+' },
                { label: 'Aus Stock', value: '100', suffix: '%' },
                { label: 'Architecture', value: '72V', suffix: '' }
              ].map((spec, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + (i * 0.05) }}
                >
                  <p className="text-2xl md:text-3xl xl:text-4xl font-black text-white italic tracking-tighter">
                    {spec.value}<span className="text-brand-red">{spec.suffix}</span>
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-gray mt-1">{spec.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-brand-gray">Explore Lab</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-red to-transparent" />
      </motion.div>
    </section>
  )
}
