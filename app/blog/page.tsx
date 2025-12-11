"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { blogPosts } from "@/lib/blog-data"
import { ArrowUpRight, Phone, MessageSquare } from "lucide-react"

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans selection:bg-[#FFE500] selection:text-black">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 border-b-4 border-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-heading text-7xl md:text-9xl mb-8 uppercase tracking-tighter text-white">
              INSIGHTS <br />
              <span className="text-[#FFE500]">& STRATEGY</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl text-gray-300">
              Unfiltered thoughts on marketing, UGC, and the changing landscape of attention in India.
            </p>
          </div>
        </section>

        {/* Specialized Playbooks Section - New */}
        <section className="px-4 py-16 md:py-24 border-b-4 border-white bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-heading text-4xl md:text-5xl mb-12 uppercase tracking-tight text-white">
              Industry Playbooks
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: "Skincare", emoji: "✨", slug: "skincare" },
                { name: "Coffee", emoji: "☕", slug: "coffee" },
                { name: "Jewellery", emoji: "💎", slug: "jewellery" },
                { name: "Athleisure", emoji: "🏃", slug: "athleisure" },
                { name: "Healthy Snacks", emoji: "🥨", slug: "healthy-snacks" },
                { name: "Perfume", emoji: "👃", slug: "perfume" },
                { name: "Haircare", emoji: "💇‍♀️", slug: "haircare" },
                { name: "Home Decor", emoji: "🏠", slug: "home-decor" },
                { name: "Sneakers", emoji: "👟", slug: "sneakers" },
                { name: "Ayurveda", emoji: "🌿", slug: "ayurveda" },
              ].map((industry) => (
                <a 
                  key={industry.slug} 
                  href={`/playbook/${industry.slug}`}
                  className="bg-black text-white p-6 border-2 border-zinc-700 hover:border-[#FFE500] hover:text-[#FFE500] transition-all duration-300 group flex flex-col items-center gap-2"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{industry.emoji}</span>
                  <span className="font-bold text-sm uppercase tracking-widest text-center">{industry.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 py-16 md:py-24 border-b-4 border-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.slug} 
                  href={`/blog/${post.slug}`}
                  className="group block border-4 border-white bg-black hover:bg-[#FFE500] transition-colors duration-300 p-8 relative h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-xs font-bold uppercase tracking-widest border border-white group-hover:border-black px-2 py-1 group-hover:text-black transition-colors">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 group-hover:text-black/70 font-mono">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl mb-4 uppercase leading-[0.9] group-hover:text-black transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 group-hover:text-black/80 mb-8 line-clamp-3">
                      {post.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm font-bold uppercase tracking-widest group-hover:text-black">Read Article</span>
                    <ArrowUpRight className="w-8 h-8 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="font-heading text-6xl md:text-8xl mb-16 text-white uppercase tracking-tighter">
              READY TO
              <br />
              <span className="text-[#FFE500]">HIT THE STREETS?</span>
            </h3>

            <div className="flex items-center justify-center gap-8 mb-12">
              <button className="w-20 h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[8px_8px_0px_0px_#ffffff]">
                <Phone className="w-8 h-8 text-black" />
              </button>
              <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-[#FFE500] hover:bg-white transition-all duration-300 flex items-center justify-center border-4 border-transparent shadow-[8px_8px_0px_0px_#ffffff]">
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

            <div className="w-full h-1 bg-zinc-800 mb-12"></div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
          </div>
        </section>
      </main>
    </>
  )
}
