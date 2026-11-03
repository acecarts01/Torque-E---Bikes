// src/lib/reviewsSchema.ts
// The verified customer reviews in REVIEWS (src/config/site.js) are reviews of the store. They are rated on the Organization.
// A review is also rated on a product only when it names that product (see PRODUCT_REVIEW_IDS).
import { REVIEWS } from '@/src/config/site'

export type Review = (typeof REVIEWS)[number]

// Product slug -> ids of the reviews that name that product. Review 3: "ETM RTR Sport is a beast."
export const PRODUCT_REVIEW_IDS: Record<string, number[]> = {
  'etm-rtr-sport-2026': [3],
}

const MONTHS: Record<string, string> = { jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06', jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12' }
// "Oct 2026" / "July 2026" -> "2026-10" / "2026-07"
const isoMonth = (d: string) => {
  const m = d.trim().match(/^([A-Za-z]{3})[a-z]*\.?\s+(\d{4})$/)
  return m && MONTHS[m[1].toLowerCase()] ? `${m[2]}-${MONTHS[m[1].toLowerCase()]}` : undefined
}

export const reviewSummary = () => {
  const count = REVIEWS.length
  const value = REVIEWS.reduce((s, r) => s + r.rating, 0) / count
  return { count, value: Math.round(value * 10) / 10 }
}

export const ratingNode = () => {
  const { count, value } = reviewSummary()
  return { '@type': 'AggregateRating', ratingValue: value, reviewCount: count, bestRating: 5, worstRating: 1 }
}

export const reviewNode = (r: Review) => ({
  '@type': 'Review',
  author: { '@type': 'Person', name: r.author },
  ...(isoMonth(r.date) ? { datePublished: isoMonth(r.date) } : {}),
  reviewBody: r.text,
  reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
})

// The reviews a product page shows: the ones that name this product first, then others, three in all.
// Off-road products never show a review that talks about street-legal kits (site compliance rule).
export const reviewsForProduct = (slug: string, offRoad = false, limit = 3): Review[] => {
  const own = (PRODUCT_REVIEW_IDS[slug] || []).map(id => REVIEWS.find(r => r.id === id)).filter(Boolean) as Review[]
  const rest = REVIEWS.filter(r => !own.includes(r) && !(offRoad && /street[- ]legal/i.test(r.text)))
  return [...own, ...rest].slice(0, limit)
}

export const productOwnReviews = (slug: string): Review[] =>
  (PRODUCT_REVIEW_IDS[slug] || []).map(id => REVIEWS.find(r => r.id === id)).filter(Boolean) as Review[]
