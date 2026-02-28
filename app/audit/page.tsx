"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { industryPlaybooks } from "@/lib/industry-data"
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function AuditPage() {
  const [url, setUrl] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    // Simulate "Analysis" time for dramatic effect
    setTimeout(() => {
      const industry = industryPlaybooks.find((i) => i.slug === selectedIndustry)
      if (industry) {
        setResult(industry)
      }
      setLoading(false)
    }, 2000)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl mb-8 uppercase tracking-tight">
            Free <span className="text-[#FFE500]">UGC Audit</span> Engine
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Find out exactly why your current ads are failing in Kerala and generate a winning street interview concept in 2 seconds.
          </p>

          {!result && (
            <form onSubmit={handleAudit} className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-lg border-2 border-zinc-800">
              <div className="space-y-6 text-left">
                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-zinc-500">
                    Brand Website (Optional)
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourbrand.com"
                    className="w-full bg-black border border-zinc-700 p-4 text-white focus:border-[#FFE500] outline-none transition-colors"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-widest mb-2 text-zinc-500">
                    Select Your Industry
                  </label>
                  <select
                    required
                    className="w-full bg-black border border-zinc-700 p-4 text-white focus:border-[#FFE500] outline-none transition-colors appearance-none"
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                  >
                    <option value="" disabled>-- Select Category --</option>
                    {industryPlaybooks.map((industry) => (
                      <option key={industry.slug} value={industry.slug}>
                        {industry.emoji} {industry.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FFE500] text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin w-5 h-5" /> Analyzing Market Data...
                    </>
                  ) : (
                    <>
                      Generate Strategy <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {result && (
            <div className="animate-fade-in-up text-left max-w-3xl mx-auto bg-white text-black border-4 border-[#FFE500] shadow-[12px_12px_0px_0px_#FFE500]">
              {/* Header */}
              <div className="bg-black text-white p-6 flex justify-between items-center border-b-4 border-[#FFE500]">
                <h2 className="font-heading text-2xl uppercase tracking-widest">
                  Audit Report: <span className="text-[#FFE500]">{result.name}</span>
                </h2>
                <div className="text-xs font-mono text-zinc-500">GENERATED NOW</div>
              </div>

              <div className="p-8 md:p-10 space-y-10">
                {/* Problem Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">Critical Issue</span>
                    <h3 className="font-bold text-2xl uppercase tracking-tight">Why You Are Losing Sales</h3>
                  </div>
                  <p className="text-lg leading-relaxed border-l-4 border-red-600 pl-4 bg-red-50 p-4">
                    {result.whyAdsFail}
                  </p>
                </div>

                {/* Solution Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 uppercase">The Fix</span>
                    <h3 className="font-bold text-2xl uppercase tracking-tight">Recommended Strategy</h3>
                  </div>
                  <div className="bg-zinc-100 p-6 border-l-4 border-black">
                    <h4 className="font-heading text-3xl mb-2">{result.streetConcept}</h4>
                    <p className="text-xl italic text-zinc-600 mb-4">{result.hookExample}</p>
                    <div className="flex items-start gap-2 text-sm font-bold text-zinc-500 uppercase tracking-widest">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span>Trust Factor: {result.trustFactor}</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center pt-8 border-t-2 border-zinc-200">
                  <p className="font-bold text-lg mb-6">Want us to film this exact concept for you in Kochi?</p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                      href={`https://wa.me/918893317488?text=I%20just%20ran%20an%20audit%20for%20my%20${result.name}%20brand.%20I%20want%20to%20try%20the%20${encodeURIComponent(result.streetConcept)}%20concept.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#FFE500] text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors border-2 border-black shadow-[4px_4px_0px_0px_#000000]"
                    >
                      Book This Pilot
                    </a>
                    <button 
                      onClick={() => setResult(null)}
                      className="text-zinc-500 underline uppercase tracking-widest text-sm hover:text-black"
                    >
                      Audit Another Brand
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  )
}