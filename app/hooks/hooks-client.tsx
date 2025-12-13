"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { viralHooks } from "@/lib/hooks-data"
import { Copy, Check, MessageSquare, Filter } from "lucide-react"

export default function HooksPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const categories = ["All", ...Array.from(new Set(viralHooks.map(h => h.category)))]
  
  const filteredHooks = activeCategory === "All" 
    ? viralHooks 
    : viralHooks.filter(h => h.category === activeCategory)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans selection:bg-[#FFE500] selection:text-black">
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 border-b-4 border-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-8xl mb-8 uppercase tracking-tighter">
              THE VIRAL <span className="text-[#FFE500]">HOOK</span>
              <br />
              LIBRARY
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Don't know how to start your ad video? <br />
              Steal these <span className="text-[#FFE500] font-bold">India-specific</span> opening lines.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="sticky top-[80px] z-40 bg-black/90 backdrop-blur-md border-b-4 border-zinc-800 py-4 px-4 overflow-x-auto custom-scrollbar">
          <div className="max-w-7xl mx-auto flex gap-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-bold uppercase tracking-widest border-2 transition-all ${
                  activeCategory === cat 
                    ? "bg-[#FFE500] text-black border-[#FFE500]" 
                    : "bg-black text-white border-zinc-700 hover:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Hooks Grid */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHooks.map((hook) => (
              <div 
                key={hook.id} 
                className="bg-zinc-900 border-4 border-zinc-800 hover:border-[#FFE500] p-8 flex flex-col justify-between group transition-colors duration-300 relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-[#FFE500] uppercase tracking-widest border border-[#FFE500] px-2 py-1">
                      {hook.category}
                    </span>
                  </div>
                  <h3 className="font-heading text-3xl md:text-4xl mb-6 leading-tight">
                    "{hook.hook}"
                  </h3>
                  <p className="text-gray-400 text-sm italic font-mono mb-8 border-l-2 border-zinc-700 pl-4">
                    Why it works: {hook.explanation}
                  </p>
                </div>
                
                <button 
                  onClick={() => handleCopy(hook.hook, hook.id)}
                  className="w-full py-4 bg-zinc-800 hover:bg-[#FFE500] hover:text-black border-2 border-zinc-700 hover:border-[#FFE500] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  {copiedId === hook.id ? (
                    <>
                      <Check className="w-5 h-5" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-5 h-5" /> Copy Hook
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#FFE500] text-black px-4 py-16 text-center border-t-4 border-black">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-4xl md:text-6xl mb-6 uppercase tracking-tight">
              Need someone to film these?
            </h3>
            <p className="text-xl font-bold mb-8">
              We take these hooks to the streets and get real people to react.
            </p>
            <a href="https://wa.me/918893317488" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5" />
              Book a Shoot
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
