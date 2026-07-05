"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { MessageSquare, Target, TrendingUp, Users, ShoppingCart, Lightbulb, MapPin, Sparkles } from "lucide-react"

type Idea = {
  id: string
  angle: string
  tagline: string
  description: string
  whyItWorks: string
  category: string
  icon: React.ReactNode
}

const ideas: Idea[] = [
  {
    id: "the-spending-mandate",
    angle: "The Spending Mandate",
    tagline: "\"Kaanam vittum Onam unnanam.\" Malayalis will spend. The question is whether they spend on you.",
    description: (
      "There is an old Malayalam proverb: \"Kaanam vittum Onam unnanam\" — one must celebrate Onam even if it means "
      + "selling one's property. This is not hyperbole. Onam drives a 20-30% spike in retail consumption across Kerala, "
      + "fueled by foreign remittances (Kerala receives the highest remittance inflows of any Indian state) and government "
      + "festive allowances. Total ad spend crosses ₹1,100 crore and grows 15-20% year on year.\n\n"
      + "The categories: jewellery (₹7,000-8,000 crore in a single season, ≈20% of all festive ad spend), textiles "
      + "(₹10,000 crore across organised and unorganised), electronics (₹100 crore in Kochi alone), and Bevco "
      + "(₹826 crore in 12 days). Quick commerce platforms (Blinkit, Zepto, Instamart) are eating traditional retail's "
      + "lunch — consumers now buy Onam groceries, gifts, and even silver jewellery via 10-minute delivery apps.\n\n"
      + "The angle: help national FMCG, electronics, and D2C brands capture this spending by creating content that "
      + "lives inside the Malayali consumer's decision journey — not generic festive branding."
    ),
    whyItWorks: "Hard data makes this an easy sell to a brand's leadership. The numbers are public (ET, Hindu BusinessLine, Exchange4Media). This isn't a pitch — it's a market briefing. Every national brand already knows Kerala spends; they just don't know how to capture it without cringe.",
    category: "Market Intelligence",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: "the-10-day-calendar",
    angle: "The 10-Day Calendar",
    tagline: "Uthradam. Thiruvonam. Avittam. Every day has a different consumer behaviour. Your content should too.",
    description: (
      "Onam is 10 days, but not all days are equal. The three peak days — Uthradam (eve), Thiruvonam (main), and Avittam — "
      + "drive completely different consumer actions:\n\n"
      + "• Uthradam (\"Uthrada Pachil\"): Last-minute shopping frenzy. Vegetable markets, textile shops, and electronics "
      + "stores see peak footfall. Bevco did ₹137 crore in a single Uthradam day in 2025 — 9.23% higher than the previous year. "
      + "This is urgency-driven purchasing.\n\n"
      + "• Thiruvonam: The main day. Families gather for Sadya. The catering sector serves ₹250 crore worth of food in a single "
      + "day. No liquor sales (Bevco closed). Content should be about togetherness, food, ritual — not commerce.\n\n"
      + "• Avittam / Third Onam: Continued celebrations, travel return begins. Brands that run post-Onam \"extend the festive\" "
      + "campaigns see lower CPM and higher engagement.\n\n"
      + "Plus: the month of Chingam is considered auspicious for housewarmings, weddings, and major purchases — this extends "
      + "the commercial window well beyond the 10-day festival.\n\n"
      + "The angle: a day-wise content calendar for brands. Different creative for each phase — pre-Onam (urgency/demand gen), "
      + "Thiruvonam (cultural belonging), post-Onam (extension/loyalty)."
    ),
    whyItWorks: "Most national brands run one Onam post on the main day and call it done. This angle gives them a 10-day content architecture that mirrors actual consumer behaviour. It's a strategic upgrade, not a tactical add-on. Brand managers can present this as a complete campaign framework.",
    category: "Content Strategy",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: "the-long-form-advantage",
    angle: "The Long-Form Advantage",
    tagline: "Malayalis don't just scroll. They watch 12-minute reviews during Onam. This changes how you brief content.",
    description: (
      "The most under-appreciated fact for national brands entering Kerala: the Malayalam internet over-indexes heavily on "
      + "long-form video. YouTube vlog channels, podcast-style interviews, and 8-15 minute deep-dive reviews drive a "
      + "disproportionate share of consideration and conversion. Reels work for awareness, but the purchase decision happens "
      + "in long-form.\n\n"
      + "During Onam, screen time spikes across devices (families at home, office holidays, extended breaks). This is when "
      + "Malayali viewers actually watch content — not just skim it. Food creators, beauty reviewers, tech unboxers, and "
      + "lifestyle vloggers all see their highest engagement of the year.\n\n"
      + "For D2C brands: a single 12-minute product review in Malayalam during Onam week typically outperforms a swarm "
      + "of 30-second Reels for consideration metrics. The behavioural read: Kerala's audience has high media literacy, "
      + "strong cultural preference for considered reviews, and the bandwidth (literal — they're on holiday) to engage.\n\n"
      + "The angle: creators are the bridge. Instead of brands producing their own Onam ads, fund 3-4 Malayalam YouTube "
      + "creators to make Onam-themed review/content pieces. The format does the targeting work for you."
    ),
    whyItWorks: "This counter-programmes the standard Reels-only brief that most national agencies default to. It positions Lisn as someone who actually understands digital behaviour in Kerala, not someone who just speaks Malayalam. The insight is specific, defensible, and backed by platform data.",
    category: "Creator Strategy",
    icon: <Target className="w-8 h-8" />,
  },
  {
    id: "the-cringe-barrier",
    angle: "The Cringe Barrier",
    tagline: "Why do national brands' Onam posts get 47 likes? Because they sound like they Googled 'Onam traditions' that morning.",
    description: (
      "The most common mistake: a marketing manager in Mumbai or Gurgaon briefs a creative team to \"do something for Onam.\" "
      + "The result is a graphic with a Kathakali face, a generic 'Happy Onam' line, and a product photoshopped next to a "
      + "pookalam. It gets 47 likes. The brand feels good about 'showing up.' The Malayali audience scrolls past.\n\n"
      + "This isn't a diversity checkbox problem. It's a authenticity problem. Kerala's audiences are among India's most "
      + "media-literate — they can smell a translated brief from a distance. Dialect matters. Cultural context matters. "
      + "The difference between a post that says \"Onam festival is harvest festival we celebrate\" (translated English) "
      + "vs. \"Ente Chingam month celebration begin cheythu\" (how a Malayali actually talks) is the difference between "
      + "being ignored and being shared.\n\n"
      + "The angle: audit the brand's existing Onam content, show them the gap, and produce a single replacement piece "
      + "that actually sounds native. One piece of proof is worth a hundred proposals."
    ),
    whyItWorks: "Every brand manager has seen their Onam post flop. Naming this openly makes them feel understood, not attacked. The '47 likes' detail is memorable and shareable internally. Low commitment entry — just an audit of their last Onam post — builds trust before any retainer conversation.",
    category: "Positioning",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: "the-diaspora-doubled",
    angle: "The Diaspora Double",
    tagline: "4M Malayalis live outside Kerala. Onam is the one week they all become your target audience at once.",
    description: (
      "The Malayali diaspora in Bangalore alone is estimated at 1.5M+. Add Mumbai, Delhi, Dubai (3.5M Malayalis in the GCC), "
      + "and the US/UK/Canada, and you have a population bigger than Kerala's own major cities spending Onam away from home.\n\n"
      + "This group over-indexes on:\n"
      + "• Nostalgia-driven content (they miss home — Onam content hits harder)\n"
      + "• Online ordering of Sadya kits, banana chips, traditional wear\n"
      + "• Watching Malayalam YouTube/Instagram to \"feel close to home\"\n"
      + "• Higher disposable income (diaspora professionals)\n\n"
      + "National brands like Zomato have already cracked this — their 2024 Onam campaign showed a young Malayali "
      + "professional traveling home, capturing regional nuances, with Zomato seamlessly delivering the feast. "
      + "Similarly, Linen Club's \"Ona Vakdhanam\" campaign leveraged nostalgia and the promise-keeping theme to "
      + "connect with Malayalis globally.\n\n"
      + "The angle: shoot in Malayali pockets of Bangalore/Mumbai — not in Kerala. The content then serves dual purpose: "
      + "it reaches the diaspora in those cities AND feels aspirational to consumers back in Kerala. One shoot, two audiences."
    ),
    whyItWorks: "This massively expands the addressable brands list — you don't need to be 'entering the Kerala market' to use this. Any brand with Malayali customers in metros (D2C, food delivery, fintech, co-working, real estate) qualifies. The 'shoot in your city' angle also removes the logistics objection ('we'd have to fly a crew to Kochi').",
    category: "Audience",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    id: "the-quick-commerce-shift",
    angle: "The Quick Commerce Shift",
    tagline: "Onam used to mean crowded markets. Now it means 10-minute delivery. Your content strategy needs to match the new retail reality.",
    description: (
      "This is the most important structural shift in the 2025 Onam market: quick commerce is rewriting retail. "
      + "Blinkit, Zepto, and Swiggy Instamart hit 4M+ daily orders nationally in March 2025 — more than double "
      + "YoY. During Raksha Bandhan alone, Zepto sold 820 rakhis per minute at peak.\n\n"
      + "In Kerala, traditional vegetable and textile merchants are flagging a \"significant dip\" as shoppers move online. "
      + "Malls report 80%+ conversion rates while traditional Broadway/MG Road shops see stagnant or declining footfall. "
      + "Buyers come with Instagram-sourced designs that traditional shops can't stock.\n\n"
      + "For brands selling packaged food, home care, personal care, electronics, or gifts: your Onam sale now happens "
      + "on a mobile screen, not a store shelf. The creative that wins isn't a billboard — it's a Reel that gets someone "
      + "to open Blinkit and search your brand. Social proof, unboxing, and 'what's in my Onam hamper' content is the new "
      + "point-of-purchase display.\n\n"
      + "The angle: create shoppable content specifically designed for the quick-commerce decision window. Short, punchy, "
      + "product-first — optimised for the 14-second window between 'I need this' and 'add to cart.'"
    ),
    whyItWorks: "This is where the market is going, not where it's been. Most Onam content strategies still assume a retail/print/TV funnel. This angle positions Lisn as forward-looking. D2C brands especially need this — their entire business model depends on being discovered in the quick-commerce search, not on a shelf.",
    category: "Retail Strategy",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
]

const categories = ["All", ...Array.from(new Set(ideas.map((i) => i.category)))]

export default function IdeasClient() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredIdeas = activeCategory === "All" ? ideas : ideas.filter((i) => i.category === activeCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white font-sans selection:bg-[#FFE500] selection:text-black">

        {/* Hero */}
        <section className="pt-32 pb-16 px-4 border-b-4 border-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,229,0,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-[#FFE500] font-mono text-sm uppercase tracking-widest border border-[#FFE500] px-3 py-1 inline-block mb-8">
              Idea Repository
            </span>
            <h1 className="font-heading text-5xl md:text-8xl mb-8 uppercase tracking-tighter leading-[0.85]">
              ONAM
              <br />
              MARKETING
              <br />
              <span className="text-[#FFE500]">ANGLES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Onam drives ₹1,100+ crore in ad spend and a 20-30% retail consumption spike.
              Here are six research-backed angles for brands that want a real share of it.
            </p>
            <p className="text-zinc-500 font-mono text-sm">
              Based on 2025 market data. Pick an angle. Steal the thinking. Or let us execute it.
            </p>
          </div>
        </section>

        <Marquee text="₹1,100 CR AD SPEND • 20-30% CONSUMPTION SPIKE • 4M+ DIASPORA • 10-DAY CALENDAR • KAANAM VITTUM ONAM UNNANAM" />

        {/* Filter */}
        <section className="sticky top-[80px] z-40 bg-black/90 backdrop-blur-md border-b-4 border-zinc-800 py-4 px-4 overflow-x-auto custom-scrollbar">
          <div className="max-w-7xl mx-auto flex gap-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 font-bold uppercase tracking-widest border-2 transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#FFE500] text-black border-[#FFE500]"
                    : "bg-black text-white border-zinc-700 hover:border-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Idea Cards Grid */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIdeas.map((idea) => (
              <div
                key={idea.id}
                className="bg-zinc-900 border-4 border-zinc-800 hover:border-[#FFE500] p-8 flex flex-col group transition-all duration-300 relative"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#FFE500]">{idea.icon}</span>
                  <span className="text-xs font-mono text-[#FFE500] uppercase tracking-widest border border-[#FFE500] px-2 py-1 shrink-0 ml-4">
                    {idea.category}
                  </span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl mb-3 leading-tight">
                  {idea.angle}
                </h2>

                <p className="text-[#FFE500] font-bold text-sm uppercase tracking-wider mb-4 leading-snug">
                  {idea.tagline}
                </p>

                <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 space-y-2 whitespace-pre-line">
                  {idea.description}
                </div>

                <div className="border-t border-zinc-700 pt-4 mb-6">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2">Why this works</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {idea.whyItWorks}
                  </p>
                </div>

                <a
                  href="https://wa.me/918893317488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-zinc-800 hover:bg-[#FFE500] hover:text-black border-2 border-zinc-700 hover:border-[#FFE500] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 mt-auto"
                >
                  <MessageSquare className="w-5 h-5" />
                  Execute This Angle
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-white text-black px-4 py-16 text-center border-t-4 border-black">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-4xl md:text-6xl mb-6 uppercase tracking-tight leading-[0.9]">
              Not sure which angle fits?
            </h3>
            <p className="text-xl font-bold mb-4">
              Tell us about your brand. We'll pick the right Onam angle and brief it out in 10 minutes.
            </p>
            <p className="text-zinc-500 font-mono text-sm mb-8">
              No pitch. No obligation. Just strategy.
            </p>
            <a
              href="https://wa.me/918893317488"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              <MessageSquare className="w-5 h-5" />
              Book Your Onam Brief
            </a>
          </div>
        </section>

        {/* Footer */}
        <section className="bg-black px-4 py-16">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex items-center justify-center gap-8 mb-12">
              <button className="w-20 h-20 bg-[#FFE500] flex items-center justify-center shadow-[8px_8px_0px_0px_#ffffff]">
                <MessageSquare className="w-8 h-8 text-black" />
              </button>
              <a
                href="https://wa.me/918893317488"
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 bg-[#FFE500] flex items-center justify-center shadow-[8px_8px_0px_0px_#ffffff]"
              >
                <MessageSquare className="w-8 h-8 text-black" />
              </a>
            </div>
            <div className="text-white mb-16">
              <p className="mb-4 text-2xl font-bold font-mono">
                <a href="tel:+919747832393" className="hover:text-[#FFE500] transition-colors">9747832393</a> /{" "}
                <a href="tel:+918893317488" className="hover:text-[#FFE500] transition-colors">8893317488</a>
              </p>
              <p className="text-2xl font-bold font-mono text-[#FFE500]">
                <a href="mailto:akhil@lisnagency.online" className="hover:text-white transition-colors">akhil@lisnagency.online</a>
              </p>
            </div>
            <p className="text-zinc-500 text-sm uppercase tracking-widest">© LISN Agency {new Date().getFullYear()}. All rights reserved.</p>
          </div>
        </section>

      </main>
    </>
  )
}
