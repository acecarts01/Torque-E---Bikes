// src/lib/blogFull.ts
// Server-only: full post bodies (intro, sections, FAQ) merged with the light metadata.
import { BLOG_BODIES } from '@/src/content/blog/bodies.js'
import { getPost, getTool, type BlogMeta } from './blog'

export type BlogSection = { h: string; p?: string[]; ul?: string[] }
export type BlogBody = {
  hook: string
  intro: string[]
  sections: BlogSection[]
  faq: { q: string; a: string }[]
  keywords: { primary: string; supporting: string[] }
  words: number
}
export type FullPost = BlogMeta & BlogBody

const BODIES = BLOG_BODIES as unknown as Record<string, BlogBody>

const merge = (m: BlogMeta | undefined): FullPost | undefined => {
  if (!m) return undefined
  const b = BODIES[m.slug]
  return b ? { ...m, ...b } : undefined
}

export const getFullPost = (slug: string): FullPost | undefined => merge(getPost(slug))
export const getFullTool = (url: string): FullPost | undefined => merge(getTool(url))
