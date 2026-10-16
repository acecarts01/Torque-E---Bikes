// src/lib/seo.ts
// Keyword-plan overrides (title, H1, meta description, image alt) keyed by URL path.
// Generated from the approved keyword map; see docs/keyword-map.md.
import seo from '@/src/config/seo.generated.json'

export type SeoEntry = { title: string; h1: string; meta: string; alt: string; kw: string[]; abs?: boolean }

const MAP = seo as unknown as Record<string, SeoEntry>

export function getSeo(path: string): SeoEntry | undefined {
  return MAP[path]
}
