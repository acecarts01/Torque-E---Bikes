import React from 'react'

interface SkeletonProps {
  className?: string
}

export const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div 
      className={`animate-pulse bg-white/5 rounded-sm ${className}`}
    />
  )
}

export const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4 border border-white/5 bg-[#1d2024]/50 p-4 rounded-sm">
      {/* Image Area */}
      <Skeleton className="aspect-[4/3] w-full" />
      
      {/* Text Area */}
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-6 w-1/4" />
        </div>
        <Skeleton className="h-8 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
      
      {/* Footer Area */}
      <div className="pt-4 border-t border-white/5 flex justify-between items-center">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
    </div>
  )
}

export default Skeleton
