'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, X } from 'lucide-react'
import SmartImage from './SmartImage'
import { formatCurrency, cn } from '@/src/lib/utils'

type Hit = { slug: string; name: string; category: string; price: number; image: string; stock?: string | null }

// A visible search box with live product suggestions. It never imports the catalogue: suggestions come from /api/search-suggest/.
// Enter (or the Search button) opens the full results page at /search/?q=...
export default function SearchBar({ className, placeholder = 'Search bikes, batteries, parts or brands', onNavigate, autoFocus = false }: {
  className?: string
  placeholder?: string
  onNavigate?: () => void
  autoFocus?: boolean
}) {
  const router = useRouter()
  const [q, setQ] = useState('')
  const [hits, setHits] = useState<Hit[]>([])
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(-1)
  const box = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (q.trim().length < 2) { setHits([]); return }
    const ctl = new AbortController()
    const t = setTimeout(() => {
      fetch(`/api/search-suggest/?q=${encodeURIComponent(q.trim())}`, { signal: ctl.signal })
        .then(r => (r.ok ? r.json() : []))
        .then((d: Hit[]) => { setHits(d); setActive(-1) })
        .catch(() => {})
    }, 150)
    return () => { clearTimeout(t); ctl.abort() }
  }, [q])

  useEffect(() => {
    const away = (e: MouseEvent) => { if (box.current && !box.current.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', away)
    return () => document.removeEventListener('mousedown', away)
  }, [])

  const go = (href: string) => { setOpen(false); onNavigate?.(); router.push(href) }
  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (active >= 0 && hits[active]) return go(`/shop/${hits[active].category}/${hits[active].slug}/`)
    const term = q.trim()
    if (term) go(`/search/?q=${encodeURIComponent(term)}`)
  }
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown' && hits.length) { e.preventDefault(); setOpen(true); setActive(a => (a + 1) % hits.length) }
    else if (e.key === 'ArrowUp' && hits.length) { e.preventDefault(); setActive(a => (a <= 0 ? hits.length - 1 : a - 1)) }
    else if (e.key === 'Escape') setOpen(false)
  }
  const showList = open && q.trim().length >= 2

  return (
    <div ref={box} className={cn('relative w-full', className)} role="search">
      <form onSubmit={submit} className="flex items-stretch rounded-2xl border border-white/15 bg-black/50 backdrop-blur-md focus-within:border-brand-red transition-colors">
        <label htmlFor={listId + '-in'} className="sr-only">Search products</label>
        <Search aria-hidden="true" className="w-5 h-5 text-brand-gray self-center ml-4 shrink-0" />
        <input
          id={listId + '-in'}
          type="search"
          name="q"
          value={q}
          autoFocus={autoFocus}
          autoComplete="off"
          enterKeyHint="search"
          placeholder={placeholder}
          onChange={e => { setQ(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          role="combobox"
          aria-expanded={showList}
          aria-controls={listId}
          aria-autocomplete="list"
          className="min-w-0 flex-1 bg-transparent px-3 py-4 text-sm md:text-base font-semibold text-white placeholder:text-gray-400 outline-none [&::-webkit-search-cancel-button]:appearance-none"
        />
        {q && (
          <button type="button" onClick={() => { setQ(''); setHits([]) }} aria-label="Clear search" className="px-2 text-brand-gray hover:text-white">
            <X className="w-4 h-4" />
          </button>
        )}
        <button type="submit" className="m-1.5 rounded-xl bg-brand-red px-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#140800] hover:brightness-110 transition">
          Search
        </button>
      </form>

      {showList && (
        <ul id={listId} role="listbox" className="absolute left-0 right-0 top-full z-40 mt-2 max-h-[28rem] overflow-y-auto rounded-2xl border border-white/10 bg-[#16181b] shadow-2xl">
          {hits.map((h, i) => (
            <li key={h.slug} role="option" aria-selected={i === active}>
              <button
                type="button"
                onClick={() => go(`/shop/${h.category}/${h.slug}/`)}
                onMouseEnter={() => setActive(i)}
                className={cn('flex w-full items-center gap-3 px-3 py-2.5 text-left transition-colors', i === active ? 'bg-white/10' : 'hover:bg-white/5')}
              >
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white p-1">
                  <SmartImage src={h.image} alt="" fill sizes="48px" className="object-contain" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold text-white">{h.name}</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-gray">{h.category.replace(/-/g, ' ')}</span>
                </span>
                <span className="shrink-0 text-sm font-black italic text-white">{formatCurrency(h.price)}</span>
              </button>
            </li>
          ))}
          {hits.length === 0 && <li className="px-4 py-3 text-xs font-semibold text-brand-gray">No quick matches yet. Press Search to see every result.</li>}
          <li>
            <button type="button" onClick={() => go(`/search/?q=${encodeURIComponent(q.trim())}`)} className="w-full border-t border-white/10 px-4 py-3 text-left text-[11px] font-black uppercase tracking-[0.2em] text-brand-red hover:bg-white/5">
              See all results for &quot;{q.trim()}&quot;
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}
