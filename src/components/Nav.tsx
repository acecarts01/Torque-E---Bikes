'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Search, Zap, ArrowRight } from 'lucide-react'
import BrandMark from '@/src/components/BrandMark'
import { SITE, CATEGORIES } from '@/src/config/site'
import { cn } from '@/src/lib/utils'
import dynamic from 'next/dynamic'
const SearchOverlay = dynamic(() => import('./SearchOverlay'), { ssr: false })
import { useCart } from '@/src/lib/cart'

export default function Nav() {
  const cartCount = useCart().reduce((n, i) => n + i.qty, 0)
  const [isOpen, setIsOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchLoaded, setSearchLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "py-3" : "py-6"
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500",
          scrolled ? "bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl" : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <Link href="/" aria-label="Torque E-Bikes home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-red blur-lg opacity-20 group-hover:opacity-70 transition-opacity" />
              <BrandMark size={44} className="relative transition-transform duration-500 group-hover:rotate-[20deg]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter leading-none uppercase italic">TORQUE</span>
              <span className="mt-1 flex items-center gap-2">
                <span className="text-[11px] font-black italic uppercase tracking-[0.15em] leading-none text-brand-red">E-Bikes</span>
                <span className="h-[2px] w-5 bg-brand-red" />
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-gray">Australia</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Home</Link>
            <div className="group relative">
              <Link href="/shop/" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors flex items-center gap-1">
                Shop by Category
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-300 z-50">
                <div className="w-[34rem] grid grid-cols-2 gap-x-2 bg-brand-dark/95 backdrop-blur-xl border border-white/5 shadow-2xl rounded-2xl p-3">
                  {[
                    { title: 'Bikes', items: CATEGORIES.filter(c => c.group === 'Bikes') },
                    { title: 'Parts, Gear & Accessories', items: CATEGORIES.filter(c => c.group !== 'Bikes') },
                  ].map(col => (
                    <div key={col.title}>
                      <p className="px-4 pt-2 pb-2 text-[9px] font-black uppercase tracking-[0.25em] text-brand-red">{col.title}</p>
                      {col.items.map(cat => (
                        <Link key={cat.slug} href={`/shop/${cat.slug}/`} className="flex items-center justify-between gap-2 px-4 py-2 text-[10px] uppercase font-black tracking-wider hover:bg-brand-red hover:text-[#140800] transition-all rounded-xl">
                          <span>{cat.name}</span>
                          <ArrowRight className="w-3 h-3 shrink-0 opacity-40" />
                        </Link>
                      ))}
                    </div>
                  ))}
                  <Link href="/shop/" className="col-span-2 mt-2 flex items-center justify-center gap-2 px-4 py-3 text-[10px] uppercase font-black tracking-[0.2em] bg-white/5 hover:bg-brand-red hover:text-[#140800] transition-all rounded-xl">
                    View all products <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/blog/" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Blog</Link>
            <Link href="/compare/" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Compare</Link>
            <Link href="/about/" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">About</Link>
            <Link href="/contact/" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-brand-red transition-colors">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { setSearchLoaded(true); setIsSearchOpen(true) }}
              aria-label="Search products"
              className="p-2.5 hover:bg-white/5 rounded-full transition-colors hidden sm:block outline-none"
            >
              <Search className="w-4 h-4 text-brand-gray hover:text-white transition-colors" />
            </button>
            <div className="h-4 w-[1px] bg-white/10 mx-2 hidden sm:block" />
            <Link href="/checkout/" aria-label={`Cart, ${cartCount} items`} className="relative p-2.5 hover:bg-brand-red rounded-full transition-all group">
              <ShoppingCart className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span className="absolute top-1 right-1 bg-brand-red text-[#140800] text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full border-2 border-brand-dark group-hover:bg-white group-hover:text-brand-red transition-colors">{cartCount}</span>
            </Link>
            <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="lg:hidden p-2.5 bg-white/5 rounded-full ml-2">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
          <div
            className="animate-menu-in fixed inset-0 z-[60] bg-brand-dark/98 backdrop-blur-2xl p-6 pb-10 lg:hidden overflow-y-auto overscroll-contain"
          >
            <div className="flex justify-between items-center mb-10">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <BrandMark size={44} />
                <span className="text-2xl font-black italic uppercase tracking-tighter">TORQUE <span className="text-brand-red">E</span>-BIKES</span>
              </Link>
              <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="p-3 bg-white/5 rounded-full ring-1 ring-white/10">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase italic tracking-tighter hover:text-brand-red transition-colors">Home</Link>
              <Link href="/shop/" onClick={() => setIsOpen(false)} className="text-5xl font-black uppercase italic tracking-tighter hover:text-brand-red transition-colors">Shop All</Link>
              <div className="h-[1px] bg-white/5 my-4" />
              <div className="grid grid-cols-2 gap-3">
                {CATEGORIES.map(cat => (
                  <Link key={cat.slug} href={`/shop/${cat.slug}/`} onClick={() => setIsOpen(false)} className="px-4 py-3 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-white transition-all">
                    {cat.name}
                  </Link>
                ))}
              </div>
              <div className="h-[1px] bg-white/5 my-4" />
              <Link href="/blog/" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic tracking-tighter hover:text-brand-red transition-colors">Blog</Link>
              <Link href="/compare/" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic tracking-tighter hover:text-brand-red transition-colors text-brand-red">Compare</Link>
              <Link href="/about/" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic tracking-tighter hover:text-brand-red transition-colors">About</Link>
              <Link href="/contact/" onClick={() => setIsOpen(false)} className="text-4xl font-black uppercase italic tracking-tighter hover:text-brand-red transition-colors">Contact</Link>
            </nav>

            <div className="mt-10 p-6 glass-card rounded-3xl border border-brand-red/20">
              <Link href="/contact/" onClick={() => setIsOpen(false)} className="w-full flex items-center justify-between bg-brand-red text-[#140800] p-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[0.98] transition-transform shadow-xl shadow-brand-red/20">
                Contact Engineer <Zap className="w-4 h-4 fill-white" />
              </Link>
            </div>
          </div>
        )}

      {searchLoaded && <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </header>
  )
}
