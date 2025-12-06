export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  content: string; // HTML/Markdown-like content
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-ads-fail-in-kerala",
    title: "WHY YOUR \"NORTH INDIAN\" ADS ARE BURNING MONEY IN KERALA",
    subtitle: "You can translate the copy to Malayalam, but you can't translate the vibe.",
    date: "December 6, 2025",
    category: "Marketing Strategy",
    readTime: "4 min read",
    content: "\n      <p class=\"mb-6 text-xl leading-relaxed\">Here is a hard truth for every Bangalore or Delhi-based brand manager trying to crack the Kerala market:</p>\n      <p class=\"mb-6 text-xl leading-relaxed font-bold\">Your ads feel foreign.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">You hired a great agency in Mumbai. They shot a beautiful ad. High production value. Great lighting. Then you got a voiceover artist to dub the Hindi script into Malayalam.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">And to a Malayali, it sounds like a robot reading a textbook.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The \"Cringe\" Factor</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Kerala has a specific cultural radar for inauthenticity. We don't just ignore bad localization; we mock it. When we see a model who clearly isn't from here, pretending to be from here, the trust evaporates instantly.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">You aren't just failing to convert. You are actively damaging your brand equity with every impression.</p>\n\n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The Solution: Get Out of the Studio</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Stop trying to \"fake\" local. Be actually local.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">Take your product to Marine Drive in Kochi. Go to Lulu Mall. Put it in the hands of a real uncle in a mundu. A college student from Trivandrum. A techie in Calicut.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">Let them speak in their dialect. Let them use words like <em>\"Polichu\"</em> or <em>\"Adipoli\"</em> naturally—not because a script told them to, but because they actually felt it.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">One shaky iPhone video of a real Malayali loving your product is worth more than a ₹50 Lakh studio ad that feels fake.</p>\n    "
  },
  {
    slug: "selling-sensory-products-online",
    title: "THE PERFUME PARADOX: YOU CAN'T SELL A SMELL",
    subtitle: "Selling fragrance or food online? Stop using photos. Start using reactions.",
    date: "December 5, 2025",
    category: "DTC Insights",
    readTime: "3 min read",
    content: "\n      <p class=\"mb-6 text-xl leading-relaxed\">If you are selling perfume, skincare, or food online, you have a massive disadvantage:</p>\n      <p class=\"mb-6 text-xl leading-relaxed font-bold\">The internet is visual. Your product is sensory.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">You can write \"Notes of Sandalwood and Bergamot\" all you want. Nobody knows what that smells like. You can post a 4K photo of your spicy chips. Nobody knows if it has that perfect crunch.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">Stop Selling the Product. Sell the Flinch.</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Since you can't transmit the smell, you have to transmit the <em>feeling</em> of the smell. And the only way to do that is through the involuntary biology of a stranger.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">We call it the \"Blind Sniff Test.\"</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">We stop a stranger. We spray the perfume. We film their face in slow motion.</p>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2 text-xl\">\n        <li>The split-second their eyes widen.</li>\n        <li>The involuntary smile.</li>\n        <li>The way they lean in for a second sniff.</li>\n      </ul>\n      <p class=\"mb-6 text-xl leading-relaxed\">You can't fake that micro-expression. And when a viewer sees it, their mirror neurons fire. They <em>feel</em> the smell through the screen.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">Stop styling your food. Start filming people eating it.</p>\n    "
  },
  {
    slug: "stop-hiring-influencers",
    title: "STOP PAYING INFLUENCERS TO LIE ABOUT YOUR PRODUCT",
    subtitle: "The era of the 'Unboxing Video' is dying. Consumers are smart. They know the script.",
    date: "December 4, 2025",
    category: "Industry Trends",
    readTime: "5 min read",
    content: "\n      <p class=\"mb-6 text-xl leading-relaxed\">The gig is up. We all know how it works.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">You pay an influencer ₹50,000. You send them a brief. They hold the bottle next to their face. They smile. They say, \"Guys, I am <em>obsessed</em> with this.\"</p>\n      <p class=\"mb-6 text-xl leading-relaxed font-bold\">And absolutely nobody believes them.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">They Are Just Billboards That Talk</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Influencer marketing has become just another form of paid media. It has lost its original superpower: <strong>Trust.</strong></p>\n      <p class=\"mb-6 text-xl leading-relaxed\">When money changes hands, skepticism enters the room. The viewer knows the smile is part of the contract.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The \"Zero-Context\" Credibility</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">This is why Street Interviews are crushing influencer ads right now.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">When we stop a random person on the street, the viewer knows: <em>This person doesn't owe the brand anything.</em></p>\n      <p class=\"mb-6 text-xl leading-relaxed\">If they hate it, they'll say it. (And we film that too). So when they say \"Whoa, this is actually good,\" it hits different. It lands as truth, not copy.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">Stop buying reach. Start hunting for truth.</p>\n    "
  }
];