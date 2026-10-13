'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Search, X, Zap, ArrowRight, ShieldAlert } from 'lucide-react'
import { PRODUCTS, SITE } from '@/src/config/site'
import { formatCurrency, cn } from '@/src/lib/utils'
import Link from 'next/link'
import SmartImage from './SmartImage'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClose = () => {
    setQuery('')
    onClose()
  }

  const results = query.length > 1 
    ? PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.shortDescription?.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
    : []

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0e0f11]/95 backdrop-blur-2xl overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-8 md:py-24 max-w-4xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-4">
                <div className="bg-[#ff6a1a] p-2 rounded-sm transform rotate-12">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white">Torque <span className="text-[#ff6a1a]">Search.</span></h2>
              </div>
              <button 
                onClick={handleClose}
                className="p-3 bg-white/5 hover:bg-[#ff6a1a] text-[#140800] rounded-full transition-all group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
              </button>
            </div>

            {/* Input */}
            <div className="relative mb-16">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-gray-500" />
              <input
                ref={inputRef}
                type="text"
                placeholder="SEARCH INVENTORY (e.g. 72V Battery, Sur-Ron, 2000W)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/5 border-2 border-white/10 focus:border-[#ff6a1a] text-white text-xl md:text-3xl font-black uppercase italic tracking-tighter px-20 py-8 rounded-sm outline-none transition-all placeholder:text-gray-700"
              />
            </div>

            {/* Results */}
            <div className="space-y-8">
              {results.length > 0 ? (
                <>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Live Inventory Match ({results.length})</p>
                    <Link href="/shop/" onClick={handleClose} className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff6a1a] hover:text-white transition-colors">View All Products</Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {results.map((product) => (
                      <Link 
                        key={product.slug}
                        href={`/shop/${product.category}/${product.slug}/`}
                        onClick={handleClose}
                        className="group flex gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-sm transition-all"
                      >
                        <div className="relative w-24 h-24 bg-white p-2 rounded-sm shrink-0 overflow-hidden">
                          <SmartImage src={product.images[0]} alt={product.name} fill className="object-contain group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex flex-col justify-between py-1">
                          <div className="space-y-1">
                            <h3 className="text-sm font-black uppercase tracking-tighter text-white group-hover:text-[#ff6a1a] transition-colors line-clamp-1">{product.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{product.category.replace(/-/g, ' ')}</span>
                              {product.stock && (
                                <span className={cn(
                                  "text-[7px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded-full",
                                  product.stock === 'Out of Stock' ? "bg-red-500/10 text-red-500" : 
                                  product.stock === 'Low Stock' ? "bg-orange-500/10 text-orange-500" : 
                                  "bg-green-500/10 text-green-500"
                                )}>
                                  {product.stock}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="text-lg font-black italic text-white tracking-tighter">{formatCurrency(product.price)}</p>
                            <div className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-500 flex items-center gap-1">
                              INSPECT <ArrowRight className="w-3 h-3 text-[#ff6a1a]" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </>
              ) : query.length > 1 ? (
                <div className="text-center py-24 bg-white/5 rounded-sm border border-dashed border-white/10 space-y-4">
                  <ShieldAlert className="w-12 h-12 text-gray-700 mx-auto" />
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">No products found matching &quot;{query}&quot;</p>
                  <Link href="/contact/" onClick={handleClose} className="inline-block text-[#ff6a1a] font-black uppercase tracking-tighter text-sm italic hover:text-white transition-colors">Request Special Custom Combo →</Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/5 pb-2">Quick Categories</h4>
                    <div className="flex flex-col gap-2">
                      {['Conversion Kits', 'Batteries', 'Complete Bikes'].map(cat => (
                        <Link key={cat} href="/shop/" onClick={handleClose} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors flex items-center justify-between group">
                          {cat} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 md:col-span-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/5 pb-2">Trending Hardware</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Sur-Ron', 'Talaria', '72V Battery', 'Billet Throttle', 'High Torque', '7kW+ Power'].map(tag => (
                        <button 
                          key={tag} 
                          onClick={() => setQuery(tag)}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-[#ff6a1a] hover:text-[#140800] hover:border-[#ff6a1a] transition-all"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
