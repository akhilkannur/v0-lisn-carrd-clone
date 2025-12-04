"use client"

import { Header } from "@/components/header"
import { Play, Phone, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* Header/Logo Section */}
        <section className="bg-black px-4 py-12 md:py-16 relative">
          <div className="max-w-6xl mx-auto flex justify-center">
            {/* Decorative dots */}
            <div className="absolute top-8 left-8 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-20 right-12 w-3 h-3 bg-white rounded-full"></div>

            {/* Logo/Image Grid - Placeholder for embed */}
            <div className="w-full md:w-96 h-20 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700">
              <span className="text-white font-bold text-2xl">LISN Logo</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-black px-4 py-20 md:py-32 relative animate-fade-in">
          <div className="max-w-6xl mx-auto">
            {/* Decorative dots */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full"></div>

            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-white text-balance">
                EVENT VIDEO
                <br />
                AGENCY
              </h2>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                We capture your live events and interviews, then transform them into a video series, engaging short-form
                clips and versatile content assets. Get maximum value from every recording.
              </p>

              <button className="bg-yellow-400 text-black px-8 py-4 font-bold text-lg hover:bg-yellow-300 transition-colors mb-12 rounded-sm">
                WATCH OUR WORK →
              </button>
            </div>

            {/* Decorative dots - bottom */}
            <div className="absolute bottom-10 left-10 w-2 h-2 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-20 left-32 w-3 h-3 bg-white rounded-full opacity-50"></div>
          </div>
        </section>

        {/* Real People Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-20 md:py-32 relative animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-5xl md:text-6xl font-black leading-tight text-balance mb-8">
                  REAL PEOPLE,
                  <br />
                  REAL STORIES
                </h3>

                <p className="text-lg mb-8 leading-relaxed">
                  We capture the strongest, genuine interactions that make your audience lean in. From Live events,
                  roadshows, conferences to workshops. We find the human story in every frame.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[360px] shadow-2xl rounded-xl overflow-hidden bg-black hover:scale-[1.02] transition-transform duration-500 ease-out">
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
        <section className="bg-white px-4 py-20 md:py-32 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="bg-gray-100 border border-gray-200 aspect-square rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-gray-400 font-semibold">Image Embed</span>
              </div>

              <div className="text-left">
                <h3 className="text-4xl md:text-5xl font-black mb-6 text-balance">
                  MOMENTS.
                  <br />
                  CAPTURED.
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Through careful observation, we create the perfect environment for authentic, unscripted interactions
                  that let their true selves shine. And that inspires people confident on camera, sharing the stories
                  that matter most to your audience.
                </p>

                <button className="w-16 h-16 rounded-full bg-black hover:bg-gray-800 transition-colors flex items-center justify-center">
                  <Play className="w-6 h-6 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Marketers Section - Yellow (Text Left / Video Right) */}
        <section className="bg-[#FFE500] text-[#151515] px-4 py-20 md:py-32 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-5xl md:text-6xl font-black leading-tight text-balance mb-8">
                  MARKETERS,
                  <br />
                  FILMMAKERS,
                  <br />
                  STORYTELLERS
                </h3>

                <p className="text-lg mb-8 leading-relaxed">
                  We are not just videographers. Our team combines marketing strategy with cinematic experience and
                  editorial expertise. From feature film backgrounds to viral social content, we know how to edit, adapt,
                  and repurpose content for the exact platform it needs.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[360px] shadow-2xl rounded-xl overflow-hidden bg-black hover:scale-[1.02] transition-transform duration-500 ease-out">
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
        <section className="bg-white px-4 py-20 md:py-32 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center md:justify-start order-2 md:order-1">
                <div className="w-full max-w-[360px] shadow-2xl rounded-xl overflow-hidden bg-black hover:scale-[1.02] transition-transform duration-500 ease-out">
                  <script src="https://fast.wistia.com/player.js" async></script>
                  <script src="https://fast.wistia.com/embed/ae6ks2t7v7.js" async type="module"></script>
                  <style>{`wistia-player[media-id='ae6ks2t7v7']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ae6ks2t7v7/swatch'); display: block; filter: blur(5px); padding-top:177.78%; }`}</style>
                  <wistia-player media-id="ae6ks2t7v7" aspect="0.5625"></wistia-player>
                </div>
              </div>

              <div className="text-left order-1 md:order-2">
                <h3 className="text-4xl md:text-5xl font-black mb-8 text-balance">
                  HUMAN
                  <br />
                  CONNECTIONS
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The nervous laugh before a big presentation. The genuine smile when strangers become friends. The moment
                  when someone's story moves the entire room. We live for the real soul. Organized storytelling that feels
                  authentic, the connection when someone's story meets the entire room.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Black Divider - Video Embed Area */}
        <section className="bg-black px-4 py-20 md:py-32 animate-fade-in-black">
          <div className="max-w-6xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 aspect-video rounded-lg flex items-center justify-center">
              <span className="text-zinc-500 font-semibold">Video Embed Here</span>
            </div>
          </div>
        </section>

        {/* Video Package Section (Text Left / Video Right) */}
        <section className="bg-white px-4 py-20 md:py-32 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-4xl md:text-5xl font-black mb-8 text-balance">
                  VIDEO
                  <br />
                  PACKAGE
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Full event documentation with multiple camera angles. Edited highlights reels for social media, individual
                  interview segments, ready for your website. Behind the scenes content for authentic storytelling.
                  Conversational transcripts required into title page creatives. Cinematic recap footage for social.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="w-full max-w-[360px] shadow-2xl rounded-xl overflow-hidden bg-black hover:scale-[1.02] transition-transform duration-500 ease-out">
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
        <section className="bg-black px-4 py-20 md:py-32 relative animate-fade-in-black">
          <div className="max-w-6xl mx-auto text-center">
            {/* Decorative dots */}
            <div className="absolute top-10 right-8 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-12 w-3 h-3 bg-yellow-400 rounded-full"></div>

            <h3 className="text-4xl md:text-5xl font-black mb-12 text-white text-balance">
              STRATEGY
              <br />
              SESSION
            </h3>

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
              <p className="mb-2">Contact: 9741023293 / 8833035848</p>
              <p>Email: hello@lisn.agency</p>
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
