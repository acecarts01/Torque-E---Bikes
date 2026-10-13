'use client'

import React, { useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import SmartImage from '@/src/components/SmartImage'
import JsonLd from '@/src/components/JsonLd'
import ProductZoom from '@/src/components/ProductZoom'
import { PRODUCTS, CATEGORIES, SHOP } from '@/src/config/site'
import { formatCurrency, cn } from '@/src/lib/utils'
import { Zap, ShieldAlert, Truck, ChevronRight, CheckCircle2, Phone, ShoppingCart, ArrowLeft, Plus, Minus, Wrench, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

interface ProductDetailProps {
  slug: string
}

const AccordionItem = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-white/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 group text-left outline-none"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 group-hover:border-brand-red/30 transition-all">
            <Icon className="w-5 h-5 text-brand-red" />
          </div>
          <span className="text-sm font-black uppercase italic tracking-tighter text-white">{title}</span>
        </div>
        {isOpen ? <Minus className="w-4 h-4 text-brand-red" /> : <Plus className="w-4 h-4 text-brand-gray" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 pl-14 pr-4">
              <div className="text-[10px] text-brand-gray font-medium uppercase tracking-widest leading-loose">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProductDetail({ slug }: ProductDetailProps) {
  const product = PRODUCTS.find(p => p.slug === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    notFound()
  }

  const category = CATEGORIES.find(c => c.slug === product.category)

  return (
    <div className="container mx-auto px-4">
      <JsonLd type="Product" data={product} />
      <JsonLd type="Breadcrumb" data={[
        { name: 'Home', item: '/' },
        { name: 'Inventory', item: '/shop/' },
        { name: category?.name, item: `/shop/${product.category}/` },
        { name: product.name, item: `/shop/${product.category}/${product.slug}/` }
      ]} />
      
      {/* Breadcrumbs */}
      <div className="mb-12">
        <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-brand-gray">
          <Link href="/" className="hover:text-white transition-colors text-brand-red">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop/" className="hover:text-white transition-colors">Inventory</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/shop/${product.category}/`} className="hover:text-white transition-colors text-brand-red">{category?.name}</Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Visuals */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <ProductZoom src={product.images[activeImage]} alt={product.name} />
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-square bg-white rounded-2xl border p-2 overflow-hidden transition-all",
                  activeImage === i ? "border-brand-red ring-1 ring-brand-red/50" : "border-white/5 hover:border-white/20"
                )}
              >
                <SmartImage src={img} alt={`${product.name} - ${i}`} fill className="object-contain" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Config & Checkout */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">Inventory Confirmed</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9] text-white">
              {product.name}
            </h1>
            <p className="text-xl text-brand-gray font-medium uppercase tracking-wider leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          <div className="flex items-end justify-between pb-10 border-b border-white/5">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gray">Investment</p>
              <p className="text-5xl font-black italic text-white tracking-tighter leading-none">
                {formatCurrency(product.price)}
              </p>
              {(product as any).comparePrice && (product as any).comparePrice > product.price * 1.015 && (
                <p className="text-sm font-bold text-[#35c17a] pt-2">
                  Compare at <s className="text-[#a39e94]">{formatCurrency((product as any).comparePrice)}</s> &middot; you save {formatCurrency((product as any).comparePrice - product.price)}
                </p>
              )}
            </div>
            <div className="bg-[#ff6a1a]/10 px-4 py-2 rounded-xl flex items-center gap-3 border border-brand-red/20 shadow-lg shadow-brand-red/5">
               <Zap className="w-4 h-4 text-brand-red animate-pulse" />
               <div className="text-left">
                  <p className="text-[8px] font-black text-brand-red uppercase tracking-widest">Crypto Savings</p>
                  <p className="text-[10px] font-black text-white uppercase italic leading-none">{formatCurrency(product.price * (1 - SHOP.cryptoDiscount / 100))}</p>
               </div>
            </div>
          </div>

          {product.compliance === 'off-road' && (
            <div className="rounded-xl border border-[#6b3d14] bg-[#2a1809] px-5 py-4 text-sm text-[#ffd9a8]">
              <b>Off-road use only.</b> This machine is intended for private property. It is not for use on public roads or paths. Check your state or territory rules.
            </div>
          )}

          {/* Action */}
          <div className="space-y-4">
            <Link 
              href="/checkout/"
              className="w-full bg-brand-red text-[#140800] py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-2xl shadow-brand-red/30"
            >
              <ShoppingCart className="w-5 h-5 fill-white" />
              Initialise Order
            </Link>
            
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={`https://wa.me/61480804189?text=${encodeURIComponent(`Hi Torque Team, I'm interested in the ${product.name}.`)}`}
                className="flex items-center justify-center gap-3 py-4 glass-card rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-white transition-all border border-white/5"
              >
                <Phone className="w-4 h-4 text-brand-red" /> Tech Concierge
              </a>
              <div className="flex items-center justify-center gap-3 py-4 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-gray border border-white/5">
                <Truck className="w-4 h-4 text-brand-red" /> Express AU
              </div>
            </div>
          </div>

          {/* Warranty & Support Accordion */}
          <div className="pt-6">
            <AccordionItem title="Warranty & Support" icon={Wrench}>
              <div className="space-y-4">
                <p>
                  <strong className="text-white">Australian Consumer Guarantee:</strong> All products are covered under the ACCC consumer guarantees. Complete e-motos include a 12-month structural warranty. Conversion kits carry a 6-month limited warranty on electronic components.
                </p>
                <p>
                  <strong className="text-white">Faulty Components:</strong> Contact our Brisbane lab immediately for technical assessment. Verified faults will be repaired or replaced with express shipping covered.
                </p>
                <p>
                  <strong className="text-white">Brisbane Support:</strong> 0480 804 189 | support&#64;torquee-bikesaustralia.com.au
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Safety & Logistics" icon={ShieldAlert}>
              Lithium traction systems are dispatched via Class 9 Certified freight with ADR compliance checks. {product.compliance === 'off-road' ? 'Strictly for private property use.' : '100% Street Legal EPAC.'}
            </AccordionItem>
            <AccordionItem title="Returns Policy" icon={RotateCcw}>
              Returns accepted within 14 days for unused parts in original packaging. 20% restocking fee applies to large items. Class 9 Dangerous Goods returns must use our certified couriers.
            </AccordionItem>
          </div>
        </motion.div>
      </div>

      {/* Description */}
      <div className="mt-32 pt-20 border-t border-white/5 max-w-4xl mx-auto space-y-10 text-center">
         <div className="space-y-4">
           <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-red">Technical Brief</span>
           <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">CORE SPECIFICATIONS.</h2>
         </div>
         <p className="text-xl md:text-2xl text-brand-gray font-medium leading-relaxed uppercase tracking-wider">
           {product.description}
         </p>
      </div>
    </div>
  )
}
