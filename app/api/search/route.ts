import { NextRequest, NextResponse } from 'next/server'
import { SITE } from '@/src/config/site'
import { POSTS } from '@/src/config/posts'
import { searchProducts } from '@/src/lib/productSearch'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = (searchParams.get('q') || '').toLowerCase().trim()

  if (!q) return NextResponse.json({ products: [], posts: [] })

  const products = searchProducts(q, 48).map(p => ({ ...p, url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/` }))

  const words = q.replace(/[^a-z0-9.]+/g, ' ').split(' ').filter(Boolean)
  const posts = POSTS.filter(p => {
    const hay = `${p.title} ${p.excerpt}`.toLowerCase().replace(/[^a-z0-9.]+/g, ' ')
    return words.every(w => hay.includes(w))
  }).slice(0, 12).map(p => ({ ...p, url: `https://${SITE.domain}/blog/${p.slug}/` }))

  return NextResponse.json({ products, posts }, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=300'
    }
  })
}
