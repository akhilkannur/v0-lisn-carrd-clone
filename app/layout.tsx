import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Dela_Gothic_One } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _dela_gothic_one = Dela_Gothic_One({
  weight: "400", // Dela Gothic One only has one weight
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "LISN - UGC & Street Interview Ad Agency India | Bangalore & Kochi",
  description:
    "LISN is a UGC & street interview ad agency for Indian DTC brands — based in Bangalore with a Kochi studio. We produce authentic street interviews and regional (Malayalam) ad creatives that lower CAC.",
  metadataBase: new URL("https://lisnagency.online"),
  keywords: [
    "UGC Agency India",
    "UGC Agency Bangalore",
    "UGC Agency Kochi",
    "Street Interview Ads India",
    "UGC Video Production India",
    "UGC Marketing Agency Bangalore",
    "Best UGC Agency India",
    "D2C Ad Agency India",
    "Vox Pop Ad Agency",
    "Malayalam Ad Creatives",
    "Performance UGC India",
    "Video Ad Agency Bangalore",
    "Event Video Agency India",
    "UGC agency for DTC brands",
  ],
  alternates: {
    canonical: "https://lisnagency.online",
  },
  openGraph: {
    title: "LISN - UGC & Street Interview Ad Agency | Bangalore & Kochi",
    description:
      "Stop running boring ads. We capture real street interviews and authentic moments that convert. UGC agency for Indian DTC brands — Bangalore & Kochi.",
    url: "https://lisnagency.online",
    siteName: "LISN Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/momentscaptured.jpg",
        width: 1200,
        height: 630,
        alt: "LISN Agency - Authentic UGC & Street Interview Ads",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LISN - UGC & Street Interview Ad Agency India",
    description: "Real street interviews and authentic UGC that scales DTC brands. Bangalore & Kochi specialists.",
    images: ["/momentscaptured.jpg"],
  },
  icons: {
    icon: "/lisn-logo.gif",
    shortcut: "/lisn-logo.gif",
    apple: "/lisn-logo.gif",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.variable} ${_geistMono.variable} ${_dela_gothic_one.variable} font-sans antialiased`}>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7BXE8S1SJS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7BXE8S1SJS');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "LISN Agency",
              "image": "https://lisnagency.online/lisn-logo.gif",
              "description": "UGC and street interview ad agency for Indian DTC brands. Based in Bangalore with a production base in Kochi, Kerala.",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Kochi",
                  "addressRegion": "Kerala",
                  "addressCountry": "IN"
                }
              ],
              "url": "https://lisnagency.online",
              "telephone": "+918893317488",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/yousaypeople/",
                "https://wa.me/918893317488"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918893317488",
                "contactType": "sales",
                "areaServed": "IN",
                "availableLanguage": ["en", "ml"]
              }
            })
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
