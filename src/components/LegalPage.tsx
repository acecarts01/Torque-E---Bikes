// src/components/LegalPage.tsx
import React from 'react'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import { BRAND, CONTACT, SITE } from '@/src/config/site'
import JsonLd from '@/src/components/JsonLd'

export type LegalSection = { heading: string; body: string[] }

export default function LegalPage({ title, updated, intro, sections, path }: { title: string; updated: string; intro: string; sections: LegalSection[]; path: string }) {
  return (
    <div className="min-h-screen bg-[#16181b] text-white">
      <Nav />
      <main id="main" className="container mx-auto px-4 pt-32 pb-24 max-w-3xl">
        <JsonLd type="Breadcrumb" data={[{ name: 'Home', item: '/' }, { name: title, item: path }]} />
        <JsonLd type="WebPage" data={{ name: title, url: `https://${SITE.domain}${path}`, description: intro, inLanguage: 'en-AU', isPartOf: { '@type': 'WebSite', name: SITE.name, url: `https://${SITE.domain}/` } }} />
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">{title}</h1>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-8">Last updated {updated}</p>
        <p className="text-gray-300 leading-relaxed mb-10">{intro}</p>
        <div className="space-y-10">
          {sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="text-lg font-black italic uppercase tracking-tight text-[#ff6a1a] mb-3">{i + 1}. {s.heading}</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed text-sm">
                {s.body.map((p, k) => <p key={k}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-gray-400 leading-relaxed">
          <p className="font-bold text-white">{BRAND.tradingName}</p>
          <p>A trading name of {BRAND.entityName}</p>
          <p>ABN {BRAND.abn} &middot; ACN {BRAND.acn}</p>
          <p>{CONTACT.address}</p>
          <p>{CONTACT.email} &middot; {CONTACT.phone}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
