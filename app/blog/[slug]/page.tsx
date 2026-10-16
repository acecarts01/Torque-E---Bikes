import React from 'react'
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Zap, ChevronRight } from 'lucide-react'
import { SITE } from '@/src/config/site'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import JsonLd from '@/src/components/JsonLd'
import PageFaq from '@/src/components/PageFaq'
import RichText from '@/src/components/RichText'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'
import { PUBLISHED, isLive } from '@/src/lib/blog'
import { getFullPost } from '@/src/lib/blogFull'

export async function generateStaticParams() {
  return PUBLISHED.map((post) => ({ slug: post.slug }))
}

const slugId = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getFullPost(slug)
  if (!post) return { title: 'Guide not found' }
  const hasImage = fs.existsSync(path.join(process.cwd(), 'public', 'images', post.image.file))
  const base = generatePageMetadata({
    title: post.seoTitle,
    description: post.excerpt,
    path: post.url,
    image: hasImage ? `/images/${post.image.file}` : undefined,
  })
  return { ...base, title: post.seoTitle, description: post.excerpt }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getFullPost(slug)
  if (!post) return notFound()

  const hasImage = fs.existsSync(path.join(process.cwd(), 'public', 'images', post.image.file))
  const related = post.links.to.filter(([u]) => isLive(u))

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-[#140800]">
      <JsonLd
        type="BlogPosting"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: hasImage ? `https://${SITE.domain}/images/${post.image.file}` : undefined,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          author: { '@type': 'Organization', name: SITE.name },
          publisher: { '@type': 'Organization', name: SITE.name },
          mainEntityOfPage: `https://${SITE.domain}${post.url}`,
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        data={[{ name: 'Home', item: '/' }, { name: 'Blog', item: '/blog/' }, { name: post.title, item: post.url }]}
      />

      <Nav />

      <main id="main">
        <section className="relative pt-40 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,57,70,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/blog/" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-brand-red transition-colors mb-8">
              <ArrowLeft className="w-3 h-3" /> Back to the blog
            </Link>

            <div className="max-w-4xl space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-brand-red text-[#140800] text-[10px] font-black uppercase tracking-[0.2em] rounded-full">{post.category}</span>
                <div className="flex items-center gap-4 text-[10px] font-bold text-brand-gray uppercase tracking-widest ml-2">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.updated ? `Updated ${post.updated}` : post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">{post.title}</h1>

              <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-brand-red pl-6">{post.hook}</p>
            </div>
          </div>
        </section>

        {hasImage && (
          <section className="pb-16">
            <div className="container mx-auto px-4">
              <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
                <Image src={`/images/${post.image.file}`} alt={post.image.alt} fill sizes="(min-width: 1024px) 1100px, 100vw" className="object-cover" priority />
              </div>
              {post.image.credit && <p className="mt-2 text-[10px] text-brand-gray">Photo: {post.image.credit}</p>}
            </div>
          </section>
        )}

        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8">
                <article className="max-w-none">
                  {post.sections.length > 3 && (
                    <nav aria-label="In this guide" className="bg-[#16181b] p-6 rounded-3xl border border-white/5 mb-12">
                      <h2 className="text-xl font-black uppercase italic tracking-tighter text-white mb-4">In this guide</h2>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0 m-0">
                        {post.sections.map(s => (
                          <li key={s.h}>
                            <a href={`#${slugId(s.h)}`} className="flex items-center gap-2 text-brand-gray text-sm font-bold bg-white/5 px-4 py-3 rounded-xl border border-white/5 hover:text-white">
                              <ChevronRight className="w-4 h-4 text-brand-red shrink-0" /> {s.h}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  )}

                  <div className="space-y-5 text-lg leading-relaxed text-gray-300">
                    {post.intro.map((t, i) => <p key={i}><RichText text={t} /></p>)}
                  </div>

                  {post.sections.map(s => (
                    <section key={s.h} id={slugId(s.h)} className="mt-14 scroll-mt-32">
                      <h2 className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-5">{s.h}</h2>
                      <div className="space-y-5 text-gray-300 leading-relaxed">
                        {(s.p || []).map((t, i) => <p key={i}><RichText text={t} /></p>)}
                        {s.ul && (
                          <ul className="list-disc pl-6 space-y-2 marker:text-brand-red">
                            {s.ul.map((t, i) => <li key={i}><RichText text={t} /></li>)}
                          </ul>
                        )}
                      </div>
                    </section>
                  ))}
                </article>

                <PageFaq items={post.faq} heading="Frequently asked questions" />
              </div>

              <aside className="lg:col-span-4 space-y-8">
                <div className="p-8 bg-[#16181b] rounded-[2rem] border border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white">Torque E-Bikes</h4>
                      <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Brisbane, Australia</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Guides from the Torque E-Bikes team. Specifications change between models and years, so confirm details with the manufacturer, and ask us on WhatsApp if you want help choosing.
                  </p>
                </div>

                {related.length > 0 && (
                  <div className="p-8 bg-[#16181b] rounded-[2rem] border border-white/5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 italic">Related</h4>
                    <ul className="space-y-3 list-none p-0 m-0">
                      {related.map(([href, label]) => (
                        <li key={href}>
                          <Link href={href} className="group block p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all">
                            <p className="text-[11px] font-black uppercase tracking-wider group-hover:text-brand-red transition-colors m-0">{label}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="p-8 bg-brand-red rounded-[2rem] text-[#140800]">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter mb-3 leading-none">Need a hand choosing?</h4>
                  <p className="text-xs font-bold mb-5 opacity-80">Message the team with your bike and where you ride.</p>
                  <a href="https://wa.me/61480804189" className="inline-block px-5 py-3 bg-white text-brand-red font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-[0.98] transition-transform">
                    WhatsApp 0480 804 189
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
