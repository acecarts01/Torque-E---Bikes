'use client'

import React, { useCallback, useEffect, useState } from 'react'

type Order = any
type Enquiry = any

const STATUSES = ['new', 'awaiting-payment', 'paid', 'shipped', 'completed', 'cancelled']
const money = (n: number) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(n)
const when = (iso: string) => new Date(iso).toLocaleString('en-AU', { dateStyle: 'medium', timeStyle: 'short' })
const box = 'bg-[#1d2024] border border-white/10 rounded-sm'
const input = 'w-full bg-[#16181b] border border-white/10 rounded-sm px-3 py-2 text-sm text-white outline-none focus:border-[#ff6a1a]'

export default function AdminPage() {
  const [state, setState] = useState<'loading' | 'login' | 'ready'>('loading')
  const [passcode, setPasscode] = useState('')
  const [msg, setMsg] = useState('')
  const [tab, setTab] = useState<'orders' | 'enquiries'>('orders')
  const [orders, setOrders] = useState<Order[]>([])
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [open, setOpen] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    const res = await fetch('/api/admin/data/', { cache: 'no-store' })
    const data = res.status === 401 ? null : await res.json().catch(() => ({}))
    return { unauthorised: res.status === 401, data }
  }, [])

  const apply = useCallback((r: { unauthorised: boolean; data: any }) => {
    if (r.unauthorised) { setState('login'); return }
    if (!r.data?.ok) { setMsg(r.data?.message || 'Could not load data.'); setState('ready'); return }
    setOrders(r.data.orders); setEnquiries(r.data.enquiries); setMsg(''); setState('ready')
  }, [])

  const load = useCallback(() => fetchData().then(apply), [fetchData, apply])

  useEffect(() => {
    fetchData().then(apply).catch(() => { setMsg('Could not reach the server.'); setState('login') })
  }, [fetchData, apply])

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setMsg('')
    const res = await fetch('/api/admin/login/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ passcode }) })
    const data = await res.json().catch(() => ({}))
    if (!data.ok) { setMsg(data.message || 'Login failed.'); return }
    setPasscode('')
    await load()
  }

  async function logout() {
    await fetch('/api/admin/logout/', { method: 'POST' })
    setOrders([]); setEnquiries([]); setState('login')
  }

  const replace = (kind: 'order' | 'enquiry', rec: any) => {
    const fn = (list: any[]) => list.map(r => (r.id === rec.id ? rec : r))
    kind === 'order' ? setOrders(fn) : setEnquiries(fn)
  }

  async function setStatus(kind: 'order' | 'enquiry', id: string, status: string) {
    const res = await fetch('/api/admin/update/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ kind, id, status }) })
    const data = await res.json().catch(() => ({}))
    if (data.ok) replace(kind, data.record); else setMsg(data.message || 'Update failed.')
  }

  if (state === 'loading') return <div className="min-h-screen bg-[#16181b] text-gray-400 p-8">Loading...</div>

  if (state === 'login') {
    return (
      <main className="min-h-screen bg-[#16181b] flex items-center justify-center p-4">
        <form onSubmit={login} className={`${box} p-8 w-full max-w-sm space-y-4`}>
          <h1 className="text-xl font-black italic uppercase tracking-tighter text-white">Torque Admin</h1>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500" htmlFor="pc">Passcode</label>
          <input id="pc" type="password" autoComplete="current-password" value={passcode} onChange={e => setPasscode(e.target.value)} className={input} autoFocus />
          {msg && <p role="alert" className="text-sm text-red-400">{msg}</p>}
          <button className="w-full bg-[#ff6a1a] text-[#140800] py-3 rounded-sm font-black uppercase tracking-widest text-xs">Sign in</button>
        </form>
      </main>
    )
  }

  const rows = tab === 'orders' ? orders : enquiries
  const newCount = (list: any[]) => list.filter(r => r.status === 'new').length

  return (
    <main className="min-h-screen bg-[#16181b] text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black italic uppercase tracking-tighter">Torque Admin</h1>
          <div className="flex gap-2">
            <button onClick={load} className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-white/5 rounded-sm hover:bg-white/10">Refresh</button>
            <button onClick={logout} className="px-4 py-2 text-xs font-black uppercase tracking-widest bg-white/5 rounded-sm hover:bg-white/10">Sign out</button>
          </div>
        </div>

        <div className="flex gap-2">
          {(['orders', 'enquiries'] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); setOpen(null) }}
              className={`px-5 py-2 text-xs font-black uppercase tracking-widest rounded-sm ${tab === t ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/5 text-gray-400'}`}>
              {t} ({(t === 'orders' ? orders : enquiries).length}{newCount(t === 'orders' ? orders : enquiries) ? `, ${newCount(t === 'orders' ? orders : enquiries)} new` : ''})
            </button>
          ))}
        </div>

        {msg && <p role="alert" className="text-sm text-red-400">{msg}</p>}
        {rows.length === 0 && !msg && <p className="text-gray-500 text-sm">Nothing here yet.</p>}

        <div className="space-y-3">
          {rows.map((r: any) => {
            const kind = tab === 'orders' ? 'order' : 'enquiry'
            const isOpen = open === r.id
            return (
              <div key={r.id} className={box}>
                <button onClick={() => setOpen(isOpen ? null : r.id)} className="w-full text-left p-4 flex flex-wrap items-center gap-x-6 gap-y-1">
                  <span className="font-black text-[#ff6a1a]">{r.id}</span>
                  <span className="font-bold">{r.name}</span>
                  {kind === 'order' && <span className="text-gray-300">{money(r.total)}</span>}
                  <span className="text-xs text-gray-500">{when(r.createdAt)}</span>
                  <span className={`ml-auto text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-sm ${r.status === 'new' ? 'bg-[#ff6a1a] text-[#140800]' : 'bg-white/10 text-gray-300'}`}>{r.status}</span>
                </button>
                {isOpen && <Detail kind={kind} r={r} onStatus={setStatus} onUpdated={rec => replace(kind, rec)} />}
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

function Detail({ kind, r, onStatus, onUpdated }: { kind: 'order' | 'enquiry'; r: any; onStatus: (k: 'order' | 'enquiry', id: string, s: string) => void; onUpdated: (rec: any) => void }) {
  const [subject, setSubject] = useState(kind === 'order' ? `Payment details for order ${r.id}` : `Re: your enquiry ${r.id}`)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [note, setNote] = useState('')

  async function send() {
    setSending(true); setNote('')
    const res = await fetch('/api/admin/reply/', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, id: r.id, subject, message, markAwaitingPayment: kind === 'order' }),
    })
    const data = await res.json().catch(() => ({}))
    setSending(false)
    if (data.ok) { setNote('Sent.'); setMessage(''); onUpdated(data.record) } else setNote(data.message || 'Send failed.')
  }

  const wa = `https://wa.me/${String(r.phone || '').replace(/\D/g, '').replace(/^0/, '61')}`

  return (
    <div className="border-t border-white/10 p-4 space-y-5 text-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p><span className="text-gray-500">Email:</span> <a className="underline" href={`mailto:${r.email}`}>{r.email}</a></p>
          {r.phone && <p><span className="text-gray-500">Phone:</span> {r.phone} {kind === 'order' && <a className="underline text-[#ff6a1a] ml-2" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>}</p>}
          {kind === 'order' && <p><span className="text-gray-500">Deliver to:</span> {r.address.street}, {r.address.suburb} {r.address.state} {r.address.postcode}</p>}
          {kind === 'order' && <p><span className="text-gray-500">Payment:</span> {r.paymentMethod}</p>}
          {kind === 'enquiry' && r.business_name && <p><span className="text-gray-500">Business:</span> {r.business_name} (ABN/ACN {r.abn_acn})</p>}
          {kind === 'enquiry' && r.type && <p><span className="text-gray-500">Topic:</span> {r.type}</p>}
        </div>
        <div>
          <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Status</label>
          <select value={r.status} onChange={e => onStatus(kind, r.id, e.target.value)} className={input}>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {kind === 'order' ? (
        <div className="space-y-1">
          {r.items.map((i: any) => <p key={i.slug} className="flex justify-between"><span>{i.qty} x {i.name}</span><span>{money(i.line)}</span></p>)}
          <p className="flex justify-between text-gray-400"><span>Shipping</span><span>{r.shipping ? money(r.shipping) : 'Free'}</span></p>
          {r.cryptoDiscount > 0 && <p className="flex justify-between text-gray-400"><span>Crypto discount</span><span>-{money(r.cryptoDiscount)}</span></p>}
          <p className="flex justify-between font-black border-t border-white/10 pt-2"><span>Total</span><span>{money(r.total)}</span></p>
          {r.notes && <p className="pt-2 text-gray-300"><span className="text-gray-500">Customer notes:</span> {r.notes}</p>}
        </div>
      ) : (
        <p className="whitespace-pre-wrap text-gray-200">{r.message}</p>
      )}

      {r.replies?.length > 0 && (
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Sent emails</p>
          {r.replies.map((x: any, i: number) => (
            <div key={i} className="bg-[#16181b] rounded-sm p-3"><p className="text-xs text-gray-500">{when(x.at)} - {x.subject}</p><p className="whitespace-pre-wrap">{x.message}</p></div>
          ))}
        </div>
      )}

      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{kind === 'order' ? 'Email payment details to customer' : 'Reply to customer'}</p>
        <input value={subject} onChange={e => setSubject(e.target.value)} className={input} aria-label="Subject" />
        <textarea value={message} onChange={e => setMessage(e.target.value)} rows={6} className={input}
          placeholder={kind === 'order' ? 'Paste the bank / PayID / crypto details here. Include the order reference as the payment reference.' : 'Write your reply...'} />
        <div className="flex items-center gap-3">
          <button onClick={send} disabled={sending || !message.trim()} className="bg-[#ff6a1a] text-[#140800] px-5 py-2 rounded-sm font-black uppercase tracking-widest text-xs disabled:opacity-50">{sending ? 'Sending...' : 'Send email'}</button>
          {note && <span className="text-xs text-gray-300">{note}</span>}
        </div>
      </div>
    </div>
  )
}
