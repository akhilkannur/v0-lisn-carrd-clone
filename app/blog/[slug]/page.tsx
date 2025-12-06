"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { notFound, useParams } from "next/navigation"
import { Header } from "@/components/header"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft, ArrowRight, Phone, MessageSquare } from "lucide-react"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!params?.slug) return

    const slug = params.slug as string
    // Simulate finding the post (in a real app this might be an API call)
    const foundPost = blogPosts.find((p) => p.slug === slug)
    setPost(foundPost || null)
    setLoading(false)
  }, [params])

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>
  if (!post) return notFound()

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans selection:bg-[#FFE500] selection:text-black">
        
        {/* Progress Bar (Optional nice-to-have, maybe later) */}

        <article className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-[#FFE500] mb-12 transition-colors uppercase tracking-widest font-bold text-sm">
              <ArrowLeft className="mr-2 w-4 h-4" /> Back to Insights
            </Link>

            {/* Header */}
            <header className="mb-16 border-b-4 border-[#FFE500] pb-12">
              <div className="flex gap-4 mb-6 text-sm font-mono uppercase tracking-widest text-[#FFE500]">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tight mb-8">
                {post.title}
              </h1>
              <p className="text-xl md:text-3xl text-gray-300 font-medium leading-relaxed max-w-3xl">
                {post.subtitle}
              </p>
            </header>

            {/* Content */}
            <div 
              className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:uppercase prose-a:text-[#FFE500] prose-li:marker:text-[#FFE500]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Author / Signoff */}
            <div className="mt-16 pt-8 border-t border-gray-800 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FFE500] rounded-full"></div>
              <div>
                <p className="font-bold text-white uppercase tracking-widest">The Lisn Editorial</p>
                <p className="text-sm text-gray-500">Marketing Strategy Team</p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section - The "Trojan Horse" Reveal */}
        <section className="bg-[#FFE500] text-black px-4 py-16 md:py-24 border-y-4 border-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-5xl md:text-7xl mb-8 uppercase tracking-tight">
              Don't Just Read About It.
              <br />
              Test It.
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl mx-auto">
              We are running street tests in Kerala this week. Send us your product, and we'll get you the raw, unfiltered truth.
            </p>
            <Link 
              href="/ugc" 
              className="inline-flex items-center bg-black text-white px-8 py-5 text-xl font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 shadow-[8px_8px_0px_0px_#000000] hover:translate-x-1 hover:-translate-y-1"
            >
              Start A Pilot <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-16 md:py-24 relative">
          <div className="max-w-5xl mx-auto text-center">
             <div className="flex items-center justify-center gap-8 mb-12">
              <button className="w-20 h-20 bg-zinc-800 hover:bg-[#FFE500] hover:text-black transition-all duration-300 flex items-center justify-center rounded-full">
                <Phone className="w-8 h-8" />
              </button>
              <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-zinc-800 hover:bg-[#FFE500] hover:text-black transition-all duration-300 flex items-center justify-center rounded-full">
                <MessageSquare className="w-8 h-8" />
              </a>
            </div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency 2025. All rights reserved.</p>
          </div>
        </section>
      </main>
    </>
  )
}
