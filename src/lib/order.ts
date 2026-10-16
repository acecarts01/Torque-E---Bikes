// src/lib/order.ts
// Money formatting, payment-method wording and the flexible payment-detail parser (Reply Portal).
import { REPLY } from '@/src/config/site'

export const money = (n: number) =>
  new Intl.NumberFormat(REPLY.currency.locale, { style: 'currency', currency: REPLY.currency.code }).format(n)

export const findMethod = (id: string) => REPLY.paymentMethods.find(m => m.id === id)

export function paymentMethodParts(methodId: string, amount: number, ref: string) {
  const m = findMethod(methodId)
  const fill = (s: string) => s.replace(/\{amount\}/g, money(amount)).replace(/\{ref\}/g, ref)
  return { label: m?.label || methodId, opening: fill(m?.opening || 'Please pay {amount}.'), closing: fill(m?.closing || 'Quote {ref} as your payment reference.') }
}

const KNOWN_LABELS = [
  'account name', 'account number', 'bsb', 'bank name', 'payid', 'pay id', 'reference',
  'wallet address', 'wallet', 'network', 'memo', 'destination tag', 'tag',
  'beneficiary name', 'beneficiary', 'swift code', 'swift', 'iban', 'payment link',
].sort((a, b) => b.length - a.length)

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const LABEL_PATTERN = new RegExp(`^(${KNOWN_LABELS.map(escapeRe).join('|')})\\s*[:\\-]?\\s+(.+)$`, 'i')

const titleCase = (s: string) => s.replace(/\S+/g, w => w[0].toUpperCase() + w.slice(1).toLowerCase())

/**
 * Splits a pasted blob into { label, value } rows. Tier 1: "Label: value". Tier 2: a known label word then a value.
 * Tier 3: the whole line becomes a "Detail" row (so a bare wallet address still works).
 * A trailing http(s) URL after a colon stays whole because only the first colon splits.
 */
export function parsePaymentDetail(text: string): { label: string; value: string }[] {
  const lines = String(text || '').split(/\r?\n/).map(l => l.trim()).filter(Boolean)
  let unlabeled = 0
  return lines.map(line => {
    const colon = line.indexOf(':')
    if (colon > 0 && colon < line.length - 1 && !/^https?$/i.test(line.slice(0, colon))) {
      return { label: line.slice(0, colon).trim(), value: line.slice(colon + 1).trim() }
    }
    const m = line.match(LABEL_PATTERN)
    if (m) return { label: titleCase(m[1]), value: m[2].trim() }
    unlabeled += 1
    return { label: unlabeled > 1 ? `Detail ${unlabeled}` : 'Detail', value: line }
  })
}

export const paymentTermsLines = (ref: string) => [
  'This order is confirmed once payment is received. It is not yet final.',
  `Use your order number, ${ref}, as the payment reference.`,
  REPLY.dispatchLine,
]
