import React from 'react'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Checkout',
    description: 'Complete your Torque E-Bikes order',
    path: '/checkout/',
  }),
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
