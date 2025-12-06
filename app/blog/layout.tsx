import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing Insights & Strategy | LISN Agency Blog",
  description: "Unfiltered insights on UGC, Street Interviews, and the changing landscape of digital marketing in India. Read our latest thoughts.",
  openGraph: {
    title: "Marketing Insights & Strategy | LISN Agency Blog",
    description: "Unfiltered insights on UGC, Street Interviews, and the changing landscape of digital marketing in India.",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
