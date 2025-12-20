"use client";

import { AmazonCalculator } from "@/components/amazon-calculator";
import { Header } from "@/components/header";
import { Marquee } from "@/components/marquee";

export default function AmazonCalculatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4 font-heading uppercase tracking-tight">Free Tool: Amazon India Profit Calculator</h1>
            <p className="text-gray-600">
                This is a free utility for e-commerce sellers to estimate their Amazon FBA fees and bank settlement. 
                It is <span className="font-bold">not</span> a pricing calculator for our video agency services.
            </p>
        </div>
        <AmazonCalculator />
      </main>
      <Marquee text="FREE SELLER TOOL • AMAZON FBA CALCULATOR • ESTIMATE YOUR MARGINS" className="mt-12" />
    </>
  );
}
