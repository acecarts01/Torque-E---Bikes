// src/components/AbnText.tsx
// Renders text and turns every mention of the ABN into a link that opens the official ABN Lookup profile directly
// (the /abn-lookup/ path redirects to the profile with the ABN already filled in, so visitors never copy or paste anything).
import React from 'react'
import { BRAND } from '@/src/config/site'

export function AbnLink({ children }: { children?: React.ReactNode }) {
  return (
    <a
      href={BRAND.abnCheckPath}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#ff6a1a] underline underline-offset-2 hover:text-white"
      aria-label={`ABN ${BRAND.abn}: verify on ABN Lookup (opens in a new tab)`}
    >
      {children ?? BRAND.abn}
    </a>
  )
}

export default function AbnText({ text }: { text: string }) {
  const parts = String(text).split(BRAND.abn)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((p, i) => (
        <React.Fragment key={i}>
          {i > 0 && <AbnLink />}
          {p}
        </React.Fragment>
      ))}
    </>
  )
}
