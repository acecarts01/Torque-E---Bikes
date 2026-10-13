'use client'

import React, { useState, useMemo } from 'react'
import { notFound } from 'next/navigation'
import SmartImage from '@/src/components/SmartImage'
import ProductCard from '@/src/components/ProductCard'
import ShopFilters from '@/src/components/ShopFilters'
import { ProductCardSkeleton } from '@/src/components/Skeleton'
import { PRODUCTS, CATEGORIES } from '@/src/config/site'
import { ShieldAlert, LayoutGrid } from 'lucide-react'
import JsonLd from '@/src/components/JsonLd'

interface CategoryDetailProps {
  slug: string
}

export default function CategoryDetail({ slug }: CategoryDetailProps) {
  const category = CATEGORIES.find(c => c.slug === slug)

  if (!category) {
    notFound()
  }

  const [isLoading, setIsLoading] = useState(false)
  const [activePower, setActivePower] = useState<string | null>(null)
  const [activeVoltage, setActiveVoltage] = useState<string | null>(null)
  const [activeCompatibility, setActiveCompatibility] = useState<string | null>(null)

  const triggerLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 400)
  }

  const handlePowerChange = (val: string | null) => {
    triggerLoading()
    setActivePower(val)
  }

  const handleVoltageChange = (val: string | null) => {
    triggerLoading()
    setActiveVoltage(val)
  }

  const handleCompatibilityChange = (val: string | null) => {
    triggerLoading()
    setActiveCompatibility(val)
  }

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCat = p.category === category.slug
      const matchPower = !activePower || (p.power && p.power === activePower)
      const matchVoltage = !activeVoltage || (p.voltage && p.voltage === activeVoltage)
      const matchCompatibility = !activeCompatibility || (p.compatibility && p.compatibility.includes(activeCompatibility))
      return matchCat && matchPower && matchVoltage && matchCompatibility
    })
  }, [category.slug, activePower, activeVoltage, activeCompatibility])

  return (
    <div className="container mx-auto px-4">
      <JsonLd type="Breadcrumb" data={[
        { name: 'Home', item: '/' },
        { name: 'Inventory', item: '/shop/' },
        { name: category.name, item: `/shop/${category.slug}/` }
      ]} />
      <section className="mb-16">
        <div className="bg-brand-accent p-8 md:p-12 border border-white/5 rounded-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-full bg-brand-red/5 blur-3xl rounded-full" />
           <div className="relative z-10">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-4">Category Hub</p>
             <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
               {category.name}
             </h1>
             <p className="text-xl text-brand-gray font-medium uppercase tracking-wider max-w-xl">
               {category.description}
             </p>
           </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        <aside className="lg:sticky lg:top-32">
          <ShopFilters 
            activeCategory={category.slug}
            activePower={activePower}
            activeVoltage={activeVoltage}
            activeCompatibility={activeCompatibility}
            onCategoryChange={() => {}} // Disabled on category page
            onPowerChange={handlePowerChange}
            onVoltageChange={handleVoltageChange}
            onCompatibilityChange={handleCompatibilityChange}
          />
        </aside>

        <div className="lg:col-span-3 space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-brand-red" />
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray">
                Showing {filteredProducts.length} Machines
              </span>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center space-y-6 bg-brand-accent/30 rounded-[2rem] border border-dashed border-white/10">
              <ShieldAlert className="w-16 h-16 text-brand-gray mx-auto opacity-20" />
              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase italic tracking-tighter">Specs Not Found</h3>
                <p className="text-[10px] text-brand-gray max-w-xs mx-auto font-medium uppercase tracking-widest leading-relaxed">Try adjusting your filters. Some custom builds are restricted to order.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
