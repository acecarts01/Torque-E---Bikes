'use client'

import { useState, useRef, MouseEvent } from 'react'
import SmartImage from '@/src/components/SmartImage'
import { cn } from '@/src/lib/utils'
import { ZoomIn } from 'lucide-react'

interface ProductZoomProps {
  src: string
  alt: string
  className?: string
}

export default function ProductZoom({ src, alt, className }: ProductZoomProps) {
  const [zoom, setZoom] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = ((e.pageX - left - window.scrollX) / width) * 100
    const y = ((e.pageY - top - window.scrollY) / height) * 100
    
    setPosition({ x, y })
  }

  return (
    <div 
      ref={containerRef}
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden cursor-crosshair bg-white rounded-[3rem] border border-white/5 shadow-2xl",
        className
      )}
    >
      <div className="relative aspect-[4/3] p-12">
        <SmartImage 
          src={src} 
          alt={alt} 
          fill 
          className={cn(
            "object-contain transition-transform duration-200 p-12",
            zoom ? "opacity-0" : "opacity-100"
          )} 
          priority={true} 
        />
        
        {/* Zoomed State */}
        {zoom && (
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url(${src.startsWith('http') ? src : `https://picsum.photos/seed/${src.split('.')[0]}/1600/1200`})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: '250%',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
      </div>

      {/* Visual Hint */}
      {!zoom && (
        <div className="absolute bottom-6 right-6 p-3 bg-brand-dark/40 backdrop-blur-md rounded-full border border-white/10 opacity-60 group-hover:opacity-100 transition-opacity">
          <ZoomIn className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  )
}
