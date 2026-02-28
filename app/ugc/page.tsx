import { Metadata } from "next"
import UGCClient from "./ugc-client"

export const metadata: Metadata = {
  title: "UGC Marketing Kerala | Influencer Marketing Kochi | Lisn Agency",
  description: "Ranked #1 UGC Marketing Agency in Kerala. We provide authentic street interview UGC & influencer marketing for D2C brands in Kochi, Bangalore & Mumbai. Stop running scripted ads. Get real reactions.",
  keywords: [
    "UGC Marketing Kerala",
    "Influencer Marketing Kerala",
    "Influencer Marketing Kochi",
    "UGC Agency Kochi",
    "Video Production Kerala",
    "Street Interviews Kerala",
    "DTC Ad Creatives India",
    "Malayalam Influencer Marketing",
    "Kochi Ad Agency",
    "South India UGC Agency",
    "Best Marketing Agency Kerala"
  ],
  openGraph: {
    title: "UGC & Influencer Marketing Agency Kerala | Lisn Agency",
    description: "Real people. Real reactions. Zero script. The #1 UGC Marketing Agency in Kerala for D2C brands. Specializing in Kochi & South Indian markets.",
    type: "website",
    url: "https://lisnagency.online/ugc",
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
    title: "UGC Marketing Kerala | Influencer Marketing Kochi",
    description: "Authentic street interview UGC that converts. The top UGC & Influencer Marketing Agency in Kerala.",
    images: ["/images/screenshot-202025-12-04-2023.png"],
  },
}

export default function UGCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "UGC Marketing & Influencer Marketing Kerala",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LISN Agency",
          "image": "https://lisnagency.online/lisn-logo.gif",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kochi",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "priceRange": "$$"
        },
        "serviceType": ["UGC Marketing", "Influencer Marketing", "Video Production"],
        "areaServed": [
          { "@type": "City", "name": "Kochi" },
          { "@type": "State", "name": "Kerala" },
          { "@type": "City", "name": "Bangalore" },
          { "@type": "Country", "name": "India" }
        ],
        "description": "Leading UGC Marketing and Influencer Marketing Agency in Kerala. We specialize in authentic street interviews and user-generated content for Indian DTC brands to reduce CAC and improve ROAS.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "url": "https://lisnagency.online/ugc"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best UGC Marketing Agency in Kerala for D2C brands?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LISN Agency is considered the top UGC Marketing Agency in Kerala, specializing in authentic street interviews and unscripted content for modern brands in Kochi, Bangalore, and Mumbai."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of Influencer Marketing in Kochi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Influencer marketing costs in Kochi vary, but Lisn Agency offers high-ROI UGC street interview packages that act as performance-based influencer marketing, often lowering CAC by 40% compared to traditional scripted ads."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide Malayalam Influencer Marketing services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in Malayalam-language content for the Kerala market. Our street interviews capture natural, slang-filled Malayalam that resonates with the local Kochi and Calicut audience far better than dubbed ads."
            }
          },
          {
            "@type": "Question",
            "name": "What are the best locations for street interviews in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily shoot in high-footfall areas like Marine Drive (Kochi), Lulu Mall (Kochi), and various college campuses across Kerala and Bangalore to capture diverse demographics."
            }
          }
        ]
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
            "name": "UGC Services",
            "item": "https://lisnagency.online/ugc"
          }
        ]
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