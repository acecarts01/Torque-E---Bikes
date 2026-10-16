'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Nav from '@/src/components/Nav'
import Footer from '@/src/components/Footer'
import AnnouncementBar from '@/src/components/AnnouncementBar'
import SmartImage from '@/src/components/SmartImage'
import { formatCurrency, cn } from '@/src/lib/utils'
import { Zap, Landmark, Truck, Wallet, ShieldCheck, Minus, Plus, Trash2, CheckCircle2, ShoppingCart } from 'lucide-react'
import { SHOP, CONTACT } from '@/src/config/site'
import { useCart, setQty, removeFromCart, clearCart, replaceCart } from '@/src/lib/cart'
import { calcTotals, toCents, gstLabel } from '@/src/lib/pricing'

const METHODS = [
  { id: 'crypto', title: 'Pay with Crypto', note: `Save ${SHOP.cryptoDiscount}% automatically`, icon: Wallet, highlight: true },
  { id: 'bank-transfer', title: 'Bank Transfer', note: 'EFT', icon: Landmark, highlight: false },
  { id: 'payid', title: 'PayID / OSKO', note: 'Instant bank transfer', icon: Zap, highlight: false },
]
const STATES = ['QLD', 'NSW', 'VIC', 'ACT', 'TAS', 'SA', 'WA', 'NT']
const field = 'w-full bg-[#1d2024] border border-white/10 rounded-sm px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-[#ff6a1a] outline-none'
const label = 'block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2'

export default function CheckoutPage() {
  const cart = useCart()
  const [method, setMethod] = useState('bank-transfer')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState<{ ref: string; total: number } | null>(null)

  // Agent-prepared link: /checkout/?items=slug:qty,slug:qty fills the cart once, then the URL is cleaned
  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get('items')
    if (!raw) return
    const items = raw.split(',').slice(0, 20).flatMap(part => {
      const [slug, q] = part.split(':')
      return /^[a-z0-9-]+$/.test(slug || '') ? [{ slug, qty: Math.max(1, parseInt(q || '1', 10) || 1) }] : []
    })
    if (items.length) replaceCart(items)
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  // Only the products in the cart are loaded (from a small API), so the page does not carry the whole catalogue.
  const [catalog, setCatalog] = useState<Record<string, any>>({})
  const [fetchedKey, setFetchedKey] = useState('')
  const slugsKey = cart.map(c => c.slug).sort().join(',')
  useEffect(() => {
    if (!slugsKey) return
    const ctl = new AbortController()
    fetch(`/api/cart-products/?slugs=${encodeURIComponent(slugsKey)}`, { signal: ctl.signal })
      .then(r => (r.ok ? r.json() : []))
      .then((arr: any[]) => { setCatalog(Object.fromEntries(arr.map(p => [p.slug, p]))); setFetchedKey(slugsKey) })
      .catch(() => {})
    return () => ctl.abort()
  }, [slugsKey])
  const loaded = !slugsKey || fetchedKey === slugsKey

  const lines = useMemo(() => cart.flatMap(c => {
    const p = catalog[c.slug]
    return p ? [{ product: { ...p, images: [p.image] }, qty: c.qty }] : []
  }), [cart, catalog])

  const t = calcTotals(lines.map(l => toCents(Number(l.product.price)) * l.qty), method)
  const { subtotal, shipping, cryptoDiscount, gst, total } = t
  const isBelowMinOrder = subtotal < SHOP.minOrder

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (submitting || isBelowMinOrder || !lines.length) return
    setSubmitting(true)
    setError('')
    const f = new FormData(e.currentTarget)
    const g = (k: string) => String(f.get(k) || '')
    try {
      const res = await fetch('/api/forms/order/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: g('name'), email: g('email'), phone: g('phone'), notes: g('notes'), website: g('website'),
          paymentMethod: method,
          address: { street: g('street'), suburb: g('suburb'), state: g('state'), postcode: g('postcode') },
          items: lines.map(l => ({ slug: l.product.slug, qty: l.qty })),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.message || 'Something went wrong. Please try again.')
      clearCart()
      setDone({ ref: data.orderReference, total: data.total })
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#16181b]">
      <AnnouncementBar />
      <Nav />

      <main id="main" className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {done ? (
            <div className="max-w-xl mx-auto text-center space-y-6 py-16">
              <CheckCircle2 className="w-16 h-16 text-[#35c17a] mx-auto" />
              <h1 className="text-3xl font-black italic uppercase tracking-tighter">Order received</h1>
              <p className="text-gray-400 leading-relaxed">
                Thanks. Your order reference is <b className="text-white">{done.ref}</b> for {formatCurrency(done.total)}.
                We have emailed you a confirmation. <b className="text-white">Nothing is charged yet:</b> the Torque Team will email your payment
                details shortly. Please use <b className="text-white">{done.ref}</b> as your payment reference.
              </p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Can&apos;t see the email? Check spam, or contact {CONTACT.email} / {CONTACT.phone}.
              </p>
              <Link href="/shop/" className="inline-block bg-[#ff6a1a] text-[#140800] px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs">Keep shopping</Link>
            </div>
          ) : !loaded && cart.length > 0 && lines.length === 0 ? (
            <p className="text-center text-gray-400 py-24">Loading your order...</p>
          ) : lines.length === 0 ? (
            <div className="max-w-xl mx-auto text-center space-y-6 py-16">
              <ShoppingCart className="w-14 h-14 text-gray-600 mx-auto" />
              <h1 className="text-3xl font-black italic uppercase tracking-tighter">Your order is empty</h1>
              <p className="text-gray-400">Pick a machine or conversion kit and it will appear here.</p>
              <Link href="/shop/" className="inline-block bg-[#ff6a1a] text-[#140800] px-8 py-4 rounded-sm font-black uppercase tracking-widest text-xs">Browse the shop</Link>
            </div>
          ) : (
            <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: summary */}
              <div className="space-y-8">
                <h1 className="text-3xl font-black italic uppercase tracking-tighter">Checkout</h1>

                {isBelowMinOrder && (
                  <div className="p-4 bg-brand-red/10 border border-brand-red/20 rounded-sm flex items-center gap-3">
                    <Zap className="w-5 h-5 text-brand-red shrink-0" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-white">
                      Minimum order value is {formatCurrency(SHOP.minOrder)} AUD (before GST). Current: {formatCurrency(subtotal)}
                    </p>
                  </div>
                )}

                <div className="bg-[#1d2024] p-6 border border-white/5 rounded-sm space-y-4">
                  <h2 className="text-sm font-black uppercase tracking-widest border-b border-white/5 pb-2">Order Summary</h2>
                  {lines.map(({ product, qty }) => (
                    <div key={product.slug} className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0">
                      <div className="relative w-16 h-16 bg-white rounded-sm shrink-0 overflow-hidden">
                        <SmartImage src={product.images[0]} alt={product.name} fill className="object-contain p-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white leading-tight">{product.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{formatCurrency(Number(product.price))} each</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button type="button" aria-label="Decrease quantity" onClick={() => setQty(product.slug, qty - 1)} className="p-1 bg-white/5 rounded-sm hover:bg-white/10"><Minus className="w-3 h-3" /></button>
                          <span className="text-sm font-bold w-6 text-center">{qty}</span>
                          <button type="button" aria-label="Increase quantity" onClick={() => setQty(product.slug, qty + 1)} className="p-1 bg-white/5 rounded-sm hover:bg-white/10"><Plus className="w-3 h-3" /></button>
                          <button type="button" aria-label={`Remove ${product.name}`} onClick={() => removeFromCart(product.slug)} className="p-1 ml-2 text-gray-500 hover:text-brand-red"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </div>
                      <span className="font-bold text-sm">{formatCurrency(Number(product.price) * qty)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm pt-2"><span className="text-gray-400">{t.gstMode === 'exclusive' ? 'Subtotal (ex GST)' : 'Subtotal'}</span><span>{formatCurrency(subtotal)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-gray-400">{shipping === 0 ? 'Shipping' : `Shipping (${SHOP.shippingRate}% of order)`}</span><span className={shipping === 0 ? 'text-green-500 font-bold' : ''}>{shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span></div>
                  {shipping > 0 && (
                    <p className="text-[11px] text-gray-500">Free shipping on orders from {formatCurrency(SHOP.freeShippingThreshold)}. Add {formatCurrency(SHOP.freeShippingThreshold - subtotal)} more to ship free.</p>
                  )}
                  {cryptoDiscount > 0 && (
                    <div className="flex justify-between text-sm text-[#ff6a1a]"><span>Crypto discount ({SHOP.cryptoDiscount}%)</span><span>-{formatCurrency(cryptoDiscount)}</span></div>
                  )}
                  {t.gstMode === 'exclusive' && (
                    <div className="flex justify-between text-sm"><span className="text-gray-400">{gstLabel(t)}</span><span>{formatCurrency(gst)}</span></div>
                  )}
                  <div className="flex justify-between items-center pt-4 border-t-2 border-[#ff6a1a]">
                    <span className="font-black uppercase tracking-widest italic">Total Payable <span className="block text-[9px] not-italic tracking-widest text-gray-500">AUD, incl. GST</span></span>
                    <span className="text-2xl font-black italic tracking-tighter">{formatCurrency(total)}</span>
                  </div>
                  {t.gstMode === 'inclusive' && (
                    <p className="text-xs text-gray-500 text-right">{gstLabel(t)}: {formatCurrency(gst)}</p>
                  )}
                </div>

                <div className="flex items-center gap-2 p-4 bg-white/5 rounded-sm border border-white/5">
                  <Truck className="w-5 h-5 text-gray-500 shrink-0" />
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                    Ships Australia-wide, usually within 24-48 hours of cleared payment.
                  </p>
                </div>

                {lines.some(l => (l.product as any).compliance === 'off-road') && (
                  <p className="text-xs text-[#ffd9a8] bg-[#2a1809] border border-[#6b3d14] rounded-sm p-4 leading-relaxed">
                    <b>Off-road use only.</b> Machines and kits over 250W are for private property use and are not for public roads or paths. Check your state or territory rules.
                  </p>
                )}
              </div>

              {/* Right: details */}
              <div className="space-y-8">
                <h2 className="text-xl font-black italic uppercase tracking-tighter">Your Details</h2>

                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                <div className="space-y-4">
                  <div><label className={label} htmlFor="name">Full name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className={label} htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
                    <div><label className={label} htmlFor="phone">Mobile</label><input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} /></div>
                  </div>
                  <div><label className={label} htmlFor="street">Delivery address</label><input id="street" name="street" required autoComplete="street-address" className={field} /></div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3"><label className={label} htmlFor="suburb">Suburb</label><input id="suburb" name="suburb" required className={field} /></div>
                    <div className="col-span-1"><label className={label} htmlFor="state">State</label>
                      <select id="state" name="state" required defaultValue="" className={field}><option value="" disabled>-</option>{STATES.map(s => <option key={s} value={s}>{s}</option>)}</select>
                    </div>
                    <div className="col-span-2"><label className={label} htmlFor="postcode">Postcode</label><input id="postcode" name="postcode" required inputMode="numeric" pattern="\d{4}" maxLength={4} autoComplete="postal-code" className={field} /></div>
                  </div>
                  <div><label className={label} htmlFor="notes">Notes (optional)</label><textarea id="notes" name="notes" rows={3} className={field} /></div>
                </div>

                <div className="space-y-3">
                  <h3 className={label}>Payment method</h3>
                  {METHODS.map(m => (
                    <button
                      type="button" key={m.id} onClick={() => setMethod(m.id)} aria-pressed={method === m.id}
                      className={cn('w-full flex items-center justify-between p-5 bg-[#1d2024] border-2 rounded-sm text-left transition-all',
                        method === m.id ? 'border-[#ff6a1a]' : 'border-white/5 hover:border-white/20')}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn('w-10 h-10 rounded-sm flex items-center justify-center', m.highlight ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/5 text-white')}><m.icon className="w-5 h-5" /></div>
                        <div>
                          <p className="font-black italic uppercase tracking-tighter text-white">{m.title}</p>
                          <p className={cn('text-[10px] font-bold uppercase tracking-widest', m.highlight ? 'text-[#ff6a1a]' : 'text-gray-500')}>{m.note}</p>
                        </div>
                      </div>
                      {method === m.id && <CheckCircle2 className="w-5 h-5 text-[#ff6a1a]" />}
                    </button>
                  ))}
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                    You pay nothing now. After you place the order we email the payment details for your chosen method, quoting your order reference.
                  </p>
                </div>

                {error && <p role="alert" className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm p-4">{error}</p>}

                <button
                  type="submit" disabled={submitting || isBelowMinOrder}
                  className="w-full bg-[#ff6a1a] text-[#140800] py-5 rounded-sm font-black uppercase tracking-[0.2em] text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Placing order...' : `Place order - ${formatCurrency(total)}`}
                </button>

                <div className="flex items-center gap-3 text-gray-500">
                  <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                    We never ask for card details on this site. Your details are used only to process this order.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
