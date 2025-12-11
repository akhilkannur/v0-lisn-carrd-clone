import { Metadata } from "next"
import BlogClient from "./blog-client"

export const metadata: Metadata = {
  title: "DTC Marketing Insights & Strategy | LISN Agency",
  description: "Unfiltered thoughts on marketing, UGC, and the changing landscape of attention in India. Featuring industry-specific ad playbooks.",
}

export default function BlogPage() {
  return <BlogClient />
}
