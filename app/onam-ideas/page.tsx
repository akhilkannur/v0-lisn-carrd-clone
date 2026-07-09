import { Metadata } from "next"
import IdeasClient from "./ideas-client"

export const metadata: Metadata = {
  title: "Onam Marketing & Malayalam Ad Strategy for Brands 2026 | LISN Agency",
  description: "Planning your Onam 2026 campaign? Onam drives ₹1,100+ crore in ad spend and a 20-30% retail consumption spike. Six research-backed Onam marketing angles and Malayalam ad strategies for national brands targeting Kerala — from the 10-day calendar to the diaspora.",
  keywords: [
    "Onam marketing strategy 2026",
    "Onam advertising Kerala",
    "Malayalam ad agency",
    "Onam campaign ideas for brands",
    "Onam 2026 ad campaign",
    "Malayalam ad creatives for brands",
    "Kerala festival advertising",
    "Onam brand campaign agency",
    "Malayalam influencer marketing",
    "how to advertise during Onam",
    "Kerala festive ad spend",
  ],
  alternates: {
    canonical: "https://lisnagency.online/onam-ideas",
  },
  openGraph: {
    title: "Onam 2026 Marketing & Malayalam Ad Strategy for Brands",
    description: "Six research-backed Onam angles for national brands that want a real share of Kerala's ₹1,100+ crore festive ad market. Plan your Onam 2026 campaign.",
    type: "website",
    url: "https://lisnagency.online/onam-ideas",
    images: [
      {
        url: "/images/screenshot-2025-12-04-2023.png",
        width: 1200,
        height: 630,
        alt: "Onam 2026 Marketing & Malayalam Ad Strategy for Indian Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onam 2026 Marketing & Malayalam Ad Strategy for Brands",
    description: "Six research-backed Onam angles for national brands targeting Kerala. ₹1,100cr ad spend. 20-30% consumption spike.",
    images: ["/images/screenshot-2025-12-04-2023.png"],
  },
}

export const onamFaqs = [
  {
    q: "When is Onam 2026?",
    a: "Onam 2026 is celebrated in the Malayalam month of Chingam. The main day, Thiruvonam, falls on 26 August 2026, with the 10-day festival running from Atham (roughly mid-August) through Thiruvonam. Brands typically start their Onam campaigns 3–4 weeks before Thiruvonam to capture the pre-festival shopping surge.",
  },
  {
    q: "How much do brands spend on Onam advertising in Kerala?",
    a: "Onam ad spend in Kerala crosses ₹1,100 crore and grows 15–20% year on year. The season triggers a 20–30% spike in retail consumption, with jewellery alone doing ₹7,000–8,000 crore and garments an estimated ₹30,000–40,000 crore in a single Onam season. It is the single biggest advertising and consumption window in the Kerala calendar.",
  },
  {
    q: "Why do national brands' Onam campaigns fail in Kerala?",
    a: "Most national brands brief a generic 'Happy Onam' graphic with a Kathakali face and formal, translated Malayalam. Kerala has India's highest literacy rate (96.2%) and a highly media-literate audience that instantly spots inauthentic content. Winning Onam campaigns use natural Manglish, reference current-year specifics, and are built for how Malayalis actually consume media — including long-form YouTube.",
  },
  {
    q: "What kind of ad creative works best for Onam?",
    a: "A mix: long-form Malayalam YouTube reviews for consideration (Malayali audiences over-index on long-form video), short-form Reels for awareness, and authentic street interviews / vox pop for social proof. A day-wise calendar across Uthradam, Thiruvonam and Avittam outperforms a single post on the main day.",
  },
  {
    q: "Can Onam campaigns also reach the Malayali diaspora?",
    a: "Yes. Over 4 million Malayalis live outside Kerala — 1.5M+ in Bangalore alone, plus Mumbai, the GCC and the West. Any Malayalam-language Onam content you produce reaches this diaspora too, making a single campaign effectively multi-market at the same production cost.",
  },
]

export default function OnamIdeasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Onam 2026 Marketing & Malayalam Ad Strategy for Brands",
        description:
          "Six research-backed Onam marketing angles and Malayalam ad strategies for national brands targeting Kerala's ₹1,100+ crore festive market.",
        author: { "@type": "Organization", name: "LISN Agency" },
        publisher: {
          "@type": "Organization",
          name: "LISN Agency",
          logo: { "@type": "ImageObject", url: "https://lisnagency.online/lisn-logo.gif" },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": "https://lisnagency.online/onam-ideas" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://lisnagency.online" },
          { "@type": "ListItem", position: 2, name: "Onam Marketing Ideas", item: "https://lisnagency.online/onam-ideas" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: onamFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <IdeasClient faqs={onamFaqs} />
    </>
  )
}
