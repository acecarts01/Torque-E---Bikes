import { NextRequest, NextResponse } from 'next/server'
import { PRODUCTS, SITE } from '@/src/config/site'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const q = searchParams.get('q')

  let filtered = [...PRODUCTS]
  if (category) filtered = filtered.filter(p => p.category === category)
  if (q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()))

  return NextResponse.json(filtered.map(p => ({
    ...p,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`
  })), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  })
}
