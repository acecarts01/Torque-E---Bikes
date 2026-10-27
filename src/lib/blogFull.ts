// src/lib/blogFull.ts
// Server-only: full post bodies (intro, sections, FAQ) merged with the light metadata.
import { BLOG_BODIES } from '@/src/content/blog/bodies.js'
import { NEW_BODIES } from '@/src/content/blog/new/index.js'
import { REFRESH_BODY } from '@/src/content/blog/refresh/body-index.js'
import { applyBody } from '@/src/content/blog/refresh/apply.js'
import { getPost, getTool, type BlogMeta } from './blog'

export type BlogSection = {
  h: string
  p?: string[]
  ul?: string[]
  table?: { head: string[]; rows: string[][] }
  img?: { file: string; alt: string; w: number; h: number }
}
export type BlogBody = {
  hook: string
  intro: string[]
  sections: BlogSection[]
  faq: { q: string; a: string }[]
  keywords: { primary: string; supporting: string[] }
  words: number
}
export type FullPost = BlogMeta & BlogBody

const ALL_BODIES = { ...BLOG_BODIES, ...NEW_BODIES } as unknown as Record<string, BlogBody>
const BODIES: Record<string, BlogBody> = Object.fromEntries(Object.entries(ALL_BODIES).map(([slug, b]) => [slug, applyBody(b, (REFRESH_BODY as Record<string, unknown>)[slug]) as BlogBody]))

const merge = (m: BlogMeta | undefined): FullPost | undefined => {
  if (!m) return undefined
  const b = BODIES[m.slug]
  return b ? { ...m, ...b } : undefined
}

export const getFullPost = (slug: string): FullPost | undefined => merge(getPost(slug))
export const getFullTool = (url: string): FullPost | undefined => merge(getTool(url))
