import { Metadata } from "next"
import EventsClient from "./events-client"

export const metadata: Metadata = {
  title: "Event Video & Documentation Agency India | Lisn Agency",
  description: "Cinematic documentation of brand activations, workshops, and high-impact corporate events across India. We capture the energy and soul of your brand events.",
  openGraph: {
    title: "Event Video & Documentation Agency India | Lisn Agency",
    description: "Capturing the authentic human moments in every event. Professional video documentation for brands in Kochi, Bangalore, and beyond.",
    type: "website",
    url: "https://lisnagency.online/events",
    images: [
      {
        url: "/momentscaptured.jpg",
        width: 1200,
        height: 630,
        alt: "Lisn Agency - Event Video & Documentation",
      },
    ],
  },
}

export default function EventsPage() {
  return <EventsClient />
}
