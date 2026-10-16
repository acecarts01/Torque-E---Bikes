// src/components/RichText.tsx
// Renders a string with [label](/path/) links and **bold**. Links to unpublished blog posts render as plain text.
import React from 'react'
import Link from 'next/link'
import { isLive } from '@/src/lib/blog'

const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g

export default function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter(Boolean)
  return (
    <>
      {parts.map((part, i) => {
        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
        if (link) {
          const [, label, href] = link
          if (!isLive(href)) return <React.Fragment key={i}>{label}</React.Fragment>
          return href.startsWith('http')
            ? <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-brand-red underline underline-offset-4 hover:text-white">{label}</a>
            : <Link key={i} href={href} className="text-brand-red underline underline-offset-4 hover:text-white">{label}</Link>
        }
        const bold = /^\*\*([^*]+)\*\*$/.exec(part)
        if (bold) return <strong key={i} className="text-white">{bold[1]}</strong>
        return <React.Fragment key={i}>{part}</React.Fragment>
      })}
    </>
  )
}
