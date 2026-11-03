// src/components/JsonLd.tsx
import React from 'react'
import { SITE } from '@/src/config/site'

export default function JsonLd({ type, data }: { type: string, data?: any }) {
  let schema: any = null

  if ((type === 'Breadcrumb' || type === 'BreadcrumbList') && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": data.map((item: any, index: number) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://${SITE.domain}${item.item}`
      }))
    }
  }

  if (type === 'FAQ') {
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((item: any) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
  }

  if (!schema && data) {
    schema = { '@context': 'https://schema.org', '@type': type, ...data }
  }

  if (!schema) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
