import { next } from '@vercel/functions'

export const config = { matcher: '/:path*' }

export default async function middleware(request) {
  const url = new URL(request.url)
  const accept = request.headers.get('accept') || ''
  
  // V5 — Markdown negotiation (q-value aware)
  if (prefersMarkdownOverHtml(accept) && eligiblePath(url.pathname)) {
    const mdPath = url.pathname.endsWith('/') ? `${url.pathname}index.md` : `${url.pathname}.md`
    const mdRes = await fetch(new URL(mdPath, request.url))
    if (mdRes.ok) {
      return new Response(await mdRes.text(), { 
        headers: { 'content-type': 'text/markdown; charset=utf-8' } 
      })
    }
  }
  
  return next()
}

function prefersMarkdownOverHtml(accept) {
  let mdQ = -1, htmlQ = -1
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().split(';').map(s => s.trim())
    let q = 1
    for (const p of params) {
      const m = /^q=([\d.]+)$/.exec(p)
      if (m) q = parseFloat(m[1])
    }
    if (type === 'text/markdown') mdQ = Math.max(mdQ, q)
    if (type === 'text/html') htmlQ = Math.max(htmlQ, q)
  }
  return mdQ > -1 && mdQ > htmlQ
}

function eligiblePath(pathname) {
  // Only negotiate for indexable routes, skip API and static assets
  return !pathname.startsWith('/api/') && 
         !pathname.startsWith('/_next/') && 
         !pathname.includes('.') && 
         !pathname.includes('thank-you')
}
