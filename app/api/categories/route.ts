import { NextResponse } from 'next/server'
import { CATEGORIES, SITE } from '@/src/config/site'
import { PRODUCTS } from '@/src/config/products'

export async function GET() {
  const categoriesWithCounts = CATEGORIES.map(c => ({
    ...c,
    productCount: PRODUCTS.filter(p => p.category === c.slug).length,
    url: `https://${SITE.domain}/shop/${c.slug}/`
  }))

  return NextResponse.json(categoriesWithCounts, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
