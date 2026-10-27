'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { REPLY, SHOP } from '@/src/config/site'
import { money, parsePaymentDetail, paymentMethodParts } from '@/src/lib/order'
import { toCents } from '@/src/lib/pricing'
import { docTotals, addDays, todayBrisbane, longDate, DOC_LABEL, DOC_PREFIX, INVOICE_DUE_DAYS, QUOTE_VALID_DAYS, STATES, type DocType } from '@/src/lib/quote'
import { generalAfterPayment } from '@/src/lib/instructions'

type Line = { key: number; slug: string; name: string; qty: number; unit: string; instructions: string }
type Hit = { slug: string; name: string; price: number; category: string }

const box = 'bg-[#1d2024] border border-white/10 rounded-sm'
const input = 'w-full bg-[#16181b] border border-white/10 rounded-sm px-3 py-2 text-sm text-white outline-none focus:border-[#ff6a1a]'
const lbl = 'block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1'
const h2 = 'text-xs font-black uppercase tracking-[0.25em] text-[#ff6a1a]'
const get = (url: string) => fetch(url, { cache: 'no-store' }).then(async r => ({ status: r.status, data: await r.json().catch(() => ({})) }))
const post = (url: string, body: unknown) =>
  fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(async r => ({ status: r.status, data: await r.json().catch(() => ({})) }))

let keySeq = 1

export default function InvoiceBuilder() {
  const [auth, setAuth] = useState<'checking' | 'ok' | 'signin'>('checking')
  const [docType, setDocType] = useState<DocType>('quote')
  const [issueDate, setIssueDate] = useState(todayBrisbane())
  const [dueDate, setDueDate] = useState('')
  const [dueTouched, setDueTouched] = useState(false)
  const [client, setClient] = useState({ name: '', email: '', phone: '', business: '', abn: '', street: '', suburb: '', state: '', postcode: '' })
  const [lines, setLines] = useState<Line[]>([])
  const [shipping, setShipping] = useState('')
  const [discount, setDiscount] = useState('')
  const [methodId, setMethodId] = useState<string>(REPLY.paymentMethods[0].id)
  const [payDetails, setPayDetails] = useState('')
  const [payNote, setPayNote] = useState('')
  const [after, setAfter] = useState(generalAfterPayment('{ref}').join('\n'))
  const [notes, setNotes] = useState('')
  const [source, setSource] = useState<{ kind: string; id: string } | null>(null)
  const [loadMsg, setLoadMsg] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; text: string; id?: string } | null>(null)
  const [q, setQ] = useState('')
  const [hits, setHits] = useState<Hit[]>([])
  const searchTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const due = dueTouched && dueDate ? dueDate : addDays(issueDate, docType === 'invoice' ? INVOICE_DUE_DAYS : QUOTE_VALID_DAYS)

  // Sign-in check, then load the draft named in the URL (?quote= from a request email, ?order= from an order, ?doc= to re-issue).
  useEffect(() => {
    (async () => {
      const probe = await get('/api/admin/invoice/?q=')
      if (probe.status === 401) { setAuth('signin'); return }
      setAuth('ok')
      const sp = new URLSearchParams(window.location.search)
      const param = (['quote', 'order', 'doc'] as const).find(k => sp.get(k))
      if (!param) return
      setLoadMsg('Loading...')
      const { data } = await get(`/api/admin/invoice/?${param}=${encodeURIComponent(sp.get(param)!)}`)
      if (!data.ok) { setLoadMsg(data.message || 'Could not load that record.'); return }
      const d = data.draft, a = d.client.address || {}
      setDocType(d.docType)
      setClient({ name: d.client.name || '', email: d.client.email || '', phone: d.client.phone || '', business: d.client.business || '', abn: d.client.abn || '', street: a.street || '', suburb: a.suburb || '', state: a.state || '', postcode: a.postcode || '' })
      setLines(d.items.map((i: any) => ({ key: keySeq++, slug: i.slug, name: i.name, qty: i.qty, unit: String(i.unit), instructions: (i.instructions || []).join('\n') })))
      setMethodId(d.paymentMethodId || REPLY.paymentMethods[0].id)
      setNotes(d.notes || '')
      setSource(d.source)
      setLoadMsg(`Filled in from ${param === 'doc' ? 'document' : param === 'quote' ? 'quote request' : 'order'} ${sp.get(param)}. Check it, add the payment details, then send.`)
    })().catch(() => setAuth('signin'))
  }, [])

  const search = useCallback((text: string) => {
    setQ(text)
    if (searchTimer.current) clearTimeout(searchTimer.current)
    if (text.trim().length < 2) { setHits([]); return }
    searchTimer.current = setTimeout(async () => {
      const { data } = await get(`/api/admin/invoice/?q=${encodeURIComponent(text.trim())}`)
      setHits(data.ok ? data.products : [])
    }, 250)
  }, [])

  // Adding a product asks the server for it so the category-specific instructions come with it.
  async function addProduct(h: Hit) {
    const { data } = await get(`/api/admin/invoice/?product=${encodeURIComponent(h.slug)}`)
    const item = data.ok ? data.item : { slug: h.slug, name: h.name, unit: h.price, instructions: [] }
    setLines(l => [...l, { key: keySeq++, slug: h.slug, name: item.name, qty: 1, unit: String(item.unit), instructions: (item.instructions || []).join('\n') }])
    setQ(''); setHits([])
  }

  const setLine = (key: number, patch: Partial<Line>) => setLines(l => l.map(x => (x.key === key ? { ...x, ...patch } : x)))
  const setC = (k: keyof typeof client) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setClient(c => ({ ...c, [k]: e.target.value }))

  const lineTotals = lines.map(l => (Number(l.unit) >= 0 && l.qty >= 1 ? toCents(Number(l.unit)) * l.qty : 0))
  const totals = useMemo(() => docTotals(lineTotals, methodId, { shipping: shipping === '' ? null : Number(shipping), discount: discount === '' ? null : Number(discount) }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(lineTotals), methodId, shipping, discount])
  const fields = parsePaymentDetail(payDetails)
  const ref = `${DOC_PREFIX[docType]}-XXXXXXXX`
  const parts = paymentMethodParts(methodId, totals.total, ref)

  const problems: string[] = []
  if (!client.name.trim()) problems.push('client name')
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(client.email.trim())) problems.push('a valid client email')
  if (!lines.length) problems.push('at least one line')
  if (lines.some(l => !l.name.trim() || !(l.qty >= 1) || !(Number(l.unit) >= 0) || l.unit === '')) problems.push('a name, quantity and price on every line')
  if (docType === 'invoice' && !fields.length) problems.push('the payment details')

  async function send() {
    setSending(true); setResult(null)
    const { data } = await post('/api/admin/invoice/', {
      docType, issueDate, dueDate: due,
      client: { name: client.name, email: client.email, phone: client.phone, business: client.business, abn: client.abn, address: { street: client.street, suburb: client.suburb, state: client.state, postcode: client.postcode } },
      items: lines.map(l => ({ slug: l.slug, name: l.name, qty: l.qty, unit: Number(l.unit), instructions: l.instructions.split('\n') })),
      shipping: shipping === '' ? '' : Number(shipping), discount: discount === '' ? '' : Number(discount),
      paymentMethodId: methodId, paymentDetails: payDetails, paymentNote: payNote, afterPayment: after.split('\n'), notes, source,
    })
    setSending(false)
    if (data.ok) setResult({ ok: true, id: data.record.id, text: `Sent ${DOC_LABEL[docType].toLowerCase()} ${data.record.id} to ${client.email}.${data.ownerCopy ? ' A copy went to the website mailbox.' : ' The copy to the website mailbox did not send.'}${data.stored ? '' : ' It was not saved to the admin list.'}` })
    else setResult({ ok: false, text: data.message || 'Send failed.' })
  }

  if (auth === 'checking') return <div className="min-h-screen bg-[#16181b] text-gray-400 p-8">Loading...</div>
  if (auth === 'signin') {
    return (
      <main className="min-h-screen bg-[#16181b] flex items-center justify-center p-4">
        <div className={`${box} p-8 w-full max-w-sm space-y-4 text-center`}>
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-white">Torque Admin</h1>
          <p className="text-sm text-gray-400">Sign in to create a quote or invoice.</p>
          <a href={`/admin/`} className="block w-full bg-[#ff6a1a] text-[#140800] py-3 rounded-sm font-black uppercase tracking-widest text-xs">Go to sign in</a>
          <p className="text-xs text-gray-500">After signing in, open this page again from the admin header.</p>
        </div>
      </main>
    )
  }

  const kind = DOC_LABEL[docType]

  return (
    <main className="min-h-screen bg-[#16181b] text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <a href="/admin/" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white">&larr; Back to admin</a>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter mt-1">New quote / invoice</h1>
          </div>
          <div className="flex gap-2" role="group" aria-label="Document type">
            {(['quote', 'invoice'] as const).map(t => (
              <button key={t} type="button" onClick={() => setDocType(t)}
                className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-sm ${docType === t ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}>{DOC_LABEL[t]}</button>
            ))}
          </div>
        </div>

        {loadMsg && <p role="status" className="text-sm text-[#35c17a] bg-[#35c17a]/10 border border-[#35c17a]/30 rounded-sm px-4 py-3">{loadMsg}</p>}

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-6 items-start">
          {/* ---------------- Form ---------------- */}
          <div className="space-y-6">
            <section className={`${box} p-5 space-y-4`}>
              <h2 className={h2}>1. Dates</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div><label className={lbl}>{kind} number</label><div className={`${input} text-gray-400`}>Assigned on send ({DOC_PREFIX[docType]}-...)</div></div>
                <div><label className={lbl} htmlFor="d-issue">Issue date</label><input id="d-issue" type="date" value={issueDate} onChange={e => setIssueDate(e.target.value || todayBrisbane())} className={input} /></div>
                <div><label className={lbl} htmlFor="d-due">{docType === 'invoice' ? 'Payment due' : 'Valid until'}</label><input id="d-due" type="date" value={due} onChange={e => { setDueDate(e.target.value); setDueTouched(true) }} className={input} /></div>
              </div>
            </section>

            <section className={`${box} p-5 space-y-4`}>
              <h2 className={h2}>2. Client details</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className={lbl} htmlFor="c-name">Name</label><input id="c-name" value={client.name} onChange={setC('name')} className={input} autoComplete="off" /></div>
                <div><label className={lbl} htmlFor="c-email">Email</label><input id="c-email" type="email" value={client.email} onChange={setC('email')} className={input} autoComplete="off" /></div>
                <div><label className={lbl} htmlFor="c-phone">Phone</label><input id="c-phone" value={client.phone} onChange={setC('phone')} className={input} autoComplete="off" /></div>
                <div><label className={lbl} htmlFor="c-biz">Business (optional)</label><input id="c-biz" value={client.business} onChange={setC('business')} className={input} autoComplete="off" /></div>
                <div className="sm:col-span-2"><label className={lbl} htmlFor="c-abn">ABN (optional)</label><input id="c-abn" value={client.abn} onChange={setC('abn')} className={input} autoComplete="off" /></div>
                <div className="sm:col-span-2"><label className={lbl} htmlFor="c-street">Street address</label><input id="c-street" value={client.street} onChange={setC('street')} className={input} autoComplete="off" /></div>
                <div className="sm:col-span-2 grid grid-cols-6 gap-4">
                  <div className="col-span-6 sm:col-span-3"><label className={lbl} htmlFor="c-suburb">Suburb</label><input id="c-suburb" value={client.suburb} onChange={setC('suburb')} className={input} autoComplete="off" /></div>
                  <div className="col-span-3 sm:col-span-2"><label className={lbl} htmlFor="c-state">State</label>
                    <select id="c-state" value={client.state} onChange={setC('state')} className={input}><option value="">Select</option>{STATES.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                  <div className="col-span-3 sm:col-span-1"><label className={lbl} htmlFor="c-post">Postcode</label><input id="c-post" value={client.postcode} onChange={setC('postcode')} className={input} maxLength={4} inputMode="numeric" autoComplete="off" /></div>
                </div>
              </div>
            </section>

            <section className={`${box} p-5 space-y-4`}>
              <h2 className={h2}>3. Products</h2>
              {lines.length === 0 && <p className="text-sm text-gray-500">No products yet. Search below to add one.</p>}
              {lines.map((l, n) => (
                <div key={l.key} className="border border-white/10 rounded-sm p-3 space-y-3 bg-[#16181b]">
                  <div className="grid grid-cols-12 gap-3 items-end">
                    <div className="col-span-12 sm:col-span-6"><label className={lbl} htmlFor={`l-n-${l.key}`}>Product / description</label><input id={`l-n-${l.key}`} value={l.name} onChange={e => setLine(l.key, { name: e.target.value })} className={input} /></div>
                    <div className="col-span-4 sm:col-span-2"><label className={lbl} htmlFor={`l-q-${l.key}`}>Qty</label><input id={`l-q-${l.key}`} type="number" min={1} max={500} value={l.qty} onChange={e => setLine(l.key, { qty: Math.max(1, Math.floor(Number(e.target.value) || 1)) })} className={input} /></div>
                    <div className="col-span-5 sm:col-span-3"><label className={lbl} htmlFor={`l-u-${l.key}`}>Unit price (AUD)</label><input id={`l-u-${l.key}`} type="number" min={0} step="0.01" value={l.unit} onChange={e => setLine(l.key, { unit: e.target.value })} className={input} /></div>
                    <div className="col-span-3 sm:col-span-1 text-right pb-2"><button type="button" aria-label={`Remove line ${n + 1}`} onClick={() => setLines(x => x.filter(y => y.key !== l.key))} className="text-gray-500 hover:text-red-400 text-lg leading-none">&times;</button></div>
                  </div>
                  <div>
                    <label className={lbl} htmlFor={`l-i-${l.key}`}>Instructions for this product (one step per line, shown to the client after payment)</label>
                    <textarea id={`l-i-${l.key}`} rows={Math.min(8, Math.max(3, l.instructions.split('\n').length))} value={l.instructions} onChange={e => setLine(l.key, { instructions: e.target.value })} className={`${input} leading-relaxed`} />
                  </div>
                  <p className="text-right text-sm text-gray-300">Line total <b>{money(lineTotals[n] / 100)}</b></p>
                </div>
              ))}
              <div className="relative">
                <label className={lbl} htmlFor="p-search">Add a product from the catalogue</label>
                <input id="p-search" value={q} onChange={e => search(e.target.value)} className={input} placeholder="Type a name or brand, e.g. Sur-Ron" autoComplete="off" />
                {hits.length > 0 && (
                  <ul className="absolute z-20 left-0 right-0 mt-1 bg-[#1d2024] border border-white/15 rounded-sm max-h-72 overflow-auto shadow-2xl">
                    {hits.map(h => (
                      <li key={h.slug}><button type="button" onClick={() => addProduct(h)} className="w-full text-left px-3 py-2 text-sm hover:bg-white/5 flex justify-between gap-4"><span>{h.name}</span><span className="text-gray-400">{money(h.price)}</span></button></li>
                    ))}
                  </ul>
                )}
              </div>
              <button type="button" onClick={() => setLines(l => [...l, { key: keySeq++, slug: '', name: '', qty: 1, unit: '', instructions: '' }])} className="text-xs font-black uppercase tracking-widest text-[#ff6a1a] hover:underline">+ Add a custom line</button>
            </section>

            <section className={`${box} p-5 space-y-4`}>
              <h2 className={h2}>4. Totals</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={lbl} htmlFor="t-ship">Shipping (leave blank for the standard {SHOP.shippingRate}%, free from {money(SHOP.freeShippingThreshold)})</label>
                  <input id="t-ship" type="number" min={0} step="0.01" value={shipping} onChange={e => setShipping(e.target.value)} className={input} placeholder={`Standard: ${money(docTotals(lineTotals, methodId).shipping)}`} />
                </div>
                <div>
                  <label className={lbl} htmlFor="t-disc">Discount (blank = {methodId === 'crypto' ? `${SHOP.cryptoDiscount}% crypto discount` : 'none'})</label>
                  <input id="t-disc" type="number" min={0} step="0.01" value={discount} onChange={e => setDiscount(e.target.value)} className={input} placeholder={`Standard: ${money(docTotals(lineTotals, methodId).discount)}`} />
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p className="flex justify-between text-gray-400"><span>Subtotal</span><span>{money(totals.subtotal)}</span></p>
                <p className="flex justify-between text-gray-400"><span>Shipping</span><span>{totals.shipping ? money(totals.shipping) : 'Free'}</span></p>
                {totals.discount > 0 && <p className="flex justify-between text-gray-400"><span>Discount</span><span>-{money(totals.discount)}</span></p>}
                <p className="flex justify-between font-black text-base border-t border-white/10 pt-2"><span>Total payable (AUD)</span><span>{money(totals.total)}</span></p>
              </div>
            </section>

            <section className={`${box} p-5 space-y-4`}>
              <h2 className={h2}>5. Payment details</h2>
              <div>
                <label className={lbl} htmlFor="pm">Payment method</label>
                <select id="pm" value={methodId} onChange={e => setMethodId(e.target.value)} className={input}>{REPLY.paymentMethods.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}</select>
              </div>
              <div>
                <label className={lbl} htmlFor="pd">Paste the payment details (one per line, “Label: value”){docType === 'quote' ? ' (optional on a quote)' : ''}</label>
                <textarea id="pd" rows={5} value={payDetails} onChange={e => setPayDetails(e.target.value)} className={`${input} font-mono`} placeholder={'Account name: The Torque Team Pty Ltd\nBSB: 000-000\nAccount number: 12345678'} />
              </div>
              <div><label className={lbl} htmlFor="pn">Extra payment note (optional)</label><textarea id="pn" rows={2} value={payNote} onChange={e => setPayNote(e.target.value)} className={input} /></div>
            </section>

            <section className={`${box} p-5 space-y-4`}>
              <h2 className={h2}>6. After payment and notes</h2>
              <div>
                <label className={lbl} htmlFor="af">Steps for the whole order (one per line, <code>{'{ref}'}</code> becomes the {kind.toLowerCase()} number)</label>
                <textarea id="af" rows={6} value={after} onChange={e => setAfter(e.target.value)} className={`${input} leading-relaxed`} />
              </div>
              <div><label className={lbl} htmlFor="nt">Notes to the client (optional)</label><textarea id="nt" rows={3} value={notes} onChange={e => setNotes(e.target.value)} className={input} /></div>
            </section>

            <div className="flex flex-wrap items-center gap-4">
              <button type="button" onClick={send} disabled={sending || problems.length > 0}
                className="bg-[#ff6a1a] text-[#140800] px-8 py-3 rounded-sm font-black uppercase tracking-widest text-xs disabled:opacity-40">
                {sending ? 'Sending...' : `Email the ${kind.toLowerCase()} to the client`}
              </button>
              {problems.length > 0 && <span className="text-xs text-gray-500">Still needed: {problems.join(', ')}.</span>}
              {result && <span role="status" className={`text-sm ${result.ok ? 'text-[#35c17a]' : 'text-red-400'}`}>{result.text}</span>}
            </div>
          </div>

          {/* ---------------- Live preview ---------------- */}
          <aside className="lg:sticky lg:top-4 space-y-2">
            <p className={lbl}>Preview: what the client sees</p>
            <div className="bg-[#F2F4F0] rounded-xl p-3 text-[#1B2320]">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="bg-[#16181b] px-6 py-5">
                  <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#ff6a1a]">{kind}</p>
                  <p className="text-[22px] font-bold text-white leading-tight mt-1">{kind} {ref}</p>
                  <p className="text-xs text-[#9AA39D] mt-1">{money(totals.total)} AUD &middot; {docType === 'invoice' ? 'due' : 'valid until'} {longDate(due)}</p>
                </div>
                <div className="h-[3px] bg-[#ff6a1a]" />
                <div className="p-6 text-sm leading-relaxed space-y-4">
                  <p>Hi {client.name.split(' ')[0] || 'there'},</p>
                  <div className="grid grid-cols-2 gap-px bg-[#E2E5DF] border border-[#E2E5DF]">
                    <div className="bg-[#F6F7F5] p-3"><p className="text-[10px] font-bold tracking-widest text-[#6A746E]">BILLED TO</p><p className="font-bold">{client.name || '-'}</p>{client.business && <p>{client.business}{client.abn ? ` · ABN ${client.abn}` : ''}</p>}{client.street && <p>{client.street}, {client.suburb} {client.state} {client.postcode}</p>}<p className="break-all">{client.email}</p><p>{client.phone}</p></div>
                    <div className="bg-[#F6F7F5] p-3"><p className="text-[10px] font-bold tracking-widest text-[#6A746E]">FROM</p><p className="font-bold">The Torque Team Pty Ltd</p><p>ABN 27 126 064 668</p><p>Brisbane City, QLD 4000</p></div>
                  </div>
                  <div className="border border-[#E2E5DF]">
                    {lines.length === 0 && <p className="p-3 text-xs text-[#9AA39D]">Products appear here.</p>}
                    {lines.map((l, n) => <div key={l.key} className="flex justify-between gap-3 px-3 py-2 border-b border-[#E2E5DF] last:border-0"><span>{l.qty} x {l.name || '...'}</span><span>{money(lineTotals[n] / 100)}</span></div>)}
                  </div>
                  <div className="space-y-1">
                    <p className="flex justify-between text-[#6A746E]"><span>Subtotal</span><span>{money(totals.subtotal)}</span></p>
                    <p className="flex justify-between text-[#6A746E]"><span>Shipping</span><span>{totals.shipping ? money(totals.shipping) : 'Free'}</span></p>
                    {totals.discount > 0 && <p className="flex justify-between text-[#6A746E]"><span>{methodId === 'crypto' ? 'Crypto discount' : 'Discount'}</span><span>-{money(totals.discount)}</span></p>}
                    <p className="flex justify-between font-bold bg-[#FFF4EC] border-t-2 border-[#ff6a1a] px-2 py-2 text-base"><span>Total payable (AUD)</span><span>{money(totals.total)}</span></p>
                  </div>
                  {fields.length > 0 ? (
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#ff6a1a] mb-1">How to pay &middot; {parts.label}</p>
                      <p className="mb-2">{parts.opening}</p>
                      <div className="border border-[#E2E5DF] bg-[#F6F7F5]">
                        {fields.map((f, i) => <div key={i} className="flex gap-3 px-3 py-2 border-b border-[#E2E5DF] last:border-0"><span className="w-2/5 text-[10px] font-bold uppercase tracking-widest text-[#6A746E]">{f.label}</span><span className="font-mono break-all">{f.value}</span></div>)}
                      </div>
                      <p className="mt-2">{parts.closing}</p>
                    </div>
                  ) : <p className="text-[#6A746E]">{docType === 'invoice' ? 'Payment details will follow from the Torque Team.' : 'To go ahead, reply to this email and we will send the payment details.'}</p>}
                  {notes && <p className="whitespace-pre-wrap"><b>Notes:</b> {notes}</p>}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[2px] text-[#ff6a1a] mb-2">After you have paid</p>
                    {after.trim() && <div className="mb-3"><p className="font-bold text-[13px]">For your whole order</p><ol className="list-decimal pl-5 text-[13px] space-y-1">{after.split('\n').filter(s => s.trim()).map((s, i) => <li key={i}>{s.replace(/\{ref\}/g, ref)}</li>)}</ol></div>}
                    {lines.filter(l => l.instructions.trim()).map(l => <div key={l.key} className="mb-3"><p className="font-bold text-[13px]">{l.name}</p><ul className="list-disc pl-5 text-[13px] space-y-1">{l.instructions.split('\n').filter(s => s.trim()).map((s, i) => <li key={i}>{s}</li>)}</ul></div>)}
                  </div>
                </div>
                <div className="bg-[#F9FAFB] px-6 py-3 text-[11px] text-[#9AA39D]">The Torque Team Pty Ltd &middot; ABN 27 126 064 668</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
