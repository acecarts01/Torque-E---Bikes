import React from 'react'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Wholesale E-Bike Parts and Bikes',
    description: 'Wholesale accounts for workshops, retailers and conversion specialists',
    path: '/wholesale/',
  }),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
