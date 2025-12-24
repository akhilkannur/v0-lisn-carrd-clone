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
  return <UGCClient />
}