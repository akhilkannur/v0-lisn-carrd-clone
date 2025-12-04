"use client"

import { Header } from "@/components/header"
import { Phone, MessageCircle } from "lucide-react"

export default function UGCPage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="bg-black px-4 py-20 md:py-32 relative animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="absolute top-8 right-12 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-32 left-8 w-2 h-2 bg-white rounded-full opacity-50"></div>

            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white text-balance">
                UGC THAT
                <br />
                SPEAKS
                <br />
                KERALA'S
                <br />
                LANGUAGE
              </h1>

              <p className="text-yellow-400 text-base md:text-lg font-bold uppercase tracking-wider mb-12 max-w-3xl">
                STREET REACTION AD CREATIVES. BECAUSE ONE LOCALISED AD CAN CHANGE YOUR BRAND'S TRAJECTORY IN KERALA.
              </p>
            </div>

            <div className="absolute bottom-10 left-10 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-black px-4 py-16 md:py-24 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center">
              <img
                src="/images/screenshot-202025-12-04-2023.png"
                alt="UGC Street Reaction Gallery - Real customer reactions to products across different locations"
                className="w-full max-w-3xl rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-black px-4 py-16 md:py-24 text-white animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-8">
              We take your product straight to real people, put it in their hands, and capture their unfiltered
              reactions. What you get back is a library of ad creatives that feel raw, relatable, and built to convert
              on social.{" "}
              <a href="#" className="text-yellow-400 underline">
                See real examples on Instagram
              </a>
            </p>

            <div className="mb-12">
              <h3 className="text-yellow-400 font-bold uppercase tracking-wider mb-6 text-base">Why Brands Use Us:</h3>
              <ul className="space-y-4 text-base leading-relaxed">
                <li>
                  <span className="text-yellow-400 font-bold">Real reactions = instant trust:</span> People scroll past
                  ads. They stop for other people.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">Demos that actually demo:</span> Your product doing its
                  thing in real hands, not sitting pretty on a white backdrop.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">Built for the feed:</span> Snappy, thumb-stopping edits
                  made for META and IG—where UGC actually converts.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">Never run the same ad twice:</span> Every street shoot =
                  fresh content. Ad fatigue? Not here.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">Zero work on your end:</span> We hit the streets, capture
                  the chaos, edit the gold. You just collect the content.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-yellow-400 font-bold uppercase tracking-wider mb-6 text-base">How it Works:</h3>
              <ol className="space-y-4 text-base leading-relaxed">
                <li>
                  <span className="text-yellow-400 font-bold">1. Kickoff call:</span> We dig into your product, your
                  goals, and what makes your audience tick.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">2. Ship it:</span> Send us your product. We'll take it
                  from there.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">3. Hit the streets:</span> We hand it to real people, film
                  their reactions, and let them tell us what they really think.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">4. Edit & deliver:</span> You get a content library that's
                  polished enough to post, raw enough to feel real.
                </li>
                <li>
                  <span className="text-yellow-400 font-bold">5. Optimize & repeat:</span> We track what lands, tweak
                  what doesn't, and keep your content engine running.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black px-4 py-16 md:py-24 text-center text-white animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <p className="text-2xl md:text-3xl font-black text-yellow-400 mb-8">
              🔥 Put your product in their hands—and all over your customers' feeds.
            </p>
          </div>
        </section>

        {/* Footer - Black */}
        <section className="bg-black px-4 py-16 md:py-24 relative animate-fade-in-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto text-center">
            <div className="absolute top-12 right-8 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-16 left-12 w-3 h-3 bg-yellow-400 rounded-full"></div>

            {/* Contact Icons */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <button className="w-12 h-12 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 text-yellow-400 hover:text-black" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-yellow-400 hover:text-black" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-gray-400 mb-8">
              <p className="mb-2">Contact: 9741832393 / 8893317488</p>
              <p>Email: akhil@lisn.agency.online</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-8"></div>

            {/* Yellow Accent Circle */}
            <div className="flex justify-center mb-8">
              <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-sm">© All rights reserved</p>
          </div>
        </section>
      </main>
    </>
  )
}
