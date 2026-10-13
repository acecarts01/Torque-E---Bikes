'use client'

// src/components/SmartImage.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/src/lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  quality?: 75 | 90
}

export default function SmartImage({
  src,
  alt,
  className,
  priority = false,
  width = 800,
  height = 600,
  fill = false,
  sizes,
  quality = 90
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false)
  // Remote (http) and local (/...) sources are used as-is; bare names fall back to a placeholder
  const imageSrc = src.startsWith('http') || src.startsWith('/') ? src : `https://picsum.photos/seed/${src.split('.')[0]}/800/600`

  return (
    <div className={cn("overflow-hidden", src.startsWith("/products/") ? "bg-white" : "bg-[#1d2024]", fill ? "absolute inset-0" : "relative", className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        sizes={sizes ?? (fill ? '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw' : undefined)}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-contain transition-[opacity,transform] duration-700 ease-out hover:scale-105",
          loaded ? "opacity-100" : "opacity-0",
          fill ? "h-full w-full" : ""
        )}
        referrerPolicy="no-referrer"
      />
    </div>
  )
}
