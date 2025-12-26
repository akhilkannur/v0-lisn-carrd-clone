"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Info, Calculator, TrendingDown, TrendingUp } from "lucide-react"

export default function UGCROICalculator() {
  const [spend, setSpend] = useState(100000)
  const [studioCpm, setStudioCpm] = useState(450)
  const [ugcCpm, setUgcCpm] = useState(300)
  const [studioCtr, setStudioCtr] = useState(0.8)
  const [ugcCtr, setUgcCtr] = useState(2.4)
  const [cvv, setCvv] = useState(2) // Conversion Rate

  const [results, setResults] = useState({
    studioClicks: 0,
    ugcClicks: 0,
    studioCpc: 0,
    ugcCpc: 0,
    studioConversions: 0,
    ugcConversions: 0,
    studioCac: 0,
    ugcCac: 0,
    cacReduction: 0,
  })

  useEffect(() => {
    const studioImpressions = (spend / studioCpm) * 1000
    const ugcImpressions = (spend / ugcCpm) * 1000

    const studioClicks = (studioImpressions * studioCtr) / 100
    const ugcClicks = (ugcImpressions * ugcCtr) / 100

    const studioCpc = spend / studioClicks
    const ugcCpc = spend / ugcClicks

    const studioConversions = (studioClicks * cvv) / 100
    const ugcConversions = (ugcClicks * cvv) / 100

    const studioCac = spend / studioConversions
    const ugcCac = spend / ugcConversions

    const cacReduction = ((studioCac - ugcCac) / studioCac) * 100

    setResults({
      studioClicks: Math.round(studioClicks),
      ugcClicks: Math.round(ugcClicks),
      studioCpc: Number(studioCpc.toFixed(2)),
      ugcCpc: Number(ugcCpc.toFixed(2)),
      studioConversions: Math.round(studioConversions),
      ugcConversions: Math.round(ugcConversions),
      studioCac: Math.round(studioCac),
      ugcCac: Math.round(ugcCac),
      cacReduction: Math.round(cacReduction),
    })
  }, [spend, studioCpm, ugcCpm, studioCtr, ugcCtr, cvv])

  return (
    <div className="bg-black text-white p-4 md:p-8 border-4 border-white shadow-[16px_16px_0px_0px_#FFE500]">
      <div className="flex items-center gap-4 mb-8 border-b-4 border-[#FFE500] pb-6">
        <Calculator className="w-10 h-10 text-[#FFE500]" />
        <h2 className="font-heading text-3xl md:text-5xl uppercase tracking-tighter">UGC ROI ESTIMATOR</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-8">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-[#FFE500] mb-4">Monthly Ad Spend (₹)</label>
            <input 
              type="range" min="10000" max="1000000" step="10000" 
              value={spend} onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full accent-[#FFE500] bg-zinc-800"
            />
            <div className="flex justify-between mt-2 font-mono font-bold text-xl">
              <span>₹10k</span>
              <span className="text-[#FFE500]">₹{spend.toLocaleString()}</span>
              <span>₹1M</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-zinc-900 border-2 border-zinc-700">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Studio Ad CPM (₹)</label>
              <input 
                type="number" value={studioCpm} onChange={(e) => setStudioCpm(Number(e.target.value))}
                className="bg-transparent text-2xl font-bold w-full outline-none"
              />
              <p className="text-[10px] text-zinc-500 mt-2">Industry avg: ₹400-600</p>
            </div>
            <div className="p-4 bg-zinc-900 border-2 border-[#FFE500]">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#FFE500] mb-2">LISN Street UGC CPM (₹)</label>
              <input 
                type="number" value={ugcCpm} onChange={(e) => setUgcCpm(Number(e.target.value))}
                className="bg-transparent text-2xl font-bold w-full outline-none"
              />
              <p className="text-[10px] text-zinc-500 mt-2">Typical range: ₹250-400</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-zinc-900 border-2 border-zinc-700">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Studio Ad CTR (%)</label>
              <input 
                type="number" step="0.1" value={studioCtr} onChange={(e) => setStudioCtr(Number(e.target.value))}
                className="bg-transparent text-2xl font-bold w-full outline-none"
              />
            </div>
            <div className="p-4 bg-zinc-900 border-2 border-[#FFE500]">
              <label className="block text-[10px] font-mono uppercase tracking-widest text-[#FFE500] mb-2">Street UGC CTR (%)</label>
              <input 
                type="number" step="0.1" value={ugcCtr} onChange={(e) => setUgcCtr(Number(e.target.value))}
                className="bg-transparent text-2xl font-bold w-full outline-none"
              />
            </div>
          </div>

          <div className="p-4 bg-zinc-900 border-2 border-zinc-700">
            <label className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">Website Conversion Rate (%)</label>
            <input 
              type="number" step="0.1" value={cvv} onChange={(e) => setCvv(Number(e.target.value))}
              className="bg-transparent text-2xl font-bold w-full outline-none"
            />
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFE500] text-black p-8 relative overflow-hidden group">
            <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2 font-mono uppercase tracking-tighter font-bold">
                <TrendingDown className="w-5 h-5" /> Estimated CAC Reduction
              </div>
              <div className="text-7xl md:text-8xl font-heading leading-none">-{results.cacReduction}%</div>
              <p className="mt-4 font-bold text-lg leading-tight">By switching from glossy studio shoots to raw street interviews.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-6 border-2 border-zinc-800">
              <div className="text-[10px] font-mono text-zinc-500 uppercase mb-2">Current CAC</div>
              <div className="text-3xl font-bold">₹{results.studioCac}</div>
            </div>
            <div className="bg-zinc-900 p-6 border-2 border-[#FFE500]">
              <div className="text-[10px] font-mono text-[#FFE500] uppercase mb-2">Expected UGC CAC</div>
              <div className="text-3xl font-bold text-[#FFE500]">₹{results.ugcCac}</div>
            </div>
          </div>

          <div className="border-4 border-zinc-800 p-6 space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
              <span className="text-gray-400 font-mono text-sm uppercase">Monthly Orders</span>
              <div className="text-right">
                <div className="text-zinc-500 line-through text-xs">Studio: {results.studioConversions}</div>
                <div className="text-xl font-bold">UGC: {results.ugcConversions}</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 font-mono text-sm uppercase">Cost Per Click (CPC)</span>
              <div className="text-right">
                <div className="text-zinc-500 line-through text-xs">Studio: ₹{results.studioCpc}</div>
                <div className="text-xl font-bold text-[#FFE500]">UGC: ₹{results.ugcCpc}</div>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-zinc-500 italic mt-auto">
            *Estimates based on Meta Ad Benchmarks for Indian DTC (2024-25). Actual results vary by product-market fit and creative hook quality.
          </p>
        </div>
      </div>
    </div>
  )
}
