import { NextRequest, NextResponse } from 'next/server'
import { PRODUCTS } from '@/src/config/products'

// Lightweight product suggestions for the site search box. Returns only the fields the overlay shows,
// so the browser never has to download the whole catalogue.
export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') || '').toLowerCase().trim()
  if (q.length < 2) return NextResponse.json([])
  const hits = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.shortDescription?.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q)
  ).slice(0, 6).map(p => ({ slug: p.slug, name: p.name, category: p.category, price: p.price, image: p.images[0], stock: (p as any).stock || null }))
  return NextResponse.json(hits, { headers: { 'Cache-Control': 'public, max-age=300' } })
}
