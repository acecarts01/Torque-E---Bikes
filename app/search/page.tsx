'use client'

import { useState, useEffect, useRef } from 'react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import ProductCard from '@/src/components/ProductCard'
import { Search, Zap, ArrowRight, Loader2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ products: any[], posts: any[] }>({ products: [], posts: [] })
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (query.length < 2) {
        setResults({ products: [], posts: [] })
        return
      }

      setIsLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const data = await res.json()
        setResults(data)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsLoading(false)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <div className="flex flex-col min-h-screen bg-[#141414]">
      <AnnouncementBar />
      <Nav />

      <main className="flex-grow pt-32 pb-24">
        {/* Search Header */}
        <section className="container mx-auto px-4 mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-8 h-8 text-[#E63946]" />
            <input
              ref={inputRef}
              type="text"
              placeholder="SEARCH E-MOTOS, KITS, OR PARTS..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#1a1a1a] border-2 border-white/5 focus:border-[#E63946] text-3xl md:text-5xl font-black italic uppercase tracking-tighter p-6 pl-20 outline-none transition-all placeholder:text-white/10 text-white rounded-sm"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-white/5 hover:bg-[#E63946] rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        </section>

        {/* Results Area */}
        <section className="container mx-auto px-4">
          {isLoading && (
            <div className="flex flex-col items-center justify-center py-24 space-y-4">
              <Loader2 className="w-12 h-12 text-[#E63946] animate-spin" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 italic">Analysing Torque Specs...</p>
            </div>
          )}

          {!isLoading && query.length >= 2 && results.products.length === 0 && results.posts.length === 0 && (
            <div className="py-24 text-center border-2 border-dashed border-white/5 rounded-sm">
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-gray-500 mb-2">No Machines Matching &quot;{query}&quot;</h2>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">Try searching for power (2000W) or brands (Strike Cycles)</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Products Column */}
            <div className="lg:col-span-8 space-y-8">
              {results.products.length > 0 && (
                <>
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <Zap className="w-5 h-5 text-[#E63946]" />
                    <h2 className="text-xl font-black italic uppercase tracking-tighter">Matched Inventory ({results.products.length})</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {results.products.map(p => (
                      <ProductCard key={p.slug} product={p} />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Articles / Tech Info Column */}
            <div className="lg:col-span-4 space-y-8">
              {results.posts.length > 0 && (
                <>
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                    <ArrowRight className="w-5 h-5 text-[#E63946]" />
                    <h2 className="text-xl font-black italic uppercase tracking-tighter">Tech Documentation ({results.posts.length})</h2>
                  </div>
                  <div className="space-y-4">
                    {results.posts.map(post => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={post.slug}
                        className="bg-[#1a1a1a] p-6 border border-white/5 rounded-sm hover:border-[#E63946]/50 transition-all group"
                      >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#E63946] mb-2">{post.category}</p>
                        <h3 className="text-lg font-black uppercase italic tracking-tighter leading-tight mb-3 group-hover:text-[#E63946] transition-colors">{post.title}</h3>
                        <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed font-medium">{post.excerpt}</p>
                        <a href={`/blog/${post.slug}/`} className="text-[10px] font-black uppercase tracking-widest text-white inline-flex items-center gap-2 hover:gap-3 transition-all">
                          Read Guide <ArrowRight className="w-3 h-3 text-[#E63946]" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Empty State / Initial View */}
          {query.length < 2 && (
            <div className="py-32 flex flex-col items-center text-center space-y-12">
              <div className="relative">
                 <Search className="w-32 h-32 text-white/5" />
                 <Zap className="absolute inset-0 m-auto w-12 h-12 text-[#E63946]/20" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black italic uppercase tracking-tighter text-gray-700">TORQUE SEARCH ENGINE</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {['72V', '3000W', 'E Ride Pro', 'Conversion Kit', 'Controller'].map(tag => (
                    <button 
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-widest hover:border-[#E63946] hover:text-[#E63946] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}
