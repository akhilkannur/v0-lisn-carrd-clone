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
  title: "LISN - UGC & Event Video Agency for Indian DTC Brands",
  description:
    "The premier UGC & Event Video Agency in India. We help DTC brands scale with authentic street interviews, regional ad creatives (Malayalam), and viral content assets.",
  metadataBase: new URL("https://lisnagency.online"),
  keywords: [
    "UGC Marketing Kerala",
    "Influencer Marketing Kerala",
    "Influencer Marketing Kochi",
    "UGC Agency Kochi",
    "Best Ad Agency Kerala",
    "UGC Agency India",
    "Street Interview Ads",
    "DTC Marketing India",
    "UGC Video Production Kerala",
    "Malayalam Ad Creatives",
    "South India Marketing Strategy",
    "Performance UGC India",
    "Event Video Agency India",
    "Kochi Marketing Company",
    "Malayalam Social Media Marketing",
  ],
  alternates: {
    canonical: "https://lisnagency.online",
  },
  openGraph: {
    title: "LISN - UGC & Event Video Agency for DTC Brands",
    description:
      "Stop running boring ads. We capture real street interviews and authentic moments that convert. Specializing in Kerala & South Indian markets for DTC brands.",
    url: "https://lisnagency.online",
    siteName: "LISN Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/momentscaptured.jpg",
        width: 1200,
        height: 630,
        alt: "LISN Agency - Authentic UGC & Event Video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LISN - UGC & Event Video Agency India",
    description: "Real street interviews and authentic UGC that scales DTC brands. Kerala & Bangalore specialists.",
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
              "description": "Video production and UGC agency specializing in street interviews and event coverage for Indian DTC brands targeting the Kerala and South Indian markets.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Kerala",
                "addressCountry": "IN"
              },
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
