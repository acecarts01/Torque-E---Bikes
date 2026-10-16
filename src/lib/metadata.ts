// src/lib/metadata.ts
import { Metadata } from 'next'
import { SITE } from '@/src/config/site'
import { KEYWORDS } from './keywords'
import { getSeo } from './seo'

const DEFAULT_OG = `https://${SITE.domain}/og-default.png`

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
  const override = getSeo(path)
  if (override) {
    const url = `https://${SITE.domain}${path}`
    const full = override.abs ? override.title : `${override.title} | ${SITE.name}`
    return {
      title: override.abs ? { absolute: override.title } : override.title,
      description: override.meta,
      alternates: { canonical: url },
      openGraph: { title: full, description: override.meta, url, siteName: SITE.name, images: [{ url: image || DEFAULT_OG }], type: 'website' },
      twitter: { card: 'summary_large_image', title: full, description: override.meta, images: [image || DEFAULT_OG] },
    }
  }
  const seoTitle = `${title} | ${SITE.name}`
  const lead = description ? `${description.replace(/[.\s]+$/, '')}. ` : ''
  const full = `${lead}Torque E-Bikes ships Australia-wide from Brisbane. Electric dirt bikes, e-bikes, parts and gear.`
  const seoDescription = full.length <= 158 ? full : `${full.slice(0, 157).replace(/\s+\S*$/, '').replace(/[\s,;:.-]+$/, '')}.`

  const url = `https://${SITE.domain}${path}`

  return {
    title,
    description: seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      siteName: SITE.name,
      images: [{ url: image || DEFAULT_OG }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [image || DEFAULT_OG],
    },
    other: {
      'og:updated_time': new Date().toISOString(),
    }
  }
}
