// Shared product matching for the search API routes (server only: it imports the catalogue).
// Normalises hyphens and spacing so "sur ron", "sur-ron" and "surron" all find Sur-Ron products, requires every word
// the shopper typed to appear somewhere in the product, and ranks name matches above description matches.
import { PRODUCTS } from '@/src/config/products'

type P = (typeof PRODUCTS)[number]

const norm = (s: string) => String(s || '').toLowerCase().replace(/[^a-z0-9.]+/g, ' ').replace(/\s+/g, ' ').trim()

let INDEX: { p: P; name: string; head: string; body: string; compact: string }[] | null = null
const index = () => {
  if (!INDEX) {
    INDEX = PRODUCTS.map(p => {
      const name = norm(p.name)
      const head = norm(`${p.brand} ${p.name} ${p.category.replace(/-/g, ' ')}`)
      const body = norm(`${p.shortDescription || ''} ${p.description || ''}`)
      return { p, name, head, body, compact: head.replace(/ /g, '') }
    })
  }
  return INDEX
}

export function searchProducts(query: string, limit = 24): P[] {
  const q = norm(query)
  if (q.length < 2) return []
  const words = q.split(' ')
  const joined = q.replace(/ /g, '')
  const scored: { p: P; s: number }[] = []
  for (const e of index()) {
    let s = 0
    const nameHit = words.every(w => e.head.includes(w)) || e.compact.includes(joined)
    if (nameHit) {
      s = 100 + (e.name.startsWith(q) ? 40 : 0) + (e.name.includes(q) ? 25 : 0) + (e.compact.includes(joined) ? 10 : 0)
    } else if (words.every(w => e.head.includes(w) || e.body.includes(w))) {
      s = 20
    }
    if (s) scored.push({ p: e.p, s: s + ((e.p as any).featured ? 3 : 0) })
  }
  return scored.sort((a, b) => b.s - a.s || a.p.name.localeCompare(b.p.name)).slice(0, limit).map(x => x.p)
}
