import { Metadata } from "next"
import HooksClient from "./hooks-client"

export const metadata: Metadata = {
  title: "50+ Viral Ad Hooks for Indian D2C Brands | Copy & Paste Library",
  description: "A free library of high-converting opening lines for Instagram Reels and YouTube Shorts ads. Tailored for the Indian market (Skincare, Fashion, Food, Tech).",
  openGraph: {
    title: "The Viral Hook Library for Indian Founders",
    description: "Don't know how to start your ad? Steal these 50+ scripts.",
  }
}

export default function HooksPage() {
  return <HooksClient />
}
