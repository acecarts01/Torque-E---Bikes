import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import JsonLd from '@/src/components/JsonLd'
import PageFaq from '@/src/components/PageFaq'
import RichText from '@/src/components/RichText'
import ConversionKitFinder from '@/src/components/ConversionKitFinder'
import { getFullTool } from '@/src/lib/blogFull'
import { generatePageMetadata } from '@/src/lib/metadata'

const URL_PATH = '/tools/conversion-kit-finder/'

export async function generateMetadata(): Promise<Metadata> {
  const t = getFullTool(URL_PATH)
  if (!t) return { title: 'Conversion Kit Finder' }
  const base = generatePageMetadata({ title: t.seoTitle, description: t.excerpt, path: URL_PATH })
  return { ...base, title: t.seoTitle, description: t.excerpt }
}

export default function Page() {
  const t = getFullTool(URL_PATH)
  if (!t) return notFound()
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-white">
      <AnnouncementBar />
      <Nav />
      <main className="flex-grow pt-32 pb-24">
        <JsonLd type="BreadcrumbList" data={[{ name: 'Home', item: '/' }, { name: 'Tools', item: URL_PATH }, { name: 'Conversion kit finder', item: URL_PATH }]} />
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red mb-4">Free tool</p>
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">{t.title}</h1>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-10">
            {t.intro.map((p, i) => <p key={i}><RichText text={p} /></p>)}
          </div>

          <ConversionKitFinder />

          {t.sections.map(s => (
            <section key={s.h} className="mt-14">
              <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-4">{s.h}</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                {(s.p || []).map((p, i) => <p key={i}><RichText text={p} /></p>)}
              </div>
            </section>
          ))}

          <PageFaq items={t.faq} heading="Conversion kit questions" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
