import React from 'react'
import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react'
import { SITE, CONTACT, BRAND, CATEGORIES, SHOP } from '@/src/config/site'
import TrustpilotFooter from './TrustpilotFooter'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0e0f11] border-t border-white/5 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-[#ff6a1a]" />
              <span className="text-xl font-black italic uppercase tracking-tighter italic">TORQUE <span className="text-[#ff6a1a]">E</span>-BIKES</span>
            </Link>
            <p className="text-gray-400 text-[10px] leading-relaxed max-w-xs uppercase tracking-wider">
              {BRAND.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-white italic">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop/" className="text-gray-400 hover:text-[#ff6a1a] text-[10px] transition-colors uppercase font-bold tracking-wider">Shop All</Link></li>
              <li><Link href="/wholesale/" className="text-gray-400 hover:text-[#ff6a1a] text-[10px] transition-colors uppercase font-bold tracking-wider">Wholesale</Link></li>
              <li><Link href="/blog/" className="text-gray-400 hover:text-[#ff6a1a] text-[10px] transition-colors uppercase font-bold tracking-wider">Education</Link></li>
              <li><Link href="/about/" className="text-gray-400 hover:text-[#ff6a1a] text-[10px] transition-colors uppercase font-bold tracking-wider">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-white italic">Categories</h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 4).map(cat => (
                <li key={cat.slug}><Link href={`/shop/${cat.slug}/`} className="text-gray-400 hover:text-[#ff6a1a] text-[10px] transition-colors uppercase font-bold tracking-wider">{cat.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-white italic">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                <Phone className="w-3 h-3 text-[#ff6a1a]" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                <Mail className="w-3 h-3 text-[#ff6a1a]" />
                <span className="lowercase">{CONTACT.email}</span>
              </li>
              <li className="pt-2">
                <TrustpilotFooter />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-6">
          <div className="text-center md:text-left">
            <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
              &copy; {currentYear} {BRAND.tradingName}, a trading name of {BRAND.entityName}.
              <span className="mx-2 text-white/20">|</span>
              ABN {BRAND.abn} <span className="mx-2 text-white/20">|</span> ACN {BRAND.acn}
            </p>
            <p className="text-[8px] text-gray-500 mt-1 uppercase tracking-[0.2em]">
              <Link href="/terms/" className="hover:text-[#ff6a1a]">Terms &amp; Conditions</Link>
              <span className="mx-2 text-white/20">|</span>
              <Link href="/privacy/" className="hover:text-[#ff6a1a]">Privacy Policy</Link>
              <span className="mx-2 text-white/20">|</span>
              <Link href="/shipping-returns/" className="hover:text-[#ff6a1a]">Shipping &amp; Returns</Link>
            </p>
            <p className="text-[8px] text-gray-600 mt-1 uppercase tracking-[0.2em]">Off-road and private property use only unless specified 250W EPAC compliant.</p>
          </div>
          
          <div className="flex gap-3">
            <div className="bg-white/5 px-2 py-1 rounded text-[8px] font-black text-gray-400 uppercase tracking-widest border border-white/5">Bank Transfer</div>
            <div className="bg-white/5 px-2 py-1 rounded text-[8px] font-black text-gray-400 uppercase tracking-widest border border-white/5">PayID</div>
            <div className="bg-white/5 px-2 py-1 rounded text-[8px] font-black text-brand-red uppercase tracking-widest border border-brand-red/20">Crypto ({SHOP.cryptoDiscount}% OFF)</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
