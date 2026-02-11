import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Insights & Strategy | LISN Agency Blog",
  description: "Unfiltered insights on UGC, Street Interviews, and the changing landscape of digital marketing in India. Read our latest thoughts.",
  openGraph: {
    title: "Marketing Insights & Strategy | LISN Agency Blog",
    description: "Unfiltered insights on UGC, Street Interviews, and the changing landscape of digital marketing in India.",
    type: "website",
    url: "https://lisnagency.online/blog",
    images: [
      {
        url: "/images/blog-og-image.jpg", // Placeholder - will need to create this image
        width: 1200,
        height: 630,
        alt: "LISN Agency Blog - Marketing Insights & Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Insights & Strategy | LISN Agency Blog",
    description: "Unfiltered insights on UGC, Street Interviews, and the changing landscape of digital marketing in India.",
    images: ["/images/blog-og-image.jpg"], // Placeholder - will need to create this image
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
