'use client'

import React, { useMemo, useState } from 'react'
import { Filter, X, ChevronRight } from 'lucide-react'
import { CATEGORIES } from '@/src/config/site'
import { cn } from '@/src/lib/utils'

interface ShopFiltersProps {
  activeCategory: string | null
  activePower: string | null
  activeVoltage: string | null
  activeCompatibility: string | null
  onCategoryChange: (slug: string | null) => void
  onPowerChange: (power: string | null) => void
  onVoltageChange: (voltage: string | null) => void
  onCompatibilityChange: (comp: string | null) => void
  products?: any[] // used to hide filter options no product has
}

const POWER_OPTIONS = ['250W', '1000W', '2000W', '3000W', '5kW', '7kW+']
const VOLTAGE_OPTIONS = ['36V', '48V', '52V', '72V']
const COMPATIBILITY_OPTIONS = ['Sur-Ron', 'Talaria', 'MTB', 'ETM', 'Strike', 'Universal']

// Only offer power, voltage and compatibility options that at least one product actually has,
// so choosing one never empties the grid.
const has = (products: any[], get: (p: any) => unknown, opt: string) => products.some(p => { const v = get(p); return Array.isArray(v) ? v.includes(opt) : v === opt })
const CATEGORY_COUNTS: Record<string, number> = Object.fromEntries(CATEGORIES.map((c: any) => [c.name, c.count ?? 0]))

const FilterSection = ({ title, options, active, onChange, counts }: {
  title: string,
  options: string[],
  active: string | null,
  onChange: (val: string | null) => void,
  counts?: Record<string, number>
}) => options.length === 0 ? null : (
  <div className="space-y-4">
    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/5 pb-2">{title}</h4>
    <div className="flex flex-wrap lg:flex-col gap-2">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => onChange(active === opt ? null : opt)}
          className={cn(
            "px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-left rounded-sm border transition-all flex items-center justify-between group",
            active === opt 
              ? "bg-[#ff6a1a] border-[#ff6a1a] text-[#140800]" 
              : "bg-white/5 border-white/10 text-gray-400 hover:border-[#ff6a1a]/50 hover:text-white"
          )}
        >
          <span>{opt}{counts && typeof counts[opt] === 'number' ? ` (${counts[opt]})` : ''}</span>
          <ChevronRight className={cn("w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity", active === opt && "opacity-100")} />
        </button>
      ))}
    </div>
  </div>
)

export default function ShopFilters({
  activeCategory,
  activePower,
  activeVoltage,
  activeCompatibility,
  onCategoryChange,
  onPowerChange,
  onVoltageChange,
  onCompatibilityChange,
  products = []
}: ShopFiltersProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const POWER_AVAILABLE = useMemo(() => POWER_OPTIONS.filter(o => has(products, p => p.power, o)), [products])
  const VOLTAGE_AVAILABLE = useMemo(() => VOLTAGE_OPTIONS.filter(o => has(products, p => p.voltage, o)), [products])
  const COMPAT_AVAILABLE = useMemo(() => COMPATIBILITY_OPTIONS.filter(o => has(products, p => p.compatibility, o)), [products])

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 bg-[#ff6a1a] text-[#140800] px-4 py-3 rounded-sm font-black uppercase tracking-widest text-xs w-full mb-6"
      >
        <Filter className="w-4 h-4" /> Filter & Compatibility
      </button>

      {/* Sidebar Content */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-[#16181b] p-6 lg:relative lg:inset-auto lg:z-auto lg:bg-transparent lg:p-0 transition-transform duration-300 overflow-y-auto",
        isMobileOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      )}>
        <div className="flex justify-between items-center mb-8 lg:hidden">
          <p className="text-xl font-black uppercase italic tracking-tighter">Shop Filters</p>
          <button onClick={() => setIsMobileOpen(false)} aria-label="Close filters" className="p-2 bg-white/5 rounded-full"><X className="w-6 h-6" /></button>
        </div>

        <div className="space-y-10">
          <FilterSection 
            title="Categories" 
            options={CATEGORIES.map(c => c.name)}
            counts={CATEGORY_COUNTS}
            active={CATEGORIES.find(c => c.slug === activeCategory)?.name || null} 
            onChange={(name) => {
              const cat = CATEGORIES.find(c => c.name === name)
              onCategoryChange(cat ? cat.slug : null)
              if (isMobileOpen) setIsMobileOpen(false)
            }}
          />

          <FilterSection 
            title="Motor Power Output" 
            options={POWER_AVAILABLE}
            active={activePower} 
            onChange={(val) => {
              onPowerChange(val)
              if (isMobileOpen) setIsMobileOpen(false)
            }}
          />

          <FilterSection 
            title="System Voltage" 
            options={VOLTAGE_AVAILABLE}
            active={activeVoltage} 
            onChange={(val) => {
              onVoltageChange(val)
              if (isMobileOpen) setIsMobileOpen(false)
            }}
          />

          <FilterSection 
            title="Model Compatibility" 
            options={COMPAT_AVAILABLE}
            active={activeCompatibility} 
            onChange={(val) => {
              onCompatibilityChange(val)
              if (isMobileOpen) setIsMobileOpen(false)
            }}
          />

          {/* Reset All */}
          {(activeCategory || activePower || activeVoltage || activeCompatibility) && (
            <button 
              onClick={() => {
                onCategoryChange(null)
                onPowerChange(null)
                onVoltageChange(null)
                onCompatibilityChange(null)
              }}
              className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white border border-dashed border-white/20 hover:border-[#ff6a1a] transition-all rounded-sm"
            >
              Reset All Filters
            </button>
          )}
        </div>
      </div>
    </>
  )
}
