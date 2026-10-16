import React from 'react'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Compare Electric Bikes',
    description: 'Compare e-bikes and electric dirt bikes side by side on price, motor, battery and specifications',
    path: '/compare/',
  }),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
