// src/lib/blog.ts
// Light blog metadata (safe for client bundles). Full post bodies live in src/lib/blogFull.ts (server only).
// Posts are released on their planned date: only posts dated on or before the build date are published.
import { BLOG_META } from '@/src/content/blog/meta.js'
import { NEW_META } from '@/src/content/blog/new/index.js'

export type BlogMeta = {
  id: string
  slug: string
  url: string
  title: string
  seoTitle: string
  excerpt: string
  category: string
  date: string
  updated?: string
  readTime: string
  image: { file: string; alt: string; query?: string; credit?: string | null }
  links: { to: [string, string][]; from: [string, string][] }
  kind: 'post' | 'tool'
  // blog-post rule fields (new posts): focus keyword, 5 secondary keywords, 10 tags, related product cards
  focus?: string
  secondary?: string[]
  tags?: string[]
  related?: { href: string; name: string; price?: number; note?: string }[]
}

const ALL = [...BLOG_META, ...NEW_META] as unknown as BlogMeta[]

export const TOOL_PAGES: BlogMeta[] = ALL.filter(p => p.kind === 'tool')

export const PUBLISHED: BlogMeta[] = ALL.filter(p => p.kind !== 'tool')
  .filter(p => process.env.PUBLISH_ALL === '1' || new Date(p.date + 'T00:00:00Z') <= new Date())
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const PUBLISHED_URLS = new Set(PUBLISHED.map(p => p.url))

export const getTool = (url: string): BlogMeta | undefined => TOOL_PAGES.find(p => p.url === url)
export const getPost = (slug: string): BlogMeta | undefined => PUBLISHED.find(p => p.slug === slug)

/** A link is usable if it is not a blog URL, or it is a blog URL that is already published. */
export const isLive = (href: string): boolean => !href.startsWith('/blog/') || href === '/blog/' || PUBLISHED_URLS.has(href)

/** Guides that a given page should link to, with the planned anchor text (only published posts). */
export const guideLinks = (path: string, limit = 5): { href: string; anchor: string; title: string }[] =>
  PUBLISHED.flatMap(p => p.links.from.filter(([u]) => u === path).map(([, anchor]) => ({ href: p.url, anchor, title: p.title }))).slice(0, limit)
