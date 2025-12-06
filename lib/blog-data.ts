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
    content: "\n      <p class=\"mb-6 text-xl leading-relaxed\">Kerala consumers are skeptical. They see a polished studio ad with a model from Mumbai, and they scroll. They don't trust the brand because the brand doesn't look like <em>them</em>.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The Trust Deficit</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">If you are a DTC brand based in Bangalore or Delhi, you likely have a standard \"pan-India\" creative strategy. High-gloss visuals, aspirational models, and English (or Hindi-dubbed) voiceovers. In Kerala, this screams \"outsider.\"</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">The Kerala market is unique. It's highly literate, deeply cynical about marketing fluff, and incredibly loyal to brands that \"get it.\" When they see an ad that feels manufactured, they ignore it. When they see an ad that feels <em>real</em>, they engage.</p>\n\n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The Fix: Radical Localization</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Don't hire an actor to pretend to be a Malayali. Go to Marine Drive in Kochi. Put your product in the hands of a real Mallu uncle, a college student from Trivandrum, or a techie in Calicut.</p>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2 text-xl\">\n        <li>Let them speak in their dialect.</li>\n        <li>Let them react honestly (even if it's funny).</li>\n        <li>Let the background noise of the city be in the video.</li>\n      </ul>\n      <p class=\"mb-6 text-xl leading-relaxed\">One raw, unscripted reaction from a local beats 100 polished studio shots. It signals: \"This brand isn't just selling to us; they are <em>in</em> our world.\"</p>\n    "
  },
  {
    slug: "selling-sensory-products-online",
    title: "THE PERFUME PARADOX: YOU CAN'T SELL A SMELL",
    subtitle: "Selling fragrance or food online? Stop using photos. Start using reactions.",
    date: "December 5, 2025",
    category: "DTC Insights",
    readTime: "3 min read",
    content: "\n      <p class=\"mb-6 text-xl leading-relaxed\">Selling perfume on Instagram is impossible. A photo of a bottle tells me nothing. A description like \"notes of sandalwood and bergamot\" means nothing to the average scroller.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The \"Blind Sniff\" Test</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">You can't transmit smell through a phone screen. But you <em>can</em> transmit the feeling of a smell. How? By capturing the involuntary micro-expressions of strangers.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">We stop strangers. We spray. We film the split-second reaction when the scent hits their nose.</p>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2 text-xl\">\n        <li>If their eyes widen...</li>\n        <li>If they smile involuntarily...</li>\n        <li>If they lean in for a second smell...</li>\n      </ul>\n      <p class=\"mb-6 text-xl leading-relaxed\">The viewer <em>feels</em> the smell through the stranger's reaction. You are borrowing the stranger's sensory experience to convince the viewer.</p>\n\n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The \"Crunch\" Factor for Food</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">The same applies to food. A styled photo of a chip looks like plastic. A video of a guy on the street taking a bite and genuinely saying \"Polichu!\" (Awesome) triggers a craving. It’s the difference between looking at a menu and watching your neighbor eat.</p>\n    "
  },
  {
    slug: "stop-hiring-influencers",
    title: "STOP PAYING INFLUENCERS TO LIE ABOUT YOUR PRODUCT",
    subtitle: "The era of the 'Unboxing Video' is dying. Consumers are smart. They know the script.",
    date: "December 4, 2025",
    category: "Industry Trends",
    readTime: "5 min read",
    content: "\n      <p class=\"mb-6 text-xl leading-relaxed\">Everyone knows they were paid to say \"It's amazing.\" The trust is gone. We have reached 'Peak Influencer,' and the ROI is plummeting.</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">The New Meta: Radical Honesty</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Consumers are craving truth. They are tired of the polished, ring-lit, scripted endorsements. They want to know: \"Does this actually work, or is it just hype?\"</p>\n      \n      <h3 class=\"text-3xl font-bold text-[#FFE500] mb-4 uppercase\">Enter the Street Test</h3>\n      <p class=\"mb-6 text-xl leading-relaxed\">Take your product to the street. Ask random people. Some will hate it. Some will be confused. But the ones who love it? That footage is pure gold.</p>\n      <p class=\"mb-6 text-xl leading-relaxed\">Why? Because the viewer knows <strong>we didn't pay them</strong>. There is no contract. There is no script. Just a raw, unfiltered human reaction. Authenticity isn't a buzzword anymore; it's a survival strategy.</p>\n    "
  }
];
