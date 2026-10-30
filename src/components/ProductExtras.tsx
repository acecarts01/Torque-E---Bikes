// src/components/ProductExtras.tsx
// Server components for product pages: table of contents, cost to the door, and related product, category and brand links.
import React from 'react'
import Link from 'next/link'
import { PRODUCTS } from '@/src/config/products'
import { categoryLink, brandLink, relatedProducts, costToDoor } from '@/src/lib/productLinks'

type Product = (typeof PRODUCTS)[number]
const money = (n: number) => `$${n.toLocaleString('en-AU', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })}`

export function ProductToc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="Table of contents" className="mt-16 max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red mb-3">On this page</p>
      <ol className="list-decimal list-inside grid sm:grid-cols-2 gap-x-8 gap-y-2 text-brand-gray">
        {items.map(i => <li key={i.id}><a href={`#${i.id}`} className="hover:text-white underline underline-offset-4">{i.label}</a></li>)}
      </ol>
    </nav>
  )
}

export function ProductExtras({ product }: { product: Product }) {
  const c = costToDoor(product)
  const cat = categoryLink(product)
  const brand = brandLink(product)
  const related = relatedProducts(product)
  const offRoad = product.compliance === 'off-road'
  const rules = offRoad
    ? { href: 'https://www.qld.gov.au/transport/safety/road-safety/motorcycle-safety/safety-gear', label: 'Queensland Government motorcycle safety gear advice' }
    : { href: 'https://www.qld.gov.au/transport/safety/rules/wheeled-devices/electric-bicycle-rules', label: 'Queensland Government electric bicycle rules' }
  return (
    <>
      <section id="cost-to-your-door" className="mt-20 max-w-4xl mx-auto" aria-labelledby="cost-heading">
        <h2 id="cost-heading" className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-4">Cost to your door</h2>
        <div className="space-y-4 text-lg text-brand-gray leading-relaxed">
          <p>
            The {product.name} is {money(c.price)} AUD. {c.free
              ? `Shipping is free because the order is over ${money(c.freeFrom)}, so you pay ${money(c.total)}.`
              : `Shipping is 10% of the goods price (${money(c.shipping)}), so the total is ${money(c.total)}, and it is free on orders from ${money(c.freeFrom)}.`} Pay with Bitcoin or USDT and 10% comes off goods and shipping, which brings it to {money(c.cryptoTotal)} (a saving of {money(c.cryptoSaving)}). Other payment methods are bank transfer and PayID.
          </p>
          {c.belowMin && <p>The minimum order is {money(c.minOrder)}, so add other items from {cat ? <Link href={cat.href} className="text-brand-red underline underline-offset-4">{cat.anchor}</Link> : 'the shop'} to check out.</p>}
          <p>
            Every order ships Australia-wide from Brisbane with dangerous-goods certified dispatch for lithium batteries. Your consumer rights are explained on the ACCC&apos;s <a href="https://www.accc.gov.au/consumers/buying-products-and-services/warranties" target="_blank" rel="noopener noreferrer" className="text-brand-red underline underline-offset-4">warranties and consumer guarantees page</a>, and the <a href={rules.href} target="_blank" rel="noopener noreferrer" className="text-brand-red underline underline-offset-4">{rules.label}</a> sets out where you can ride.
          </p>
        </div>
      </section>

      <section id="related-products" className="mt-20 max-w-4xl mx-auto" aria-labelledby="related-products-heading">
        <h2 id="related-products-heading" className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-white mb-4">Related products</h2>
        <p className="text-brand-gray mb-6">
          Compare the {product.name} with similar machines{cat ? <> in our <Link href={cat.href} className="text-brand-red underline underline-offset-4">{cat.anchor}</Link> range</> : null}{brand ? <>, or see more from <Link href={brand.href} className="text-brand-red underline underline-offset-4">{brand.anchor}</Link></> : null}.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0">
          {related.map(r => (
            <li key={r.href}>
              <Link href={r.href} className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-brand-red transition-colors">
                <span className="font-bold text-white capitalize">{r.anchor}</span>
                <span className="mt-1 block text-xs text-brand-gray">{r.name} · {money(r.price || 0)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
