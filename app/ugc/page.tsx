"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { Phone, MessageCircle, MessageSquareText } from "lucide-react"

export default function UGCPage() {
  const [stars, setStars] = useState<Array<any>>([])

  useEffect(() => {
    // Generate realistic night sky stars
    const generatedStars = [...Array(80)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      opacity: Math.random(),
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 3 + 2}s`,
    }))
    setStars(generatedStars)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const hiddenElements = document.querySelectorAll(".reveal-hidden")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-hidden font-sans bg-black text-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 py-24 md:py-40 overflow-hidden border-b-4 border-white">
          {/* Starfield */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map((style, i) => (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white animate-twinkle"
                style={style}
              ></div>
            ))}
          </div>

          <div className="z-10 max-w-7xl mx-auto flex flex-col items-center justify-center">
            <h1 className="font-heading text-7xl md:text-9xl mb-12 uppercase tracking-tighter leading-[0.85] reveal-hidden">
              UGC THAT
              <br />
              SPEAKS
              <br />
              <span className="text-[#FFE500]">KERALA'S</span>
              <br />
              LANGUAGE
            </h1>

            <p className="text-[#FFE500] font-bold text-xl md:text-3xl uppercase tracking-widest mb-16 max-w-4xl leading-relaxed reveal-hidden delay-100">
              Street reaction ad creatives. Because one localised ad can change your brand's trajectory.
            </p>
          </div>
        </section>

        <Marquee text="UGC THAT CONVERTS • REAL REACTIONS • VIRAL CONTENT" />

        {/* Gallery Section */}
        <section className="bg-black px-4 py-24 md:py-40 border-b-4 border-white">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="flex justify-center">
              <div className="relative border-4 border-white shadow-[16px_16px_0px_0px_#FFE500] transition-transform hover:-translate-y-2 duration-300">
                <img
                  src="/images/screenshot-202025-12-04-2023.png"
                  alt="UGC Street Reaction Gallery"
                  className="w-full max-w-4xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="bg-white text-black px-4 py-24 md:py-40 border-b-4 border-black">
          <div className="max-w-5xl mx-auto reveal-hidden">
            <p className="text-2xl md:text-4xl font-medium leading-tight mb-20">
              We take your product straight to real people, put it in their hands, and capture their unfiltered
              reactions. What you get back is a library of ad creatives that feel{" "}
              <span className="bg-[#FFE500] px-2">raw, relatable, and built to convert.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h3 className="font-heading text-5xl md:text-6xl mb-10 uppercase tracking-tight">
                  Why Brands
                  <br />
                  Use Us
                </h3>
                <ul className="space-y-8 text-xl md:text-2xl font-medium">
                  {[
                    "Real reactions = instant trust",
                    "Demos that actually demo",
                    "Built for the feed (Meta/IG)",
                    "Never run the same ad twice",
                    "Zero work on your end",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="min-w-[20px] h-[20px] mt-2 bg-black"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-5xl md:text-6xl mb-10 uppercase tracking-tight">
                  How it
                  <br />
                  Works
                </h3>
                <ol className="space-y-8 text-xl md:text-2xl font-medium">
                  {[
                    "1. Kickoff call",
                    "2. Ship your product",
                    "3. We hit the streets",
                    "4. Edit & deliver",
                    "5. Optimize & repeat",
                  ].map((item, i) => (
                    <li key={i} className="border-b-4 border-black pb-4">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#FFE500] px-4 py-32 md:py-48 text-center border-b-4 border-black">
          <div className="max-w-6xl mx-auto reveal-hidden">
            <p className="font-heading text-6xl md:text-8xl text-black uppercase leading-[0.9] mb-12">
              🔥 Put your product in their hands.
            </p>
            <button className="bg-black text-white px-16 py-8 font-heading text-3xl uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 border-4 border-black shadow-[12px_12px_0px_0px_#ffffff] hover:shadow-[16px_16px_0px_0px_#000000]">
              Start Your Campaign
            </button>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-24 md:py-40 relative">
          <div className="max-w-5xl mx-auto text-center reveal-hidden">
            <h3 className="font-heading text-6xl md:text-8xl mb-16 text-white uppercase tracking-tighter">
              READY TO
              <br />
              <span className="text-[#FFE500]">GO VIRAL?</span>
            </h3>

            <div className="flex items-center justify-center gap-8 mb-12">
              <button className="w-20 h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[8px_8px_0px_0px_#ffffff]">
                <Phone className="w-8 h-8 text-black" />
              </button>
              <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[8px_8px_0px_0px_#ffffff]">
                <MessageSquareText className="w-8 h-8 text-black" />
              </a>
            </div>

            <div className="text-white mb-16">
              <p className="mb-4 text-2xl font-bold font-mono">
                <a href="tel:+919747832393" className="hover:text-[#FFE500] transition-colors">9747832393</a> / <a href="tel:+918893317488" className="hover:text-[#FFE500] transition-colors">8893317488</a>
              </p>
              <p className="text-2xl font-bold font-mono text-[#FFE500]">
                <a href="mailto:akhil@lisnagency.online" className="hover:text-white transition-colors">akhil@lisnagency.online</a>
              </p>
            </div>

            <div className="w-full h-1 bg-zinc-800 mb-12"></div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
          </div>
        </section>
      </main>
    </>
  )
}
