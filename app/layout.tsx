import type { Metadata } from 'next'
import React from 'react'
import { SITE, CONTACT } from '@/src/config/site'
import Providers from '@/src/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`
  },
  description: SITE.tagline,
  metadataBase: new URL(`https://${SITE.domain}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.tagline,
  },
  other: {
    'og:updated_time': new Date().toISOString(),
    'google-site-verification': SITE.gscVerification,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className="scroll-smooth">
      <head>
        <script src="/js/webmcp.js" defer></script>
      </head>
      <body suppressHydrationWarning className="antialiased bg-[#0e0f11] text-white min-h-screen flex flex-col overflow-x-hidden max-w-[100vw]">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
