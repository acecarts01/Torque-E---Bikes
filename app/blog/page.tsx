'use client'

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import BlogCardImage from '@/src/components/BlogCardImage'
import { Calendar, Clock, ArrowRight, Zap } from 'lucide-react'
import { POSTS, SITE } from '@/src/config/site'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import JsonLd from '@/src/components/JsonLd'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = React.useState('All')
  const categories = ['All', ...Array.from(new Set(POSTS.map(post => post.category)))]
  
  const filteredPosts = activeCategory === 'All' 
    ? POSTS 
    : POSTS.filter(post => post.category === activeCategory)

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-red selection:text-[#140800]">
      <JsonLd 
        type="Blog" 
        data={{
          name: `${SITE.name} Tech Blog`,
          description: 'DIY E-Bike conversion guides, motor maintenance, and lithium battery safety for the Australian market.',
          url: `https://${SITE.domain}/blog/`,
        }}
      />
      
      <Nav />

      <main id="main">
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.05),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl space-y-6"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-red">Technical Education</p>
              <h1 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
                Torque <span className="text-brand-red">Insights</span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Master your build with our deep-dive DIY conversion guides and pro maintenance tips for high-torque electric machines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section with Sidebar */}
        <section className="pb-24 border-t border-white/5 pt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Sidebar */}
              <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
                <div className="space-y-4 sticky top-32">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red px-4">Categories</p>
                  <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-4 lg:pb-0">
                    {categories.map(cat => (
                      <button 
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-2xl transition-all border whitespace-nowrap text-left ${
                          activeCategory === cat 
                            ? 'bg-brand-red border-brand-red text-[#140800] shadow-lg shadow-brand-red/20' 
                            : 'bg-white/5 border-white/5 text-brand-gray hover:text-white hover:bg-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="hidden lg:block p-8 rounded-[2rem] bg-white/5 border border-white/5 space-y-4">
                    <Zap className="w-8 h-8 text-brand-red" />
                    <h4 className="font-black italic uppercase tracking-tighter text-lg leading-tight">Need Expert Help?</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Our Brisbane technicians can help with motor lacing, BMS programming, and custom harness builds.
                    </p>
                    <Link href="/contact/" className="inline-block text-[10px] font-black uppercase tracking-widest text-brand-red hover:translate-x-1 transition-transform">
                      Contact Shop &rarr;
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Blog Grid */}
              <div className="flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <motion.article 
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group flex flex-col bg-[#16181b] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all duration-500"
                    >
                      <Link href={`/blog/${post.slug}/`} className="relative aspect-[16/10] overflow-hidden">
                        <BlogCardImage src={`/images/${post.image}`} alt={post.title} />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-brand-red text-[#140800] text-[8px] font-black uppercase tracking-[0.2em] rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </Link>

                      <div className="p-8 flex flex-col flex-grow space-y-4">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-brand-gray uppercase tracking-widest">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                        </div>
                        
                        <h2 className="text-xl font-black italic uppercase tracking-tighter group-hover:text-brand-red transition-colors line-clamp-2">
                          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                        </h2>
                        
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="pt-4 mt-auto">
                          <Link 
                            href={`/blog/${post.slug}/`}
                            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-red group-hover:translate-x-2 transition-transform"
                          >
                            Read Full Guide <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                  {filteredPosts.length === 0 && (
                    <div className="col-span-full py-20 text-center space-y-4">
                      <p className="text-gray-400 font-bold uppercase tracking-widest">No articles found in this category.</p>
                      <button 
                        onClick={() => setActiveCategory('All')}
                        className="text-brand-red font-black uppercase tracking-widest text-xs underline decoration-2 underline-offset-4"
                      >
                        View all articles
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="relative p-12 rounded-[3rem] bg-gradient-to-br from-brand-red to-red-900 overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Zap className="w-64 h-64 text-white fill-white" />
              </div>
              
              <div className="relative z-10 max-w-2xl space-y-6">
                <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-none text-white">
                  Get Technical <br />Updates First
                </h3>
                <p className="text-white/80 text-lg">
                  Join 2,500+ Australian builders. Get notified about new conversion kits, motor tuning software, and lithium safety updates.
                </p>
                <form className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="ENTER YOUR EMAIL" 
                    className="flex-grow px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all font-bold tracking-widest text-xs"
                    required
                  />
                  <button className="px-10 py-4 bg-white text-[#b43c00] font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-[0.98] transition-transform shadow-xl">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
