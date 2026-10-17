'use client'

import React, { useEffect, useState } from 'react'
import { Copy, Check, ShieldCheck, MessageCircle, Mail } from 'lucide-react'
import { SITE } from '@/src/config/site'
import { money } from '@/src/lib/order'

type Data = {
  orderNumber: string
  firstName: string
  amountDue: number
  methodLabel: string
  opening: string
  closing: string
  fields: { label: string; value: string }[]
  terms: string[]
  status: string
  contact: { email: string; phone: string; whatsapp: string }
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    // Fallback for older browsers and non-secure contexts.
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(ta)
    return ok
  }
}

function CopyRow({ label, value, big = false }: { label: string; value: string; big?: boolean }) {
  const [copied, setCopied] = useState(false)
  async function onCopy() {
    if (await copyText(value)) {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  return (
    <div className="flex items-center gap-3 p-4 border-b border-white/5 last:border-0">
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{label}</p>
        <p className={`font-mono break-all text-white ${big ? 'text-xl font-bold' : 'text-base'}`}>{value}</p>
      </div>
      <button
        type="button"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
        className={`shrink-0 min-w-[92px] min-h-[44px] px-3 rounded-sm text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-colors ${copied ? 'bg-[#35c17a] text-[#06210f]' : 'bg-[#ff6a1a] text-[#140800]'}`}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" /> Copy
          </>
        )}
      </button>
    </div>
  )
}

export default function PaymentDetailsPage() {
  const [data, setData] = useState<Data | null>(null)
  const [error, setError] = useState('')
  const [all, setAll] = useState(false)

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search)
    fetch(`/api/order/payment-details/?id=${encodeURIComponent(sp.get('id') || '')}&t=${encodeURIComponent(sp.get('t') || '')}`, { cache: 'no-store' })
      .then(async r => ({ ok: r.ok, body: await r.json().catch(() => ({})) }))
      .then(({ ok, body }) => {
        if (ok && body.ok) setData(body)
        else setError(body.message || 'Something went wrong.')
      })
      .catch(() => setError('We could not load your payment details. Please check your connection and try again.'))
  }, [])

  async function copyAll() {
    if (!data) return
    const text = [`Order ${data.orderNumber}`, `Amount due: ${money(data.amountDue)}`, ...data.fields.map(f => `${f.label}: ${f.value}`)].join('\n')
    if (await copyText(text)) {
      setAll(true)
      setTimeout(() => setAll(false), 2000)
    }
  }

  return (
    <main className="min-h-screen bg-[#16181b] text-white px-4 py-8">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <p className="text-xl font-black italic uppercase tracking-tighter">
            Torque <span className="text-[#ff6a1a]">E-Bikes</span>
          </p>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Payment details</p>
        </div>

        {!data && !error && <p className="text-center text-gray-400">Loading your payment details...</p>}

        {error && (
          <div role="alert" className="bg-[#1d2024] border border-white/10 rounded-sm p-6 text-center space-y-3">
            <p className="text-gray-200">{error}</p>
            <a href={`https://${SITE.domain}/contact/`} className="inline-block text-[#ff6a1a] underline text-sm">
              Contact the Torque Team
            </a>
          </div>
        )}

        {data && (
          <>
            <div className="bg-[#1d2024] border border-white/10 rounded-sm p-5 space-y-1">
              <p className="text-sm text-gray-400">
                Hi {data.firstName}, order <b className="text-white">{data.orderNumber}</b>
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Pay by {data.methodLabel}</p>
            </div>

            <div className="bg-[#1d2024] border border-[#ff6a1a]/40 rounded-sm">
              <CopyRow label="Amount due (AUD)" value={money(data.amountDue)} big />
            </div>

            <p className="text-sm text-gray-300">{data.opening}</p>

            <div className="bg-[#1d2024] border border-white/10 rounded-sm">
              {data.fields.map((f, i) => (
                <CopyRow key={i} label={f.label} value={f.value} />
              ))}
            </div>

            <button type="button" onClick={copyAll} className="w-full min-h-[44px] bg-white/5 hover:bg-white/10 rounded-sm text-xs font-black uppercase tracking-widest">
              {all ? 'Copied all' : 'Copy everything'}
            </button>

            <p className="text-sm text-gray-300">{data.closing}</p>

            <div className="bg-[#2a1809] border border-[#6b3d14] rounded-sm p-4">
              <ul className="list-disc pl-5 space-y-1 text-sm text-[#ffd9a8]">
                {data.terms.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${SITE.name}, I have paid for order ${data.orderNumber}.`)}`}
                className="min-h-[44px] flex items-center justify-center gap-2 bg-[#ff6a1a] text-[#140800] rounded-sm text-xs font-black uppercase tracking-widest px-4 py-3"
              >
                <MessageCircle className="w-4 h-4" /> I&apos;ve paid - tell us on WhatsApp
              </a>
              <a
                href={`mailto:${data.contact.email}?subject=${encodeURIComponent(`Payment for order ${data.orderNumber}`)}`}
                className="min-h-[44px] flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-sm text-xs font-black uppercase tracking-widest px-4 py-3"
              >
                <Mail className="w-4 h-4" /> Email us
              </a>
            </div>

            <p className="flex items-start gap-2 text-[11px] text-gray-500 leading-relaxed">
              <ShieldCheck className="w-4 h-4 shrink-0 text-gray-500" />
              We will only ever send payment details from {data.contact.email}. If anything looks different, call {data.contact.phone} before paying.
            </p>
          </>
        )}
      </div>
    </main>
  )
}
