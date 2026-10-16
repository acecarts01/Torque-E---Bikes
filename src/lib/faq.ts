// src/lib/faq.ts
// FAQ bank from the approved keyword plan (docs/faq-bank.md). Each question appears on exactly one page.
import bank from '@/src/config/faq.generated.json'

export type FaqItem = { q: string; a: string }

const B = bank as unknown as { home: FaqItem[]; groups: { group: string; items: FaqItem[] }[]; pages: Record<string, FaqItem[]> }

export const HOME_FAQ: FaqItem[] = B.home
export const FAQ_GROUPS = B.groups
export const PAGE_FAQ: Record<string, FaqItem[]> = B.pages
export const getPageFaq = (path: string): FaqItem[] => B.pages[path] || []
