import { NextRequest, NextResponse } from 'next/server'
import { searchProducts } from '@/src/lib/productSearch'

// Lightweight product suggestions for the site search boxes. Returns only the fields they show,
// so the browser never has to download the whole catalogue.
export async function GET(req: NextRequest) {
  const q = (req.nextUrl.searchParams.get('q') || '').trim()
  if (q.length < 2) return NextResponse.json([])
  const hits = searchProducts(q, 6).map(p => ({ slug: p.slug, name: p.name, category: p.category, price: p.price, image: p.images[0], stock: (p as any).stock || null }))
  return NextResponse.json(hits, { headers: { 'Cache-Control': 'public, max-age=300' } })
}
