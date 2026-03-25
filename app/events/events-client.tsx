"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { Play, Phone, MessageCircle, ArrowDown, MessageSquare } from "lucide-react"

export default function EventsClient() {
  const [stars, setStars] = useState<Array<any>>([])

  useEffect(() => {
    // Generate realistic night sky stars
    const generatedStars = [...Array(100)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`,
      height: `${Math.random() * 2 + 1}px`,
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
      <main className="overflow-hidden font-sans">
        {/* Hero Section */}
        <section className="relative bg-black min-h-screen flex items-center justify-center text-center px-4 pt-8 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b-4 border-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black z-0"></div>
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {stars.map((style, i) => (
              <div key={`star-${i}`} className="absolute rounded-full bg-white animate-twinkle" style={style}></div>
            ))}
          </div>

          <div className="z-10 max-w-6xl mx-auto flex flex-col items-center justify-center relative w-full">
            <div className="flex justify-center mb-6 md:mb-8 w-full">
              <Image
                src="/lisn-logo.gif"
                alt="LISN Agency Logo"
                width={500}
                height={300}
                className="max-w-[300px] md:max-w-[400px] w-full h-auto border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]"
                unoptimized
              />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl text-white mb-6 md:mb-8 uppercase tracking-tight leading-[0.9] reveal-hidden w-full">
              EVENT VIDEO & <br className="hidden md:block" /><span className="text-[#FFE500]">DOCUMENTATION AGENCY</span>
            </h1>

            <p className="font-sans text-lg md:text-2xl text-gray-200 mb-10 md:mb-12 max-w-4xl leading-relaxed reveal-hidden delay-100 px-2">
              We help Indian brands document their activations, workshops, and corporate events with a cinematic lens. 
              We capture the energy and unscripted moments that standard corporate videos usually miss.
            </p>

            <a href="#real-people-section" className="bg-[#FFE500] text-black px-8 py-4 md:px-12 md:py-6 font-bold text-lg md:text-xl uppercase tracking-widest hover:bg-white transition-colors duration-300 transform hover:-translate-y-1 shadow-lg border-2 border-transparent">
              WATCH OUR WORK ↓
            </a>
          </div>
        </section>

        <Marquee text="EVENT VIDEO AGENCY • CINEMATIC DOCUMENTATION • BRAND ACTIVATIONS" />

        {/* Real People Section */}
        <section id="real-people-section" className="bg-[#FFE500] text-[#151515] px-4 py-16 md:py-24 relative border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight break-words">
                  REAL PEOPLE,
                  <br />
                  REAL STORIES
                </h3>
                <p className="text-lg md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-4 md:pl-6 mb-8">
                  We capture the strongest, genuine interactions that define your brand experience. From live events,
                  roadshows, and conferences to high-impact workshops.
                </p>
                <a href="#strategy-session" className="inline-block bg-black text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-2 border-black">
                  GET A QUOTE ↓
                </a>
              </div>
              <div className="flex justify-center md:justify-end w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/offv7ybu5r.js" async type="module"></script>
                  <wistia-player media-id="offv7ybu5r" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moments Captured Section */}
        <section className="bg-white px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="w-full aspect-square border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000] relative order-2 md:order-1">
                <Image src="/momentscaptured.jpg" alt="Moments Captured" fill className="object-cover" unoptimized />
              </div>
              <div className="text-left order-1 md:order-2">
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight text-black break-words">
                  MOMENTS.
                  <br />
                  CAPTURED.
                </h3>
                <p className="text-lg md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 md:mb-10">
                  Through careful observation, we create the perfect environment for authentic, unscripted interactions that let their true selves shine.
                </p>
                <button className="w-20 h-20 md:w-24 md:h-24 bg-black hover:bg-[#FFE500] transition-colors flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_#000000] group">
                  <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black transition-colors animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Marketers Section */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight">
                  MARKETERS.
                  <br />
                  FILMMAKERS.
                </h3>
                <p className="text-lg md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-4 md:pl-6">
                  Our team combines marketing strategy with cinematic experience. From feature film backgrounds to high-performing social content.
                </p>
              </div>
              <div className="flex justify-center md:justify-end w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/kederx3rhj.js" async type="module"></script>
                  <wistia-player media-id="kederx3rhj" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Package Section */}
        <section className="bg-white px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight text-black break-words">
                  VIDEO
                  <br />
                  PACKAGE
                </h3>
                <p className="text-lg md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 md:mb-10">
                  Full event documentation. Highlights reels. Individual interviews. Behind the scenes. Conversational transcripts.
                </p>
              </div>
              <div className="flex justify-center md:justify-end w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/f77lfm8m7p.js" async type="module"></script>
                  <wistia-player media-id="f77lfm8m7p" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section id="strategy-session" className="bg-black px-4 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center reveal-hidden">
            <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-9xl mb-10 md:mb-16 text-white leading-[0.85] uppercase tracking-tighter">
              STRATEGY
              <br />
              <span className="text-[#FFE500]">SESSION</span>
            </h3>
            <div className="flex items-center justify-center gap-6 md:gap-8 mb-8 md:mb-12">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-[#FFE500] flex items-center justify-center shadow-[4px_4px_0px_0px_#ffffff]">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </button>
              <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-20 md:h-20 bg-[#FFE500] flex items-center justify-center shadow-[4px_4px_0px_0px_#ffffff]">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </a>
            </div>
            <div className="text-white mb-10 md:mb-16">
              <p className="mb-2 md:mb-4 text-lg md:text-2xl font-bold font-mono">
                <a href="tel:+919747832393" className="hover:text-[#FFE500] transition-colors">9747832393</a> / <a href="tel:+918893317488" className="hover:text-[#FFE500] transition-colors">8893317488</a>
              </p>
              <p className="text-lg md:text-2xl font-bold font-mono text-[#FFE500]">
                <a href="mailto:akhil@lisnagency.online" className="hover:text-white transition-colors">akhil@lisnagency.online</a>
              </p>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
          </div>
        </section>
      </main>
    </>
  )
}
