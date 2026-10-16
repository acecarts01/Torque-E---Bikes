import React from 'react'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Search',
    description: 'Search electric dirt bikes, e-bikes, parts and guides',
    path: '/search/',
  }),
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
