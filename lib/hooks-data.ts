export interface AdHook {
  id: string;
  category: string;
  hook: string;
  explanation: string;
}

export const viralHooks: AdHook[] = [
  // --- SKINCARE & BEAUTY (8 Hooks) ---
  {
    id: "skin-1",
    category: "Skincare",
    hook: "Stop scrolling if the humidity in Mumbai/Kerala is ruining your hair.",
    explanation: "Local Pain Point: Targets the specific 'frizzy hair' problem caused by Indian coastal weather."
  },
  {
    id: "skin-2",
    category: "Skincare",
    hook: "I asked 50 people at Connaught Place to guess the price of my sunscreen.",
    explanation: "Curiosity Gap: Street interview format suggesting the product looks expensive but isn't."
  },
  {
    id: "skin-3",
    category: "Skincare",
    hook: "Your Nani was right about Haldi, but she didn't have this.",
    explanation: "Tradition vs. Modernity: Validates Indian home remedies while pivoting to a convenient product."
  },
  {
    id: "skin-4",
    category: "Skincare",
    hook: "Why I stopped using Salicylic Acid on my Indian skin.",
    explanation: "Pattern Interrupt: Controversial statement against a popular ingredient to offer a better alternative."
  },
  {
    id: "skin-5",
    category: "Skincare",
    hook: "Can this removing oil handle 'Shaadi-Level' waterproof makeup?",
    explanation: "Stress Test: Uses the 'Indian Wedding' benchmark for heavy makeup durability."
  },
  {
    id: "skin-6",
    category: "Skincare",
    hook: "POV: You forgot to apply sunscreen before a Delhi afternoon auto ride.",
    explanation: "Relatable Scenario: Viscerally connects with the pain of the harsh Indian sun."
  },
  {
    id: "skin-7",
    category: "Skincare",
    hook: "Don't buy this if you hate glowing skin. Seriously.",
    explanation: "Reverse Psychology: A classic direct-response tactic that challenges the viewer."
  },
  {
    id: "skin-8",
    category: "Skincare",
    hook: "Is your face wash stripping your natural oils? The 'Squeaky Clean' lie.",
    explanation: "Educational/Myth-Busting: Positions the brand as an expert educating the consumer."
  },

  // --- FOOD & BEVERAGE (8 Hooks) ---
  {
    id: "food-1",
    category: "Food",
    hook: "Is this healthier than a plate of Momos? Let's check the label.",
    explanation: "Comparison: Anchors the health value against a popular, unhealthy Indian street snack."
  },
  {
    id: "food-2",
    category: "Food",
    hook: "The only thing spicy enough to handle a Bangalore rainy day.",
    explanation: "Mood/Weather: Connects 'spiciness' with the romanticized Indian monsoon vibe."
  },
  {
    id: "food-3",
    category: "Food",
    hook: "Forget 'Ghar ka Khana' for one night. Trust me.",
    explanation: "Taboo: Challenges the 'home food is best' sacred cow to suggest a worthy treat."
  },
  {
    id: "food-4",
    category: "Food",
    hook: "I replaced my morning Chai with THIS for 7 days. Here is what happened.",
    explanation: "Case Study: The 'Chai replacement' is a huge claim in India, creating instant intrigue."
  },
  {
    id: "food-5",
    category: "Food",
    hook: "Blind Taste Test: Can this ₹200 chocolate beat a Lindt bar?",
    explanation: "David vs. Goliath: Positioning a local D2C brand against a global luxury standard."
  },
  {
    id: "food-6",
    category: "Food",
    hook: "Making 'Cafe-Style' Cold Coffee at home for less than ₹15.",
    explanation: "Value Proposition: Highlighting extreme savings compared to Starbucks/Third Wave."
  },
  {
    id: "food-7",
    category: "Food",
    hook: "Your gym trainer will actually approve of this snack.",
    explanation: "Authority Approval: overcoming the 'tasty = unhealthy' objection."
  },
  {
    id: "food-8",
    category: "Food",
    hook: "Watch me pack this order for a customer in Ladakh.",
    explanation: "Behind the Scenes: Shows reach, logistics capability, and care for customers."
  },

  // --- FASHION & JEWELLERY (8 Hooks) ---
  {
    id: "fashion-1",
    category: "Fashion",
    hook: "POV: You need an outfit for your best friend's Sangeet but you're broke.",
    explanation: "Occasion + Pain Point: Targeting the 'Wedding Guest' budget anxiety."
  },
  {
    id: "fashion-2",
    category: "Fashion",
    hook: "Wearing this Kurta to office vs. Wearing it to a date.",
    explanation: "Versatility: Indians value 'paisa vasool' (value for money) via multiple uses."
  },
  {
    id: "fashion-3",
    category: "Jewellery",
    hook: "Does this look like 22K Gold or 18K? Asking strangers on MG Road.",
    explanation: "Social Proof: Validating the 'premium look' of affordable jewellery on the street."
  },
  {
    id: "fashion-4",
    category: "Fashion",
    hook: "The 'Squat Test': Will these leggings rip at the gym?",
    explanation: "Durability Demo: Addressing the #1 fear with activewear transparency."
  },
  {
    id: "fashion-5",
    category: "Fashion",
    hook: "Styling a white shirt for a 9 AM meeting and a 9 PM party.",
    explanation: "Utility/Education: Teaching the viewer while selling the product."
  },
  {
    id: "fashion-6",
    category: "Jewellery",
    hook: "My mom thought I spent ₹50,000 on this set. I spent ₹3,000.",
    explanation: "Price Shock: The 'Mom Approval' metric is the gold standard for jewellery value."
  },
  {
    id: "fashion-7",
    category: "Fashion",
    hook: "Can this tote bag fit my laptop, tiffin, AND gym clothes?",
    explanation: "Capacity Test: The 'Indian Commuter' struggle of carrying everything."
  },
  {
    id: "fashion-8",
    category: "Jewellery",
    hook: "Waterproof Test: Wearing this necklace in the shower for a week.",
    explanation: "Quality Proof: Addressing the fear of artificial jewellery tarnishing."
  },

  // --- TECH & HOME (8 Hooks) ---
  {
    id: "tech-1",
    category: "Tech",
    hook: "Why buy an Apple Watch when this costs ₹2,000 and does the SAME thing?",
    explanation: "Direct Comparison: Aggressive value proposition for the mass market."
  },
  {
    id: "tech-2",
    category: "Tech",
    hook: "Will these earbuds survive a Mumbai Local rush hour?",
    explanation: "Contextual Durability: Using a chaotic local setting to prove toughness."
  },
  {
    id: "home-1",
    category: "Home",
    hook: "Renting in Bangalore? Here is how to decorate without losing your deposit.",
    explanation: "Audience Targeting: Specifically speaking to the massive renter population."
  },
  {
    id: "home-2",
    category: "Home",
    hook: "I dropped this vase from the 1st floor. Watch what happens.",
    explanation: "Shock Value: A destructive test that stops the scroll immediately."
  },
  {
    id: "home-3",
    category: "Home",
    hook: "Transforming my boring balcony for under ₹2,000.",
    explanation: "Budget Makeover: High visual payoff for a low entry price."
  },
  {
    id: "tech-3",
    category: "Tech",
    hook: "The best gaming mouse under ₹1000? Let's test it on Valorant.",
    explanation: "Niche Performance: proving the product in its specific use-case context."
  },
  {
    id: "home-4",
    category: "Home",
    hook: "Is your mattress causing your back pain? The 'Spine Alignment' test.",
    explanation: "Problem/Solution: connecting a physical ailment directly to the product."
  },
  {
    id: "home-5",
    category: "Home",
    hook: "Setting up a WFH desk in a small Indian apartment.",
    explanation: "Relatability: addressing the space constraints common in Indian cities."
  },

  // --- HEALTH & WELLNESS (6 Hooks) ---
  {
    id: "health-1",
    category: "Health",
    hook: "Drinking this 'Green Goop' every morning so you don't have to.",
    explanation: "Skepticism: acknowledging the product looks weird to build trust before praising it."
  },
  {
    id: "health-2",
    category: "Health",
    hook: "Ayurveda isn't slow. You're just using the wrong herbs.",
    explanation: "Re-framing: Challenging a common objection (Ayurveda = slow results)."
  },
  {
    id: "health-3",
    category: "Health",
    hook: "Can you digest milk? 60% of Indians can't. Watch this.",
    explanation: "Statistic Shock: Using data to introduce a lactose-free or digestive product."
  },
  {
    id: "health-4",
    category: "Health",
    hook: "My PCOD journey: What finally fixed my acne.",
    explanation: "Vulnerability: Personal story format that resonates deeply with sufferers."
  },
  {
    id: "health-5",
    category: "Health",
    hook: "Stop taking Ashwagandha until you watch this video.",
    explanation: "Warning/Fear: Stops the scroll by suggesting they might be doing something wrong."
  },
  {
    id: "health-6",
    category: "Health",
    hook: "Protein powder that doesn't taste like chalk? Let's blend it.",
    explanation: "Taste Promise: Addressing the #1 complaint about health supplements."
  },

  // --- GENERAL / FOUNDER STORIES (12 Hooks) ---
  {
    id: "gen-1",
    category: "General",
    hook: "I tried 10 different Indian coffee brands so you don't have to.",
    explanation: "The 'Reviewer': Saves the viewer time/money by doing the work for them."
  },
  {
    id: "gen-2",
    category: "General",
    hook: "What can you actually buy for ₹500 in 2025?",
    explanation: "Inflation/Value: Highlights affordability in a rising cost economy."
  },
  {
    id: "gen-3",
    category: "General",
    hook: "If you use UPI for everything, you need to see this.",
    explanation: "Broad Appeal: 'UPI' is a keyword that applies to almost every digital Indian."
  },
  {
    id: "gen-4",
    category: "Founder",
    hook: "Why I quit my high-paying job at Amazon to sell... candles?",
    explanation: "Founder Story: The 'Hero's Journey' of leaving safety for passion."
  },
  {
    id: "gen-5",
    category: "Founder",
    hook: "We messed up. Here is an apology to our customers.",
    explanation: "Transparency: Owning a mistake builds massive long-term trust."
  },
  {
    id: "gen-6",
    category: "Founder",
    hook: "Packing an order for a customer who got their heart broken.",
    explanation: "Emotional Storytelling: Turning a transaction into a human connection."
  },
  {
    id: "gen-7",
    category: "General",
    hook: "3 Indian brands that are better than their US competitors.",
    explanation: "Patriotism/Pride: Leveraging 'Make in India' sentiment."
  },
  {
    id: "gen-8",
    category: "General",
    hook: "Gift ideas for your brother who is impossible to shop for.",
    explanation: "Specific Persona: Solving a very specific gifting headache (Rakhi/Bhaidooj)."
  },
  {
    id: "gen-9",
    category: "General",
    hook: "Unboxing the 'Viral' [Product Name]... is it worth the hype?",
    explanation: "Trend Jacking: Piggybacking on existing buzz to give an honest review."
  },
  {
    id: "gen-10",
    category: "General",
    hook: "Don't buy this [Product Category] until you check these 3 things.",
    explanation: "Education: Empowering the buyer with checklist knowledge."
  },
  {
    id: "gen-11",
    category: "General",
    hook: "Ordering from Blinkit vs. Ordering from us.",
    explanation: "Logistics/Expectation: Managing delivery expectations vs. speed."
  },
  {
    id: "gen-12",
    category: "Founder",
    hook: "The harsh truth about running a business in India.",
    explanation: "Authenticity: Showing the struggle behind the glamour."
  },

  // --- TRUST & SCAMS (4 Hooks) ---
  {
    id: "trust-1",
    category: "Trust & Scams",
    hook: "I bought this from a random Instagram ad so you don't have to get scammed.",
    explanation: "Safety Net: Positioning the creator as the 'guinea pig' who takes the risk for the viewer."
  },
  {
    id: "trust-2",
    category: "Trust & Scams",
    hook: "Why does this brand offer 'Cash on Delivery' for a ₹10,000 product?",
    explanation: "Confidence Signal: COD is the ultimate trust badge in India. Highlighting it upfront kills doubt."
  },
  {
    id: "trust-3",
    category: "Trust & Scams",
    hook: "Is this website fake? We went to their warehouse to check.",
    explanation: "Investigation: A physical 'site visit' format that proves legitimacy beyond a doubt."
  },
  {
    id: "trust-4",
    category: "Trust & Scams",
    hook: "3 Signs a D2C Brand is actually a Dropshipping Scam.",
    explanation: "Education: Teaching the viewer how to spot fakes implicitly positions *your* brand as the honest alternative."
  }
];