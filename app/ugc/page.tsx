import { Metadata } from "next"
import UGCClient from "./ugc-client"

export const metadata: Metadata = {
  title: "UGC Ad Creatives for Indian D2C Brands | Street Interviews",
  description: "Stop running polished ads. Get authentic street interview UGC that converts. We film in Kerala, Bangalore & Mumbai, capturing real reactions to your product. #1 Agency for localised ad creatives.",
  keywords: [
    "UGC India",
    "Street Interviews Kerala",
    "DTC Ad Creatives",
    "User Generated Content Agency",
    "Video Production Bangalore",
    "Malayalam Ads",
    "South India Marketing",
    "Social Proof Ads",
    "TikTok Style Ads India",
    "Reels Ad Agency"
  ],
  openGraph: {
    title: "High-Converting UGC Ads for Indian Brands",
    description: "Real people. Real reactions. Zero script. The only ad creative that beats banner blindness. Specializing in Kerala & South Indian markets.",
    type: "website",
    url: "https://lisnagency.online/ugc",
    images: [
      {
        url: "/images/screenshot-202025-12-04-2023.png",
        width: 1200,
        height: 630,
        alt: "Street Interviews in Kerala - Authentic UGC for DTC Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Ad Creatives for Indian D2C Brands",
    description: "Authentic street interview UGC that converts. Real reactions, zero script. Serving Kerala & Bangalore.",
    images: ["/images/screenshot-202025-12-04-2023.png"],
  },
}

export default function UGCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "UGC Video Production",
        "provider": {
          "@type": "LocalBusiness",
          "name": "LISN Agency",
          "image": "https://lisnagency.online/lisn-logo.gif",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
          },
          "priceRange": "$$"
        },
        "serviceType": "Video Production",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description": "Authentic street interviews and user-generated content (UGC) for Indian DTC brands to improve ad performance and reduce CAC.",
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
            "name": "What is Street Interview UGC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Street Interview UGC (User Generated Content) involves interviewing real people in public spaces to get their authentic reactions to your product or service. Unlike scripted ads, these videos build immediate trust and social proof."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer UGC in regional Indian languages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we specialize in regional content. We produce street interviews in Malayalam (for Kerala), Kannada (for Bangalore), and Hindi/English for pan-India campaigns."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to deliver the ads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our typical turnaround time is 5-7 days from the time we receive your product. This includes shooting, editing, and delivering multiple ad variations."
            }
          },
          {
            "@type": "Question",
            "name": "What markets do you cover for street interviews?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We primarily shoot in high-footfall areas of Kochi (Kerala) and Bangalore. These locations allow us to capture a diverse range of demographics suitable for most Indian DTC brands."
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