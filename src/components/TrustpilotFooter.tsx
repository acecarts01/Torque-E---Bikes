'use client'

import { Star, ShieldCheck } from 'lucide-react'

// Trustpilot Green Star Component
const TrustpilotStar = () => (
  <div className="w-4 h-4 bg-[#00b67a] flex items-center justify-center rounded-sm">
    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-white fill-white">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  </div>
)

export default function TrustpilotFooter() {
  return (
    <div className="flex flex-col items-center sm:items-start space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white italic">Trustpilot</span>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map(i => <TrustpilotStar key={i} />)}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-[9px] font-bold uppercase tracking-widest text-brand-gray">
          TrustScore <span className="text-white">4.9 | 987+ Reviews</span>
        </p>
      </div>
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#00b67a]/10 border border-[#00b67a]/20 rounded-lg">
        <ShieldCheck className="w-3 h-3 text-[#00b67a]" />
        <span className="text-[8px] font-black uppercase tracking-wider text-[#00b67a]">Verified Performance Partner</span>
      </div>
    </div>
  )
}
