'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { REPLY, SITE, SHOP } from '@/src/config/site'
import { money, parsePaymentDetail, paymentMethodParts } from '@/src/lib/order'

type Rec = any

const STATUSES = ['new', 'awaiting-payment', 'paid', 'shipped', 'completed', 'cancelled']
const when = (iso: string) => new Date(iso).toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short' })
const box = 'bg-[#1d2024] border border-white/10 rounded-sm'
const input = 'w-full bg-[#16181b] border border-white/10 rounded-sm px-3 py-2 text-sm text-white outline-none focus:border-[#ff6a1a]'
const lbl = 'block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1'
const post = (url: string, body: unknown) =>
  fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }).then(async r => ({ status: r.status, data: await r.json().catch(() => ({})) }))

export default function AdminPage() {
  const [state, setState] = useState<'loading' | 'login' | 'ready'>('loading')
  const [passcode, setPasscode] = useState('')
  const [msg, setMsg] = useState('')
  const [tab, setTab] = useState<'orders' | 'enquiries' | 'quotes' | 'documents'>('orders')
  const [orders, setOrders] = useState<Rec[]>([])
  const [enquiries, setEnquiries] = useState<Rec[]>([])
  const [quotes, setQuotes] = useState<Rec[]>([])
  const [documents, setDocuments] = useState<Rec[]>([])
  const [open, setOpen] = useState<string | null>(null)
  const deepLinked = useRef(false)

  const fetchData = useCallback(async () => {
    const res = await fetch('/api/admin/data/', { cache: 'no-store' })
    const data = res.status === 401 ? null : await res.json().catch(() => ({}))
    return { unauthorised: res.status === 401, data }
  }, [])

  const apply = useCallback((r: { unauthorised: boolean; data: any }) => {
    if (r.unauthorised) { setState('login'); return }
    if (!r.data?.ok) { setMsg(r.data?.message || 'Could not load data.'); setState('ready'); return }
    setOrders(r.data.orders); setEnquiries(r.data.enquiries); setQuotes(r.data.quotes || []); setDocuments(r.data.documents || []); setMsg(''); setState('ready')
    // Deep link from the notification emails: /admin/?order=TQR-... or /admin/?enquiry=TQE-...
    if (!deepLinked.current) {
      deepLinked.current = true
      const sp = new URLSearchParams(window.location.search)
      const o = sp.get('order'), q = sp.get('enquiry'), qr = sp.get('quote')
      if (o) { setTab('orders'); setOpen(o) } else if (q) { setTab('enquiries'); setOpen(q) } else if (qr) { setTab('quotes'); setOpen(qr) }
    }
  }, [])

  const load = useCallback(() => fetchData().then(apply), [fetchData, apply])

  useEffect(() => {
    fetchData().then(apply).catch(() => { setMsg('Could not reach the server.'); setState('login') })
  }, [fetchData, apply])

  useEffect(() => {
    if (open) document.getElementById(`rec-${open}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [open, state])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setMsg('')
    const { data } = await post('/api/admin/login/', { passcode })
    if (!data.ok) { setMsg(data.message || 'Login failed.'); return }
    setPasscode('')
    await load()
  }

  async function logout() {
    await fetch('/api/admin/logout/', { method: 'POST' })
    setOrders([]); setEnquiries([]); setQuotes([]); setDocuments([]); setState('login')
  }

  const replace = (kind: 'order' | 'enquiry' | 'quote', rec: Rec) => {
    const fn = (list: Rec[]) => list.map(r => (r.id === rec.id ? rec : r))
    if (kind === 'order') setOrders(fn); else if (kind === 'quote') setQuotes(fn); else setEnquiries(fn)
  }

  async function setStatus(kind: 'order' | 'enquiry' | 'quote', id: string, status: string) {
    const { data } = await post('/api/admin/update/', { kind, id, status })
    if (data.ok) replace(kind, data.record); else setMsg(data.message || 'Update failed.')
  }

  if (state === 'loading') return <div className="min-h-screen bg-[#16181b] text-gray-400 p-8">Loading...</div>

  if (state === 'login') {
    return (
      <main className="min-h-screen bg-[#16181b] flex items-center justify-center p-4">
        <form onSubmit={login} className={`${box} p-8 w-full max-w-sm space-y-4`}>
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-white">Torque Admin</h1>
          <label className={lbl} htmlFor="pc">Passcode</label>
          <input id="pc" type="password" autoComplete="current-password" value={passcode} onChange={e => setPasscode(e.target.value)} className={input} autoFocus />
          {msg && <p role="alert" className="text-sm text-red-400">{msg}</p>}
          <button className="w-full bg-[#ff6a1a] text-[#140800] py-3 rounded-sm font-black uppercase tracking-widest text-xs">Sign in</button>
        </form>
      </main>
    )
  }

  const listFor = (t: string) => (t === 'orders' ? orders : t === 'enquiries' ? enquiries : t === 'quotes' ? quotes : documents)
  const rows = listFor(tab)
  const newCount = (list: Rec[]) => list.filter(r => r.status === 'new').length

  return (
    <main className="min-h-screen bg-[#16181b] text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black italic uppercase tracking-tighter">Torque Admin</h1>
          <div className="flex gap-2">
            <a href="/admin/invoice/" className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-[#ff6a1a] text-[#140800] rounded-sm hover:brightness-110">New quote / invoice</a>
            <button onClick={load} className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-white/5 rounded-sm hover:bg-white/10">Refresh</button>
            <button onClick={logout} className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-white/5 rounded-sm hover:bg-white/10">Sign out</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {(['orders', 'enquiries', 'quotes', 'documents'] as const).map(t => {
            const list = listFor(t)
            return (
              <button key={t} onClick={() => { setTab(t); setOpen(null) }}
                className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-sm ${tab === t ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/5 text-gray-400'}`}>
                {t === 'quotes' ? 'quote requests' : t} ({list.length}{newCount(list) ? `, ${newCount(list)} new` : ''})
              </button>
            )
          })}
        </div>

        {msg && <p role="alert" className="text-sm text-red-400">{msg}</p>}
        {rows.length === 0 && !msg && <p className="text-gray-500 text-sm">Nothing here yet.</p>}
        {open && !rows.some(r => r.id === open) && <p className="text-sm text-yellow-400">Could not find {open}. Try Refresh, or check the other tab.</p>}

        <div className="space-y-3">
          {rows.map(r => {
            const kind = tab === 'orders' ? 'order' : tab === 'enquiries' ? 'enquiry' : tab === 'quotes' ? 'quote' : 'document'
            const isOpen = open === r.id
            return (
              <div key={r.id} id={`rec-${r.id}`} className={`${box} ${isOpen ? 'border-[#ff6a1a]/60' : ''}`}>
                <button onClick={() => setOpen(isOpen ? null : r.id)} className="w-full text-left p-4 flex flex-wrap items-center gap-x-6 gap-y-1">
                  <span className="font-black text-[#ff6a1a]">{r.id}</span>
                  <span className="font-bold">{r.name || r.client?.name}</span>
                  {kind === 'order' && <span className="text-gray-300">{money(r.total)}</span>}
                  {kind === 'quote' && <span className="text-gray-300">{money(r.subtotal)} <span className="text-xs text-gray-400">{r.docType === 'invoice' ? 'invoice' : 'quote'} requested</span></span>}
                  {kind === 'document' && <span className="text-gray-300">{money(r.total)} <span className="text-xs text-gray-400">{r.docType}</span></span>}
                  {kind === 'enquiry' && <span className="text-xs text-gray-400">{r.kind === 'wholesale' ? 'Wholesale' : r.type || 'Enquiry'}</span>}
                  <span className="text-xs text-gray-500">{when(r.createdAt)}</span>
                  <span className={`ml-auto text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm ${r.status === 'new' ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/10 text-gray-300'}`}>{r.status}</span>
                </button>
                {isOpen && (kind === 'quote' || kind === 'document'
                  ? <DocDetail kind={kind} r={r} onStatus={setStatus} />
                  : <Detail kind={kind} r={r} onStatus={setStatus} onUpdated={rec => replace(kind, rec)} />)}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

function Detail({ kind, r, onStatus, onUpdated }: { kind: 'order' | 'enquiry'; r: Rec; onStatus: (k: 'order' | 'enquiry', id: string, s: string) => void; onUpdated: (rec: Rec) => void }) {
  const [mode, setMode] = useState<'payment' | 'reply'>(kind === 'order' ? 'payment' : 'reply')
  const [methodId, setMethodId] = useState<string>(r.paymentMethod || REPLY.paymentMethods[0].id)
  const [details, setDetails] = useState('')
  const [note, setNote] = useState('')
  const [subject, setSubject] = useState(kind === 'order' ? `Re: order ${r.id} - Torque E-Bikes` : `Re: your enquiry ${r.id}`)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null)

  const fields = parsePaymentDetail(details)
  const parts = kind === 'order' ? paymentMethodParts(methodId, r.total, r.id) : null
  const canSend = mode === 'payment' ? fields.length > 0 : message.trim().length > 0
  const phoneDigits = String(r.phone || '').replace(/\D/g, '').replace(/^0/, '61')
  const waText = parts
    ? [`*${SITE.name}*`, '', `Hi ${String(r.name).split(' ')[0]}, payment details for order ${r.id}:`, '', `Amount due: ${money(r.total)}`, parts.opening, '', ...fields.map(f => `${f.label}: ${f.value}`), '', parts.closing].join('\n')
    : ''

  async function send() {
    setSending(true); setResult(null)
    const payload = mode === 'payment' ? { kind, id: r.id, type: 'payment', methodId, details, note } : { kind, id: r.id, type: 'reply', subject, message }
    const { data } = await post('/api/admin/reply/', payload)
    setSending(false)
    if (data.ok) {
      setResult({ ok: true, text: `Sent to ${r.email}.` }); setMessage(''); setDetails(''); setNote(''); onUpdated(data.record)
    } else setResult({ ok: false, text: data.message || 'Send failed.' })
  }

  return (
    <div className="border-t border-white/10 p-4 space-y-5 text-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p><span className="text-gray-500">Email:</span> <a className="underline" href={`mailto:${r.email}`}>{r.email}</a></p>
          {r.phone && <p><span className="text-gray-500">Phone:</span> {r.phone}</p>}
          {kind === 'order' && <p><span className="text-gray-500">Deliver to:</span> {r.address.street}, {r.address.suburb} {r.address.state} {r.address.postcode}</p>}
          {kind === 'order' && <p><span className="text-gray-500">Chosen payment:</span> {paymentMethodParts(r.paymentMethod, 0, '').label}</p>}
          {kind === 'enquiry' && r.business_name && <p><span className="text-gray-500">Business:</span> {r.business_name} (ABN/ACN {r.abn_acn})</p>}
          {kind === 'enquiry' && r.type && <p><span className="text-gray-500">Topic:</span> {r.type}</p>}
        </div>
        <div>
          <label className={lbl} htmlFor={`st-${r.id}`}>Status</label>
          <select id={`st-${r.id}`} value={r.status} onChange={e => onStatus(kind, r.id, e.target.value)} className={input}>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {kind === 'order' ? (
        <div className="space-y-1">
          {r.items.map((i: any) => <p key={i.slug} className="flex justify-between"><span>{i.qty} x {i.name}</span><span>{money(i.line)}</span></p>)}
          <p className="flex justify-between text-gray-400"><span>{r.shipping ? `Shipping (${SHOP.shippingRate}% of order)` : 'Shipping'}</span><span>{r.shipping ? money(r.shipping) : 'Free'}</span></p>
          {r.cryptoDiscount > 0 && <p className="flex justify-between text-gray-400"><span>Crypto discount</span><span>-{money(r.cryptoDiscount)}</span></p>}
          <p className="flex justify-between font-black border-t border-white/10 pt-2"><span>Total payable</span><span>{money(r.total)}</span></p>
          {r.notes && <p className="pt-2 text-gray-300"><span className="text-gray-500">Customer notes:</span> {r.notes}</p>}
        </div>
      ) : (
        <p className="whitespace-pre-wrap text-gray-200 bg-[#16181b] rounded-sm p-3">{r.message}</p>
      )}

      {kind === 'order' && r.paymentDetails && r.token && (
        <p>
          <a className="underline text-[#ff6a1a]" target="_blank" rel="noreferrer"
            href={`/order/payment-details/?id=${encodeURIComponent(r.id)}&t=${encodeURIComponent(r.token)}`}>
            Open the customer&apos;s tap-to-copy payment page
          </a>
        </p>
      )}

      {r.replies?.length > 0 && (
        <div className="space-y-2">
          <p className={lbl}>Sent emails</p>
          {r.replies.map((x: any, i: number) => (
            <div key={i} className="bg-[#16181b] rounded-sm p-3"><p className="text-xs text-gray-500">{when(x.at)} - {x.subject}</p><p className="whitespace-pre-wrap">{x.message}</p></div>
          ))}
        </div>
      )}

      <div className="space-y-3 border-t border-white/10 pt-4">
        {kind === 'order' && (
          <div className="flex gap-2">
            {(['payment', 'reply'] as const).map(m => (
              <button key={m} onClick={() => { setMode(m); setResult(null) }}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-sm ${mode === m ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/5 text-gray-400'}`}>
                {m === 'payment' ? 'Send payment details' : 'General reply'}
              </button>
            ))}
          </div>
        )}

        {mode === 'payment' && parts ? (
          <div className="space-y-3">
            <div>
              <label className={lbl} htmlFor={`pm-${r.id}`}>Payment method</label>
              <select id={`pm-${r.id}`} value={methodId} onChange={e => setMethodId(e.target.value)} className={input}>
                {REPLY.paymentMethods.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
              </select>
            </div>
            <div>
              <label className={lbl} htmlFor={`pd-${r.id}`}>Paste the payment details (one per line, “Label: value”)</label>
              <textarea id={`pd-${r.id}`} value={details} onChange={e => setDetails(e.target.value)} rows={5} className={`${input} font-mono`}
                placeholder={'Account name: The Torque Team Pty Ltd\nBSB: 000-000\nAccount number: 12345678\nReference: ' + r.id} />
            </div>
            <div>
              <label className={lbl} htmlFor={`pn-${r.id}`}>Extra note to the customer (optional)</label>
              <textarea id={`pn-${r.id}`} value={note} onChange={e => setNote(e.target.value)} rows={2} className={input} />
            </div>
            <div className="bg-white rounded-sm p-4 text-[#1B2320]">
              <p className="text-[10px] font-bold tracking-widest text-gray-500">PREVIEW: WHAT THE CUSTOMER SEES</p>
              <p className="text-2xl font-bold mt-1">{money(r.total)} <span className="text-xs font-normal text-gray-500">due</span></p>
              <p className="text-sm mt-2">{parts.opening}</p>
              <div className="mt-2 border border-gray-200 bg-gray-50 rounded-sm">
                {fields.length === 0 && <p className="p-3 text-xs text-gray-400">Fields appear here as you type.</p>}
                {fields.map((f, i) => (
                  <div key={i} className="flex gap-3 px-3 py-2 border-b border-gray-200 last:border-0">
                    <span className="w-2/5 text-[10px] font-bold uppercase tracking-widest text-gray-500">{f.label}</span>
                    <span className="font-mono text-sm break-all">{f.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm mt-2">{parts.closing}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className={lbl}>{kind === 'order' ? 'Email the customer' : 'Reply to the customer'}</p>
            <input value={subject} onChange={e => setSubject(e.target.value)} className={input} aria-label="Subject" />
            <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} className={input} placeholder="Write your reply..." aria-label="Message" />
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button onClick={send} disabled={sending || !canSend} className="bg-[#ff6a1a] text-[#140800] px-5 py-2 rounded-sm font-black uppercase tracking-widest text-xs disabled:opacity-50">
            {sending ? 'Sending...' : mode === 'payment' ? 'Email payment details' : 'Send email'}
          </button>
          {mode === 'payment' && r.phone && canSend && (
            <a className="px-5 py-2 rounded-sm font-black uppercase tracking-widest text-xs bg-white/5 hover:bg-white/10" target="_blank" rel="noreferrer"
              href={`https://wa.me/${phoneDigits}?text=${encodeURIComponent(waText)}`}>Also send via WhatsApp</a>
          )}
          {result && <span role="status" className={`text-xs ${result.ok ? 'text-[#35c17a]' : 'text-red-400'}`}>{result.text}</span>}
        </div>
      </div>
    </div>
  )
}

function DocDetail({ kind, r, onStatus }: { kind: 'quote' | 'document'; r: Rec; onStatus: (k: 'order' | 'enquiry' | 'quote', id: string, s: string) => void }) {
  const c = kind === 'document' ? r.client : r
  const a = c.address || {}
  return (
    <div className="border-t border-white/10 p-4 space-y-5 text-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p><span className="text-gray-500">Email:</span> <a className="underline" href={`mailto:${c.email}`}>{c.email}</a></p>
          {c.phone && <p><span className="text-gray-500">Phone:</span> {c.phone}</p>}
          {c.business && <p><span className="text-gray-500">Business:</span> {c.business}{c.abn ? ` (ABN ${c.abn})` : ''}</p>}
          {a.street && <p><span className="text-gray-500">Deliver to:</span> {a.street}, {a.suburb} {a.state} {a.postcode}</p>}
          {kind === 'document' && <p><span className="text-gray-500">Issued:</span> {r.issueDate} &middot; <span className="text-gray-500">{r.docType === 'invoice' ? 'Due' : 'Valid until'}:</span> {r.dueDate}</p>}
        </div>
        {kind === 'quote' && (
          <div>
            <label className={lbl} htmlFor={`st-${r.id}`}>Status</label>
            <select id={`st-${r.id}`} value={r.status} onChange={e => onStatus('quote', r.id, e.target.value)} className={input}>
              {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        )}
      </div>
      <div className="space-y-1">
        {r.items.map((i: any, n: number) => <p key={n} className="flex justify-between"><span>{i.qty} x {i.name}</span><span>{money(i.line)}</span></p>)}
        {kind === 'document' && (
          <>
            <p className="flex justify-between text-gray-400"><span>Shipping</span><span>{r.shipping ? money(r.shipping) : 'Free'}</span></p>
            {r.discount > 0 && <p className="flex justify-between text-gray-400"><span>Discount</span><span>-{money(r.discount)}</span></p>}
            <p className="flex justify-between font-black border-t border-white/10 pt-2"><span>Total</span><span>{money(r.total)}</span></p>
          </>
        )}
        {r.notes && <p className="pt-2 text-gray-300"><span className="text-gray-500">Notes:</span> {r.notes}</p>}
      </div>
      <div className="flex flex-wrap gap-3">
        {kind === 'quote' && (
          <a className="bg-[#ff6a1a] text-[#140800] px-5 py-2 rounded-sm font-black uppercase tracking-widest text-xs" href={`/admin/invoice/?quote=${encodeURIComponent(r.id)}`}>
            Build the {r.docType === 'invoice' ? 'invoice' : 'quote'}
          </a>
        )}
        {kind === 'document' && (
          <a className="bg-white/5 hover:bg-white/10 px-5 py-2 rounded-sm font-black uppercase tracking-widest text-xs" href={`/admin/invoice/?doc=${encodeURIComponent(r.id)}`}>
            Re-issue as a new document
          </a>
        )}
        {kind === 'quote' && r.documentId && <span className="text-xs text-gray-400 self-center">Sent as {r.documentId}</span>}
      </div>
    </div>
  )
}
