"use client"

import { useEffect, useState } from "react"

export function Starfield() {
  const [stars, setStars] = useState<Array<any>>([])

  useEffect(() => {
    // Generate realistic night sky stars
    const generatedStars = [...Array(100)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`, // Tiny stars: 1px to 3px
      height: `${Math.random() * 2 + 1}px`,
      opacity: Math.random(),
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }))
    setStars(generatedStars)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((style, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={style}
        ></div>
      ))}
      
      {/* Shooting Stars */}
      <div className="animate-shooting-star" style={{ top: '10%', right: '10%', animationDelay: '5s' }}></div>
      <div className="animate-shooting-star" style={{ top: '25%', right: '25%', animationDelay: '12s' }}></div>
      <div className="animate-shooting-star" style={{ top: '15%', right: '40%', animationDelay: '19s' }}></div>
    </div>
  )
}
