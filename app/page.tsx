"use client"

import { Header } from "@/components/header"
import { Play, Phone, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden font-sans">
        {/* Header/Logo Section */}
        <section className="bg-black px-4 py-16 relative border-b border-zinc-800">
          <div className="max-w-7xl mx-auto flex justify-center">
            {/* Decorative elements */}
            <div className="absolute top-12 left-12 w-4 h-4 bg-[#FFE500] rounded-full animate-pulse"></div>
            <div className="absolute top-24 right-20 w-6 h-6 border-4 border-white rounded-full"></div>

            {/* Logo/Image Grid - Placeholder for embed */}
            <div className="w-full max-w-lg h-32 bg-[#151515] border-4 border-[#FFE500] flex items-center justify-center shadow-[8px_8px_0px_0px_#FFE500]">
              <span className="text-white font-heading text-4xl uppercase tracking-wider">LISN.AGENCY</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-black px-4 py-24 md:py-40 relative animate-fade-in border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="font-heading text-7xl md:text-9xl text-white mb-12 uppercase tracking-tighter leading-[0.85]">
                EVENT VIDEO
                <br />
                <span className="text-[#FFE500]">AGENCY</span>
              </h2>

              <p className="text-gray-300 text-2xl md:text-3xl mb-12 max-w-4xl font-medium leading-snug">
                We capture your live events and interviews, then transform them into a <span className="text-white font-bold underline decoration-[#FFE500] decoration-4">video series</span>, engaging clips, and versatile assets.
              </p>

              <button className="bg-[#FFE500] text-black px-12 py-6 font-black text-2xl uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 border-4 border-transparent hover:border-[#FFE500] shadow-[8px_8px_0px_0px_#ffffff] hover:shadow-[12px_12px_0px_0px_#ffffff]">
                WATCH OUR WORK →
              </button>
            </div>
          </div>
        </section>

        {/* Real People Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-24 md:py-40 relative animate-fade-in border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
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
        <section className="bg-white px-4 py-24 md:py-40 animate-fade-in border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Image Placeholder */}
              <div className="w-full aspect-square bg-gray-100 border-4 border-black flex items-center justify-center shadow-[12px_12px_0px_0px_#000000]">
                <span className="text-gray-400 font-black text-3xl uppercase">Image Embed</span>
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
                  <Play className="w-10 h-10 text-white group-hover:text-black fill-current transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Marketers Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-24 md:py-40 animate-fade-in border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
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
        <section className="bg-white px-4 py-24 md:py-40 animate-fade-in border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
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
        <section className="bg-black px-4 py-24 md:py-40 animate-fade-in-black border-b border-zinc-800">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#151515] border-4 border-[#FFE500] aspect-video flex items-center justify-center shadow-[12px_12px_0px_0px_#FFE500]">
              <span className="text-[#FFE500] font-heading text-4xl md:text-6xl uppercase">Video Embed Here</span>
            </div>
          </div>
        </section>

        {/* Video Package Section (Text Left / Video Right) */}
        <section className="bg-white px-4 py-24 md:py-40 animate-fade-in border-b-4 border-black">
          <div className="max-w-7xl mx-auto">
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
        <section className="bg-black px-4 py-24 md:py-40 relative animate-fade-in-black">
          <div className="max-w-5xl mx-auto text-center">
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
