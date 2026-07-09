"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Marquee } from "@/components/marquee"
import { MessageSquare, Target, TrendingUp, Users, ShoppingCart, Lightbulb, MapPin, Sparkles } from "lucide-react"

type Faq = { q: string; a: string }

type Idea = {
  id: string
  angle: string
  tagline: string
  description: React.ReactNode
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
      <>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE PROVERB</strong></p>
        <p className="mb-3">There is an old Malayalam proverb: "Kaanam vittum Onam unnanam." It means you celebrate Onam even if you have to sell your property. The data backs it up. Remittances to Kerala hit ₹2 lakh crore annually, which is 19.7% of India's total remittance inflow [3]. Per household, that is an average of ₹2.23 lakh. Remittances now account for 23.2% of Kerala's Net State Domestic Product, up from 13.5% in 2018 [4].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE CONCENTRATION</strong></p>
        <p className="mb-3">Here is what most brand managers miss: only 12% of Kerala households receive remittances [4]. It is concentrated. The top 12% have the highest disposable income in the state. But 73.3% of households now get these remittances as regular monthly digital transfers, meaning the spending is predictable, not lumpy [4].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE AD SPEND</strong></p>
        <p className="mb-3">Total ad spend crosses ₹1,100 crore and grows 15-20% year on year [1]. Jewellery alone does ₹7,000-8,000 crore in a single Onam season [7]. Textiles were revised upward by the Kerala Textile and Garments Association: they now estimate ₹30,000-40,000 crore in garment sales [8]. Consumer durables do ₹5,000 crore across July-September [8]. Electronics does ₹100 crore in Kochi alone [5]. Bevco (state liquor) did ₹826 crore in 12 days [2]. Godrej Appliances saw 40% growth in washing machines and ACs during Onam 2024 [6].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">YOUR MOVE</strong></p>
        <p className="mb-3">If you are an FMCG, electronics, or D2C brand: this concentrated spending is yours to capture. The brands that treat Onam as a premium-tier buying moment (not a discount-clearance event) win. Kerala's middle class upgrades during Onam: larger TVs, front-load machines, hybrid cars, 18-carat gold.</p>
      </>
    ),
    whyItWorks: "Hard data makes this easy to take to your leadership. The numbers are public (RBI, KMS, ET, Hindu BusinessLine). The insight about concentrated spend (top 12% of households) is something most generic Onam blog posts miss.",
    category: "Market Intelligence",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    id: "the-10-day-calendar",
    angle: "The 10-Day Calendar",
    tagline: "Uthradam. Thiruvonam. Avittam. Every day has a different consumer behaviour. Your content should too.",
    description: (
      <>
        <p className="mb-3">Onam is 10 days, but not all days are equal. The three peak days (Uthradam, Thiruvonam, and Avittam) drive completely different consumer actions. Here is what most brands get wrong: they run one post on Thiruvonam and call it a campaign.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">UTHIRADAM</strong></p>
        <p className="mb-3">Last-minute shopping frenzy. Vegetable markets, textile shops, and electronics stores see peak footfall. Bevco did ₹137 crore in a single Uthradam day in 2025, 9.23% higher than the previous year [2]. Men drive this spending (Onam bonuses hit bank accounts). Content should tap urgency and last-minute gifting.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THIRUVONAM</strong></p>
        <p className="mb-3">The main day. Families gather for Sadya. The catering sector serves ₹250 crore in a single day [9]. Bevco is closed [2]. Content should be about togetherness, food, ritual. Women drive the decisions on this day (what to wear, what to cook, where to order from).</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">AVITTAM</strong></p>
        <p className="mb-3">Continued celebrations, travel return begins. Brands that run post-Onam "extend the festive" campaigns see lower CPM and higher engagement because fewer brands are competing. This is the most overlooked day.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">EXTENDED WINDOW</strong></p>
        <p className="mb-3">The month of Chingam is considered lucky for housewarmings, weddings, and major purchases [28]. Onam 2025 had an unusually high number of weddings in Chingam, which boosted demand across electronics, textiles, and gold [5]. This extends the buying window well beyond the 10-day festival.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">WEATHER RISK</strong></p>
        <p className="mb-3">There is also a weather angle most people ignore. "Atham Veluthal Onam Karukkum" is a Malayalam proverb: if Atham day is clear, expect rain during Onam [8]. Rains in 2025 hurt AC sales (down 30-40%) and brick-and-mortar footfall [10]. Digital content is weather-proof in a way physical retail isn't.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">YOUR MOVE</strong></p>
        <p className="mb-3">Build a day-wise content calendar. Different creative for each phase. Pre-Onam (urgency and demand gen), Thiruvonam (cultural belonging), post-Onam (extension and loyalty).</p>
      </>
    ),
    whyItWorks: "Most brands run one Onam post on the main day and call it done. This gives you a 10-day content plan that mirrors actual consumer behaviour, recognises gender-differentiated spending patterns, and accounts for weather risk.",
    category: "Content Strategy",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: "the-long-form-advantage",
    angle: "The Long-Form Advantage",
    tagline: "Malayalis don't just scroll. They watch 12-minute reviews during Onam. This changes how you brief content.",
    description: (
      <>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE PLATFORM</strong></p>
        <p className="mb-3">The most under-appreciated fact for national brands entering Kerala: the Malayalam internet runs on long-form video. YouTube channels like Karikku, Sujith Bhakthan's Tech Travel Eat (2.19M subs in 4 years) [25], and Jayaraj G Nath (tech journalism in Malayalam) drive serious viewership and serious purchases. These are not 30-second Reels. These are 8-15 minute deep dives that people actually watch.</p>
        <p className="mb-3">During Onam, screen time spikes because families are at home. Malayalam audiences over-index on long-form YouTube for consideration and conversion, while Reels work for awareness [26].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE CASE STUDY</strong></p>
        <p className="mb-3">Croma proved this works. They ran an "Electro Onam Sale" campaign with two Malayalam tech creators: Gadgets One (1.5M subs) and ADOPIX (850K subs). Both posted YouTube Shorts showcasing Onam tech deals. Each got 100K+ reach. But the real result: Croma stores reported a noticeable increase in footfall during the sale period [16].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE D2C INSIGHT</strong></p>
        <p className="mb-3">A single 12-minute product review in Malayalam during Onam week beats a bunch of 30-second Reels for consideration metrics [26]. The reason: Malayali audiences have high media literacy. They prefer in-depth reviews. And they have the time (they are on holiday). National D2C brands that ship the same Reels-only brief into Malayalam creator sets under-perform [26].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">YOUR MOVE</strong></p>
        <p className="mb-3">Fund 3-4 Malayalam YouTube creators to make Onam-themed review or content pieces. The format does the targeting work for you. Pair it with short-form for awareness.</p>
      </>
    ),
    whyItWorks: "This breaks from the standard Reels-only brief most brands default to. You get first-mover advantage on a format your competitors are ignoring. The Croma case study proves this is not theory. The long-form insight is backed by platform-level data on Malayalam content consumption [26].",
    category: "Creator Strategy",
    icon: <Target className="w-8 h-8" />,
  },
  {
    id: "the-cringe-barrier",
    angle: "The Cringe Barrier",
    tagline: "Why do national brands' Onam posts get 47 likes? Because they sound like they Googled 'Onam traditions' that morning.",
    description: (
      <>
        <p className="mb-3">A marketing manager in Mumbai or Gurgaon briefs a creative team to "do something for Onam." The result is a graphic with a Kathakali face, a generic 'Happy Onam' line, and a product photoshopped next to a pookalam. It gets 47 likes. The Malayali audience scrolls past.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">WHY IT FEELS FAKE</strong></p>
        <p className="mb-3"><strong className="text-gray-300">1.</strong> Using formal, written Malayalam instead of the natural Manglish mix people actually speak. "Onam festival is harvest festival we celebrate" (translated English) vs. "Ente Chingam month celebration begin cheythu" (natural Manglish) is the difference between being ignored and being shared.</p>
        <p className="mb-3"><strong className="text-gray-300">2.</strong> Ignoring that Kerala has the highest literacy rate in India at 96.2%. Malayalis consume more news, more YouTube, and more OTT than most other regional language audiences. They notice when a 'Kerala house' in your ad has the wrong architecture. They spot a Madurai accent pretending to be Malayalam in seconds.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE FIX</strong></p>
        <p className="mb-3">Not 'hire a Malayali translator.' Create content that references real, specific Onam details: the exact price of banana chips this year (₹480/kg, up from ₹320 because coconut oil went from ₹320 to ₹382) [11][12], that marigold prices doubled because of crop damage in Gundlupet [13], or that Volkswagen launched black-edition cars specifically for Kerala because Malayalis prefer black cars more than any other regional market [19][20].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">YOUR MOVE</strong></p>
        <p className="mb-3">Audit your existing Onam content. Find the gap. Then produce a single replacement piece that references current-year specifics. One piece of proof is worth a hundred proposals.</p>
      </>
    ),
    whyItWorks: "You have probably seen your own Onam post flop. Naming this openly makes you feel understood, not attacked. The specific cultural details (chips prices, car colour preferences) show genuine knowledge, not a Google search. Low commitment entry point: just an audit of your last Onam post.",
    category: "Positioning",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: "the-diaspora-doubled",
    angle: "The Diaspora Double",
    tagline: "4M Malayalis live outside Kerala. Onam is the one week they all become your target audience at once.",
    description: (
      <>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE SIZE</strong></p>
        <p className="mb-3">The Malayali diaspora in Bangalore alone is estimated at 1.5M+. Add Mumbai, Delhi, Dubai (3.5M Malayalis in the GCC), and the US/UK/Canada. That is a population bigger than Kerala's own major cities, all spending Onam away from home.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE SHIFT</strong></p>
        <p className="mb-3">The diaspora is changing. The Kerala Migration Survey 2023 found that GCC migration dropped from 89.2% to 80.5% of total outbound [4]. The US, UK, Canada, Australia share is growing because of student migration and skilled tech workers. These are higher-income earners. Per capita remittances rose to ₹61,118 [4]. The average remittance per household more than doubled from ₹96,185 in 2018 to ₹2,23,729 in 2023 [4]. And for the first time, Kerala recorded outward remittances of ₹43,378 crore (nearly 20% of its inflow) [4].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">WHAT THEY WANT</strong></p>
        <p className="mb-3">Nostalgia-driven content (they miss home, Onam content hits harder). Online ordering of Sadya kits, banana chips, traditional wear. Watching Malayalam YouTube and Instagram to feel close to home. Higher disposable income (diaspora professionals in tech/finance).</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE MULTI-MARKET ANGLE</strong></p>
        <p className="mb-3">Any Malayalam-language content you produce for Kerala will also reach the Western diaspora. Students in the UK, Canada, and Australia actively seek out Malayalam social media during Onam because it is their strongest connection to home. That makes Malayalam-language Onam campaigns effectively multi-market by default — same production cost, larger addressable audience.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">PROOF IT WORKS</strong></p>
        <p className="mb-3">Zomato's 2024 campaign showed a young Malayali professional traveling home, with Zomato delivering the sadya [17]. Linen Club's "Ona Vakdhanam" campaign used the promise-keeping theme to connect with Malayalis globally [18]. CarDekho launched an "Onam Auto Fest" microsite targeting diaspora Malayalis shopping for cars via mobile [22][27].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">YOUR MOVE</strong></p>
        <p className="mb-3">Shoot in Malayali pockets of Bangalore or Mumbai, not in Kerala. The content serves dual purpose: it reaches the diaspora in those cities AND feels aspirational to consumers back in Kerala. One shoot, two audiences.</p>
      </>
    ),
    whyItWorks: "This expands the number of teams who can use this. You don't need to be 'entering the Kerala market.' If your brand has Malayali customers in metros (D2C, food delivery, fintech, co-working, real estate), this applies. The 'shoot in your city' move removes the logistics objection. The migration shift data (GCC declining, West growing) is new to most marketing teams.",
    category: "Audience",
    icon: <MapPin className="w-8 h-8" />,
  },
  {
    id: "the-quick-commerce-shift",
    angle: "The Quick Commerce Shift",
    tagline: "Onam used to mean crowded markets. Now it means 10-minute delivery. Your content strategy needs to match the new retail reality.",
    description: (
      <>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE SHIFT</strong></p>
        <p className="mb-3">This is the biggest structural shift in the 2025 Onam market: quick commerce is rewriting retail, and the traditional supply chain is struggling to adapt. Blinkit, Zepto, and Swiggy Instamart hit 4M+ daily orders nationally in March 2025, more than double YoY [23]. During Raksha Bandhan, Zepto sold 820 rakhis per minute at peak [24]. For Onam, quick commerce platforms went beyond groceries: they sold silver rakhis, electronics, traditional wear, and Onam gift hampers [24].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE GAP</strong></p>
        <p className="mb-3">In Kerala, traditional merchants are feeling the squeeze. Vegetable and textile sellers in Kochi flagged a "significant dip" as shoppers moved online [14]. The Kerala Merchants Chamber of Commerce confirmed that conventional shops are struggling while malls report 80%+ conversion rates [5]. Malls have adapted with festive zones and Mahabali mascots [5]. Traditional Broadway and MG Road shops have not [5]. Buyers now come with Instagram-sourced designs that traditional textile shops cannot stock [14]. This is a content-to-commerce pipeline that works only if your brand is discoverable on social media. A Kudumbashree group sold 5,400 Onam gift hampers at ₹799 each via a mobile app (PocketMart) in two weeks [15].</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">THE GST ANGLE</strong></p>
        <p className="mb-3">There is a pricing tension worth watching: the 2025 GST reform announcement actually hurt Onam sales in the short term. Consumers deferred TV purchases (down 8%), AC purchases (down 30-40%), expecting price drops [10]. This created a gap that brands with content strategies could exploit by explaining why Onam prices and extended warranty were still the better deal.</p>
        <p className="mb-2"><strong className="text-white uppercase tracking-wider text-xs">YOUR MOVE</strong></p>
        <p className="mb-3">Create shoppable content designed for the quick-commerce decision window. Short, punchy, product-first. And if you are a D2C brand, your entire Onam strategy should assume the transaction happens on a mobile screen, not a store shelf.</p>
      </>
    ),
    whyItWorks: "This is where the market is going, not where it's been. Most Onam content strategies still assume a retail, print, or TV funnel. The Kudumbashree example proves that even non-tech groups are using mobile commerce. The GST tension angle gives you a specific conversation starter with consumers.",
    category: "Retail Strategy",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
]

const citations = [
  { id: 1, source: "Exchange4Media", title: "Onam 2025 ad spends in Kerala to cross Rs 1,100 crore", date: "Aug 2025" },
  { id: 2, source: "New Indian Express", title: "Kerala's Bevco sees 6.38% rise in Onam sales, earning Rs 826 crore", date: "Sep 2025" },
  { id: 3, source: "Onmanorama", title: "Kerala sees record-breaking inflow from NRIs", date: "May 2025" },
  { id: 4, source: "The Wire / RBI Bulletin / Kerala Migration Survey 2023", title: "Gulf Dreams to Global Pathways", date: "Mar 2025" },
  { id: 5, source: "Times of India", title: "Brisk Onam business: Kochi traders eyeing a windfall", date: "Sep 2025" },
  { id: 6, source: "Hindu BusinessLine", title: "Consumer durables players see strong double-digit growth during Onam", date: "Sep 2024" },
  { id: 7, source: "Mathrubhumi", title: "Gold sales set to peak during Onam; expected to hit Rs 7,000-8,000 crore", date: "Sep 2024" },
  { id: 8, source: "Hindu BusinessLine", title: "Rains play spoilsport on Onam festive mood", date: "Aug 2025" },
  { id: 9, source: "Mathrubhumi", title: "Onam Shopping Spree: Malayalis spend crores on clothes, flowers and food", date: "Aug 2023" },
  { id: 10, source: "The Hindu", title: "GST irony plays out in Onam market as consumers postpone purchase plans", date: "Sep 2025" },
  { id: 11, source: "Mathrubhumi", title: "Onam specials hit markets: Upperi and Sharkaravaratti in high demand", date: "Aug 2025" },
  { id: 12, source: "Hindu BusinessLine", title: "Sales of chips hit in Kerala as Nendran banana turns cheap and coconut oil pricey", date: "Aug 2025" },
  { id: 13, source: "Onmanorama", title: "Soaring flower prices in Karnataka push up pookalam costs in Kerala this Onam", date: "Aug 2025" },
  { id: 14, source: "The Hindu", title: "Traditional players in Onam market struggle to find their feet as e-commerce gains currency", date: "Aug 2025" },
  { id: 15, source: "Times of India", title: "Onam gift hampers: Kudumbashree entrepreneurs pocket 48L", date: "Aug 2025" },
  { id: 16, source: "Regional Influencers", title: "Case Study: Leveraging Regional Influencer Marketing for Croma's Electro Onam Sale", date: "Oct 2023" },
  { id: 17, source: "Campaign India", title: "Brands ride Onam wave with creative festive flair", date: "Sep 2024" },
  { id: 18, source: "Indian Textile Journal / ImagesBOF", title: "Linen Club launches 'Ona Vakdhanam' campaign for Onam 2024", date: "Sep 2024" },
  { id: 19, source: "Onmanorama", title: "White goods or vehicles, why Kerala's Onam season is crucial for industry giants", date: "Sep 2024" },
  { id: 20, source: "ET Auto", title: "Volkswagen delivers 101 cars in Kerala on Chingam, Malayalam New Year", date: "Aug 2024" },
  { id: 21, source: "Economic Times", title: "Discounts, offers drive car, electronics sales in Onam, Ganesh Chaturthi", date: "Sep 2024" },
  { id: 22, source: "Business News This Week", title: "CarDekho Launches Onam Auto Fest 2025 in Kerala", date: "Aug 2025" },
  { id: 23, source: "Moneycontrol", title: "Blinkit, Zepto and Swiggy Instamart scale to over 4 million daily orders", date: "May 2025" },
  { id: 24, source: "Business Standard", title: "Raksha Bandhan rush: Quick commerce platforms face demand overload", date: "Aug 2025" },
  { id: 25, source: "The Reelstars", title: "Spotlight On Kerala Influencers Creating Malayalam Content This Onam Season", date: "Sep 2024" },
  { id: 26, source: "Zapplr Media", title: "Malayalam Influencer Marketing 2026 Guide", date: "May 2026" },
  { id: 27, source: "CarDekho", title: "Onam Auto Fest 2025 press release", date: "Aug 2025" },
  { id: 28, source: "Onmanorama", title: "Onam shoppers swarm stores in Kerala even as proposed GST rate rejig promises 'Diwali gift'", date: "Aug 2025" },
]

const categories = ["All", ...Array.from(new Set(ideas.map((i) => i.category)))]

export default function IdeasClient({ faqs = [] }: { faqs?: Faq[] }) {
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
              Onam 2026 Playbook
            </span>
            <h1 className="font-heading text-5xl md:text-8xl mb-8 uppercase tracking-tighter leading-[0.85]">
              ONAM 2026
              <br />
              MARKETING
              <br />
              <span className="text-[#FFE500]">ANGLES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Onam drives ₹1,100+ crore in ad spend and a 20-30% retail consumption spike.
              Here are six research-backed <strong className="text-white">Onam marketing angles &amp; Malayalam ad
              strategies</strong> for national brands that want a real share of it.
            </p>
            <p className="text-zinc-500 font-mono text-sm">
              Thiruvonam 2026: 26 August. Based on the latest 2025 season data. Pick an angle. Steal the thinking. Or let
              us execute it.
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

                <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
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

        {/* FAQ Section - captures Onam People Also Ask queries */}
        {faqs.length > 0 && (
          <section className="bg-white text-black px-4 py-16 md:py-24 border-t-4 border-black">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-6xl mb-12 uppercase tracking-tight">
                Onam Marketing <span className="bg-[#FFE500] px-2">FAQs</span>
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-zinc-100 p-6 md:p-8 border-l-4 border-[#FFE500]">
                    <h3 className="font-bold text-xl md:text-2xl mb-3">{faq.q}</h3>
                    <p className="text-base md:text-lg leading-relaxed text-zinc-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related resources - internal linking */}
        <section className="bg-black border-t-4 border-zinc-800 px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-4xl mb-8 uppercase tracking-tight text-white">
              Plan your <span className="text-[#FFE500]">Onam campaign</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
              <Link href="/ugc-pricing" className="border border-zinc-700 hover:border-[#FFE500] hover:text-[#FFE500] transition-colors p-4 text-zinc-300">
                UGC &amp; ad pricing in India →
              </Link>
              <Link href="/playbook/jewellery" className="border border-zinc-700 hover:border-[#FFE500] hover:text-[#FFE500] transition-colors p-4 text-zinc-300">
                Jewellery ad playbook →
              </Link>
              <Link href="/playbook/kerala-market-entry" className="border border-zinc-700 hover:border-[#FFE500] hover:text-[#FFE500] transition-colors p-4 text-zinc-300">
                Kerala market entry guide →
              </Link>
              <Link href="/" className="border border-zinc-700 hover:border-[#FFE500] hover:text-[#FFE500] transition-colors p-4 text-zinc-300">
                Street interview UGC →
              </Link>
            </div>
          </div>
        </section>

        {/* Sources Section */}
        <section className="bg-zinc-900 border-t-4 border-zinc-700 px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h3 className="font-heading text-3xl md:text-5xl mb-10 uppercase tracking-tight text-white">
              SOURCES
            </h3>
            <p className="text-zinc-500 font-mono text-xs mb-8 uppercase tracking-wider">
              Every data point on this page is sourced. Here is the full list.
            </p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-3">
              {citations.map((c) => (
                <div key={c.id} className="flex gap-3 text-sm">
                  <span className="text-[#FFE500] font-mono shrink-0 mt-0.5">[{c.id}]</span>
                  <div>
                    <span className="text-gray-300">{c.title}</span>
                    <span className="text-zinc-600 block font-mono text-xs">{c.source} &middot; {c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="bg-white text-black px-4 py-16 text-center border-t-4 border-black">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-heading text-4xl md:text-6xl mb-6 uppercase tracking-tight leading-[0.9]">
              Not sure which angle fits?
            </h3>
            <p className="text-xl font-bold mb-4">
              Tell us about your brand. We will pick the right Onam angle and brief it out in 10 minutes.
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
                <span className="inline-flex items-center gap-2">
                  <a href="https://wa.me/919747832393" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE500] transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a href="tel:+919747832393" className="hover:text-[#FFE500] transition-colors">9747832393</a>
                </span> /{" "}
                <span className="inline-flex items-center gap-2">
                  <a href="https://wa.me/918893317488" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE500] transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a href="tel:+918893317488" className="hover:text-[#FFE500] transition-colors">8893317488</a>
                </span>
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
