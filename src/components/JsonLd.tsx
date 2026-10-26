// src/components/JsonLd.tsx
import React from 'react'
import { SITE, CONTACT, BRAND, SHOP } from '@/src/config/site'
import PRICE_RANGE from '@/src/config/price-range.generated.json'

export default function JsonLd({ type, data }: { type: string, data?: any }) {
  let schema: any = null

  if (type === 'Organization') {
    schema = {
      "@context": "https://schema.org",
      "@type": ["Store", "Organization"],
      "name": SITE.name,
      "legalName": BRAND.entityName,
      "alternateName": BRAND.tradingName,
      "taxID": BRAND.abn,
      "identifier": { "@type": "PropertyValue", "propertyID": "ABN", "value": BRAND.abn.replace(/s/g, '') },
      "description": SITE.tagline,
      "foundingDate": BRAND.foundingYear,
      "foundingLocation": { "@type": "Place", "name": BRAND.foundingLocation },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONTACT.address.split(',')[0],
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "postalCode": "4000",
        "addressCountry": "AU"
      },
      "url": `https://${SITE.domain}/`,
      "logo": `https://${SITE.domain}/logo.png`,
      "sameAs": BRAND.sameAs,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": CONTACT.whatsapp,
        "contactType": "sales",
        "areaServed": "AU",
        "availableLanguage": "en"
      },
      "brand": { "@type": "Brand", "name": SITE.name },
      "makesOffer": {
        "@type": "AggregateOffer",
        "priceCurrency": SITE.currency,
        "lowPrice": PRICE_RANGE.low,
        "highPrice": PRICE_RANGE.high
      }
    }
  }

  if (type === 'Product' && data) {
    schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "description": data.description,
      "image": data.images.map((img: string) => `https://${SITE.domain}${img}`),
      "sku": data.slug,
      "brand": { "@type": "Brand", "name": data.brand || SITE.name },
      "offers": {
        "@type": "Offer",
        "url": `https://${SITE.domain}/shop/${data.category}/${data.slug}/`,
        "priceCurrency": SITE.currency,
        "price": data.price,
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": SITE.name },
        // mirrors /shipping-returns/: shipping is a % of goods and free above the threshold; returns are agreed case by case
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": data.price >= SHOP.freeShippingThreshold ? 0 : Math.round(data.price * SHOP.shippingRate) / 100,
            "currency": SITE.currency
          },
          "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "AU" }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "AU",
          "returnPolicyCategory": "https://schema.org/MerchantReturnUnspecified",
          "url": `https://${SITE.domain}/shipping-returns/`
        }
      }
    }
  }

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
