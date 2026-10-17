// Torque Dial: gauge ring, bold T and power bolt. Inline SVG so it needs no extra request and stays sharp at any size.
export default function BrandMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" className={className} aria-hidden="true" focusable="false">
      <circle cx="256" cy="256" r="256" fill="#16181b" />
      <circle cx="256" cy="256" r="196" fill="none" stroke="#ff6a1a" strokeWidth="44" strokeLinecap="round" strokeDasharray="1010 1232" transform="rotate(128 256 256)" />
      <polygon points="142,166 370,166 370,222 284,222 284,372 228,372 228,222 142,222" fill="#ffffff" />
      <polygon points="262,188 226,262 258,262 246,330 304,246 270,246 282,188" fill="#ff6a1a" transform="translate(-2 6)" />
    </svg>
  )
}
