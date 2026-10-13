// src/lib/metadata.ts
import { Metadata } from 'next'
import { SITE } from '@/src/config/site'
import { KEYWORDS } from './keywords'

export function generatePageMetadata({
  title,
  description,
  path,
  image
}: {
  title: string
  description?: string
  path: string
  image?: string
}): Metadata {
  const seoTitle = `${title} | ${KEYWORDS.primary} | ${SITE.name}`
  const seoDescription = description 
    ? `${description}. Discover the best ${KEYWORDS.primary} at Torque E-Bikes. Brisbane-based expertise with nationwide shipping.`
    : `Buy high-performance ${KEYWORDS.primary} at Torque E-Bikes. Electric dirt bikes, e-bikes, parts and gear with Australia-wide shipping.`

  const url = `https://${SITE.domain}${path}`

  return {
    title: `${title} | ${KEYWORDS.primary}`,
    description: seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: SITE.name,
      images: image ? [{ url: image }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: image ? [image] : undefined,
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    }
  }
}
