import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Insights & Strategy | LISN Agency Blog",
  description: "Unfiltered insights on UGC, Street Interviews, and how digital marketing is changing in India. Read our latest thoughts.",
  alternates: {
    canonical: "https://lisnagency.online/blog",
  },
  openGraph: {
    title: "Marketing Insights & Strategy | LISN Agency Blog",
    description: "Unfiltered insights on UGC, Street Interviews, and how digital marketing is changing in India.",
    type: "website",
    url: "https://lisnagency.online/blog",
    images: [
      {
        url: "/images/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LISN Agency Blog - Marketing Insights & Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Insights & Strategy | LISN Agency Blog",
    description: "Unfiltered insights on UGC, Street Interviews, and how digital marketing is changing in India.",
    images: ["/images/blog-og-image.jpg"],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
