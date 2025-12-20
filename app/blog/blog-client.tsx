"use client"

import Link from "next/link"
import { useState } from "react"
import { Header } from "@/components/header"
import { blogPosts } from "@/lib/blog-data"
import { industryPlaybooks } from "@/lib/industry-data"
import { viralHooks } from "@/lib/hooks-data"
import { ArrowUpRight, Phone, MessageSquare, Copy, Check, Filter } from "lucide-react"

export default function BlogIndex() {
  const [activeTab, setActiveTab] = useState<'playbooks' | 'hooks'>('playbooks')
  
  // Hooks State
  const [activeHookCategory, setActiveHookCategory] = useState("All")
  const [copiedHookId, setCopiedHookId] = useState<string | null>(null)

  const hookCategories = ["All", ...Array.from(new Set(viralHooks.map(h => h.category)))]
  
  const filteredHooks = activeHookCategory === "All" 
    ? viralHooks 
    : viralHooks.filter(h => h.category === activeHookCategory)

  const handleCopyHook = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHookId(id)
    setTimeout(() => setCopiedHookId(null), 2000)
  }

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

        {/* Resources Section (Tabs) */}
        <section className="px-4 py-12 md:py-16 border-b-4 border-white bg-zinc-900" id="resources">
          <div className="max-w-7xl mx-auto">
            {/* Tab Controls */}
            <div className="flex flex-wrap gap-4 mb-12 border-b-2 border-zinc-700 pb-4">
               <button
                 onClick={() => setActiveTab('playbooks')}
                 className={`text-2xl md:text-4xl font-heading uppercase tracking-tight transition-colors ${activeTab === 'playbooks' ? 'text-[#FFE500]' : 'text-gray-500 hover:text-white'}`}
               >
                 Industry Playbooks
               </button>
               <span className="text-2xl md:text-4xl font-heading text-zinc-700">/</span>
               <button
                 onClick={() => setActiveTab('hooks')}
                 className={`text-2xl md:text-4xl font-heading uppercase tracking-tight transition-colors ${activeTab === 'hooks' ? 'text-[#FFE500]' : 'text-gray-500 hover:text-white'}`}
               >
                 Hooks Library
               </button>
            </div>

            {/* Playbooks Content */}
            {activeTab === 'playbooks' && (
              <div className="animate-fade-in">
                <p className="text-gray-400 mb-8 max-w-2xl text-lg">
                  Deep dives into specific industries. Identifying the pain points, street concepts, and trust factors that make ads convert.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {industryPlaybooks.map((industry) => (
                    <Link 
                      key={industry.slug} 
                      href={`/playbook/${industry.slug}`}
                      className="bg-black text-white p-6 border-2 border-zinc-700 hover:border-[#FFE500] hover:text-[#FFE500] transition-all duration-300 group flex flex-col items-center gap-4 h-full"
                    >
                      <span className="text-4xl group-hover:scale-110 transition-transform">{industry.emoji}</span>
                      <span className="font-bold text-sm uppercase tracking-widest text-center">{industry.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Hooks Content */}
            {activeTab === 'hooks' && (
              <div className="animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  <p className="text-gray-400 max-w-2xl text-lg">
                    A collection of high-converting opening lines tailored for the Indian market.
                  </p>
                  
                  {/* Category Filter */}
                  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 max-w-full">
                    {hookCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveHookCategory(cat)}
                        className={`px-4 py-1 text-sm font-bold uppercase tracking-widest border transition-all whitespace-nowrap ${
                          activeHookCategory === cat 
                            ? "bg-[#FFE500] text-black border-[#FFE500]" 
                            : "bg-transparent text-gray-400 border-zinc-700 hover:border-white hover:text-white"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                  {filteredHooks.map((hook) => (
                    <div 
                      key={hook.id} 
                      className="bg-black border-2 border-zinc-800 hover:border-[#FFE500] p-6 flex flex-col justify-between group transition-colors duration-300 relative"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] font-mono text-[#FFE500] uppercase tracking-widest border border-[#FFE500] px-2 py-0.5">
                            {hook.category}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl mb-4 leading-tight">
                          "{hook.hook}"
                        </h3>
                        <p className="text-zinc-500 text-xs italic font-mono mb-6 border-l-2 border-zinc-800 pl-3">
                          Why: {hook.explanation}
                        </p>
                      </div>
                      
                      <button 
                        onClick={() => handleCopyHook(hook.hook, hook.id)}
                        className="w-full py-3 bg-zinc-900 hover:bg-[#FFE500] hover:text-black border border-zinc-700 hover:border-[#FFE500] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95"
                      >
                        {copiedHookId === hook.id ? (
                          <>
                            <Check className="w-4 h-4" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" /> Copy Hook
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Tools Section */}
        <section className="px-4 py-12 md:py-16 border-b-4 border-white bg-black" id="tools">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-heading text-4xl md:text-5xl mb-8 uppercase tracking-tight text-white">
              Free Seller <span className="text-[#FFE500]">Tools</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/blog/amazon-calculator" className="block group">
                <div className="bg-zinc-900 border-2 border-zinc-700 hover:border-[#FFE500] p-8 h-full transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE500] blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <h4 className="font-heading text-2xl uppercase text-white mb-2 group-hover:text-[#FFE500] transition-colors">Amazon Profit Calculator</h4>
                  <p className="text-gray-400 mb-6">Estimate your exact bank settlement after FBA fees, Referral fees, and GST. Updated for 2025.</p>
                  <span className="inline-block border border-zinc-500 text-zinc-400 px-4 py-2 text-xs font-bold uppercase tracking-widest group-hover:bg-[#FFE500] group-hover:text-black group-hover:border-[#FFE500] transition-all">Launch Tool →</span>
                </div>
              </Link>

              <Link href="/blog/amazon-image-validator" className="block group">
                <div className="bg-zinc-900 border-2 border-zinc-700 hover:border-[#FFE500] p-8 h-full transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE500] blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <h4 className="font-heading text-2xl uppercase text-white mb-2 group-hover:text-[#FFE500] transition-colors">Image Validator</h4>
                  <p className="text-gray-400 mb-6">Check if your listing images meet Amazon India's 2025 technical standards for zoom and quality.</p>
                  <span className="inline-block border border-zinc-500 text-zinc-400 px-4 py-2 text-xs font-bold uppercase tracking-widest group-hover:bg-[#FFE500] group-hover:text-black group-hover:border-[#FFE500] transition-all">Launch Tool →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 py-16 md:py-24 border-b-4 border-white">
          <div className="max-w-7xl mx-auto">
             <h3 className="font-heading text-4xl md:text-5xl mb-12 uppercase tracking-tight text-white">
              Latest Articles
            </h3>
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