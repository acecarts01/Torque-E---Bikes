'use client'

import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus, Minus, Zap, ShieldCheck, Truck, HelpCircle, ArrowRight } from 'lucide-react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import { SITE, FAQ } from '@/src/config/site'
import JsonLd from '@/src/components/JsonLd'
import Link from 'next/link'

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div className="border-b border-white/5 last:border-0 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group outline-none"
      >
        <span className={`text-lg md:text-xl font-black italic uppercase tracking-tighter transition-colors ${isOpen ? 'text-brand-red' : 'text-white group-hover:text-brand-red'}`}>
          {question}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-brand-red text-white rotate-180' : 'bg-white/5 text-brand-gray'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-2 text-brand-gray text-lg leading-relaxed max-w-3xl italic">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white">
      <JsonLd type="FAQ" data={FAQ} />
      <Nav />

      <main id="main">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,57,70,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <HelpCircle className="w-3 h-3" /> Technical Knowledge Base
              </div>
              <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                Common <span className="text-brand-red">Queries.</span>
              </h1>
              <p className="text-brand-gray text-xl leading-relaxed italic">
                From Australian road compliance to high-current battery logistics, find the technical answers you need for your performance build.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-4">
              {FAQ.map((item, idx) => (
                <AccordionItem key={idx} {...item} />
              ))}
            </div>

            {/* Additional Contact CTA */}
            <div className="mt-32 p-12 bg-white/5 border border-white/10 rounded-[3rem] text-center space-y-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="space-y-4">
                <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Still Have Questions?</h3>
                <p className="text-brand-gray text-lg italic max-w-xl mx-auto">
                  Our Brisbane-based engineers are available for technical consultations via WhatsApp or email.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact/" className="px-8 py-4 bg-brand-red text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-brand-red/20">
                  Contact Engineer <Zap className="w-4 h-4 fill-white" />
                </Link>
                <a href="https://wa.me/61400000000" className="px-8 py-4 bg-white/5 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center gap-3 border border-white/10">
                  WhatsApp Support <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Global Policies Section */}
        <section className="py-24 bg-brand-red">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Warranty Policy</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Australian Consumer Guarantee applies to all inventory. 12-month structural warranty on complete e-motos; 6-month limited warranty on electronic components.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Shipping Policy</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Dangerous Goods Class 9 certified nationwide shipping via TNT/FedEx. Lithium systems are double-crated for extreme safety during transit.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Returns Policy</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  14-day return window for unused components in original packaging. DG returns require our certified courier network; do not attempt regular post.
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
