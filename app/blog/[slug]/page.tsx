import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Share2, Zap, ShieldCheck, ChevronRight } from 'lucide-react'
import { POSTS, SITE } from '@/src/config/site'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import JsonLd from '@/src/components/JsonLd'
import { Metadata } from 'next'
import { generatePageMetadata } from '@/src/lib/metadata'

// Static params for build-time generation
export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS.find(p => p.slug === slug)
  if (!post) return { title: 'Insight Not Found' }

  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    image: `/images/${post.image}`
  })
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS.find(p => p.slug === slug)

  if (!post) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-white">
      <JsonLd 
        type="BlogPosting" 
        data={{
          headline: post.title,
          description: post.excerpt,
          image: `https://${SITE.domain}/images/${post.image}`,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            "name": SITE.name
          }
        }}
      />
      
      <Nav />

      <main id="main">
        {/* Article Header */}
        <section className="relative pt-40 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(230,57,70,0.1),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <Link 
              href="/blog/" 
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-gray hover:text-brand-red transition-colors mb-8"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Tech Insights
            </Link>
            
            <div className="max-w-4xl space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 bg-brand-red text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-[10px] font-bold text-brand-gray uppercase tracking-widest ml-2">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                {post.title}
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed italic border-l-2 border-brand-red pl-6">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="relative aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl">
              <Image 
                src={`/images/${post.image}`}
                alt={post.title}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <article className="prose prose-invert prose-brand max-w-none">
                  <div className="bg-[#111] p-8 rounded-3xl border border-white/5 space-y-6 mb-12">
                    <h2 className="text-2xl font-black uppercase italic tracking-tighter text-white m-0">In this guide</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                      <li className="flex items-center gap-2 text-brand-gray text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                        <ChevronRight className="w-4 h-4 text-brand-red" /> Technical Requirements
                      </li>
                      <li className="flex items-center gap-2 text-brand-gray text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                        <ChevronRight className="w-4 h-4 text-brand-red" /> Tools & Equipment
                      </li>
                      <li className="flex items-center gap-2 text-brand-gray text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                        <ChevronRight className="w-4 h-4 text-brand-red" /> Step-by-Step Walkthrough
                      </li>
                      <li className="flex items-center gap-2 text-brand-gray text-sm font-bold uppercase tracking-widest bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                        <ChevronRight className="w-4 h-4 text-brand-red" /> Safety Checkpoints
                      </li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed text-gray-300">
                    This is a technical deep-dive into high-performance electric propulsion. At {SITE.name}, we believe in empowering builders with the right knowledge to handle extreme torque safely. 
                    The following documentation outlines the core principles and mechanical considerations for this specific technical area.
                  </p>

                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-12 mb-6">Foundational Principles</h3>
                  <p className="text-gray-400">
                    Before starting any build or maintenance procedure, ensure your workspace is clear and your lithium power sources are isolated. 
                    High-current DC systems require strict adherence to wire gauge standards and terminal security to prevent thermal runaway or electrical arcing.
                  </p>

                  <div className="my-12 p-8 bg-brand-red/10 border border-brand-red/20 rounded-3xl">
                    <div className="flex items-center gap-3 text-brand-red mb-4">
                      <ShieldCheck className="w-6 h-6" />
                      <span className="text-xs font-black uppercase tracking-[0.2em]">Compliance Checkpoint</span>
                    </div>
                    <p className="text-sm text-gray-300 italic m-0">
                      Always verify your build against local state road authority regulations (Transport for NSW, VicRoads, TMR QLD). 
                      Performance kits exceeding 250W are strictly for private property use in Australia.
                    </p>
                  </div>

                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mt-12 mb-6">Technical Execution</h3>
                  <p className="text-gray-400">
                    The mechanical integration of a 2000W+ motor requires specific attention to the reactive force on the dropouts. 
                    Standard mountain bike frames are not designed to withstand high motor torque without secondary reinforcement (Torque Arms).
                  </p>

                  <blockquote className="border-l-4 border-brand-red bg-white/5 p-8 rounded-r-3xl italic text-gray-300">
                    &quot;Torque is the silent killer of standard MTB frames. If you don&apos;t lace your motor with heavy-duty spokes and reinforce the axle mounting points, you are building for failure.&quot;
                  </blockquote>

                  <p className="text-gray-400 mt-8">
                    [Detailed technical content continues based on the article topic...]
                  </p>
                </article>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray">Share this guide:</span>
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/5 rounded-full hover:bg-brand-red transition-colors"><Share2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {post.category.split(' ').map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-brand-gray border border-white/10 px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                {/* Author Card */}
                <div className="p-8 bg-[#111] rounded-[2rem] border border-white/5">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white">Torque Engineering</h4>
                      <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Technical Team Brisbane</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-wider">
                    Our technical team consists of electrical engineers and moto-mechanics dedicated to pushing the limits of electric propulsion in Australia.
                  </p>
                </div>

                {/* Related Products */}
                <div className="p-8 bg-[#111] rounded-[2rem] border border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-white mb-6 italic">Featured Components</h4>
                  <div className="space-y-4">
                    <Link href="/shop/conversion-kits/" className="group block p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all">
                      <span className="text-[8px] font-black uppercase tracking-widest text-brand-red mb-1 block">Best Seller</span>
                      <p className="text-[10px] font-black uppercase tracking-wider group-hover:text-brand-red transition-colors">2000W Motor & Battery Combo</p>
                    </Link>
                    <Link href="/shop/parts/" className="group block p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-brand-red/30 transition-all">
                      <span className="text-[8px] font-black uppercase tracking-widest text-brand-red mb-1 block">Essential</span>
                      <p className="text-[10px] font-black uppercase tracking-wider group-hover:text-brand-red transition-colors">Heavy-Duty Torque Arms</p>
                    </Link>
                  </div>
                </div>

                {/* Newsletter Sidebar */}
                <div className="p-8 bg-brand-red rounded-[2rem] text-white">
                  <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4 leading-none">Don&apos;t Miss a <br />Technical Update</h4>
                  <p className="text-[10px] uppercase font-bold tracking-widest mb-6 opacity-80">Get our latest guides via email.</p>
                  <form className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder:text-white/60 text-[10px] font-bold tracking-widest focus:outline-none"
                    />
                    <button className="w-full py-3 bg-white text-brand-red font-black uppercase tracking-widest text-[10px] rounded-xl hover:scale-[0.98] transition-transform">
                      Join the Network
                    </button>
                  </form>
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
