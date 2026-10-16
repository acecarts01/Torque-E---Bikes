// src/components/AnnouncementBar.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Truck, Zap, ShieldCheck } from 'lucide-react'
import { SHOP } from '@/src/config/site'

const announcements = [
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
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] italic"
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{current.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
