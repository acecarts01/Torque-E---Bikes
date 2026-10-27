'use client'

// src/components/WhatsAppWidget.tsx
import React, { useState } from 'react'
import { BRAND } from '@/src/config/site'

export default function WhatsAppWidget() {
  const [hover, setHover] = useState(false)
  const href = `/whatsapp/?text=${encodeURIComponent(`Hi ${BRAND.tradingName}, I have a question about a product.`)}`

  return (
    <div className="fixed z-[70] right-4 bottom-4 sm:right-6 sm:bottom-6 flex items-center gap-3">
      <span
        className={`hidden sm:block bg-white text-[#16181b] text-xs font-bold px-3 py-2 rounded-full shadow-xl whitespace-nowrap transition-all duration-300 ${hover ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}`}
      >
        Chat with us on WhatsApp
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Torque E-Bikes on WhatsApp"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping motion-reduce:hidden" aria-hidden="true" />
        <svg viewBox="0 0 32 32" className="relative w-7 h-7 fill-current" aria-hidden="true">
          <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.36.69 4.56 1.87 6.42L4 29l7.77-1.83A12.94 12.94 0 0 0 16.003 28C22.63 28 28 22.627 28 16S22.63 3 16.003 3Zm0 22.6c-1.99 0-3.84-.58-5.4-1.58l-.39-.23-4.6 1.08 1.1-4.48-.25-.41A10.55 10.55 0 0 1 5.4 15c0-5.86 4.75-10.6 10.6-10.6s10.6 4.74 10.6 10.6-4.74 10.6-10.6 10.6Zm5.82-7.93c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.09 1.3 3.3.16.21 2.25 3.43 5.45 4.81.76.33 1.36.52 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </div>
  )
}
