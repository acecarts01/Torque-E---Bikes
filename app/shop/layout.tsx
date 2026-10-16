import React from 'react'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Shop',
  description: 'Shop electric dirt bikes, e-bikes, parts and gear',
  path: '/shop/',
})

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
