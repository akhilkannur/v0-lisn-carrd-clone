import { Metadata } from "next"
import UGCClient from "./ugc-home-client"

export const metadata: Metadata = {
  title: "UGC Agency India | Street Interview Ads | Bangalore & Kochi | LISN",
  description: "LISN is a UGC agency for Indian DTC brands, based in Bangalore with a Kochi studio. We produce authentic street interview ads and vernacular (Malayalam) creatives that lower CAC and build trust.",
  keywords: [
    "UGC Agency India",
    "UGC Agency Bangalore",
    "UGC Agency Kochi",
    "Street Interview Ads India",
    "UGC Video Production India",
    "UGC Marketing Agency Bangalore",
    "D2C Ad Agency India",
    "Vox Pop Ad Agency",
    "Malayalam Ad Creatives",
    "UGC agency for DTC brands",
    "Performance UGC India",
    "Video Ad Agency Bangalore",
  ],
  alternates: {
    canonical: "https://lisnagency.online",
  },
  openGraph: {
    title: "UGC Agency India | Street Interview Ad Agency | Bangalore & Kochi",
    description: "Stop running boring, scripted ads. We capture real street reactions that convert. UGC & street interview ad agency for Indian DTC brands — Bangalore & Kochi.",
    type: "website",
    url: "https://lisnagency.online",
    images: [
      {
        url: "/images/screenshot-2025-12-04-2023.png",
        width: 1200,
        height: 630,
        alt: "UGC Agency India - Authentic Street Interview Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC & Street Interview Ad Agency India | Bangalore & Kochi",
    description: "Real street interviews and authentic UGC that scales DTC brands. Bangalore & Kochi specialists.",
    images: ["/images/screenshot-2025-12-04-2023.png"],
  },
}

const faqs = [
  {
    q: "What is a street interview ad?",
    a: "A street interview ad (also called vox pop UGC) is a short video where real members of the public are stopped in high-footfall locations and asked genuine, unscripted questions about a product or category. Their raw reactions are edited into scroll-stopping ad creatives for Meta, Instagram and YouTube Shorts. Because the people are real and unpaid, the format carries social proof you cannot fake.",
  },
  {
    q: "How much does UGC content cost in India?",
    a: "In 2026, a single UGC video in India typically costs between ₹5,000 and ₹35,000 depending on creator tier, production quality, usage rights and language. Street interview UGC is usually priced per shoot day rather than per creator, and a pilot of 5–10 edited ad creatives is the most cost-effective way for a DTC brand to start testing. See our UGC pricing guide for a full breakdown.",
  },
  {
    q: "Where is LISN located?",
    a: "LISN is a UGC and street interview ad agency based in Bangalore, with a production base in Kochi, Kerala. We shoot street interviews across Bangalore and Kerala and work with DTC brands all over India.",
  },
  {
    q: "What is the difference between UGC and influencer marketing?",
    a: "Influencer marketing pays a creator for access to their audience and their endorsement. UGC (user-generated-style content) is about the asset itself — authentic-looking video you own and run as paid ads on your own channels. Street interview UGC goes a step further by capturing unscripted reactions from strangers, which converts better than a polished influencer read because it looks like real life, not an advertisement.",
  },
  {
    q: "Which industries do street interview ads work best for?",
    a: "Street interview UGC works best for high-trust, sensory or skeptical categories — skincare, F&B, coffee, perfume, supplements, jewellery and D2C brands that rely on social proof to convert. We publish detailed playbooks for 20+ categories.",
  },
]

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "LISN Agency",
        "image": "https://lisnagency.online/lisn-logo.gif",
        "description": "UGC and street interview ad agency for Indian DTC brands. Based in Bangalore with a production base in Kochi, Kerala.",
        "address": [
          {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          }
        ],
        "url": "https://lisnagency.online",
        "telephone": "+918893317488",
        "priceRange": "$$",
        "sameAs": [
          "https://www.instagram.com/yousaypeople/",
          "https://wa.me/918893317488"
        ]
      },
      {
        "@type": "Service",
        "name": "UGC & Street Interview Ad Production",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LISN Agency"
        },
        "areaServed": [
          { "@type": "City", "name": "Bangalore" },
          { "@type": "City", "name": "Kochi" },
          { "@type": "State", "name": "Karnataka" },
          { "@type": "State", "name": "Kerala" },
          { "@type": "Country", "name": "India" }
        ],
        "description": "High-converting street interview ad creatives and UGC for DTC brands across India, with vernacular (Malayalam) content for the South Indian market."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UGCClient faqs={faqs} />
    </>
  )
}
