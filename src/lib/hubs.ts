// src/lib/hubs.ts
// Helpers for hub pages (electric bikes, budget, brands) built from the live catalogue.
import { CATEGORIES } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'
import { MIN_BRAND_PRODUCTS, KEEP_BRANDS } from '@/src/config/brand-rules.js'

export const slugify = (s: string) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

type Product = (typeof PRODUCTS)[number]

const BIKE_CATS = new Set(CATEGORIES.filter(c => c.group === 'Bikes').map(c => c.slug))
export const BIKE_CATEGORIES = CATEGORIES.filter(c => c.group === 'Bikes')
export const isBike = (p: Product) => BIKE_CATS.has(p.category)

export const allBikes = (): Product[] => PRODUCTS.filter(isBike).filter(p => p.brand !== 'TBC').sort((a, b) => a.price - b.price)
export const budgetBikes = (limit = 2000): Product[] => allBikes().filter(p => p.price <= limit)

export const brandName = (slug: string): string | undefined => {
  const hit = PRODUCTS.find(p => p.brand && p.brand !== 'TBC' && slugify(p.brand) === slug)
  return hit?.brand
}
export const brandProducts = (brand: string): Product[] => PRODUCTS.filter(p => p.brand === brand).sort((a, b) => a.price - b.price)
// Only brands with enough products (or a dedicated guide) get a page; thin brand pages are merged and redirected.
export const brandSlugs = (): string[] => {
  const count: Record<string, number> = {}
  PRODUCTS.filter(p => p.brand && p.brand !== 'TBC').forEach(p => { const s = slugify(p.brand); count[s] = (count[s] || 0) + 1 })
  return Object.keys(count).filter(s => count[s] >= MIN_BRAND_PRODUCTS || KEEP_BRANDS.includes(s))
}
export const aud = (n: number) => '$' + Math.round(n).toLocaleString('en-AU')
