import { Metadata } from "next"
import UGCClient from "./ugc-client"

export const metadata: Metadata = {
  title: "UGC Agency India | High-Performance Video Ads & Street Interviews",
  description: "Looking for a UGC agency in India? We create high-converting video ads through authentic street interviews. Better than influencers, cheaper than studios.",
  openGraph: {
    title: "The Best UGC Agency Alternative in India",
    description: "Stop paying influencers for fake reviews. Get raw, high-performing street interview creatives that actually convert for Indian DTC brands.",
    type: "website",
  }
}

export default function UGCPage() {
  return <UGCClient />
}