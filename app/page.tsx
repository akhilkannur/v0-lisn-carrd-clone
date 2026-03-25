import { Metadata } from "next"
import UGCClient from "./ugc-home-client"

export const metadata: Metadata = {
  title: "UGC Marketing Kerala | Street Interview Ads | Lisn Agency",
  description: "The #1 UGC Marketing Agency in Kerala. We specialize in authentic street interview ads and Malayalam creatives for Indian DTC brands to lower CAC and build trust.",
  keywords: [
    "UGC Marketing Kerala",
    "Influencer Marketing Kerala",
    "Influencer Marketing Kochi",
    "UGC Agency Kochi",
    "Street Interview Ads India",
    "Malayalam Ad Creatives",
    "DTC Marketing India",
    "Kochi Marketing Company",
    "South India Marketing Strategy",
    "Authentic Content Kochi",
  ],
  alternates: {
    canonical: "https://lisnagency.online",
  },
  openGraph: {
    title: "UGC & Street Interview Ad Agency Kerala | Lisn Agency",
    description: "Stop running boring, scripted ads. We capture real reactions that convert. The premier UGC partner for Indian DTC brands.",
    type: "website",
    url: "https://lisnagency.online",
    images: [
      {
        url: "/images/screenshot-202025-12-04-2023.png",
        width: 1200,
        height: 630,
        alt: "UGC Marketing Kerala - Authentic Street Interviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC & Street Interview Ad Agency Kerala",
    description: "Real street interviews and authentic UGC that scales DTC brands. Kerala & Bangalore specialists.",
    images: ["/images/screenshot-202025-12-04-2023.png"],
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "LISN Agency",
        "image": "https://lisnagency.online/lisn-logo.gif",
        "description": "UGC Marketing Agency specializing in street interviews and regional Malayalam ad creatives for Indian DTC brands.",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Kerala",
          "addressCountry": "IN"
        },
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
        "name": "UGC Marketing & Street Interview Ads",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LISN Agency"
        },
        "areaServed": [
          { "@type": "City", "name": "Kochi" },
          { "@type": "State", "name": "Kerala" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "Country", "name": "India" }
        ],
        "description": "High-converting street interview ad creatives for DTC brands in India, focusing on regional Malayalam content for the South Indian market."
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UGCClient />
    </>
  )
}
