import { Metadata } from "next"
import BlogClient from "./blog-client"

export const metadata: Metadata = {
  title: "DTC Marketing Insights & Strategy | LISN Agency",
  description: "Unfiltered thoughts on marketing, UGC, and the changing landscape of attention in India. Featuring industry-specific ad playbooks.",
  openGraph: {
    title: "DTC Marketing Insights & Strategy | LISN Agency",
    description: "Unfiltered thoughts on marketing, UGC, and the changing landscape of attention in India.",
    type: "website",
    url: "https://lisnagency.online/blog",
    images: [
      {
        url: "/images/blog-og-image.jpg", // Placeholder - will need to create this image
        width: 1200,
        height: 630,
        alt: "LISN Agency Blog - Marketing Insights & Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DTC Marketing Insights & Strategy",
    description: "Unfiltered thoughts on marketing, UGC, and the changing landscape of attention in India.",
    images: ["/images/blog-og-image.jpg"], // Placeholder - will need to create this image
  },
}

export default function BlogPage() {
  return <BlogClient />
}
