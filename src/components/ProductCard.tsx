import React from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldAlert, Zap, Cpu } from 'lucide-react'
import SmartImage from '@/src/components/SmartImage'
import { formatCurrency, cn } from '@/src/lib/utils'

interface ProductCardProps {
  product: {
    slug: string
    name: string
    price: number
    category: string
    badge?: string
    images: string[]
    compliance?: string
    shortDescription?: string
    stock?: string
    power?: string
    voltage?: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const isOutOfStock = product.stock === 'Out of Stock'

  return (
    <div className="reveal group sheen flex flex-col h-full bg-[#1d2024] border border-white/5 rounded-sm overflow-hidden hover:border-[#ff6a1a]/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(255,106,26,0.45)] transition-all duration-300 flex-shrink-0 min-h-0">
      <Link href={`/shop/${product.category}/${product.slug}/`} className="relative aspect-[4/3] bg-white p-6 block overflow-hidden">
        <SmartImage 
          src={product.images[0]} 
          alt={product.name} 
          fill 
          className={cn("bg-white object-contain transition-transform duration-700 group-hover:scale-105", isOutOfStock && "grayscale opacity-50")} 
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.badge && (
            <div className="bg-[#ff6a1a] text-[#140800] px-2 py-1 text-[8px] font-black uppercase italic tracking-tighter rounded-full">
              {product.badge}
            </div>
          )}
          {product.compliance === 'off-road' && (
            <div className="bg-[#ffb703] text-[#201500] px-2 py-1 text-[8px] font-black uppercase tracking-wider rounded-full flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              <span>Off-road only</span>
            </div>
          )}
          {product.bestPrice && (
            <div className="bg-[#35c17a] text-[#00200e] px-2 py-1 text-[8px] font-black uppercase tracking-wider rounded-full">
              Best price
            </div>
          )}
          {isOutOfStock && (
            <div className="bg-black text-white px-2 py-1 text-[8px] font-black uppercase italic tracking-tighter rounded-full">
              Out of Stock
            </div>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="flex-grow space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-500">{product.category.replace(/-/g, ' ')}</p>
            {product.stock && !isOutOfStock && (
              <span className={cn(
                "text-[7px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full",
                product.stock === 'Low Stock' ? "bg-orange-500/10 text-orange-500" : "bg-green-500/10 text-green-500"
              )}>
                {product.stock}
              </span>
            )}
          </div>
          
          <Link href={`/shop/${product.category}/${product.slug}/`}>
            <h3 className="text-lg font-black uppercase italic tracking-tighter leading-tight text-white group-hover:text-[#ff6a1a] transition-colors duration-300 line-clamp-2">
              {product.name}
            </h3>
          </Link>

          <div className="flex gap-2">
            {product.power && product.power !== 'N/A' && (
              <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-sm">
                <Zap className="w-2.5 h-2.5 text-[#ff6a1a]" />
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{product.power}</span>
              </div>
            )}
            {product.voltage && product.voltage !== 'N/A' && (
              <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-sm">
                <Cpu className="w-2.5 h-2.5 text-[#ff6a1a]" />
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{product.voltage}</span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <p className="text-xl font-black italic text-white tracking-tighter">
              {formatCurrency(product.price)}
            </p>
            {product.comparePrice && product.comparePrice > product.price * 1.015 && (
              <>
                <s className="text-xs text-[#a39e94]">{formatCurrency(product.comparePrice)}</s>
                <span className="text-[11px] font-bold text-[#35c17a]">Save {formatCurrency(product.comparePrice - product.price)}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <CompareToggle slug={product.slug} />
            <Link 
              href={`/shop/${product.category}/${product.slug}/`} 
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group/btn"
            >
              <span>Details</span>
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompareToggle({ slug }: { slug: string }) {
  const [isCompared, setIsCompared] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('compare_products')
      if (saved) {
        try {
          const list = JSON.parse(saved)
          return list.includes(slug)
        } catch (e) {}
      }
    }
    return false
  })

  React.useEffect(() => {
    const check = () => {
      const saved = localStorage.getItem('compare_products')
      if (saved) {
        try {
          const list = JSON.parse(saved)
          setIsCompared(list.includes(slug))
        } catch (e) {}
      } else {
        setIsCompared(false)
      }
    }
    window.addEventListener('storage', check)
    return () => window.removeEventListener('storage', check)
  }, [slug])

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const saved = localStorage.getItem('compare_products')
    let list = []
    if (saved) {
      try { list = JSON.parse(saved) } catch (e) {}
    }
    
    if (list.includes(slug)) {
      list = list.filter((s: string) => s !== slug)
    } else {
      list = [...list, slug].slice(-4)
    }
    
    localStorage.setItem('compare_products', JSON.stringify(list))
    setIsCompared(list.includes(slug))
    // Trigger storage event for other components on same page
    window.dispatchEvent(new Event('storage'))
  }

  return (
    <button 
      onClick={toggle}
      className={cn(
        "text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-sm transition-all",
        isCompared ? "bg-[#ff6a1a] text-[#140800]" : "bg-white/5 text-gray-500 hover:text-[#140800]"
      )}
    >
      {isCompared ? 'Compared' : '+ Compare'}
    </button>
  )
}
