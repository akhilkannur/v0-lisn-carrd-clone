import { Metadata } from "next"
import HooksClient from "./hooks-client"

export const metadata: Metadata = {
  title: "50+ Viral Ad Hooks for Indian D2C Brands | Copy & Paste Library",
  description: "A free library of high-converting opening lines for Instagram Reels and YouTube Shorts ads. Tailored for the Indian market (Skincare, Fashion, Food, Tech).",
  openGraph: {
    title: "The Viral Hook Library for Indian Founders",
    description: "Don't know how to start your ad? Steal these 50+ scripts.",
    type: "website",
    url: "https://lisnagency.online/hooks",
    images: [
      {
        url: "/images/hooks-og-image.jpg", // Placeholder - will need to create this image
        width: 1200,
        height: 630,
        alt: "Viral Hook Library for Indian D2C Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "50+ Viral Ad Hooks for Indian D2C Brands",
    description: "A free library of high-converting opening lines for Instagram Reels and YouTube Shorts ads.",
    images: ["/images/hooks-og-image.jpg"], // Placeholder - will need to create this image
  },
}

export default function HooksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            "name": "Viral Hooks",
            "item": "https://lisnagency.online/hooks"
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
      <HooksClient />
    </>
  )
}
