import React from "react"

interface MarqueeProps {
  text: string
  className?: string
}

export function Marquee({ text, className = "" }: MarqueeProps) {
  return (
    <div className={`w-full overflow-hidden bg-black py-4 border-y-4 border-black ${className}`}>
      <div className="animate-marquee flex">
        {/* We repeat the text multiple times to ensure smooth infinite scrolling */}
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-[#FFE500] font-heading text-4xl mx-8 uppercase tracking-widest flex items-center">
            {text} <span className="ml-8 text-white">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
