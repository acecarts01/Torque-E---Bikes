import { NextRequest, NextResponse } from 'next/server'
import { PRODUCTS, POSTS, SITE } from '@/src/config/site'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')?.toLowerCase() || ''

  if (!q) return NextResponse.json({ products: [], posts: [] })

  const products = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q)
  ).map(p => ({ ...p, url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/` }))

  const posts = POSTS.filter(p => 
    p.title.toLowerCase().includes(q) || 
    p.excerpt.toLowerCase().includes(q)
  ).map(p => ({ ...p, url: `https://${SITE.domain}/blog/${p.slug}/` }))

  return NextResponse.json({ products, posts }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  })
}
