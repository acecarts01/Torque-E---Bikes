import React from 'react'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = {
  ...generatePageMetadata({
    title: 'Electric Bike FAQs',
    description: 'Answers on shipping, payment, batteries, Australian e-bike rules and fitment from Torque E-Bikes',
    path: '/faq/',
  }),
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
