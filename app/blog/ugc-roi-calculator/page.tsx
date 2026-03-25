import { Header } from "@/components/header"
import UGCROICalculator from "@/components/ugc-roi-calculator"
import { ArrowLeft, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UGC Ad ROI Calculator | Estimate Your CAC Reduction",
  description: "Calculate how much you can reduce your CAC by switching from studio ads to raw street interview UGC. Free tool for Indian DTC brands.",
}

export default function UGCROIPage() {
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
                UGC ROI <span className="text-[#FFE500]">ESTIMATOR</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
                Is it worth the switch? Use our calculator to see how "native" street content impacts your CPMs, CTRs, and bottom-line CAC.
              </p>
            </header>

            <UGCROICalculator />

            <div className="mt-24 grid md:grid-cols-2 gap-12 border-t-4 border-zinc-800 pt-16">
              <div>
                <h3 className="font-heading text-3xl uppercase mb-6">Why the difference?</h3>
                <p className="text-gray-400 leading-relaxed text-lg mb-6">
                  Studio ads often carry a "Glance Tax." Because they look like commercials, users scroll past faster, driving up CPMs and lowering CTRs. 
                </p>
                <p className="text-gray-400 leading-relaxed text-lg">
                  Street interviews are "Native Camouflage." They look like content, not ads. This leads to higher retention, which the Meta algorithm rewards with lower costs and better distribution.
                </p>
              </div>
              <div className="bg-zinc-900 p-8 border-l-4 border-[#FFE500]">
                <h3 className="font-bold text-2xl mb-4">Ready to test these numbers?</h3>
                <p className="text-gray-400 mb-8">We're hitting the streets of Bangalore and Kochi next week. Get your pilot batch of raw, high-converting creative.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://wa.me/918893317488" className="bg-[#FFE500] text-black px-6 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" /> WhatsApp
                  </a>
                  <a href="tel:+918893317488" className="border-2 border-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-[#FFE500] hover:text-black hover:border-[#FFE500] transition-colors flex items-center gap-2">
                    <Phone className="w-5 h-5" /> Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-16 border-t-4 border-white text-center">
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency {new Date().getFullYear()} • UGC ROI Calculator</p>
        </section>
      </main>
    </>
  )
}
