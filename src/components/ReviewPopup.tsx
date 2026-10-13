'use client'

// src/components/ReviewPopup.tsx
// Shows one customer review (and any real activity entries from ACTIVITY) every 50 seconds.
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Star, X, ShoppingBag } from 'lucide-react'
import { REVIEWS, ACTIVITY } from '@/src/config/site'

const INTERVAL_MS = 50_000
const FIRST_DELAY_MS = 10_000
const VISIBLE_MS = 9_000

type Item =
  | { kind: 'review'; id: string; author: string; location: string; rating: number; text: string }
  | { kind: 'activity'; id: string; text: string; location: string; when: string }

const ITEMS: Item[] = [
  ...REVIEWS.map((r: any): Item => ({ kind: 'review', id: `r${r.id}`, author: r.author, location: r.location, rating: r.rating, text: r.text })),
  ...(ACTIVITY as any[]).map((a, i): Item => ({ kind: 'activity', id: `a${i}`, text: a.text, location: a.location, when: a.when })),
]

export default function ReviewPopup() {
  const pathname = usePathname()
  const [item, setItem] = useState<Item | null>(null)
  const next = useRef(0)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (!ITEMS.length || pathname?.startsWith('/checkout')) return
    next.current = Math.floor(Math.random() * ITEMS.length)

    const show = () => {
      if (document.hidden) return
      setItem(ITEMS[next.current % ITEMS.length])
      next.current += 1
      if (hideTimer.current) clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => setItem(null), VISIBLE_MS)
    }

    const first = setTimeout(show, FIRST_DELAY_MS)
    const every = setInterval(show, INTERVAL_MS)
    return () => {
      clearTimeout(first)
      clearInterval(every)
      if (hideTimer.current) clearTimeout(hideTimer.current)
      setItem(null)
    }
  }, [pathname])

  if (!item) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-toast-in fixed z-[60] left-4 right-4 bottom-24 sm:bottom-6 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-sm bg-[#1d2024]/95 backdrop-blur-md border border-white/10 border-l-4 border-l-[#ff6a1a] rounded-xl shadow-2xl p-4 pr-10"
    >
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setItem(null)}
        className="absolute top-2 right-2 p-1 text-gray-500 hover:text-white transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      {item.kind === 'review' ? (
        <>
          <div className="flex items-center gap-1 mb-1.5" aria-label={`${item.rating} out of 5 stars`}>
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#ffb703] text-[#ffb703]" />
            ))}
            <span className="ml-2 text-[9px] font-black uppercase tracking-widest text-gray-500">Customer review</span>
          </div>
          <p className="text-sm text-gray-200 leading-snug line-clamp-3">&ldquo;{item.text}&rdquo;</p>
          <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {item.author} &middot; {item.location}
          </p>
        </>
      ) : (
        <div className="flex items-start gap-3">
          <ShoppingBag className="w-5 h-5 text-[#ff6a1a] shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-gray-200 leading-snug">{item.text}</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {item.location} &middot; {item.when}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
