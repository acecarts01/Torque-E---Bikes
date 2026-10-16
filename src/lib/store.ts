// src/lib/store.ts
// Upstash Redis over its REST API. Server only. Accepts the Vercel-injected KV_* names or Upstash's own.
// Never throws on missing config: callers check isStoreConfigured() or handle { ok: false }.

const url = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || ''
const token = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || ''

export const isStoreConfigured = () => Boolean(url() && token())

export async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const res = await fetch(url(), {
    method: 'POST',
    headers: { Authorization: `Bearer ${token()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(command),
    cache: 'no-store',
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok || data.error) throw new Error(data.error || `Upstash HTTP ${res.status}`)
  return data.result as T
}

export type RecordKind = 'order' | 'enquiry'

const key = (kind: RecordKind, id: string) => `torque:${kind}:${id}`
const index = (kind: RecordKind) => `torque:${kind}s`

export async function saveRecord(kind: RecordKind, id: string, record: Record<string, unknown>) {
  await redis(['SET', key(kind, id), JSON.stringify(record)])
  await redis(['LPUSH', index(kind), id])
}

export async function getRecord<T = Record<string, any>>(kind: RecordKind, id: string): Promise<T | null> {
  const raw = await redis<string | null>(['GET', key(kind, id)])
  return raw ? (JSON.parse(raw) as T) : null
}

export async function updateRecord(kind: RecordKind, id: string, patch: Record<string, unknown>) {
  const current = await getRecord(kind, id)
  if (!current) return null
  const next = { ...current, ...patch }
  await redis(['SET', key(kind, id), JSON.stringify(next)])
  return next
}

export async function listRecords<T = Record<string, any>>(kind: RecordKind, limit = 200): Promise<T[]> {
  const ids = await redis<string[]>(['LRANGE', index(kind), 0, limit - 1])
  if (!ids?.length) return []
  const raws = await redis<(string | null)[]>(['MGET', ...ids.map(i => key(kind, i))])
  return raws.filter((r): r is string => !!r).map(r => JSON.parse(r) as T)
}

/** Fixed-window counter, used to rate-limit the admin login. Returns the count after incrementing. */
export async function hit(bucket: string, windowSeconds: number): Promise<number> {
  const k = `torque:rl:${bucket}`
  const n = await redis<number>(['INCR', k])
  if (n === 1) await redis(['EXPIRE', k, windowSeconds])
  return n
}
