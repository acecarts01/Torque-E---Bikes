// src/components/PageFaq.tsx
import React from 'react'
import { ChevronDown } from 'lucide-react'
import JsonLd from '@/src/components/JsonLd'
import type { FaqItem } from '@/src/lib/faq'

export default function PageFaq({ items, heading = 'Frequently asked questions' }: { items: FaqItem[]; heading?: string }) {
  if (!items || !items.length) return null
  return (
    <section className="mt-24 max-w-4xl mx-auto" aria-labelledby="page-faq-heading">
      <JsonLd type="FAQ" data={items.map(i => ({ question: i.q, answer: i.a }))} />
      <h2 id="page-faq-heading" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-8">{heading}</h2>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {items.map((item, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-white marker:hidden [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <ChevronDown className="h-5 w-5 shrink-0 text-brand-red transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-brand-gray leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
