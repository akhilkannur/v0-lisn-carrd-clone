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
  title: "LISN - Event Video Agency | Kerala & India",
  description:
    "Real people, real stories. Professional event video production and UGC street interviews. We turn live events into viral content.",
  metadataBase: new URL("https://lisn.agency"),
  keywords: [
    "Event Video Agency",
    "UGC India",
    "Street Interviews Kerala",
    "Video Production Kerala",
    "Viral Content Marketing",
    "Corporate Event Video",
  ],
  openGraph: {
    title: "LISN - Event Video Agency",
    description:
      "Real people, real stories. We capture your live events and street interviews to create viral content.",
    url: "https://lisn.agency",
    siteName: "LISN Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LISN - Event Video Agency",
    description: "Professional event video production and UGC street interviews.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
