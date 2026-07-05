import { Metadata } from "next"
import IdeasClient from "./ideas-client"

export const metadata: Metadata = {
  title: "Onam Marketing Angles & Strategy for Brands 2025 | Idea Repository | Lisn Agency",
  description: "Onam drives ₹1,100+ crore in ad spend and 20-30% retail consumption spike. Browse six research-backed Onam marketing angles for national brands targeting Kerala — from the 10-day calendar to the diaspora opportunity. Based on 2025 market data.",
  keywords: [
    "Onam marketing strategy",
    "Kerala festive ad spend 2025",
    "Onam campaign ideas for brands",
    "Malayali audience marketing",
    "Kerala festival advertising",
    "Onam content strategy",
    "Kerala D2C marketing agency",
    "Malayalam influencer marketing",
    "Onam 2025 ad spend trends",
    "brand marketing Kerala",
  ],
  openGraph: {
    title: "Onam Marketing Angles for Brands | Research-Backed Idea Repository",
    description: "Six research-backed Onam angles for national brands that want a real share of Kerala's ₹1,100+ crore festive ad market. Based on 2025 data.",
    type: "website",
    url: "https://lisnagency.online/onam-ideas",
    images: [
      {
        url: "/images/screenshot-2025-12-04-2023.png",
        width: 1200,
        height: 630,
        alt: "Onam Marketing Strategy for Indian Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onam Marketing Angles for Brands | Research-Backed Idea Repository",
    description: "Six research-backed Onam angles for national brands targeting Kerala. ₹1,100cr ad spend. 20-30% consumption spike. Based on 2025 data.",
    images: ["/images/screenshot-2025-12-04-2023.png"],
  },
}

export default function OnamIdeasPage() {
  return <IdeasClient />
}
