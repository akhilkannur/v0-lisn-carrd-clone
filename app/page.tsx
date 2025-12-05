"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { Play, Phone, MessageCircle, ArrowDown } from "lucide-react"

export default function Home() {
  const [stars, setStars] = useState<Array<any>>([])

  useEffect(() => {
    // Generate realistic night sky stars
    const generatedStars = [...Array(100)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 2 + 1}px`, // Tiny stars: 1px to 3px
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
            observer.unobserve(entry.target) // Only animate once
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Offset slightly so it doesn't trigger too early
      },
    )

    const hiddenElements = document.querySelectorAll(".reveal-hidden")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />
      <main className="overflow-hidden font-sans">
        {/* First Fold Section - Hero */}
        <section className="relative bg-black min-h-screen flex items-center justify-center text-center px-4 py-16 md:py-24 overflow-hidden border-b-4 border-black">
          {/* Realistic Night Sky Starfield */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map((style, i) => (
              <div
                key={`star-${i}`}
                className="absolute rounded-full bg-white animate-twinkle"
                style={style}
              ></div>
            ))}
            
            {/* Shooting Stars */}
            <div className="animate-shooting-star" style={{ top: '10%', right: '10%', animationDelay: '5s' }}></div>
            <div className="animate-shooting-star" style={{ top: '25%', right: '25%', animationDelay: '12s' }}></div>
            <div className="animate-shooting-star" style={{ top: '15%', right: '40%', animationDelay: '19s' }}></div>
          </div>

          <div className="z-10 max-w-6xl mx-auto flex flex-col items-center justify-center relative">
            {/* Radial Gradient for Readability */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/90 via-black/50 to-transparent blur-3xl -z-10 scale-125"></div>

            {/* LISN Logo Treatment - Image-filled Text with Floating Animation */}
            <div className="flex justify-center mb-8 md:mb-12">
              <Image
                src="/lisn-logo.gif"
                alt="LISN Agency Logo"
                width={500}
                height={300}
                className="max-w-[400px] w-full h-auto border-4 border-black shadow-[12px_12px_0px_0px_#000000]"
                unoptimized
              />
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-6xl md:text-8xl text-white mb-10 uppercase tracking-tight leading-[0.85] reveal-hidden">
              EVENT VIDEO <span className="text-[#FFE500]">AGENCY</span>
            </h2>

            {/* Body Copy */}
            <p className="font-sans text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl leading-relaxed reveal-hidden delay-100">
              We capture your live events and interviews, then transform them into a video series, engaging short-form
              clips and versatile content assets. Get maximum return from every recording.
            </p>

            {/* Call-to-Action */}
            <button className="bg-[#FFE500] text-black px-12 py-6 font-bold text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 transform hover:-translate-y-1 shadow-lg reveal-hidden delay-200">
              WATCH OUR WORK ↓
            </button>
          </div>
        </section>

        {/* Marquee Separator */}
        <Marquee text="EVENT VIDEO AGENCY" />

        {/* Real People Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-24 md:py-40 relative border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-6xl md:text-8xl mb-10 leading-[0.9] uppercase tracking-tight">
                  REAL PEOPLE,
                  <br />
                  REAL STORIES
                </h3>

                <p className="text-xl md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-6">
                  We capture the strongest, genuine interactions that make your audience lean in. From Live events,
                  roadshows, conferences to workshops. We find the human story in every frame.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/offv7ybu5r.js" async type="module"></script>
                  <style>{`wistia-player[media-id='offv7ybu5r']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/offv7ybu5r/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="offv7ybu5r" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Moments Captured Section (Image Left / Text Right) */}
        <section className="bg-white px-4 py-24 md:py-40 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Image Placeholder */}
              <div className="w-full aspect-square border-4 border-black shadow-[12px_12px_0px_0px_#000000] relative">
                <Image
                  src="/momentscaptured.jpg"
                  alt="Moments Captured - Candid event photography"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="text-left">
                <h3 className="font-heading text-6xl md:text-8xl mb-10 leading-[0.9] uppercase tracking-tight text-black">
                  MOMENTS.
                  <br />
                  CAPTURED.
                </h3>

                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10">
                  Through careful observation, we create the perfect environment for authentic, unscripted interactions
                  that let their true selves shine.
                </p>

                <button className="w-24 h-24 bg-black hover:bg-[#FFE500] transition-colors flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_#000000] group">
                  <ArrowDown className="w-10 h-10 text-white group-hover:text-black transition-colors animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Separator */}
        <Marquee text="REAL PEOPLE • REAL STORIES" className="bg-[#151515]" />

        {/* Marketers Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-24 md:py-40 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-6xl md:text-8xl mb-10 leading-[0.9] uppercase tracking-tight">
                  MARKETERS,
                  <br />
                  FILMMAKERS,
                  <br />
                  STORYTELLERS
                </h3>

                <p className="text-xl md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-6">
                  We are not just videographers. Our team combines marketing strategy with cinematic experience and
                  editorial expertise. From feature film backgrounds to viral social content.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/kederx3rhj.js" async type="module"></script>
                  <style>{`wistia-player[media-id='kederx3rhj']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/kederx3rhj/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="kederx3rhj" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human Connections Section (Video Left / Text Right) */}
        <section className="bg-white px-4 py-24 md:py-40 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/ae6ks2t7v7.js" async type="module"></script>
                  <style>{`wistia-player[media-id='ae6ks2t7v7']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ae6ks2t7v7/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="ae6ks2t7v7" aspect="0.5625"></wistia-player>
                </div>
              </div>

              <div className="text-left order-1 md:order-2">
                <h3 className="font-heading text-6xl md:text-8xl mb-10 leading-[0.9] uppercase tracking-tight text-black">
                  HUMAN
                  <br />
                  CONNECTIONS
                </h3>

                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10">
                  The nervous laugh before a big presentation. The genuine smile when strangers become friends. We live
                  for the real soul.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Black Divider - Video Embed Area */}
        <section className="bg-black px-4 py-24 md:py-40 border-b border-zinc-800">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="bg-[#151515] border-4 border-[#FFE500] aspect-video flex items-center justify-center shadow-[12px_12px_0px_0px_#FFE500]">
              <span className="text-[#FFE500] font-heading text-4xl md:text-6xl uppercase">Video Embed Here</span>
            </div>
          </div>
        </section>

        {/* Video Package Section (Text Left / Video Right) */}
        <section className="bg-white px-4 py-24 md:py-40 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-6xl md:text-8xl mb-10 leading-[0.9] uppercase tracking-tight text-black">
                  VIDEO
                  <br />
                  PACKAGE
                </h3>

                <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-10">
                  Full event documentation. Highlights reels. Individual interviews. Behind the scenes. Conversational
                  transcripts.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/f77lfm8m7p.js" async type="module"></script>
                  <style>{`wistia-player[media-id='f77lfm8m7p']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/f77lfm8m7p/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="f77lfm8m7p" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Session Footer - Black */}
        <section className="bg-black px-4 py-24 md:py-40 relative">
          <div className="max-w-5xl mx-auto text-center reveal-hidden">
            <h3 className="font-heading text-6xl md:text-9xl mb-16 text-white leading-[0.85] uppercase tracking-tighter">
              STRATEGY
              <br />
              <span className="text-[#FFE500]">SESSION</span>
            </h3>

            {/* Contact Icons */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <button className="w-20 h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[8px_8px_0px_0px_#ffffff]">
                <Phone className="w-8 h-8 text-black" />
              </button>
              <button className="w-20 h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[8px_8px_0px_0px_#ffffff]">
                <MessageCircle className="w-8 h-8 text-black" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-white mb-16">
              <p className="mb-4 text-2xl font-bold font-mono">9741023293 / 8833035848</p>
              <p className="text-2xl font-bold font-mono text-[#FFE500]">hello@lisn.agency</p>
            </div>

            {/* Divider */}
            <div className="w-full h-1 bg-zinc-800 mb-12"></div>

            {/* Copyright */}
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
          </div>
        </section>
      </main>
    </>
  )
}