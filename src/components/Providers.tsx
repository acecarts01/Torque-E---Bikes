'use client'

// src/components/Providers.tsx
import React from 'react'
import dynamic from 'next/dynamic'

const ReviewPopup = dynamic(() => import('@/src/components/ReviewPopup'), { ssr: false })
const WhatsAppWidget = dynamic(() => import('@/src/components/WhatsAppWidget'), { ssr: false })

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ReviewPopup />
      <WhatsAppWidget />
    </>
  )
}
