'use client'

import React from 'react'
import { motion } from 'motion/react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import CompareTool from '@/src/components/Compare'
import JsonLd from '@/src/components/JsonLd'
import { SITE } from '@/src/config/site'

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-[#140800]">
      <JsonLd 
        type="WebPage" 
        data={{
          name: `Compare Products | ${SITE.name}`,
          description: 'Compare high-performance electric motors, batteries, and conversion kits side-by-side. Technical spec breakdown for E-Moto builders.',
          url: `https://${SITE.domain}/compare/`,
        }}
      />
      
      <Nav />

      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.05),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl space-y-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-red">Toolbox</p>
              <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                Compare <br /><span className="text-brand-red">Performance</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Benchmarking torque, voltage, and compatibility across our entire high-performance catalog. Build your dream machine with the right components.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Compare Interface */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <CompareTool />
          </div>
        </section>

        {/* Technical FAQ / Reassurance */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-white">Power (kW) vs Watts</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We display continuous power and peak output where applicable. 1kW = 1000W. Higher wattage generally translates to higher top speed and acceleration, assuming your battery can supply the necessary amps.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-white">Voltage Compatibility</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Ensure your battery voltage matches your motor and controller. A 72V motor requires a 72V battery and a compatible 72V controller. Running under-voltage will result in poor performance.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-black uppercase italic tracking-tighter text-white">Universal Fitment</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Most of our conversion kits are designed for universal fitment on standard MTB frames (135mm/142mm/150mm dropouts). Check the individual product details for specific axle diameters and flange spacing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
