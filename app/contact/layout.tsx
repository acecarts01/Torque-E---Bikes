import { Metadata } from 'next'
import React from 'react'
import { generatePageMetadata } from '@/src/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Consult a Torque Engineer',
  description: 'Get expert advice on your performance e-moto build. Contact our Brisbane tech lab for sales and conversion support.',
  path: '/contact/'
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
