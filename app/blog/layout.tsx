import { Metadata } from 'next'
import React from 'react'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Tech Insights & DIY Guides',
  description: 'Pro guides for high-torque electric motor conversions, battery safety, and Australian road regulations.',
  path: '/blog/'
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
