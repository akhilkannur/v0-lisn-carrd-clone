import { AmazonCalculator } from "@/components/amazon-calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon India Profit Calculator (2025) | FBA & Easy Ship Fee Estimator",
  description: "Calculate your Amazon India selling fees, including referral, closing, and shipping charges. Estimate net profit and margin for 2024-2025.",
};

export default function AmazonCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <AmazonCalculator />
    </div>
  );
}
