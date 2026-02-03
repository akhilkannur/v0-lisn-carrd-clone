import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UGC Street Interviews Kerala | LISN Agency",
  description: "We create authentic street interview ads in Kerala. No scripts, just real reactions from real people in Kochi, Trivandrum & Calicut. High-performing UGC for DTC brands.",
  openGraph: {
    title: "UGC Street Interviews Kerala | LISN Agency",
    description: "Authentic street reaction ads. We test your product with real people in Kerala to create high-converting UGC.",
    url: "https://lisnagency.online/ugc",
    images: [
      {
        url: "/images/screenshot-202025-12-04-2023.png",
        width: 1200,
        height: 630,
        alt: "Street Interviews in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGC Street Interviews Kerala | LISN Agency",
    description: "Authentic street reaction ads. We test your product with real people in Kerala to create high-converting UGC.",
    images: ["/images/screenshot-202025-12-04-2023.png"],
  },
  keywords: ["Street Interviews Kerala", "UGC Agency India", "Malayalam UGC", "Kochi Street Interviews", "DTC Marketing Kerala", "Viral Marketing India"],
}

export default function UGCLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
