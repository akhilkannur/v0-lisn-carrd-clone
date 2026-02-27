import { industryPlaybooks } from "@/lib/industry-data"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { ArrowDown, Phone, MessageSquare, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"

// Add PageProps interface for Next.js 15+ compatibility
interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const industry = industryPlaybooks.find((i) => i.slug === slug)

  if (!industry) return {}

  return {
    title: `${industry.name} Marketing Strategy India | UGC Video Ideas`,
    description: `How to market ${industry.name.toLowerCase()} brands in India. Why traditional ads fail and how Street Interviews solve the '${industry.painPoint}' problem.`,
    openGraph: {
      title: `${industry.name} Ad Strategy: Why Studio Shoots Fail`,
      description: `The playbook for scaling ${industry.name} brands in India using Street Interviews.`,
      type: "article",
      url: `https://lisnagency.online/playbook/${slug}`,
      images: [
        {
          url: "/images/playbook-og-image.jpg", // Placeholder - will need to create this image
          width: 1200,
          height: 630,
          alt: `${industry.name} Marketing Playbook for India`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.name} Marketing Strategy India`,
      description: `How to market ${industry.name.toLowerCase()} brands in India using Street Interviews.`,
      images: ["/images/playbook-og-image.jpg"], // Placeholder - will need to create this image
    },
  }
}

export function generateStaticParams() {
  return industryPlaybooks.map((industry) => ({
    slug: industry.slug,
  }))
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params
  const industry = industryPlaybooks.find((i) => i.slug === slug)

  if (!industry) {
    notFound()
  }

  // JSON-LD for the "Article" or "Guide"
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": `${industry.name} Marketing Playbook for India`,
        "description": `A strategic guide on using street interviews and UGC to market ${industry.name} products in India.`,
        "author": {
          "@type": "Organization",
          "name": "LISN Agency"
        },
        "publisher": {
          "@type": "Organization",
          "name": "LISN Agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://lisnagency.online/lisn-logo.gif"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://lisnagency.online/playbook/${slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lisnagency.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Playbooks",
            "item": "https://lisnagency.online/blog" // Point to blog where playbooks are listed
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${industry.name} Playbook`,
            "item": `https://lisnagency.online/playbook/${slug}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#FFE500] w-8 h-8" />
                    <span className="font-bold text-lg">Authenticity Score: 10/10</span>
                  </div>
                  <Link href="/ugc" className="text-[#FFE500] underline font-bold hover:text-white transition-colors">
                    See Street Interview Examples →
                  </Link>
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

        {/* Long-form Evergreen Content for Kerala Market Entry */}
        {industry.slug === 'kerala-market-entry' && (
          <section className="bg-white text-black px-4 py-16 md:py-24 border-b-4 border-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-6xl mb-12 uppercase tracking-tight border-b-4 border-black pb-4">
                KERALA MARKET <span className="text-[#FFE500] bg-black px-2">ENTRY CHECKLIST</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="font-heading text-6xl text-gray-200">01</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 uppercase">The Localization Audit</h3>
                    <p className="text-gray-600 leading-relaxed">Stop translating. Start localizing. Audit your existing website, packaging, and ads for "Formal Malayalam" (a death sentence). Ensure your copy uses the Manglish vernacular common in Kochi and Bangalore.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="font-heading text-6xl text-gray-200">02</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 uppercase">Establish "Street" Credibility</h3>
                    <p className="text-gray-600 leading-relaxed">Kerala is the most literate state in India; it's also the most skeptical. They don't want a celebrity endorsement from Mumbai. They want to see a guy at a tea shop in Kozhikode holding your product and giving a thumbs up.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="font-heading text-6xl text-gray-200">03</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 uppercase">Remittance-Driven Purchasing Power</h3>
                    <p className="text-gray-600 leading-relaxed">Target the "Gulf Money" demographic. Don't just target the 3 metros. Target Tier 2 towns like Malappuram, Thrissur, and Kottayam where the highest disposable income resides.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="font-heading text-6xl text-gray-200">04</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 uppercase">The "Premium-Value" Balance</h3>
                    <p className="text-gray-600 leading-relaxed">Malayalis will pay a premium, but they hate being "fleeced." Your content needs to emphasize durability, long-term value, and technical specifications over pure "vibe" or aesthetics.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Common FAQ Section for Content Density */}
        <section className="bg-zinc-100 text-black px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
             <h2 className="font-heading text-3xl md:text-5xl mb-12 uppercase tracking-tight">
                Common Questions about <br/>
                <span className="bg-[#FFE500] px-2">{industry.name} UGC</span>
             </h2>
             
             <div className="space-y-8">
                <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
                  <h3 className="font-bold text-xl mb-4">Why does street UGC work better for {industry.name.toLowerCase()}?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.name} is a high-trust category. Consumers are skeptical of polished studio ads because they know they are staged. Street interviews break that skepticism by showing real, unfiltered reactions from everyday people, which acts as powerful social proof.
                  </p>
                </div>

                <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
                   <h3 className="font-bold text-xl mb-4">How many videos do I get in a pilot?</h3>
                   <p className="text-gray-600 leading-relaxed">
                     In a standard pilot for {industry.name} brands, we deliver 5-10 fully edited ad creatives. This allows you to test different hooks (e.g., {industry.streetConcept}, Price Guessing, Blind Tests) to see which narrative drives the lowest CAC.
                   </p>
                </div>

                <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_#000000]">
                   <h3 className="font-bold text-xl mb-4">Do you use paid actors?</h3>
                   <p className="text-gray-600 leading-relaxed">
                     Never. The entire point of our agency is authenticity. We approach real strangers on the streets of Bangalore and Kochi. If they don't like the product, we film that too. That honesty is why our ads convert.
                   </p>
                </div>
             </div>

             <div className="mt-12 text-center">
                <Link href="/ugc" className="inline-block text-xl font-bold border-b-4 border-black hover:bg-[#FFE500] transition-colors px-4 py-2">
                   View our full UGC Street Interview Gallery →
                </Link>
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