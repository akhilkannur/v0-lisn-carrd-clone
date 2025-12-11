export interface AdHook {
  id: string;
  category: string;
  hook: string;
  explanation: string;
}

export const viralHooks: AdHook[] = [
  // Skincare & Beauty
  {
    id: "skin-1",
    category: "Skincare",
    hook: "Stop scrolling if the humidity in Mumbai/Kerala is ruining your hair.",
    explanation: "Calls out a specific local pain point (humidity) immediately."
  },
  {
    id: "skin-2",
    category: "Skincare",
    hook: "I asked 50 people at Connaught Place to guess the price of my sunscreen.",
    explanation: "Street interview format. Builds curiosity about the value proposition."
  },
  {
    id: "skin-3",
    category: "Skincare",
    hook: "Your Nani was right about Haldi, but she didn't have this.",
    explanation: "Respects tradition ('Nani') while introducing modern innovation."
  },

  // Food & Beverage
  {
    id: "food-1",
    category: "Food",
    hook: "Is this healthier than a plate of Momos? Let's check the label.",
    explanation: "Compares your product to a beloved local junk food benchmark."
  },
  {
    id: "food-2",
    category: "Food",
    hook: "The only thing spicy enough to handle a Bangalore rainy day.",
    explanation: "Connects product (spicy food) with a specific mood/weather context."
  },
  {
    id: "food-3",
    category: "Food",
    hook: "Forget 'Ghar ka Khana' for one night. Trust me.",
    explanation: " provocative statement that challenges the ultimate Indian standard of food."
  },

  // Fashion & Jewellery
  {
    id: "fashion-1",
    category: "Fashion",
    hook: "POV: You need an outfit for your best friend's Sangeet but you're broke.",
    explanation: "Targeting the 'Wedding Guest' anxiety + budget constraint."
  },
  {
    id: "fashion-2",
    category: "Fashion",
    hook: "Wearing this Kurta to office vs. Wearing it to a date.",
    explanation: "Showcases versatility (Day-to-Night), which Indians value highly."
  },
  {
    id: "fashion-3",
    category: "Jewellery",
    hook: "Does this look like 22K Gold or 18K? Asking strangers.",
    explanation: "Street test focusing on the 'premium look' for a lower price."
  },

  // Tech & Gadgets
  {
    id: "tech-1",
    category: "Tech",
    hook: "Why buy an Apple Watch when this costs ₹2,000 and does the SAME thing?",
    explanation: "Direct comparison. Appeals to the value-conscious Indian buyer."
  },
  {
    id: "tech-2",
    category: "Tech",
    hook: "Will these earbuds survive a Mumbai Local rush hour?",
    explanation: "Extreme durability test in a relatable, chaotic setting."
  },

  // General / D2C
  {
    id: "gen-1",
    category: "General",
    hook: "I tried 10 different Indian coffee brands so you don't have to.",
    explanation: "The 'Reviewer' authority. Saves the viewer time and money."
  },
  {
    id: "gen-2",
    category: "General",
    hook: "What can you actually buy for ₹500 in 2025?",
    explanation: "Inflation-related hook. Highlights affordability."
  },
  {
    id: "gen-3",
    category: "General",
    hook: "If you use UPI for everything, you need to see this.",
    explanation: "Broad appeal. Almost everyone uses UPI, so it stops the scroll."
  }
];
