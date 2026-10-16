import { Metadata } from 'next'
import React from 'react'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'E-Bike and Electric Dirt Bike Guides',
  description: 'Buying guides, how-tos and maintenance advice for e-bikes, electric dirt bikes, conversion kits and parts, with Australian rules explained.',
  path: '/blog/'
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
