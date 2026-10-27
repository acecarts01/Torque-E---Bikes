'use client'

import React, { useEffect, useRef, useState } from 'react'
import { FileText, X, Minus, Plus, CheckCircle2 } from 'lucide-react'
import { formatCurrency } from '@/src/lib/utils'
import { STATES } from '@/src/lib/quote'

type Props = { slug: string; name: string; price: number }

const field = 'w-full bg-brand-dark border border-white/10 p-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-red transition-colors rounded-sm'
const lbl = 'block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5 ml-1'

/** "Request a quote / invoice" button and form on every product page. Sends to /api/forms/quote/, which prices the product from the catalogue. */
export default function QuoteRequest({ slug, name, price }: Props) {
  const [open, setOpen] = useState(false)
  const [docType, setDocType] = useState<'quote' | 'invoice'>('quote')
  const [qty, setQty] = useState(1)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState<{ ref: string; type: string } | null>(null)
  const firstField = useRef<HTMLInputElement>(null)
  const opener = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    setTimeout(() => firstField.current?.focus(), 50)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  function close() { setOpen(false); opener.current?.focus() }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true); setError('')
    const f = new FormData(e.currentTarget)
    const v = (k: string) => String(f.get(k) || '')
    try {
      const res = await fetch('/api/forms/quote/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          docType, items: [{ slug, qty }], name: v('name'), email: v('email'), phone: v('phone'), business: v('business'), abn: v('abn'),
          address: { street: v('street'), suburb: v('suburb'), state: v('state'), postcode: v('postcode') }, notes: v('notes'), website: v('website'),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.message || 'Something went wrong. Please try again.')
      setDone({ ref: data.reference, type: docType })
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <button
        ref={opener}
        type="button"
        onClick={() => { setOpen(true); setDone(null); setError('') }}
        className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-brand-red/40 bg-brand-red/5 text-[11px] font-black uppercase tracking-[0.2em] text-white hover:bg-brand-red/10 hover:border-brand-red transition-all"
      >
        <FileText className="w-4 h-4 text-brand-red" />
        Request a Quote / Invoice
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="quote-title">
          <div className="fixed inset-0 bg-black/80" onClick={close} aria-hidden="true" />
          <div className="relative w-full max-w-2xl bg-[#1d2024] border border-white/10 rounded-sm shadow-2xl my-auto">
            <button type="button" onClick={close} aria-label="Close" className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>

            {done ? (
              <div className="text-center px-6 py-14 space-y-5">
                <div className="bg-brand-red/20 w-16 h-16 flex items-center justify-center rounded-full mx-auto"><CheckCircle2 className="w-8 h-8 text-brand-red" /></div>
                <h2 id="quote-title" className="text-2xl font-black italic uppercase tracking-tight text-white">Request received</h2>
                <p className="text-gray-400 text-sm max-w-md mx-auto">
                  Your {done.type} request is with the Torque Team. We will email your {done.type}, with the payment details and what happens next, usually within one business day. A confirmation is on its way to your inbox.
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Reference <span className="text-brand-red">{done.ref}</span></p>
                <button type="button" onClick={close} className="text-brand-red uppercase text-[10px] font-bold tracking-widest hover:underline">Close</button>
              </div>
            ) : (
              <form onSubmit={submit} className="p-5 sm:p-8 space-y-5">
                <div className="space-y-1 pr-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">Torque E-Bikes</p>
                  <h2 id="quote-title" className="text-2xl font-black italic uppercase tracking-tight text-white">Request a quote or invoice</h2>
                  <p className="text-xs text-gray-400">We email it to you with the payment details and the steps to follow after you pay. Nothing is charged now.</p>
                </div>

                <div className="bg-brand-dark border border-white/10 rounded-sm p-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Product</p>
                    <p className="text-sm font-bold text-white">{name}</p>
                    <p className="text-xs text-gray-400">{formatCurrency(price)} each</p>
                  </div>
                  <div className="flex items-center gap-3" role="group" aria-label="Quantity">
                    <button type="button" aria-label="Decrease quantity" onClick={() => setQty(q => Math.max(1, q - 1))} className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-brand-red"><Minus className="w-4 h-4" /></button>
                    <span className="w-8 text-center font-black text-white" aria-live="polite">{qty}</span>
                    <button type="button" aria-label="Increase quantity" onClick={() => setQty(q => Math.min(50, q + 1))} className="w-9 h-9 border border-white/10 rounded-sm flex items-center justify-center text-white hover:border-brand-red"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>

                <fieldset className="grid grid-cols-2 gap-2">
                  <legend className="sr-only">Document type</legend>
                  {(['quote', 'invoice'] as const).map(t => (
                    <label key={t} className={`cursor-pointer text-center py-3 rounded-sm border text-[11px] font-black uppercase tracking-widest transition-colors ${docType === t ? 'bg-brand-red text-[#140800] border-brand-red' : 'bg-brand-dark text-gray-400 border-white/10 hover:border-white/30'}`}>
                      <input type="radio" name="docType" value={t} checked={docType === t} onChange={() => setDocType(t)} className="sr-only" />
                      {t === 'quote' ? 'Quote' : 'Invoice'}
                    </label>
                  ))}
                </fieldset>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={lbl} htmlFor="q-name">Full name</label><input ref={firstField} id="q-name" name="name" required autoComplete="name" className={field} placeholder="John Doe" /></div>
                  <div><label className={lbl} htmlFor="q-email">Email address</label><input id="q-email" name="email" type="email" required autoComplete="email" className={field} placeholder="john@example.com" /></div>
                  <div><label className={lbl} htmlFor="q-phone">Mobile / phone</label><input id="q-phone" name="phone" type="tel" required minLength={6} autoComplete="tel" className={field} placeholder="0400 000 000" /></div>
                  <div><label className={lbl} htmlFor="q-business">Business name (optional)</label><input id="q-business" name="business" autoComplete="organization" className={field} /></div>
                  <div className="sm:col-span-2"><label className={lbl} htmlFor="q-abn">ABN (optional, for a business invoice)</label><input id="q-abn" name="abn" inputMode="numeric" className={field} /></div>
                </div>

                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Delivery address</p>
                  <div><label className={lbl} htmlFor="q-street">Street address</label><input id="q-street" name="street" required autoComplete="address-line1" className={field} /></div>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3"><label className={lbl} htmlFor="q-suburb">Suburb</label><input id="q-suburb" name="suburb" required autoComplete="address-level2" className={field} /></div>
                    <div className="col-span-3 sm:col-span-2"><label className={lbl} htmlFor="q-state">State</label>
                      <select id="q-state" name="state" required defaultValue="" autoComplete="address-level1" className={field}>
                        <option value="" disabled>Select</option>
                        {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="col-span-3 sm:col-span-1"><label className={lbl} htmlFor="q-post">Postcode</label><input id="q-post" name="postcode" required pattern="\d{4}" inputMode="numeric" maxLength={4} autoComplete="postal-code" className={field} /></div>
                  </div>
                </div>

                <div><label className={lbl} htmlFor="q-notes">Notes (optional)</label><textarea id="q-notes" name="notes" rows={3} className={`${field} resize-none`} placeholder="Anything we should know, such as a size, colour or delivery question." /></div>

                <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                {error && <p role="alert" className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-sm p-3">{error}</p>}

                <button disabled={busy} className="w-full bg-brand-red text-[#140800] py-4 font-black uppercase tracking-[0.2em] text-xs rounded-sm hover:brightness-110 transition-all disabled:opacity-50">
                  {busy ? 'Sending...' : `Request ${docType === 'quote' ? 'my quote' : 'my invoice'}`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
