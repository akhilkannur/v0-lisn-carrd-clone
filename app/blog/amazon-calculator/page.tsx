import { Header } from "@/components/header"
import AmazonCalculator from "@/components/amazon-calculator"
import { ArrowLeft, MessageSquare, Phone, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Amazon India Profit Calculator 2025 | FBA Fee Estimator",
  description: "Calculate your exact bank settlement for Amazon India. Updated for 2025 FBA fees, Referral fees, and GST. Optimize your margins for DTC growth.",
}

export default function AmazonCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans selection:bg-[#FFE500] selection:text-black">
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-[#FFE500] mb-12 transition-colors uppercase tracking-widest font-bold text-sm">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
            </Link>

            <header className="mb-16">
              <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
                AMAZON INDIA <br />
                <span className="text-[#FFE500]">PROFIT CALCULATOR</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                Updated for 2025. Calculate your net margin after FBA fees, referral commissions, and GST. Stop guessing your bank settlement.
              </p>
            </header>

            <AmazonCalculator />

            {/* The Strategy Bridge for Sellers */}
            <div className="mt-24 bg-zinc-900 border-4 border-[#FFE500] p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE500] blur-[120px] opacity-10"></div>
               
               <div className="relative z-10">
                 <h2 className="font-heading text-3xl md:text-5xl uppercase mb-8 leading-tight">
                   Healthy Margins? <br />
                   <span className="text-[#FFE500]">Now Fix Your ROAS.</span>
                 </h2>
                 
                 <div className="grid md:grid-cols-2 gap-12 mb-12">
                   <div className="space-y-6">
                      <div className="flex gap-4">
                        <TrendingUp className="text-[#FFE500] w-8 h-8 shrink-0" />
                        <p className="text-lg text-gray-300">
                          <strong>Higher CTR = Lower ACOS.</strong> Amazon's algorithm rewards listings that have high engagement. Our <strong>Street Interview UGC</strong> acts as the perfect "Main Image Video" to stop the scroll.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <AlertTriangle className="text-[#FFE500] w-8 h-8 shrink-0" />
                        <p className="text-lg text-gray-300">
                          <strong>Stop using generic renders.</strong> Indian shoppers on Amazon are skeptical. Showing a real person in <strong>Kochi or Bangalore</strong> using your product builds instant trust that a 3D render cannot.
                        </p>
                      </div>
                   </div>
                   <div className="bg-black p-6 border-l-4 border-[#FFE500]">
                      <p className="italic text-gray-400 mb-6 text-lg">
                        "We switched our Amazon ad creatives to Lisn's street reaction videos and saw a 40% jump in conversion rate within 14 days."
                      </p>
                      <p className="font-bold text-white">— DTC Brand Founder</p>
                   </div>
                 </div>

                 <div className="flex flex-col md:flex-row items-center gap-6">
                    <Link href="/ugc" className="w-full md:w-auto bg-[#FFE500] text-black px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors text-center">
                      View Amazon UGC Strategy →
                    </Link>
                    <a href="https://wa.me/918893317488" className="w-full md:w-auto border-2 border-white text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                      Get a Quote
                    </a>
                 </div>
               </div>
            </div>

            <div className="mt-24 border-t border-zinc-800 pt-16">
              <h3 className="font-heading text-3xl uppercase mb-8">How to use this calculator</h3>
              <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                <p>1. Enter your <strong>Selling Price</strong> (the price the customer pays on Amazon).</p>
                <p>2. Input your <strong>Product Cost (COGS)</strong> including manufacturing and packaging.</p>
                <p>3. Select your <strong>Category</strong> for accurate Referral Fee calculation.</p>
                <p>4. Check your <strong>FBA / Easy Ship</strong> tier. Note that 2025 weights and dimensions apply.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-16 border-t-4 border-white text-center">
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency 2025 • Amazon India Profit Calculator</p>
        </section>
      </main>
    </>
  )
}
