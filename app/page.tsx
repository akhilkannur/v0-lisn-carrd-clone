"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { Play, Phone, MessageCircle, ArrowDown, MessageSquare } from "lucide-react"

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
        <section className="relative bg-black min-h-screen flex items-center justify-center text-center px-4 pt-8 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b-4 border-black">
          {/* Deep Space Background Layers */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-black to-black z-0"></div>
          
          {/* Nebulae / Cosmic Dust */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full animate-pulse-slow"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full animate-pulse-slow delay-[2000ms]"></div>
          </div>

          {/* Realistic Night Sky Starfield */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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

          <div className="z-10 max-w-6xl mx-auto flex flex-col items-center justify-center relative w-full">
            {/* Radial Gradient for Readability */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/90 via-black/50 to-transparent blur-3xl -z-10 scale-125"></div>

            {/* LISN Logo Treatment - Image-filled Text with Floating Animation */}
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

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-8xl text-white mb-6 md:mb-8 uppercase tracking-tight leading-[0.9] reveal-hidden break-words w-full">
              UGC & EVENT <br className="hidden md:block" /><span className="text-[#FFE500]">VIDEO AGENCY</span>
            </h1>

            {/* Body Copy */}
            <p className="font-sans text-lg md:text-2xl text-gray-200 mb-10 md:mb-12 max-w-3xl leading-relaxed reveal-hidden delay-100 px-2">
              The only creative partner for Indian DTC brands that delivers <strong>authentic street interviews</strong>, 
              localised <strong>Malayalam & Tamil ad creatives</strong>, and cinematic event documentation. 
              Reduce your CAC with content that people actually trust.
            </p>

            {/* Call-to-Action */}
            <a href="#real-people-section" className="bg-[#FFE500] text-black px-8 py-4 md:px-12 md:py-6 font-bold text-lg md:text-xl uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 transform hover:-translate-y-1 shadow-lg border-2 border-transparent animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
              WATCH OUR WORK ↓
            </a>
          </div>
        </section>

        {/* Marquee Separator */}
        <Marquee text="UGC & EVENT VIDEO AGENCY • AUTHENTIC STREET INTERVIEWS • REGIONAL AD CREATIVES" />

        {/* Real People Section - Yellow (Text Left / Video Right) */}
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
                  We capture the strongest, genuine interactions that make your audience lean in. From Live events,
                  roadshows, conferences to workshops. We find the human story in every frame.
                </p>

                <a href="/ugc" className="inline-block bg-black text-white px-6 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors border-2 border-black">
                  Explore UGC Services →
                </a>
              </div>

              <div className="flex justify-center md:justify-end w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/offv7ybu5r.js" async type="module"></script>
                  <style>{`wistia-player[media-id='offv7ybu5r']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/offv7ybu5r/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="offv7ybu5r" aspect="0.5625"></wistia-player>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section - Grid Layout */}
        <section className="bg-black text-white px-4 py-16 md:py-24 border-b-4 border-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl mb-12 md:mb-20 uppercase tracking-tight text-center reveal-hidden">
              OUR <span className="text-[#FFE500]">SERVICES</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Service 1: UGC */}
              <div className="border-2 border-white p-8 md:p-10 hover:bg-[#FFE500] hover:text-black transition-all duration-300 group flex flex-col justify-between reveal-hidden delay-100">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl mb-6 uppercase tracking-tight">UGC AD CREATIVES</h3>
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                    High-converting street interviews that break banner blindness. Authentic reactions, zero scripts, and 
                    localised content for Kerala & South India.
                  </p>
                </div>
                <Link href="/ugc" className="inline-block font-bold uppercase tracking-widest border-b-2 border-current pb-1 self-start hover:border-black transition-all">
                  LEARN MORE →
                </Link>
              </div>

              {/* Service 2: Event Video */}
              <div className="border-2 border-white p-8 md:p-10 hover:bg-[#FFE500] hover:text-black transition-all duration-300 group flex flex-col justify-between reveal-hidden delay-200">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl mb-6 uppercase tracking-tight">EVENT <br />VIDEO</h3>
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                    Cinematic documentation of brand activations, workshops, and high-impact events. 
                    We capture the energy that corporate videos usually miss.
                  </p>
                </div>
                <a href="#real-people-section" className="inline-block font-bold uppercase tracking-widest border-b-2 border-current pb-1 self-start hover:border-black transition-all">
                  SEE WORK →
                </a>
              </div>

              {/* Service 3: Performance Insights */}
              <div className="border-2 border-white p-8 md:p-10 hover:bg-[#FFE500] hover:text-black transition-all duration-300 group flex flex-col justify-between reveal-hidden delay-300">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl mb-6 uppercase tracking-tight">DTC INSIGHTS</h3>
                  <p className="text-lg md:text-xl font-medium leading-relaxed mb-8 opacity-80 group-hover:opacity-100">
                    Free tools like the Amazon Profit Calculator and UGC ROI Estimator to help you 
                    make data-driven creative decisions.
                  </p>
                </div>
                <Link href="/blog" className="inline-block font-bold uppercase tracking-widest border-b-2 border-current pb-1 self-start hover:border-black transition-all">
                  EXPLORE TOOLS →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Moments Captured Section (Image Left / Text Right) */}
        <section className="bg-white px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              {/* Image Placeholder */}
              <div className="w-full aspect-square border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000] relative order-2 md:order-1">
                <Image
                  src="/momentscaptured.jpg"
                  alt="Moments Captured - Candid event photography"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <div className="text-left order-1 md:order-2">
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight text-black break-words">
                  MOMENTS.
                  <br />
                  CAPTURED.
                </h3>

                <p className="text-lg md:text-2xl text-gray-800 font-medium leading-relaxed mb-8 md:mb-10">
                  Through careful observation, we create the perfect environment for authentic, unscripted interactions
                  that let their true selves shine.
                </p>

                <button className="w-20 h-20 md:w-24 md:h-24 bg-black hover:bg-[#FFE500] transition-colors flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_0px_#000000] group">
                  <ArrowDown className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black transition-colors animate-bounce" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Playbooks Section - Quick Access */}
        <section className="bg-zinc-100 text-black px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-heading text-4xl sm:text-5xl md:text-7xl mb-6 uppercase tracking-tight reveal-hidden">
                   AD <span className="text-white bg-black px-2">PLAYBOOKS</span>
                </h2>
                <p className="text-lg md:text-2xl font-bold leading-tight reveal-hidden delay-100">
                  We've broken down the winning creative strategies for 20+ industries. 
                  Find yours and start scaling.
                </p>
              </div>
              <Link href="/blog" className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FFE500] hover:text-black transition-colors border-4 border-black reveal-hidden delay-200">
                VIEW ALL →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal-hidden delay-300">
              {[
                { name: "Skincare", slug: "skincare", emoji: "✨" },
                { name: "Coffee", slug: "coffee", emoji: "☕" },
                { name: "Jewellery", slug: "jewellery", emoji: "💎" },
                { name: "Athleisure", slug: "athleisure", emoji: "🏃" },
                { name: "Perfume", slug: "perfume", emoji: "👃" },
                { name: "Haircare", slug: "haircare", emoji: "💇‍♀️" },
              ].map((industry) => (
                <Link 
                  key={industry.slug} 
                  href={`/playbook/${industry.slug}`}
                  className="bg-white border-4 border-black p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#FFE500] transition-all transform hover:-translate-y-1 shadow-[4px_4px_0px_0px_#000000]"
                >
                  <span className="text-4xl">{industry.emoji}</span>
                  <span className="font-bold text-sm uppercase tracking-tighter text-center">{industry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee Separator */}
        <Marquee text="UGC AD CREATIVES • STREET INTERVIEWS • PERFORMANCE MARKETING" className="bg-[#151515]" />

        {/* Marketers Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight break-words">
                  MARKETERS,
                  <br />
                  FILMMAKERS,
                  <br />
                  STORYTELLERS
                </h3>

                <p className="text-lg md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-4 md:pl-6">
                  We are not just videographers. Our team combines marketing strategy with cinematic experience and
                  editorial expertise. From feature film backgrounds to high-performing social content.
                </p>
              </div>

              <div className="flex justify-center md:justify-end w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
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
        <section className="bg-[#FFE500] text-[#151515] px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="flex justify-center md:justify-start order-2 md:order-1 w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/ae6ks2t7v7.js" async type="module"></script>
                  <style>{`wistia-player[media-id='ae6ks2t7v7']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ae6ks2t7v7/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="ae6ks2t7v7" aspect="0.5625"></wistia-player>
                </div>
              </div>

              <div className="text-left order-1 md:order-2">
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6 md:mb-10 leading-[0.9] uppercase tracking-tight text-black break-words">
                  HUMAN
                  <br />
                  CONNECTIONS
                </h3>

                <p className="text-lg md:text-2xl font-bold leading-relaxed border-l-4 border-black pl-4 md:pl-6">
                  The nervous laugh before a big presentation. The genuine smile when strangers become friends. We live
                  for the real soul.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* Video Package Section (Text Left / Video Right) */}
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
                  Full event documentation. Highlights reels. Individual interviews. Behind the scenes. Conversational
                  transcripts.
                </p>
              </div>

              <div className="flex justify-center md:justify-end w-full">
                <div className="w-full max-w-[400px] bg-black border-4 border-black shadow-[8px_8px_0px_0px_#000000] md:shadow-[12px_12px_0px_0px_#000000]">
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
        <section className="bg-black px-4 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center reveal-hidden">
            <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-9xl mb-10 md:mb-16 text-white leading-[0.85] uppercase tracking-tighter break-words">
              STRATEGY
              <br />
              <span className="text-[#FFE500]">SESSION</span>
            </h3>

            {/* Contact Icons */}
            <div className="flex items-center justify-center gap-6 md:gap-8 mb-8 md:mb-12">
              <button className="w-16 h-16 md:w-20 md:h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[4px_4px_0px_0px_#ffffff] md:shadow-[8px_8px_0px_0px_#ffffff]">
                <Phone className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </button>
              <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="w-16 h-16 md:w-20 md:h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[4px_4px_0px_0px_#ffffff] md:shadow-[8px_8px_0px_0px_#ffffff]">
                <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-black" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="text-white mb-10 md:mb-16">
              <p className="mb-2 md:mb-4 text-lg md:text-2xl font-bold font-mono">
                <a href="tel:+919747832393" className="hover:text-[#FFE500] transition-colors">9747832393</a> / <a href="tel:+918893317488" className="hover:text-[#FFE500] transition-colors">8893317488</a>
              </p>
              <p className="text-lg md:text-2xl font-bold font-mono text-[#FFE500]">
                <a href="mailto:akhil@lisnagency.online" className="hover:text-white transition-colors">akhil@lisnagency.online</a>
              </p>
            </div>


            {/* Divider */}
            <div className="w-full h-1 bg-zinc-800 mb-8 md:mb-12"></div>

            {/* Copyright */}
            <div className="space-y-4">
              <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
              <div className="flex justify-center gap-6 text-[10px] md:text-xs text-zinc-600 uppercase tracking-widest">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
              <p className="text-zinc-600 text-[10px] md:text-xs uppercase tracking-widest">
                Design inspired by <a href="https://carrd.co/build/demo/854639e1d36fad56" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors underline underline-offset-2">Carrd Demo</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
