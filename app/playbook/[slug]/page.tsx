import { industryPlaybooks } from "@/lib/industry-data"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { ArrowDown, Phone, MessageSquare, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return industryPlaybooks.map((industry) => ({
    slug: industry.slug,
  }))
}

export const dynamicParams = false

export default function PlaybookPage({ params }: { params: { slug: string } }) {
  const industry = industryPlaybooks.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="overflow-hidden font-sans bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4 pt-20 pb-16 border-b-4 border-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-black to-black z-0"></div>
          
          <div className="z-10 max-w-5xl mx-auto flex flex-col items-center justify-center relative">
            <div className="mb-6 animate-fade-in text-6xl md:text-8xl">
              {industry.emoji}
            </div>
            
            <h1 className="font-heading text-5xl md:text-8xl mb-8 uppercase tracking-tighter leading-[0.9]">
              THE <span className="text-[#FFE500]">{industry.name}</span>
              <br />
              AD PLAYBOOK
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Why traditional ads are failing your {industry.name.toLowerCase()} brand, and how 
              <span className="text-[#FFE500] font-bold"> Street Interviews</span> solve the 
              "{industry.painPoint}" problem.
            </p>

            <Link href="#strategy" className="bg-white text-black px-8 py-4 font-bold text-lg uppercase tracking-widest hover:bg-[#FFE500] transition-colors border-4 border-transparent hover:border-black flex items-center gap-2">
              See The Strategy <ArrowDown className="w-5 h-5" />
            </Link>
          </div>
        </section>

        <Marquee text={`${industry.name.toUpperCase()} MARKETING • STREET INTERVIEWS • AUTHENTICITY WINS`} />

        {/* The Problem Section */}
        <section id="strategy" className="bg-white text-black px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-6xl mb-8 uppercase tracking-tight">
                Why Your Ads
                <br />
                Are <span className="text-red-600">Failing</span>
              </h2>
              <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6">
                {industry.whyAdsFail}
              </p>
              <div className="p-6 bg-red-50 border-l-4 border-red-500">
                <p className="text-lg font-mono text-red-800">
                  ⚠️ The Consumer Mindset: <br/>
                  "Another polished ad? I don't trust it. Next."
                </p>
              </div>
            </div>
            <div className="relative">
               {/* Visual representation of a 'bad' ad vs 'good' ad could go here, for now text */}
               <div className="bg-zinc-100 p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
                  <h3 className="font-bold text-2xl mb-4">The Trust Gap</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="min-w-[24px] h-[24px] rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mt-1">✕</div>
                      <span className="text-lg">Studio Lighting = "Fake"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="min-w-[24px] h-[24px] rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mt-1">✕</div>
                      <span className="text-lg">Models = "Paid Actors"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="min-w-[24px] h-[24px] rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mt-1">✕</div>
                      <span className="text-lg">Scripted Copy = "Sales Pitch"</span>
                    </li>
                  </ul>
               </div>
            </div>
          </div>
        </section>

        {/* The Solution Section - Yellow */}
        <section className="bg-[#FFE500] text-black px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl md:text-7xl mb-6 uppercase tracking-tight">
                The Fix: <span className="text-white bg-black px-4">Social Proof</span>
              </h2>
              <p className="text-2xl font-bold">
                How we solve the "{industry.painPoint}" problem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Concept Card */}
              <div className="bg-black text-white p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_#ffffff]">
                <div className="text-[#FFE500] font-mono text-xl mb-4 uppercase tracking-widest">Winning Concept</div>
                <h3 className="font-heading text-3xl md:text-5xl mb-6 uppercase">
                  {industry.streetConcept}
                </h3>
                <p className="text-xl md:text-2xl italic text-gray-300 mb-8">
                  {industry.hookExample}
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#FFE500] w-8 h-8" />
                  <span className="font-bold text-lg">Authenticity Score: 10/10</span>
                </div>
              </div>

              {/* Logic Card */}
              <div className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_#000000]">
                <div className="text-zinc-500 font-mono text-xl mb-4 uppercase tracking-widest">Why It Works</div>
                <h3 className="font-heading text-3xl md:text-4xl mb-6 uppercase">
                  The Mirror Neuron Effect
                </h3>
                <p className="text-lg md:text-xl leading-relaxed mb-6">
                  {industry.trustFactor}
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-bold">
                  When a viewer sees a real person react, they subconsciously mirror that emotion. They "feel" the product through the screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black px-4 py-16 md:py-24 relative text-center">
            <h3 className="font-heading text-4xl md:text-6xl text-white mb-10 uppercase tracking-tighter">
              Ready to scale your
              <br />
              <span className="text-[#FFE500]">{industry.name} Brand?</span>
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <Link href="https://wa.me/918893317488" className="bg-[#FFE500] text-black px-8 py-4 md:px-12 md:py-6 font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors border-4 border-transparent shadow-[4px_4px_0px_0px_#ffffff] flex items-center gap-3">
                <MessageSquare className="w-6 h-6" />
                Get {industry.name} Concepts
              </Link>
            </div>
            
            <p className="text-zinc-500 uppercase tracking-widest text-sm">
              Lisn Agency • Specialized in {industry.name} UGC
            </p>
        </section>
      </main>
    </>
  )
}
