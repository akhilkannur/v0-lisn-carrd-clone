import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { MessageSquare, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "UGC Pricing India 2026 | How Much Do Street Interview Ads Cost? | LISN",
  description:
    "How much does UGC content cost in India in 2026? A transparent breakdown of UGC video and street interview ad pricing — per video, per shoot and per month — for DTC brands in Bangalore, Kochi and across India.",
  keywords: [
    "UGC Pricing India",
    "UGC video cost India",
    "how much does UGC cost in India",
    "street interview ad pricing",
    "UGC agency pricing Bangalore",
    "UGC content rate card India",
    "UGC video production cost",
  ],
  alternates: {
    canonical: "https://lisnagency.online/ugc-pricing",
  },
  openGraph: {
    title: "UGC Pricing India 2026 | Street Interview Ad Costs Explained",
    description:
      "A transparent 2026 breakdown of UGC and street interview ad pricing for Indian DTC brands. Per video, per shoot and per month.",
    type: "article",
    url: "https://lisnagency.online/ugc-pricing",
    images: [
      {
        url: "/momentscaptured.jpg",
        width: 1200,
        height: 630,
        alt: "UGC Pricing India - Street Interview Ad Costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Pricing India 2026 | Street Interview Ad Costs",
    description: "How much does UGC content cost in India? A transparent 2026 breakdown for DTC brands.",
    images: ["/momentscaptured.jpg"],
  },
}

const tiers = [
  {
    name: "Per Video (Standard UGC)",
    price: "₹5,000 – ₹15,000",
    unit: "per edited video",
    points: [
      "Single creator, filmed vertical (9:16)",
      "1–2 hooks per video",
      "Best for topping up an existing ad account",
    ],
  },
  {
    name: "Street Interview Pilot",
    price: "₹40,000 – ₹90,000",
    unit: "per shoot day",
    points: [
      "5–10 fully edited ad creatives from one session",
      "Real unscripted reactions on the streets of Bangalore or Kochi",
      "Multiple hooks to A/B test (blind test, price guess, honest review)",
      "The most cost-effective way to start",
    ],
    featured: true,
  },
  {
    name: "Monthly Creative Retainer",
    price: "₹1,20,000+",
    unit: "per month",
    points: [
      "15–20+ fresh creatives every month",
      "Continuous hook & format testing to lower CAC",
      "Priority for brands spending ₹5L+/month on paid social",
    ],
  },
]

const faqs = [
  {
    q: "How much does UGC content cost in India?",
    a: "In 2026, a single UGC video in India typically costs between ₹5,000 and ₹35,000. The price depends on the creator's experience, production quality (iPhone vs DSLR), whether you need full commercial usage rights, and the language. Vernacular specialists (e.g. Malayalam or Kannada) sit at the higher end. Agencies usually charge 1.5–2x the direct creator rate because they handle scripting, casting, editing and project management.",
  },
  {
    q: "How much does a street interview ad shoot cost?",
    a: "Street interview UGC is priced per shoot day rather than per creator, because a single session produces reactions from many people. A pilot day that yields 5–10 fully edited ad creatives typically costs between ₹40,000 and ₹90,000 depending on location, edit complexity and turnaround. This is far cheaper per usable asset than commissioning individual creators.",
  },
  {
    q: "Why is street interview UGC cheaper per asset than influencer marketing?",
    a: "With influencer marketing you pay for one person's audience and one piece of content. In a single street interview session we capture dozens of real reactions and cut them into many different ad variations. Your cost-per-creative drops dramatically, and because the people are real and unpaid, the content converts better than a scripted influencer read.",
  },
  {
    q: "How many videos should a DTC brand start with?",
    a: "We recommend starting with a pilot of 5–10 creatives. Meta's algorithm feeds on fresh creative, so you need enough variety to properly A/B test hooks and identify winners. Once you find a winning angle, a monthly retainer keeps the pipeline full and prevents ad fatigue.",
  },
  {
    q: "Do you offer UGC in regional languages like Malayalam and Kannada?",
    a: "Yes. LISN is based in Bangalore with a studio in Kochi, so we specialise in authentic vernacular content — Malayalam street interviews for the Kerala market and Kannada/English for Bangalore. Localised creative consistently outperforms translated national ads in South India.",
  },
  {
    q: "What determines the final price of a UGC project?",
    a: "Five levers move the price the most: (1) number of edited creatives, (2) production quality, (3) usage rights and exclusivity, (4) language and location, and (5) turnaround speed. Tell us your monthly ad spend and target CAC and we'll work backwards to a realistic budget.",
  },
]

export default function UGCPricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "UGC Pricing in India 2026: How Much Do Street Interview Ads Cost?",
        description:
          "A transparent breakdown of UGC video and street interview ad pricing for Indian DTC brands in 2026.",
        author: { "@type": "Organization", name: "LISN Agency" },
        publisher: {
          "@type": "Organization",
          name: "LISN Agency",
          logo: { "@type": "ImageObject", url: "https://lisnagency.online/lisn-logo.gif" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://lisnagency.online/ugc-pricing" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://lisnagency.online" },
          { "@type": "ListItem", position: 2, name: "UGC Pricing", item: "https://lisnagency.online/ugc-pricing" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="overflow-hidden font-sans bg-black text-white">
        {/* Hero */}
        <section className="relative px-4 pt-20 pb-16 md:pt-28 md:pb-24 border-b-4 border-white text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#FFE500] font-bold uppercase tracking-widest mb-6 text-sm">2026 Pricing Guide</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl mb-8 uppercase tracking-tighter leading-[0.9]">
              How Much Does <span className="text-[#FFE500]">UGC</span> Cost in India?
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
              A transparent breakdown of UGC video and <strong>street interview ad</strong> pricing for Indian DTC
              brands — per video, per shoot and per month. Bangalore, Kochi &amp; across India.
            </p>
          </div>
        </section>

        <Marquee text="UGC PRICING INDIA • STREET INTERVIEW ADS • TRANSPARENT RATES • LOWER CAC" />

        {/* Quick answer for featured snippet */}
        <section className="bg-white text-black px-4 py-14 md:py-20 border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl mb-6 uppercase tracking-tight">The Short Answer</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-bold mb-4">
              In 2026, a single UGC video in India costs roughly <span className="bg-[#FFE500] px-2">₹5,000 – ₹35,000</span>,
              while a street interview pilot that produces 5–10 finished ad creatives costs about{" "}
              <span className="bg-[#FFE500] px-2">₹40,000 – ₹90,000</span> per shoot day.
            </p>
            <p className="text-lg leading-relaxed text-zinc-700">
              Prices vary with creator tier, production quality, usage rights, language and turnaround. Below is how the
              numbers actually break down, and how to pick the right option for your ad budget.
            </p>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="bg-black px-4 py-16 md:py-24 border-b-4 border-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-6xl mb-12 uppercase tracking-tight text-center">
              UGC Pricing <span className="text-[#FFE500]">Tiers</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`p-8 border-4 ${
                    tier.featured
                      ? "bg-[#FFE500] text-black border-black shadow-[12px_12px_0px_0px_#ffffff]"
                      : "bg-zinc-900 text-white border-white"
                  }`}
                >
                  {tier.featured && (
                    <div className="font-mono text-xs uppercase tracking-widest mb-3">Most Popular</div>
                  )}
                  <h3 className="font-bold text-2xl mb-2">{tier.name}</h3>
                  <div className="font-heading text-3xl md:text-4xl mb-1">{tier.price}</div>
                  <div className="text-sm opacity-70 mb-6 font-mono">{tier.unit}</div>
                  <ul className="space-y-3">
                    {tier.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-base leading-snug">
                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${tier.featured ? "text-black" : "text-[#FFE500]"}`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-zinc-500 text-sm mt-8 font-mono max-w-2xl mx-auto">
              Indicative market ranges for 2026. Your exact quote depends on scope — message us with your ad spend for a
              custom number.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white text-black px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-6xl mb-12 uppercase tracking-tight">
              UGC Pricing <span className="bg-[#FFE500] px-2">FAQs</span>
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-100 p-6 md:p-8 border-l-4 border-[#FFE500]">
                  <h3 className="font-bold text-xl md:text-2xl mb-3">{faq.q}</h3>
                  <p className="text-base md:text-lg leading-relaxed text-zinc-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black px-4 py-16 md:py-24 text-center">
          <h2 className="font-heading text-4xl md:text-6xl text-white mb-8 uppercase tracking-tighter">
            Get a <span className="text-[#FFE500]">Custom Quote</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Tell us your product and monthly ad spend. We'll send back a realistic budget and a few street interview
            concepts within a day.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="https://wa.me/918893317488"
              className="bg-[#FFE500] text-black px-10 py-5 font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors border-4 border-transparent shadow-[4px_4px_0px_0px_#ffffff] flex items-center gap-3"
            >
              <MessageSquare className="w-6 h-6" />
              Get My Quote
            </Link>
            <Link href="/audit" className="text-white underline font-bold hover:text-[#FFE500] transition-colors">
              Or get a free UGC audit first →
            </Link>
          </div>
          <p className="text-zinc-500 uppercase tracking-widest text-sm mt-12">
            LISN Agency • UGC & Street Interview Ads • Bangalore &amp; Kochi
          </p>
        </section>
      </main>
    </>
  )
}
