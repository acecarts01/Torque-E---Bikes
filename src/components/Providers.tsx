'use client'

// src/components/Providers.tsx
import React from 'react'
import { MotionConfig } from 'motion/react'
import dynamic from 'next/dynamic'

const ReviewPopup = dynamic(() => import('@/src/components/ReviewPopup'), { ssr: false })
const WhatsAppWidget = dynamic(() => import('@/src/components/WhatsAppWidget'), { ssr: false })

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <ReviewPopup />
      <WhatsAppWidget />
    </MotionConfig>
  )
}
