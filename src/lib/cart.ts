'use client'
// src/lib/cart.ts
// Browser cart: slugs and quantities only, kept in localStorage. Prices are always re-read from the catalogue,
// and re-calculated again on the server when the order is placed.
import { useSyncExternalStore } from 'react'

export type CartItem = { slug: string; qty: number }

const KEY = 'tq_cart'
const EVT = 'tq-cart-change'
const EMPTY: CartItem[] = []
let cache: { raw: string | null; items: CartItem[] } = { raw: null, items: EMPTY }

function read(): CartItem[] {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw === cache.raw) return cache.items
    const parsed = raw ? JSON.parse(raw) : []
    const items: CartItem[] = Array.isArray(parsed)
      ? parsed.filter(i => i && typeof i.slug === 'string' && Number(i.qty) >= 1).map(i => ({ slug: i.slug, qty: Math.min(50, Math.floor(Number(i.qty))) }))
      : []
    cache = { raw, items }
    return items
  } catch {
    return EMPTY
  }
}

function write(items: CartItem[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(items))
  } catch { /* storage blocked: cart is session-only */ }
  window.dispatchEvent(new Event(EVT))
}

const subscribe = (cb: () => void) => {
  window.addEventListener(EVT, cb)
  window.addEventListener('storage', cb)
  queueMicrotask(cb) // re-read right after hydration, so a saved cart shows on first load
  return () => { window.removeEventListener(EVT, cb); window.removeEventListener('storage', cb) }
}

export const addToCart = (slug: string, qty = 1) => {
  const items = [...read()]
  const found = items.find(i => i.slug === slug)
  if (found) found.qty = Math.min(50, found.qty + qty)
  else items.push({ slug, qty })
  write(items)
}

export const setQty = (slug: string, qty: number) =>
  write(read().flatMap(i => i.slug !== slug ? [i] : qty >= 1 ? [{ slug, qty: Math.min(50, qty) }] : []))

export const removeFromCart = (slug: string) => write(read().filter(i => i.slug !== slug))
export const clearCart = () => write([])

/** Replace the whole cart (used by agent-prepared checkout links: /checkout/?items=slug:qty,...) */
export const replaceCart = (items: CartItem[]) =>
  write(items.filter(i => i && typeof i.slug === 'string' && Number(i.qty) >= 1).map(i => ({ slug: i.slug, qty: Math.min(50, Math.floor(Number(i.qty))) })))

export function useCart(): CartItem[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY)
}
