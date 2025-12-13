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
    "Stop boring your audience. LISN is the premier Event Video & UGC Agency in Kerala. We capture real street interviews and authentic moments that go viral.",
  metadataBase: new URL("https://lisnagency.online"),
  keywords: [
    "Event Video Agency",
    "UGC India",
    "Street Interviews Kerala",
    "Video Production Kerala",
    "Content Marketing",
    "Corporate Event Video",
    "Viral Marketing India",
  ],
  openGraph: {
    title: "LISN - Event Video Agency | Real People, Real Stories",
    description:
      "We don't just film events; we capture the energy. From high-impact street interviews to cinematic event documentation, we turn your brand activations into viral content assets.",
    url: "https://lisnagency.online",
    siteName: "LISN Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/momentscaptured.jpg",
        width: 1200,
        height: 630,
        alt: "LISN Agency - Real Moments Captured",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LISN - Event Video Agency",
    description: "Stop boring your audience. We capture real street interviews and authentic moments that go viral.",
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
