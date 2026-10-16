'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Zap } from 'lucide-react'

// Shows the post's hero photo, or a plain branded panel if the file is not in place yet.
export default function BlogCardImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1d2024] to-[#16181b]" role="img" aria-label={alt}>
        <Zap className="w-10 h-10 text-brand-red/60" />
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="object-cover group-hover:scale-110 transition-transform duration-700"
      onError={() => setFailed(true)}
    />
  )
}
