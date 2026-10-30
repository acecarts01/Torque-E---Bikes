// src/lib/productLinks.ts
// Interlinking for product pages: category, brand and related-product links whose anchors are the target page's own transactional or commercial keywords
// (kept in seo.generated.json from the keyword register). Server-side only: it imports the catalogue.
import { PRODUCTS } from '@/src/config/products'
import { CATEGORIES, SHOP } from '@/src/config/site'
import { getSeo } from '@/src/lib/seo'
import { brandSlugs, slugify } from '@/src/lib/hubs'
import { calcTotals, toCents } from '@/src/lib/pricing'
import NOINDEX from '@/src/config/noindex-products.json'

type Product = (typeof PRODUCTS)[number]
export type Link = { href: string; anchor: string; name?: string; price?: number }

const hash = (s: string) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7)
const noindexed = new Set(NOINDEX as string[])
const path = (p: Product) => `/shop/${p.category}/${p.slug}/`

// A transactional or commercial anchor for a product: one of its own secondary keywords (buy / for sale / online / price), else "buy <name>".
function productAnchor(p: Product, salt: string): string {
  const kw = (getSeo(path(p))?.kw as string[] | undefined) || []
  const pool = kw.slice(1).filter(k => /\b(buy|sale|online|price|australia)\b/.test(k))
  return pool.length ? pool[hash(p.slug + salt) % pool.length] : `buy ${p.name}`
}

export function categoryLink(p: Product): Link | null {
  const cat = CATEGORIES.find(c => c.slug === p.category)
  if (!cat) return null
  const kw = (getSeo(`/shop/${p.category}/`)?.kw as string[] | undefined) || []
  const pool = kw.slice(0, 6)
  return { href: `/shop/${p.category}/`, anchor: pool.length ? pool[hash(p.slug) % pool.length] : cat.name.toLowerCase() }
}

export function brandLink(p: Product): Link | null {
  if (!p.brand || p.brand === 'TBC') return null
  const slug = slugify(p.brand)
  if (!brandSlugs().includes(slug)) return null
  const kw = (getSeo(`/brands/${slug}/`)?.kw as string[] | undefined) || []
  const pool = kw.filter(k => /\b(australia|price|buy|sale|electric|e bike|bike)\b/.test(k)).slice(0, 6)
  return { href: `/brands/${slug}/`, anchor: pool.length ? pool[hash(p.slug) % pool.length] : `${p.brand} in Australia` }
}

// Four related products from the same category with the nearest prices, plus up to two more from the same brand. Indexable pages only.
export function relatedProducts(p: Product): Link[] {
  const ok = (q: Product) => q.slug !== p.slug && !noindexed.has(q.slug)
  const sameCat = PRODUCTS.filter(q => ok(q) && q.category === p.category).sort((a, b) => Math.abs(a.price - p.price) - Math.abs(b.price - p.price)).slice(0, 4)
  const seen = new Set(sameCat.map(q => q.slug))
  const sameBrand = p.brand && p.brand !== 'TBC' ? PRODUCTS.filter(q => ok(q) && q.brand === p.brand && !seen.has(q.slug)).sort((a, b) => Math.abs(a.price - p.price) - Math.abs(b.price - p.price)).slice(0, 2) : []
  return [...sameCat, ...sameBrand].map(q => ({ href: path(q), anchor: productAnchor(q, p.slug), name: q.name, price: q.price }))
}

// What the buyer pays for this product alone, from the same maths the checkout uses (shipping 10% of goods, free from the threshold, crypto discount on goods plus shipping).
export function costToDoor(p: Product) {
  const card = calcTotals([toCents(p.price)], 'bank')
  const crypto = calcTotals([toCents(p.price)], 'crypto')
  return { price: p.price, shipping: card.shipping, total: card.total, cryptoTotal: crypto.total, cryptoSaving: crypto.cryptoDiscount, free: card.shipping === 0, belowMin: p.price < SHOP.minOrder, minOrder: SHOP.minOrder, freeFrom: SHOP.freeShippingThreshold }
}
