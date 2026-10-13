'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { MapPin, Quote, ShieldCheck, Zap } from 'lucide-react'
import { REVIEWS } from '@/src/config/site'
import { cn } from '@/src/lib/utils'

// Trustpilot Green Star Component
const TrustpilotStar = () => (
  <div className="w-5 h-5 bg-[#00b67a] flex items-center justify-center rounded-sm">
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-white fill-white">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  </div>
)

export default function ReviewSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00b67a]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Summary Column */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00b67a]/10 border border-[#00b67a]/20 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00b67a]" />
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#00b67a]">Verified Trust</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-white">
                RIDER <span className="text-[#00b67a]">INTEL.</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => <TrustpilotStar key={i} />)}
                </div>
                <span className="text-xl font-black italic text-white tracking-tighter">Excellent</span>
              </div>
              <p className="text-brand-gray font-medium leading-relaxed uppercase tracking-wider text-xs max-w-sm">
                Join 987+ Australian riders who have upgraded to high-voltage systems. Real feedback from the trails.
              </p>
              <div className="flex items-center gap-3">
                 <svg viewBox="0 0 124 32" className="h-6 w-auto fill-white">
                   <path d="M14.7 1.3c0 2.3-1.1 4.5-2.9 6-1.8 1.5-4.2 2.3-6.5 2.3-2.3 0-4.6-.8-6.4-2.3C-1.1 5.8-2 3.6-2 1.3h2c0 1.7.6 3.4 1.8 4.6 1.2 1.2 2.8 1.8 4.6 1.8 1.7 0 3.4-.6 4.6-1.8 1.2-1.2 1.8-2.8 1.8-4.6h2zM21.5 5.5v11.7h-2.1V5.5h2.1zm8.3 0c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5v5.3h-2.1v-5.3c0-1.2-.5-2.3-1.4-3.1-.9-.8-2-1.3-3.2-1.3-1.2 0-2.3.5-3.2 1.3-.9.8-1.4 1.9-1.4 3.1v5.3h-2.1v-11.7h2.1v1.6c.6-.6 1.4-1.1 2.2-1.5.8-.3 1.8-.5 2.8-.5zm13.1 0c2.3 0 4.2 1.8 4.2 4.1v7.6h-2.1v-7.6c0-1.1-.9-2-2.1-2-1.2 0-2.1.9-2.1 2v7.6h-2.1v-11.7h2.1v1.6c.5-.5 1.1-.9 1.8-1.2.8-.3 1.5-.4 2.3-.4zm12.3 0c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5v5.3h-2.1v-5.3c0-1.2-.5-2.3-1.4-3.1-.9-.8-2-1.3-3.2-1.3-1.2 0-2.3.5-3.2 1.3-.9.8-1.4 1.9-1.4 3.1v5.3h-2.1v-11.7h2.1v1.6c.6-.6 1.4-1.1 2.2-1.5.8-.3 1.8-.5 2.8-.5zm14.3-4.2V1.3l2.1-.1v15.9h-2.1V15.5c-.6.6-1.4 1.1-2.2 1.5-.8.3-1.8.5-2.8.5-3.5 0-6.3-2.8-6.3-6.2 0-3.4 2.8-6.2 6.3-6.2 1 0 1.9.2 2.8.5.8.3 1.6.8 2.2 1.4zm-4.3 10.4c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1-4.1 1.8-4.1 4.1 1.8 4.1 4.1 4.1zm17.6-6.2c3.5 0 6.3 2.8 6.3 6.2s-2.8 6.2-6.3 6.2-6.3-2.8-6.3-6.2 2.8-6.2 6.3-6.2zm0 10.4c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1-4.1 1.8-4.1 4.1 1.8 4.1 4.1 4.1zm11.2-10.4c2.3 0 4.1 1.8 4.1 4.1v7.6h-2.1v-7.6c0-1.1-.9-2-2.1-2-1.2 0-2.1.9-2.1 2v7.6h-2.1v-11.7h2.1v1.6c.5-.5 1.1-.9 1.8-1.2.8-.3 1.5-.4 2.3-.4zm12.3 0c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5v5.3h-2.1v-5.3c0-1.2-.5-2.3-1.4-3.1-.9-.8-2-1.3-3.2-1.3-1.2 0-2.3.5-3.2 1.3-.9.8-1.4 1.9-1.4 3.1v5.3h-2.1v-11.7h2.1v1.6c.6-.6 1.4-1.1 2.2-1.5.8-.3 1.8-.5 2.8-.5z" />
                 </svg>
                 <div className="h-4 w-[1px] bg-white/20" />
                 <div className="text-[9px] font-black uppercase tracking-widest text-brand-gray">987+ Reviews</div>
              </div>
            </div>
          </div>

          {/* Slider Column */}
          <div className="w-full lg:w-2/3 relative h-[360px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full glass-card p-10 lg:p-14 rounded-[2.5rem] border border-white/5 shadow-2xl relative group overflow-hidden bg-brand-accent/10">
                  <div className="relative space-y-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map(i => <TrustpilotStar key={i} />)}
                        <span className="ml-3 text-[11px] font-black uppercase tracking-tighter text-white italic">Excellent</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg viewBox="0 0 124 32" className="h-4 w-auto fill-white opacity-60">
                          <path d="M14.7 1.3c0 2.3-1.1 4.5-2.9 6-1.8 1.5-4.2 2.3-6.5 2.3-2.3 0-4.6-.8-6.4-2.3C-1.1 5.8-2 3.6-2 1.3h2c0 1.7.6 3.4 1.8 4.6 1.2 1.2 2.8 1.8 4.6 1.8 1.7 0 3.4-.6 4.6-1.8 1.2-1.2 1.8-2.8 1.8-4.6h2zM21.5 5.5v11.7h-2.1V5.5h2.1zm8.3 0c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5v5.3h-2.1v-5.3c0-1.2-.5-2.3-1.4-3.1-.9-.8-2-1.3-3.2-1.3-1.2 0-2.3.5-3.2 1.3-.9.8-1.4 1.9-1.4 3.1v5.3h-2.1v-11.7h2.1v1.6c.6-.6 1.4-1.1 2.2-1.5.8-.3 1.8-.5 2.8-.5zm13.1 0c2.3 0 4.2 1.8 4.2 4.1v7.6h-2.1v-7.6c0-1.1-.9-2-2.1-2-1.2 0-2.1.9-2.1 2v7.6h-2.1v-11.7h2.1v1.6c.5-.5 1.1-.9 1.8-1.2.8-.3 1.5-.4 2.3-.4zm12.3 0c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5v5.3h-2.1v-5.3c0-1.2-.5-2.3-1.4-3.1-.9-.8-2-1.3-3.2-1.3-1.2 0-2.3.5-3.2 1.3-.9.8-1.4 1.9-1.4 3.1v5.3h-2.1v-11.7h2.1v1.6c.6-.6 1.4-1.1 2.2-1.5.8-.3 1.8-.5 2.8-.5zm14.3-4.2V1.3l2.1-.1v15.9h-2.1V15.5c-.6.6-1.4 1.1-2.2 1.5-.8.3-1.8.5-2.8.5-3.5 0-6.3-2.8-6.3-6.2 0-3.4 2.8-6.2 6.3-6.2 1 0 1.9.2 2.8.5.8.3 1.6.8 2.2 1.4zm-4.3 10.4c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1-4.1 1.8-4.1 4.1 1.8 4.1 4.1 4.1zm17.6-6.2c3.5 0 6.3 2.8 6.3 6.2s-2.8 6.2-6.3 6.2-6.3-2.8-6.3-6.2 2.8-6.2 6.3-6.2zm0 10.4c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1-4.1 1.8-4.1 4.1 1.8 4.1 4.1 4.1zm11.2-10.4c2.3 0 4.1 1.8 4.1 4.1v7.6h-2.1v-7.6c0-1.1-.9-2-2.1-2-1.2 0-2.1.9-2.1 2v7.6h-2.1v-11.7h2.1v1.6c.5-.5 1.1-.9 1.8-1.2.8-.3 1.5-.4 2.3-.4zm12.3 0c1.7 0 3.3.7 4.5 1.9 1.2 1.2 1.8 2.8 1.8 4.5v5.3h-2.1v-5.3c0-1.2-.5-2.3-1.4-3.1-.9-.8-2-1.3-3.2-1.3-1.2 0-2.3.5-3.2 1.3-.9.8-1.4 1.9-1.4 3.1v5.3h-2.1v-11.7h2.1v1.6c.6-.6 1.4-1.1 2.2-1.5.8-.3 1.8-.5 2.8-.5z" />
                        </svg>
                        <div className="h-3 w-[1px] bg-white/20" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-brand-gray">{REVIEWS[index].date}</span>
                      </div>
                    </div>

                    <p className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white leading-tight italic">
                      &quot;{REVIEWS[index].text}&quot;
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#00b67a] rounded-2xl flex items-center justify-center font-black italic text-xl shadow-lg shadow-[#00b67a]/10 text-white">
                          {REVIEWS[index].author[0]}
                        </div>
                        <div>
                          <p className="text-sm font-black uppercase italic tracking-tighter text-white">{REVIEWS[index].author}</p>
                          <div className="flex items-center gap-2 text-[9px] text-brand-gray font-bold uppercase tracking-widest">
                            <MapPin className="w-3.5 h-3.5 text-[#00b67a]" />
                            <span>{REVIEWS[index].location}, AU</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden sm:flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#00b67a] animate-pulse" />
                         <span className="text-[9px] font-black uppercase tracking-widest text-[#00b67a] italic">Verified Rider</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Dots */}
            <div className="absolute -bottom-8 left-0 flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    index === i ? "w-12 bg-[#00b67a]" : "w-4 bg-white/10"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
