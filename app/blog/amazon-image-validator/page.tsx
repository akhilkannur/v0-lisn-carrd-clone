"use client";

import { AmazonImageValidator } from "@/components/amazon-image-validator";
import { Header } from "@/components/header";
import { Marquee } from "@/components/marquee";

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
                Stop guessing. Check if your listing images meet Amazon India's 2025 technical standards for zoom, dimensions, and aspect ratio before you upload.
            </p>
        </div>
        <AmazonImageValidator />
      </main>
      <Marquee text="FREE SELLER TOOL • IMAGE DIMENSION CHECKER • A+ CONTENT GUIDE" className="mt-12" />
    </>
  );
}
