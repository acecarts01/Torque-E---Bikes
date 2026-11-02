// src/lib/blogIndex.ts
// Light blog facts for client components, read from the generated index (see scripts/gen-blog-index.mjs). Never import src/lib/blog.ts from a client component.
import index from '@/src/config/blog-index.generated.json'

const URLS = new Set<string>(index.urls)
const GUIDES = index.guides as Record<string, { href: string; anchor: string; title: string }[]>

export const isLive = (href: string): boolean => !href.startsWith('/blog/') || href === '/blog/' || URLS.has(href)
export const guideLinks = (path: string, limit = 5) => (GUIDES[path] || []).slice(0, limit)
export const latestPosts = index.latest as { slug: string; url: string; category: string; title: string; excerpt: string }[]
export const allPosts = index.all as { slug: string; url: string; title: string; excerpt: string; category: string; date: string; readTime: string; image: { file: string; alt: string } }[]
