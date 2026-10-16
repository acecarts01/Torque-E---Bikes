import { NextRequest, NextResponse } from 'next/server'
import { PRODUCTS } from '@/src/config/products'

// Just the products currently in a shopper's cart (display fields only). Prices are still recalculated
// on the server when the order is placed.
export async function GET(req: NextRequest) {
  const slugs = new Set((req.nextUrl.searchParams.get('slugs') || '').split(',').map(s => s.trim()).filter(Boolean).slice(0, 30))
  const items = PRODUCTS.filter(p => slugs.has(p.slug)).map(p => ({
    slug: p.slug, name: p.name, price: p.price, image: p.images[0], compliance: (p as any).compliance || null,
  }))
  return NextResponse.json(items, { headers: { 'Cache-Control': 'no-store' } })
}
