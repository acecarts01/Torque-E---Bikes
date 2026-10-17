// src/lib/pricing.ts
// One place for order maths. Everything is calculated in whole cents so totals are exact, then returned in dollars.
// Used by the checkout page (preview), the order API (the real figures) and the emails/admin (display only).
import { SHOP } from '@/src/config/site'

export const toCents = (dollars: number) => Math.round(Number(dollars) * 100)
const dollars = (cents: number) => cents / 100

export type Totals = {
  subtotal: number          // goods, before shipping and discount
  shipping: number
  cryptoDiscount: number
  total: number             // the full amount to pay (subtotal + shipping - cryptoDiscount)
}

/** lineCents: price x quantity for each line, in cents. */
export function calcTotals(lineCents: number[], paymentMethod: string): Totals {
  const subtotalC = lineCents.reduce((s, n) => s + n, 0)

  // Shipping is a percentage of the goods total, and free from the threshold upwards.
  const shippingC = subtotalC >= toCents(SHOP.freeShippingThreshold) ? 0 : Math.round(subtotalC * SHOP.shippingRate / 100)

  const beforeDiscC = subtotalC + shippingC
  const cryptoC = paymentMethod === 'crypto' ? Math.round(beforeDiscC * SHOP.cryptoDiscount / 100) : 0
  const totalC = beforeDiscC - cryptoC

  return {
    subtotal: dollars(subtotalC), shipping: dollars(shippingC), cryptoDiscount: dollars(cryptoC),
    total: dollars(totalC),
  }
}

export const totalLabel = 'Total payable (AUD)'
