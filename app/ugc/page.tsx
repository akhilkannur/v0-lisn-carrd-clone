import { Metadata } from "next"
import UGCClient from "./ugc-client"

export const metadata: Metadata = {
  title: "UGC Ad Creatives for Indian D2C Brands | Street Interviews",
  description: "Stop running polished ads. Get authentic street interview UGC that converts. We film in Kerala & Bangalore, capturing real reactions to your product.",
  openGraph: {
    title: "High-Converting UGC Ads for Indian Brands",
    description: "Real people. Real reactions. Zero script. The only ad creative that beats banner blindness.",
    type: "website",
  }
}

export default function UGCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
    "description": " authentic street interviews and user-generated content (UGC) for Indian DTC brands to improve ad performance and reduce CAC.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "url": "https://lisnagency.online/ugc"
    }
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