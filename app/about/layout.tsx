import { Metadata } from 'next'
import React from 'react'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Brisbane High-Torque Engineering',
  description: 'Australia’s home of extreme performance e-motos and specialists in 72V conversion systems since 2007.',
  path: '/about/'
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
