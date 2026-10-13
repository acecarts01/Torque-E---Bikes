// src/components/SmartImage.tsx
import React from 'react'
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
}

export default function SmartImage({
  src,
  alt,
  className,
  priority = false,
  width = 800,
  height = 600,
  fill = false
}: SmartImageProps) {
  // Use placeholder images for development
  const imageSrc = src.startsWith('http') ? src : `https://picsum.photos/seed/${src.split('.')[0]}/800/600`

  return (
    <div className={cn("relative overflow-hidden bg-[#1a1a1a]", className)}>
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={cn(
          "object-contain transition-transform duration-500 hover:scale-105",
          fill ? "h-full w-full" : ""
        )}
        referrerPolicy="no-referrer"
      />
    </div>
  )
}
