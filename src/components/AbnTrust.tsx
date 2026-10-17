import { BadgeCheck, ExternalLink } from 'lucide-react'
import { BRAND } from '@/src/config/site'

// Server component: static text only, no client JavaScript.
export default function AbnTrust() {
  return (
    <section className="bg-brand-dark px-4 pb-16" aria-labelledby="abn-trust">
      <div className="container mx-auto">
        <div className="bg-brand-accent border border-white/10 rounded-3xl p-8 md:p-12 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-brand-ok mb-4">
              <BadgeCheck className="w-4 h-4" aria-hidden="true" /> ABN verified
            </p>
            <h2 id="abn-trust" className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none mb-6">
              Check us on the government register before you buy
            </h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              {BRAND.tradingName} is a trading name of <strong className="text-white">{BRAND.entityName}</strong>, an Australian private company
              based in Queensland. Our ABN is <strong className="text-white">{BRAND.abn}</strong> and our ACN is {BRAND.acn}. Our ABN has been active since 1 October 2007.
            </p>
            <p className="text-brand-gray leading-relaxed mb-6">
              You do not have to take our word for it. Every ABN is listed on ABN Lookup, run by the Australian Business Register, and the
              lookup is free and open to anyone.
            </p>
            <a
              href={BRAND.abnLookupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-red text-[#140800] font-black uppercase tracking-widest text-xs px-6 py-4 rounded-sm hover:bg-white transition-colors"
            >
              Verify ABN {BRAND.abn} <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span className="sr-only">(opens ABN Lookup in a new tab)</span>
            </a>
          </div>
          <div className="space-y-6 text-brand-gray leading-relaxed">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">What an ABN is</h3>
              <p>
                An Australian Business Number is a unique 11-digit number issued by the Australian Government to a registered business. ABN Lookup
                shows the legal name of the entity behind it, the type of entity, whether the ABN is active and since when, and the state it is based in.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">Why it helps you when buying online</h3>
              <p>
                A logo and a nice website are easy to copy. A government register entry is not something a seller can edit. If the name and ABN a
                seller shows you do not match the register, or the ABN is cancelled, walk away. With us they match: the register lists{' '}
                <strong className="text-white">{BRAND.entityName.toUpperCase()}</strong>, an active ABN.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">Three quick checks before you pay anyone</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Open ABN Lookup and confirm the name and that the ABN is active.</li>
                <li>Match that name to the seller on the website, the invoice and the account you are paying.</li>
                <li>Ask the seller to confirm anything that does not match. We reply to every question before you order.</li>
              </ol>
              <p className="mt-4 text-sm">
                An ABN shows a business is registered. It is not a guarantee of service on its own, which is why our{' '}
                <a href="/terms/" className="text-brand-red underline underline-offset-2">terms</a>,{' '}
                <a href="/shipping-returns/" className="text-brand-red underline underline-offset-2">shipping and returns</a> and{' '}
                <a href="/privacy/" className="text-brand-red underline underline-offset-2">privacy</a> pages are public too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
