'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Plus, Zap, Cpu, Maximize2, Trash2, ArrowRight } from 'lucide-react'
import { PRODUCTS, SITE } from '@/src/config/site'
import { formatCurrency, cn } from '@/src/lib/utils'

export default function CompareTool() {
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('compare_products')
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch (e) {
          console.error('Failed to parse compare_products', e)
        }
      }
    }
    return []
  })
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('compare_products', JSON.stringify(selectedSlugs))
  }, [selectedSlugs])

  const selectedProducts = PRODUCTS.filter(p => selectedSlugs.includes(p.slug))

  const toggleProduct = (slug: string) => {
    setSelectedSlugs(prev => 
      prev.includes(slug) 
        ? prev.filter(s => s !== slug) 
        : [...prev, slug].slice(-4) // Max 4 for better mobile/desktop layout
    )
  }

  const removeProduct = (slug: string) => {
    setSelectedSlugs(prev => prev.filter(s => s !== slug))
  }

  const clearAll = () => setSelectedSlugs([])

  const specs = [
    { label: 'Price', key: 'price', format: (val: any) => formatCurrency(val) },
    { label: 'Category', key: 'category' },
    { label: 'Power Output', key: 'power', icon: <Zap className="w-3 h-3 text-[#ff6a1a]" /> },
    { label: 'System Voltage', key: 'voltage', icon: <Cpu className="w-3 h-3 text-[#ff6a1a]" /> },
    { label: 'Compatibility', key: 'compatibility', format: (val: any) => Array.isArray(val) ? val.join(', ') : 'N/A' },
    { label: 'Compliance', key: 'compliance' },
    { label: 'Stock Status', key: 'stock' }
  ]

  return (
    <div className="space-y-12">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ff6a1a]">Head-to-Head</p>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
            Spec <span className="text-[#ff6a1a]">Comparison</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSelectorOpen(true)}
            className="px-8 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-[#ff6a1a] hover:text-[#140800] transition-all flex items-center gap-3"
          >
            <Plus className="w-4 h-4" /> Add Product
          </button>
          {selectedSlugs.length > 0 && (
            <button 
              onClick={clearAll}
              className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {/* Comparison Table */}
      {selectedProducts.length > 0 ? (
        <div className="overflow-x-auto no-scrollbar pb-8">
          <div className="min-w-[800px] lg:min-w-0">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-1/5 p-6 bg-transparent"></th>
                  {selectedProducts.map(product => (
                    <th key={product.slug} className="w-1/4 p-6 bg-transparent align-top relative group">
                      <div className="space-y-6">
                        <div className="relative aspect-[4/3] bg-white rounded-sm overflow-hidden p-4">
                          <Image 
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-contain"
                            referrerPolicy="no-referrer"
                          />
                          <button 
                            onClick={() => removeProduct(product.slug)}
                            className="absolute top-2 right-2 w-8 h-8 bg-black/80 backdrop-blur-md text-[#140800] flex items-center justify-center rounded-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#ff6a1a]"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-left space-y-2">
                          <h3 className="text-lg font-black uppercase italic tracking-tighter leading-tight text-white line-clamp-2">
                            {product.name}
                          </h3>
                          <Link 
                            href={`/shop/${product.category}/${product.slug}/`}
                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#ff6a1a] hover:translate-x-1 transition-transform"
                          >
                            View Details <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </th>
                  ))}
                  {/* Empty slots if less than 4 */}
                  {selectedProducts.length < 4 && Array.from({ length: 4 - selectedProducts.length }).map((_, i) => (
                    <th key={`empty-${i}`} className="w-1/4 p-6 bg-transparent align-top">
                      <button 
                        onClick={() => setIsSelectorOpen(true)}
                        className="w-full aspect-[4/3] border-2 border-dashed border-white/10 rounded-sm flex flex-col items-center justify-center gap-4 group hover:border-[#ff6a1a]/30 transition-colors"
                      >
                        <Plus className="w-8 h-8 text-white/20 group-hover:text-[#ff6a1a] transition-colors" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">Add Product</span>
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {specs.map(spec => (
                  <tr key={spec.label} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-[10px] font-black uppercase tracking-widest text-gray-500 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        {spec.icon}
                        {spec.label}
                      </div>
                    </td>
                    {selectedProducts.map(product => (
                      <td key={`${product.slug}-${spec.label}`} className="p-6 text-sm font-bold text-white uppercase tracking-tight">
                        {spec.format ? spec.format(product[spec.key as keyof typeof product]) : (product[spec.key as keyof typeof product] || '—')}
                      </td>
                    ))}
                    {selectedProducts.length < 4 && Array.from({ length: 4 - selectedProducts.length }).map((_, i) => (
                      <td key={`empty-td-${i}-${spec.label}`} className="p-6 text-gray-700">
                        —
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-32 border-2 border-dashed border-white/5 rounded-[3rem] flex flex-col items-center justify-center text-center space-y-6"
        >
          <Maximize2 className="w-16 h-16 text-white/10" />
          <div className="space-y-2">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Your Comparison list is empty</h3>
            <p className="text-gray-500 max-w-sm mx-auto text-sm">
              Select at least two products to view a side-by-side technical specification breakdown.
            </p>
          </div>
          <button 
            onClick={() => setIsSelectorOpen(true)}
            className="px-10 py-5 bg-[#ff6a1a] text-[#140800] text-[12px] font-black uppercase tracking-widest rounded-sm hover:scale-[0.98] transition-transform shadow-2xl shadow-[#ff6a1a]/20"
          >
            Browse Catalog
          </button>
        </motion.div>
      )}

      {/* Product Selector Modal */}
      <AnimatePresence>
        {isSelectorOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSelectorOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-20 md:bottom-20 md:w-full md:max-w-4xl bg-[#16181b] border border-white/10 rounded-[3rem] z-[101] overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">Add to Comparison</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Select up to 4 items</p>
                </div>
                <button 
                  onClick={() => setIsSelectorOpen(false)}
                  className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#ff6a1a] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS.map(product => {
                  const isSelected = selectedSlugs.includes(product.slug)
                  return (
                    <button 
                      key={product.slug}
                      onClick={() => toggleProduct(product.slug)}
                      className={cn(
                        "group p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-4",
                        isSelected 
                          ? "bg-brand-red/10 border-brand-red" 
                          : "bg-white/5 border-white/5 hover:border-white/20"
                      )}
                    >
                      <div className="relative aspect-[4/3] bg-white rounded-xl overflow-hidden p-4">
                        <Image 
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain"
                          referrerPolicy="no-referrer"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-brand-red/60 flex items-center justify-center">
                            <X className="w-10 h-10 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-[7px] font-black uppercase tracking-widest text-gray-500">{product.category}</p>
                        <h4 className="text-sm font-black uppercase italic tracking-tighter text-white group-hover:text-brand-red transition-colors line-clamp-2">
                          {product.name}
                        </h4>
                        <p className="text-xs font-bold text-gray-400">{formatCurrency(product.price)}</p>
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className="p-8 border-t border-white/5 bg-black/40 flex justify-end">
                <button 
                  onClick={() => setIsSelectorOpen(false)}
                  className="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:scale-[0.98] transition-transform"
                >
                  Confirm Selection ({selectedSlugs.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
