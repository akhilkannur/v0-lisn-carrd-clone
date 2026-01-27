import { Metadata } from "next";
import { AmazonCalculator } from "@/components/amazon-calculator";
import { Header } from "@/components/header";
import { Marquee } from "@/components/marquee";

export const metadata: Metadata = {
  title: "Amazon FBA Calculator India 2025 | Exact Profit & Fee Estimator",
  description: "Free Amazon FBA calculator for Indian sellers. Calculate exact referral fees, closing fees, shipping, and GST. The most accurate profit estimator for Amazon India.",
  keywords: ["Amazon FBA Calculator India", "Amazon India Profit Calculator", "Amazon Referral Fee Calculator", "FBA Revenue Calculator India", "GST Calculator for Amazon Sellers"],
  openGraph: {
    title: "Amazon FBA Calculator India 2025",
    description: "Stop guessing your margins. Calculate your exact bank settlement from Amazon India.",
    type: "website",
  }
};

export default function AmazonCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 font-heading uppercase tracking-tight text-black">Free Tool: Amazon India Profit Calculator</h1>
            <p className="text-zinc-600 font-medium">
                This is a free utility for e-commerce sellers to estimate their Amazon FBA fees and bank settlement. 
            </p>
        </div>
        <AmazonCalculator />
      </main>
      <Marquee text="FREE SELLER TOOL • AMAZON FBA CALCULATOR • ESTIMATE YOUR MARGINS" className="mt-12" />
    </>
  );
}
