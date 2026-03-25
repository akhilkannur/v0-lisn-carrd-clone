import { Metadata } from "next";
import { AmazonImageValidator } from "@/components/amazon-image-validator";
import { Header } from "@/components/header";
import { Marquee } from "@/components/marquee";

export const metadata: Metadata = {
  title: "Amazon India Image Validator 2026 | Check Zoom & Dimensions",
  description: "Free tool to validate your Amazon listing images against 2026 technical standards. Check zoom capability, aspect ratio (1:1), and file size instantly.",
  keywords: ["Amazon Image Validator", "Amazon Listing Image Checker", "Amazon Zoom Checker", "E-commerce Image Optimization"],
  openGraph: {
    title: "Amazon India Image Validator",
    description: "Ensure your product images are zoom-ready and meet Amazon's strict guidelines.",
    type: "website",
    url: "https://lisnagency.online/blog/amazon-image-validator",
    images: [
      {
        url: "/images/amazon-validator-og-image.jpg", // Placeholder - will need to create this image
        width: 1200,
        height: 630,
        alt: "Amazon Image Validator - Check Your Listing Images",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon India Image Validator",
    description: "Ensure your product images are zoom-ready and meet Amazon's strict guidelines.",
    images: ["/images/amazon-validator-og-image.jpg"], // Placeholder - will need to create this image
  },
};

export default function AmazonImageValidatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading uppercase tracking-tight text-black">
              Amazon.in <span className="text-[#FFE500] bg-black px-2">Image Validator</span>
            </h1>
            <p className="text-zinc-600 font-medium text-lg max-w-2xl mx-auto">
                Stop guessing. Check if your listing images meet Amazon India's 2026 technical standards for zoom, dimensions, and aspect ratio before you upload.
            </p>
        </div>
        <AmazonImageValidator />
      </main>
      <Marquee text="FREE SELLER TOOL • IMAGE DIMENSION CHECKER • A+ CONTENT GUIDE" className="mt-12" />
    </>
  );
}
