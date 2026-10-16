// src/lib/pricing.ts
// One place for order maths. Everything is calculated in whole cents so totals are exact, then returned in dollars.
// Used by the checkout page (preview), the order API (the real figures) and the emails/admin (display only).
import { SHOP, GST } from '@/src/config/site'

export const toCents = (dollars: number) => Math.round(Number(dollars) * 100)
const dollars = (cents: number) => cents / 100

export type Totals = {
  subtotal: number          // goods, before shipping, discount and GST
  shipping: number
  cryptoDiscount: number
  net: number               // (subtotal + shipping - cryptoDiscount): the amount GST applies to / is contained in
  gst: number
  gstRate: number
  gstMode: 'exclusive' | 'inclusive'
  total: number             // the full amount to pay
}

/** lineCents: price x quantity for each line, in cents. */
export function calcTotals(lineCents: number[], paymentMethod: string): Totals {
  const subtotalC = lineCents.reduce((s, n) => s + n, 0)
  const subtotalD = dollars(subtotalC)

  const baseShipC = subtotalD > SHOP.freeShippingThreshold ? 0 : toCents(SHOP.shippingFee)
  const shipDiscC = subtotalD >= SHOP.shippingDiscountThreshold ? Math.round(baseShipC * SHOP.shippingDiscountRate / 100) : 0
  const shippingC = baseShipC - shipDiscC

  const beforeDiscC = subtotalC + shippingC
  const cryptoC = paymentMethod === 'crypto' ? Math.round(beforeDiscC * SHOP.cryptoDiscount / 100) : 0
  const netC = beforeDiscC - cryptoC

  const exclusive = GST.mode === 'exclusive'
  const gstC = exclusive ? Math.round(netC * GST.rate / 100) : Math.round(netC * GST.rate / (100 + GST.rate))
  const totalC = exclusive ? netC + gstC : netC

  return {
    subtotal: dollars(subtotalC), shipping: dollars(shippingC), cryptoDiscount: dollars(cryptoC),
    net: dollars(netC), gst: dollars(gstC), gstRate: GST.rate, gstMode: GST.mode as 'exclusive' | 'inclusive', total: dollars(totalC),
  }
}

export const gstLabel = (t: { gstRate: number; gstMode: string }) =>
  t.gstMode === 'inclusive' ? `Includes GST (${t.gstRate}%)` : `GST (${t.gstRate}%)`
export const totalLabel = 'Total payable (AUD, incl. GST)'
