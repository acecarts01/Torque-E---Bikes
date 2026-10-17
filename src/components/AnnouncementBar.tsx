// src/components/AnnouncementBar.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { Truck, Zap, ShieldCheck, BadgeCheck } from 'lucide-react'
import { SHOP, BRAND } from '@/src/config/site'

const announcements: { text: string; icon: typeof Truck; href?: string }[] = [
  { text: `ABN VERIFIED · ${BRAND.abn} · CHECK IT ON ABN LOOKUP`, icon: BadgeCheck, href: BRAND.abnLookupUrl },
  { text: `FREE SHIPPING ON ORDERS FROM $${SHOP.freeShippingThreshold.toLocaleString('en-AU')}`, icon: Truck },
  { text: `${SHOP.cryptoDiscount}% CRYPTO DISCOUNT AUTOMATICALLY APPLIED ON BTC/USDT`, icon: Zap },
  { text: `MINIMUM ORDER $${SHOP.minOrder} AUD`, icon: ShieldCheck }
]

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % announcements.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const current = announcements[index]
  const Icon = current.icon

  return (
    <div className="bg-[#ff6a1a] text-[#140800] py-2 overflow-hidden h-9">
      <div className="container mx-auto px-4">
        {current.href ? (
          <a
            key={index}
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ABN verified. Check our ABN on the Australian Business Register (opens in a new tab)"
            className={`flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] italic underline-offset-4 hover:underline ${index > 0 ? 'animate-announce' : ''}`}
          >
            <Icon className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{current.text}</span>
          </a>
        ) : (
          <div
            key={index}
            className={`flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] italic ${index > 0 ? 'animate-announce' : ''}`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{current.text}</span>
          </div>
        )}
      </div>
    </div>
  )
}
