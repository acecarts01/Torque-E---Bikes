// src/lib/schemaGraph.ts
// One JSON-LD @graph per page. Every node has a stable @id so the nodes point at each other.
// Pure functions: safe to import from server components only (they read site config and the price range file).
import { SITE, CONTACT, BRAND, SHOP } from '@/src/config/site'
import PRICE_RANGE from '@/src/config/price-range.generated.json'
import { ratingNode, reviewNode, productOwnReviews, type Review } from '@/src/lib/reviewsSchema'

const ORIGIN = `https://${SITE.domain}`
export const abs = (path: string) => `${ORIGIN}${path}`
export const ID = {
  org: `${ORIGIN}/#organization`,
  site: `${ORIGIN}/#website`,
  page: (path: string) => `${abs(path)}#webpage`,
  crumbs: (path: string) => `${abs(path)}#breadcrumb`,
}

type Node = Record<string, any>
type Crumb = { name: string; item: string }
export type FaqPair = { q: string; a: string }

// Full business entity (home page) or a short reference entity (every other page).
// `rating` adds the store's aggregate rating; `reviews` lists the reviews shown on that page. Only pass them on pages that display them.
export function orgNode(full = false, opts: { rating?: boolean; reviews?: Review[] } = {}): Node {
  const base: Node = {
    '@type': full ? ['Store', 'Organization'] : 'Organization',
    '@id': ID.org,
    name: SITE.name,
    url: `${ORIGIN}/`,
    logo: abs('/logo.png'),
    ...(opts.rating ? { aggregateRating: ratingNode() } : {}),
    ...(opts.reviews && opts.reviews.length ? { review: opts.reviews.map(reviewNode) } : {}),
  }
  if (!full) return base
  return {
    ...base,
    legalName: BRAND.entityName,
    alternateName: BRAND.tradingName,
    taxID: BRAND.abn,
    identifier: { '@type': 'PropertyValue', propertyID: 'ABN', value: BRAND.abn.replace(/\s/g, '') },
    description: SITE.tagline,
    foundingDate: BRAND.foundingYear,
    foundingLocation: { '@type': 'Place', name: BRAND.foundingLocation },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.split(',')[0],
      addressLocality: 'Brisbane',
      addressRegion: 'QLD',
      postalCode: '4000',
      addressCountry: 'AU',
    },
    ...(BRAND.sameAs && BRAND.sameAs.length ? { sameAs: BRAND.sameAs } : {}),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.whatsapp,
      contactType: 'sales',
      areaServed: 'AU',
      availableLanguage: 'en',
    },
    brand: { '@type': 'Brand', name: SITE.name },
    makesOffer: { '@type': 'AggregateOffer', priceCurrency: SITE.currency, lowPrice: PRICE_RANGE.low, highPrice: PRICE_RANGE.high },
  }
}

export function websiteNode(): Node {
  return { '@type': 'WebSite', '@id': ID.site, url: `${ORIGIN}/`, name: SITE.name, inLanguage: SITE.locale, publisher: { '@id': ID.org } }
}

export function webPageNode(path: string, opts: { type?: string; name?: string; description?: string; image?: string; crumbs?: boolean; extra?: Node } = {}): Node {
  const { type = 'WebPage', name, description, image, crumbs = true, extra = {} } = opts
  return {
    '@type': type,
    '@id': ID.page(path),
    url: abs(path),
    ...(name ? { name } : {}),
    ...(description ? { description } : {}),
    inLanguage: SITE.locale,
    isPartOf: { '@id': ID.site },
    about: { '@id': ID.org },
    ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: image } } : {}),
    ...(crumbs ? { breadcrumb: { '@id': ID.crumbs(path) } } : {}),
    ...extra,
  }
}

export function breadcrumbNode(path: string, crumbs: Crumb[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': ID.crumbs(path),
    itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.item) })),
  }
}

export function faqNode(path: string, items: FaqPair[]): Node | null {
  if (!items || !items.length) return null
  return {
    '@type': 'FAQPage',
    '@id': `${abs(path)}#faq`,
    isPartOf: { '@id': ID.page(path) },
    mainEntity: items.map(i => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  }
}

// Mirrors /shipping-returns/: shipping is a % of goods, free above the threshold; returns within 14 days, 20% restocking fee on large items.
export function productNode(path: string, p: { name: string; description: string; images: string[]; slug: string; category: string; price: number; brand?: string }): Node {
  // Reviews that name this product (none for most products). Never the store-wide reviews.
  const own = productOwnReviews(p.slug)
  const ownRating = own.length ? { '@type': 'AggregateRating', ratingValue: own.reduce((s, r) => s + r.rating, 0) / own.length, reviewCount: own.length, bestRating: 5, worstRating: 1 } : null
  return {
    '@type': 'Product',
    '@id': `${abs(path)}#product`,
    name: p.name,
    description: p.description,
    image: p.images.map(img => abs(img)),
    sku: p.slug,
    brand: { '@type': 'Brand', name: p.brand || SITE.name },
    mainEntityOfPage: { '@id': ID.page(path) },
    ...(ownRating ? { aggregateRating: ownRating, review: own.map(reviewNode) } : {}),
    offers: {
      '@type': 'Offer',
      url: abs(path),
      priceCurrency: SITE.currency,
      price: p.price,
      availability: 'https://schema.org/InStock',
      seller: { '@id': ID.org },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: p.price >= SHOP.freeShippingThreshold ? 0 : Math.round(p.price * SHOP.shippingRate) / 100,
          currency: SITE.currency,
        },
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'AU' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 3, maxValue: 5, unitCode: 'DAY' },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'AU',
        returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
        merchantReturnDays: 14,
        returnFees: 'https://schema.org/RestockingFees',
        url: abs('/shipping-returns/'),
      },
    },
  }
}

export function itemListNode(path: string, items: { name: string; url: string }[]): Node {
  return {
    '@type': 'ItemList',
    '@id': `${abs(path)}#itemlist`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.url) })),
  }
}

export function blogPostingNode(path: string, post: { title: string; excerpt: string; date: string; updated?: string; image?: string; keywords?: string }): Node {
  return {
    '@type': 'BlogPosting',
    '@id': `${abs(path)}#article`,
    headline: post.title,
    description: post.excerpt,
    ...(post.image ? { image: post.image } : {}),
    datePublished: post.date,
    dateModified: post.updated || post.date,
    ...(post.keywords ? { keywords: post.keywords } : {}),
    inLanguage: SITE.locale,
    author: { '@id': ID.org },
    publisher: { '@id': ID.org },
    isPartOf: { '@id': ID.page(path) },
    mainEntityOfPage: { '@id': ID.page(path) },
  }
}

export function buildGraph(nodes: (Node | null | undefined)[]): Node {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) }
}
