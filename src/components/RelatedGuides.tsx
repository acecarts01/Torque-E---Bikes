// src/components/RelatedGuides.tsx
import React from 'react'
import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { guideLinks } from '@/src/lib/blog'

export default function RelatedGuides({ path, heading = 'Guides' }: { path: string; heading?: string }) {
  const links = guideLinks(path)
  if (!links.length) return null
  return (
    <section className="mt-20 max-w-4xl mx-auto" aria-labelledby="related-guides">
      <h2 id="related-guides" className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-6 flex items-center gap-3">
        <BookOpen className="w-6 h-6 text-brand-red" /> {heading}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} title={l.title} className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-brand-red transition-colors">
              <span className="font-bold text-white">{l.anchor}</span>
              <span className="mt-1 block text-xs text-brand-gray">{l.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
