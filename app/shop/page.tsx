'use client'

import React, { useState, useMemo } from 'react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import ProductCard from '@/src/components/ProductCard'
import ShopFilters from '@/src/components/ShopFilters'
import { ProductCardSkeleton } from '@/src/components/Skeleton'
import { CATEGORIES } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'
import { Zap, ShieldAlert, LayoutGrid } from 'lucide-react'

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [activePower, setActivePower] = useState<string | null>(null)
  const [activeVoltage, setActiveVoltage] = useState<string | null>(null)
  const [activeCompatibility, setActiveCompatibility] = useState<string | null>(null)
  const [sort, setSort] = useState<'default' | 'low' | 'high'>('default')
  // Render the grid in pages: drawing all 490 cards at once blocks the main thread on phones.
  const PAGE = 24
  const [visible, setVisible] = useState(PAGE)

  const triggerLoading = () => {
    setVisible(PAGE)
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 400)
  }

  const handleCategoryChange = (val: string | null) => {
    triggerLoading()
    setActiveCategory(val)
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
    const list = PRODUCTS.filter(p => {
      const matchCat = !activeCategory || p.category === activeCategory
      const matchPower = !activePower || (p.power && p.power === activePower)
      const matchVoltage = !activeVoltage || (p.voltage && p.voltage === activeVoltage)
      const matchCompatibility = !activeCompatibility || (p.compatibility && (p.compatibility as string[]).includes(activeCompatibility))
      return matchCat && matchPower && matchVoltage && matchCompatibility
    })
    return sort === 'default' ? list : [...list].sort((a, b) => (sort === 'low' ? a.price - b.price : b.price - a.price))
  }, [activeCategory, activePower, activeVoltage, activeCompatibility, sort])

  return (
    <div className="flex flex-col min-h-screen bg-[#16181b]">
      <AnnouncementBar />
      <Nav />

      <main className="flex-grow pt-32 pb-24">
        {/* Header */}
        <section className="container mx-auto px-4 mb-16">
          <div className="bg-[#1d2024] p-8 md:p-12 border border-white/5 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-full bg-[#ff6a1a]/5 blur-3xl rounded-full" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ff6a1a] mb-4">Official Catalog</p>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">
                HIGH-TORQUE <span className="text-[#ff6a1a]">INVENTORY.</span>
              </h1>
              <p className="text-gray-400 font-medium leading-relaxed">
                Browse electric dirt bikes, e-bikes, parts and riding gear. Shipped Australia-wide from Brisbane, with Class 9 DG certified battery freight. Dirt bikes are off-road and private property use only.
              </p>
            </div>
          </div>
        </section>

        {/* Shop Content */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:overscroll-contain lg:pr-2 [scrollbar-width:thin] [scrollbar-color:#ff6a1a_transparent]">
              <ShopFilters 
                products={PRODUCTS}
                
                activeCategory={activeCategory}
                activePower={activePower}
                activeVoltage={activeVoltage}
                activeCompatibility={activeCompatibility}
                onCategoryChange={handleCategoryChange}
                onPowerChange={handlePowerChange}
                onVoltageChange={handleVoltageChange}
                onCompatibilityChange={handleCompatibilityChange}
              />
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-3 space-y-8">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4 text-[#ff6a1a]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                    Showing {filteredProducts.length} Machines
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <span className="hidden sm:inline">Sort By:</span>
                  <select aria-label="Sort products" value={sort} onChange={e => { setSort(e.target.value as 'default' | 'low' | 'high'); setVisible(PAGE) }} className="bg-transparent border-none focus:ring-0 text-white cursor-pointer hover:text-[#ff6a1a] transition-colors uppercase font-black tracking-tighter">
                    <option value="default" className="bg-[#16181b]">Featured</option>
                    <option value="low" className="bg-[#16181b]">Price: Low-High</option>
                    <option value="high" className="bg-[#16181b]">Price: High-Low</option>
                  </select>
                </div>
              </div>

              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              ) : filteredProducts.length > 0 ? (
                <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredProducts.slice(0, visible).map(product => (
                    <ProductCard key={product.slug} product={product} />
                  ))}
                </div>
                {filteredProducts.length > visible && (
                  <div className="mt-10 text-center">
                    <button
                      onClick={() => setVisible(v => v + PAGE)}
                      className="px-8 py-4 bg-[#ff6a1a] text-[#140800] font-black uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-colors"
                    >
                      Show more ({filteredProducts.length - visible} left)
                    </button>
                  </div>
                )}
                </>
              ) : (
                <div className="py-24 text-center space-y-6 bg-[#0e0f11] rounded-sm border border-dashed border-white/10">
                  <ShieldAlert className="w-16 h-16 text-gray-700 mx-auto" />
                  <div className="space-y-2">
                    <p className="text-xl font-black uppercase italic tracking-tighter">No Machines Found</p>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto font-medium">Try adjusting your filters or search criteria. Some custom power combos are built to order.</p>
                  </div>
                  <button 
                    onClick={() => {
                      triggerLoading()
                      setActiveCategory(null)
                      setActivePower(null)
                      setActiveVoltage(null)
                      setActiveCompatibility(null)
                    }}
                    className="text-[#ff6a1a] font-black uppercase tracking-widest text-[10px] border-b border-[#ff6a1a] pb-1 hover:text-white hover:border-white transition-all"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}

              {/* Legal Warning Footer for Shop */}
              <div className="mt-16 p-8 bg-[#ff6a1a]/5 rounded-sm border border-[#ff6a1a]/10 flex flex-col md:flex-row gap-6 items-center">
                <div className="bg-[#ff6a1a] p-3 rounded-sm">
                  <ShieldAlert className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-widest text-white mb-2">Australian Regulatory & Safety Advisory</p>
                  <p className="text-[10px] text-gray-400 font-medium leading-relaxed uppercase tracking-widest">
                    Electric dirt bikes, high-powered e-motos, and conversion kit setups exceeding 250W continuous rated power are engineered strictly for private property use. Lithium batteries are dispatched under Australian Dangerous Goods Class 9 guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
