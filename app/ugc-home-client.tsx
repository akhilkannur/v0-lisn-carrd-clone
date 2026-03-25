"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { StreetInterviewGraphic } from "@/components/street-interview-graphic"
import { Phone, MessageCircle, MessageSquare, ArrowDown, TrendingUp, AlertTriangle } from "lucide-react"

export default function UGCClient() {
  useEffect(() => {
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
      <main className="overflow-hidden font-sans bg-black text-white selection:bg-[#FFE500] selection:text-black">
        {/* Hero Section - Kerala Focus */}
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-12 pb-24 md:pt-32 md:pb-40 overflow-hidden border-b-4 border-white">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="absolute bottom-[-5%] left-[-5%] z-0 opacity-20 transform rotate-12 scale-75 hidden md:block">
            <StreetInterviewGraphic />
          </div>
          <div className="absolute top-[-5%] right-[-5%] z-0 opacity-20 transform -rotate-12 scale-75 hidden md:block">
            <StreetInterviewGraphic />
          </div>
          <div className="z-10 max-w-7xl mx-auto flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 bg-black/70 blur-3xl -z-10 scale-110"></div>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-9xl mb-12 uppercase tracking-tighter leading-[0.85] reveal-hidden w-full">
              UGC THAT
              <br />
              SPEAKS
              <br />
              <span className="text-[#FFE500]">KERALA'S</span>
              <br />
              LANGUAGE
            </h1>
            <p className="text-[#FFE500] font-bold text-xl md:text-3xl uppercase tracking-widest mb-12 max-w-4xl leading-relaxed reveal-hidden delay-100">
              Street reaction ad creatives. Because one localised ad can change your brand's trajectory.
            </p>
            <a href="#gallery-section" className="inline-block">
              <ArrowDown className="w-12 h-12 text-white animate-bounce hover:text-[#FFE500] transition-colors cursor-pointer" />
            </a>
          </div>
        </section>

        <Marquee text="STREET INTERVIEW UGC • REAL REACTIONS • AUTHENTIC CONTENT • LOWER CAC" />

        {/* Gallery Section */}
        <section id="gallery-section" className="bg-black px-4 py-16 md:py-24 border-b-4 border-white">
          <div className="max-w-7xl mx-auto reveal-hidden">
            <div className="flex justify-center">
              <div className="relative border-4 border-white shadow-[16px_16px_0px_0px_#FFE500] transition-transform hover:-translate-y-2 duration-300 w-full max-w-4xl h-auto">
                <Image
                  src="/images/screenshot-202025-12-04-2023.png"
                  alt="UGC Street Reaction Gallery"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Strategy Section */}
        <section className="bg-white text-black px-4 py-16 md:py-24 border-b-4 border-black">
          <div className="max-w-5xl mx-auto reveal-hidden">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-8xl mb-12 uppercase tracking-tighter leading-none">
              THE <span className="bg-[#FFE500] px-2">STREET INTERVIEW</span> STRATEGY
            </h2>
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <TrendingUp className="text-[#FFE500] w-8 h-8 shrink-0 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    Higher CTR = Lower ACOS. Street content captures attention in 0.4 seconds, breaking banner blindness instantly.
                  </p>
                </div>
                <div className="flex gap-4">
                  <AlertTriangle className="text-[#FFE500] w-8 h-8 shrink-0 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
                  <p className="text-xl md:text-2xl font-bold leading-tight">
                    Regional Authenticity. We capture the natural dialect and slang that national brands usually fail to translate correctly.
                  </p>
                </div>
              </div>
              <div className="bg-zinc-100 p-8 border-l-4 border-[#FFE500]">
                <p className="text-xl leading-relaxed">
                  We take your product straight to real people on the streets of <strong>Kochi, Bangalore, and Mumbai.</strong> What you get back is a library of ad creatives that feel raw, relatable, and built to convert.
                </p>
                <a href="https://www.instagram.com/yousaypeople/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#FFE500] transition-colors block mt-4 font-bold">
                  See real examples on Instagram →
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-10 uppercase tracking-tight break-words">Why Brands Use Us</h3>
                <ul className="space-y-6 text-xl md:text-2xl font-medium">
                  {["Real reactions = instant trust", "Demos that actually demo", "Built for the feed (Meta/IG)", "Never run the same ad twice", "Zero work on your end"].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="min-w-[20px] h-[20px] mt-2 bg-black"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-10 uppercase tracking-tight">How it Works</h3>
                <ol className="space-y-6 text-xl md:text-2xl font-medium">
                  {["1. Kickoff call", "2. Ship your product", "3. We hit the streets", "4. Edit & deliver", "5. Optimize & repeat"].map((item, i) => (
                    <li key={i} className="border-b-4 border-black pb-4">{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Links SEO Section */}
        <section className="bg-black px-4 py-16 md:py-24 relative border-b-4 border-white">
          <div className="max-w-5xl mx-auto">
            <div className="w-full border-t border-zinc-800 pt-12 pb-12 mb-8 text-left">
              <h4 className="text-[#FFE500] font-bold uppercase tracking-widest mb-6 text-sm">Industry Playbooks</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-[10px] md:text-xs text-zinc-500 font-mono">
                <Link href="/playbook/kerala-market-entry" className="hover:text-white transition-colors">Kerala Market Entry</Link>
                <Link href="/playbook/skincare" className="hover:text-white transition-colors">Skincare Marketing</Link>
                <Link href="/playbook/coffee" className="hover:text-white transition-colors">Coffee Brands</Link>
                <Link href="/playbook/jewellery" className="hover:text-white transition-colors">Jewellery UGC</Link>
                <Link href="/playbook/athleisure" className="hover:text-white transition-colors">Athleisure Ads</Link>
                <Link href="/playbook/healthy-snacks" className="hover:text-white transition-colors">Healthy Snacks</Link>
                <Link href="/playbook/perfume" className="hover:text-white transition-colors">Perfume Marketing</Link>
                <Link href="/playbook/haircare" className="hover:text-white transition-colors">Haircare Strategy</Link>
                <Link href="/playbook/home-decor" className="hover:text-white transition-colors">Home Decor</Link>
                <Link href="/playbook/sneakers" className="hover:text-white transition-colors">Sneaker Brands</Link>
                <Link href="/playbook/ayurveda" className="hover:text-white transition-colors">Ayurveda UGC</Link>
                <Link href="/playbook/pet-care" className="hover:text-white transition-colors">Pet Care Ads</Link>
              </div>
            </div>

            <div className="w-full border-t border-zinc-800 pt-12 text-left">
              <h4 className="text-[#FFE500] font-bold uppercase tracking-widest mb-6 text-sm">Service Areas & Solutions</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] md:text-xs text-zinc-500 font-mono">
                <span className="hover:text-white transition-colors cursor-default">UGC Marketing Kerala</span>
                <span className="hover:text-white transition-colors cursor-default">Influencer Marketing Kochi</span>
                <span className="hover:text-white transition-colors cursor-default">Video Production Kerala</span>
                <span className="hover:text-white transition-colors cursor-default">UGC Agency Bangalore</span>
                <span className="hover:text-white transition-colors cursor-default">Malayalam Ad Agency</span>
                <span className="hover:text-white transition-colors cursor-default">Kochi Marketing Near Me</span>
                <span className="hover:text-white transition-colors cursor-default">D2C Ad Agency India</span>
                <span className="hover:text-white transition-colors cursor-default">Authentic Content Kochi</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center reveal-hidden">
            <h3 className="font-heading text-4xl sm:text-6xl md:text-8xl mb-16 text-white uppercase tracking-tighter">
              READY TO
              <br />
              <span className="text-[#FFE500]">HIT THE STREETS?</span>
            </h3>
            <div className="flex items-center justify-center gap-8 mb-12">
              <button className="w-20 h-20 bg-[#FFE500] flex items-center justify-center shadow-[8px_8px_0px_0px_#ffffff]">
                <Phone className="w-8 h-8 text-black" />
              </button>
              <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-[#FFE500] flex items-center justify-center shadow-[8px_8px_0px_0px_#ffffff]">
                <MessageSquare className="w-8 h-8 text-black" />
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

            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
          </div>
        </section>
      </main>

      <div className="fixed bottom-8 right-8 z-[100] animate-bounce-slow">
        <Link href="/audit" className="group flex items-center bg-[#FFE500] text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest shadow-[8px_8px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 border-2 border-black">
          <span className="mr-3">Free UGC Audit</span>
          <MessageCircle className="w-6 h-6" />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </>
  )
}
