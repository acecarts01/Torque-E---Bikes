// src/lib/quote.ts
// Quote requests from product pages, and the quotes/invoices the owner issues from /admin/invoice/.
// All money is worked out in whole cents. Used by the request API, the invoice API and the invoice builder (preview).
import { SHOP } from '@/src/config/site'
import { calcTotals, toCents } from '@/src/lib/pricing'

export type DocType = 'quote' | 'invoice'

export type DocItem = { slug: string; name: string; qty: number; unit: number; line: number; instructions: string[] }
export type Address = { street: string; suburb: string; state: string; postcode: string }

export const DOC_PREFIX: Record<DocType, string> = { quote: 'TQQ', invoice: 'TQI' }
export const DOC_LABEL: Record<DocType, string> = { quote: 'Quote', invoice: 'Invoice' }
export const QUOTE_VALID_DAYS = 14
export const INVOICE_DUE_DAYS = 3
export const STATES = ['QLD', 'NSW', 'VIC', 'SA', 'WA', 'TAS', 'NT', 'ACT']

export type DocTotals = { subtotal: number; shipping: number; discount: number; total: number }

/**
 * Default shipping and discount follow the site rules (shipping is a % of goods, free from the threshold, crypto discount).
 * The owner can override either one on the document; overrides are whole dollars and cents, never negative.
 */
export function docTotals(lineCents: number[], methodId: string, override?: { shipping?: number | null; discount?: number | null }): DocTotals {
  const base = calcTotals(lineCents, methodId)
  const sub = base.subtotal
  const shipping = override?.shipping != null && !Number.isNaN(Number(override.shipping)) ? Math.max(0, toCents(Number(override.shipping))) / 100 : base.shipping
  const discountDefault = methodId === 'crypto' ? Math.round((toCents(sub) + toCents(shipping)) * SHOP.cryptoDiscount / 100) / 100 : 0
  const discount = override?.discount != null && !Number.isNaN(Number(override.discount)) ? Math.max(0, toCents(Number(override.discount))) / 100 : discountDefault
  const total = Math.max(0, (toCents(sub) + toCents(shipping) - toCents(discount)) / 100)
  return { subtotal: sub, shipping, discount, total }
}

export const addDays = (iso: string, days: number) => {
  const d = new Date(iso + 'T00:00:00Z')
  d.setUTCDate(d.getUTCDate() + days)
  return d.toISOString().slice(0, 10)
}

/** Today's date in Brisbane, as YYYY-MM-DD. */
export const todayBrisbane = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Brisbane' }).format(new Date())

export const longDate = (iso: string) =>
  new Date(iso + 'T00:00:00Z').toLocaleDateString('en-AU', { timeZone: 'UTC', day: 'numeric', month: 'long', year: 'numeric' })
