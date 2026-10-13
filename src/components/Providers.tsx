'use client'

// src/components/Providers.tsx
import React from 'react'
import { MotionConfig } from 'motion/react'
import ReviewPopup from '@/src/components/ReviewPopup'
import WhatsAppWidget from '@/src/components/WhatsAppWidget'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <ReviewPopup />
      <WhatsAppWidget />
    </MotionConfig>
  )
}
