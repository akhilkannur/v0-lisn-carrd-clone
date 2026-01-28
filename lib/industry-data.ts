export interface IndustryPlaybook {
  slug: string;
  name: string;
  emoji: string;
  painPoint: string;
  whyAdsFail: string;
  streetConcept: string;
  hookExample: string;
  trustFactor: string;
}

export const industryPlaybooks: IndustryPlaybook[] = [
  {
    slug: "kerala-market-entry",
    name: "Non-Kerala Brands",
    emoji: "🌴",
    painPoint: "The 'North Indian' Label",
    whyAdsFail: "Hindi dubbed ads feel like an insult. Translating text isn't enough; you need to translate the 'Vibe'. Kerala consumers have a high BS radar for outsiders.",
    streetConcept: "The 'Dialect Challenge'",
    hookExample: "\"We asked 50 Malayalis to watch this popular Hindi ad. Watch their honest reaction to the dubbing.\"",
    trustFactor: "Acknowledging the cultural gap instantly wins respect. Showing you care enough to get the local nuances right."
  },
  {
    slug: "skincare",
    name: "Skincare",
    emoji: "✨",
    painPoint: "Trust & Texture",
    whyAdsFail: "Studio shots of models with perfect skin feel fake. Customers know it's airbrushed. They can't 'feel' the texture through a screen.",
    streetConcept: "The 'Blind Texture' Test",
    hookExample: "\"I'm going to put this moisturizer on your hand. Don't look at the bottle. Tell me what it costs.\"",
    trustFactor: "Real skin texture. Real pores. Real reactions to the absorption."
  },
  {
    slug: "coffee",
    name: "Coffee",
    emoji: "☕",
    painPoint: "Taste Visualization",
    whyAdsFail: "You can't taste a JPEG. Describing 'notes of chocolate' is boring. People are loyal to their current brand and skeptical of new ones.",
    streetConcept: "The 'Cafe vs. D2C' Challenge",
    hookExample: "\"Here are two cups of black coffee. One is Starbucks, one is this new D2C brand. If you guess right, you win ₹500.\"",
    trustFactor: "The genuine surprise when the D2C brand tastes better than the expensive cafe one."
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    emoji: "💎",
    painPoint: "Quality & Weight Perception",
    whyAdsFail: "Online jewellery looks flimsy. People are terrified of receiving 'toy' quality. They need to see the shine and feel the weight.",
    streetConcept: "The 'Real or Fake' Street Test",
    hookExample: "\"Excuse me, does this ring look like it costs ₹500 or ₹5,000?\"",
    trustFactor: "Seeing the light catch the metal in natural sunlight, not studio lights. Seeing it on a real person's hand."
  },
  {
    slug: "athleisure",
    name: "Athleisure & Activewear",
    emoji: "🏃",
    painPoint: "Fit & Fabric Quality",
    whyAdsFail: "Every legging looks the same online. Customers worry about transparency (squat proof) and material thickness.",
    streetConcept: "The 'Stretch Test'",
    hookExample: "\"Feel this fabric. Now guess: Is this Lululemon or a local Indian brand?\"",
    trustFactor: "Strangers pulling the fabric, feeling the thickness, and reacting to the softness unscripted."
  },
  {
    slug: "healthy-snacks",
    name: "Healthy Snacks",
    emoji: "🥨",
    painPoint: "The 'Cardboard' Fear",
    whyAdsFail: "People assume 'Healthy' = 'Tastes Bad'. Calling it 'High Protein' makes them think it will be dry and chalky.",
    streetConcept: "The 'Cheat Day' Prank",
    hookExample: "\"Try this cookie. It's actually got 20g of protein. Did you realize that?\"",
    trustFactor: "The shock on their face when they realize the 'junk food' they just enjoyed is actually healthy."
  },
  {
    slug: "perfume",
    name: "Perfume & Fragrance",
    emoji: "👃",
    painPoint: "Inability to Smell",
    whyAdsFail: "The hardest category to sell online. Describing scents is abstract. You need to sell the *reaction* to the scent.",
    streetConcept: "The 'Date Night' Rating",
    hookExample: "\"Rate this smell from 1 to 10. Would you want your boyfriend to smell like this?\"",
    trustFactor: "The involuntary 'Whoa' or head-turn when they smell it. Mirror neurons make the viewer 'feel' the scent."
  },
  {
    slug: "haircare",
    name: "Haircare",
    emoji: "💇‍♀️",
    painPoint: "Results & Hair Type Anxiety",
    whyAdsFail: "Studio hair models have extensions. Everyone knows it. Customers want to see how it works on frizzy, Indian humidity-struck hair.",
    streetConcept: "The 'Bad Hair Day' Intervention",
    hookExample: "\"We found people with frizzy hair on M.G. Road and applied our serum. Look at the difference in 30 seconds.\"",
    trustFactor: "Immediate, visual before-and-after on a stranger in uncontrolled street conditions."
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    emoji: "🏠",
    painPoint: "Scale & Sturdiness",
    whyAdsFail: "Is that vase tiny? Is that rug scratchy? Studio photos mess with perspective.",
    streetConcept: "The 'Heavy Lifting' Test",
    hookExample: "\"Lift this box. What do you think is inside? It's actually our cast-iron cookware.\"",
    trustFactor: "Interacting with the physical weight and finish of the product."
  },
  {
    slug: "sneakers",
    name: "Sneakers & Streetwear",
    emoji: "👟",
    painPoint: "The 'Hype' Factor",
    whyAdsFail: "Streetwear lives and dies by 'street cred'. Studio ads look corporate and try-hard.",
    streetConcept: "The 'Fit Check' Review",
    hookExample: "\"Rate this outfit. What do you think of these kicks? Would you wear them to a club?\"",
    trustFactor: "Validation from the actual target demographic (Gen Z) on the street."
  },
  {
    slug: "ayurveda",
    name: "Ayurveda & Supplements",
    emoji: "🌿",
    painPoint: "Skepticism & 'Old' Image",
    whyAdsFail: "Ayurveda often looks dated or like 'medicine'. Young people ignore it.",
    streetConcept: "The 'Modern vs Ancient' Quiz",
    hookExample: "\"This drink helps with stress. Read the ingredients. Can you believe this is 100% Ayurvedic?\"",
    trustFactor: "Breaking the stereotype that Ayurveda is just bitter powders for old people."
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    emoji: "🐶",
    painPoint: "Picky Eaters & Trust",
    whyAdsFail: "Owners don't trust ads. They trust their dog's reaction. If a dog ignores the food in an ad, it's game over.",
    streetConcept: "The 'Picky Eater' Test",
    hookExample: "\"Put this bowl next to your current food. Let's see which one he chooses first.\"",
    trustFactor: "Animals don't lie. A wagging tail is the ultimate social proof."
  },
  {
    slug: "baby-care",
    name: "Baby Care",
    emoji: "👶",
    painPoint: "Safety & Sensitivity",
    whyAdsFail: "Moms are terrified of chemicals. Studio ads claiming 'safe' mean nothing without proof.",
    streetConcept: "The 'Chemical Free' Wipes Test",
    hookExample: "\"Clean this marker off your hand. Now smell it. Notice no alcohol smell?\"",
    trustFactor: "Real moms reacting to the gentleness and lack of harsh chemical odors."
  },
  {
    slug: "mens-grooming",
    name: "Men's Grooming",
    emoji: "🧔",
    painPoint: "Softness & Smell",
    whyAdsFail: "Men buy what their partners like. Ads targeting men often miss the 'partner approval' factor.",
    streetConcept: "The 'Partner Approval' Test",
    hookExample: "\"Smell this beard oil. Would you want your boyfriend to smell like this?\"",
    trustFactor: "Validation from the opposite sex is the strongest buying trigger for men's grooming."
  },
  {
    slug: "sustainable-fashion",
    name: "Sustainable Fashion",
    emoji: "🌱",
    painPoint: "Greenwashing Skepticism",
    whyAdsFail: "Everyone claims to be 'organic'. Customers are cynical about green claims.",
    streetConcept: "The 'Plastic vs Cotton' Burn Test",
    hookExample: "\"We are going to burn a thread from this shirt. If it melts, it's plastic. If it turns to ash, it's organic.\"",
    trustFactor: "A radical, physical demonstration of product truth that cannot be faked."
  },
  {
    slug: "sexual-wellness",
    name: "Sexual Wellness",
    emoji: "🔥",
    painPoint: "Stigma & Awkwardness",
    whyAdsFail: "Too clinical or too vulgar. Ads fail to find the middle ground of 'normal conversation'.",
    streetConcept: "The 'Awkward Question' Box",
    hookExample: "\"Pick a question from the box. 'When was the last time you bought...?'. Let's normalize this.\"",
    trustFactor: "Breaking the ice publicly makes the brand feel approachable and modern."
  },
  {
    slug: "tea",
    name: "Tea (Chai)",
    emoji: "🫖",
    painPoint: "Taste & Strength (Kadak)",
    whyAdsFail: "Tea drinkers are fiercely loyal. They believe new brands are weak or watery.",
    streetConcept: "The 'Tapri vs Premium' Taste Test",
    hookExample: "\"This cup is your regular brand. This cup is ours. Tell me which one has more 'kick'.\"",
    trustFactor: "The immediate facial reaction to the strength (Kadak) of the tea."
  },
  {
    slug: "smartwatches",
    name: "Smartwatches",
    emoji: "⌚",
    painPoint: "Build Quality & Screen",
    whyAdsFail: "They all look like Apple Watch clones online. People worry they look cheap in real life.",
    streetConcept: "The 'Sunlight Visibility' Test",
    hookExample: "\"Stand in direct sunlight. Can you read this screen? Now try ours.\"",
    trustFactor: "Testing the product in the harshest real-world condition (bright Indian sun)."
  },
  {
    slug: "handbags",
    name: "Handbags",
    emoji: "👜",
    painPoint: "Capacity & Finish",
    whyAdsFail: "Does it fit a laptop? Is the zipper smooth? Photos don't show 'life-proof' utility.",
    streetConcept: "The 'Stuff It' Challenge",
    hookExample: "\"Here is a laptop, a water bottle, and a makeup kit. See if you can close the zip.\"",
    trustFactor: "Visual proof of capacity and zipper durability in a chaotic street setting."
  },
  {
    slug: "eyewear",
    name: "Eyewear",
    emoji: "👓",
    painPoint: "Fit & Face Shape",
    whyAdsFail: "Will this look good on MY face? Models have perfect oval faces.",
    streetConcept: "The 'Stranger Styling' Session",
    hookExample: "\"I think these frames would look better on you than your current ones. Try them.\"",
    trustFactor: "Seeing the transformation on a regular person's face, not a model's."
  },
  {
    slug: "mattress",
    name: "Mattress",
    emoji: "🛏️",
    painPoint: "Comfort & Motion Transfer",
    whyAdsFail: "You can't sit on a website. 'Memory Foam' is just a buzzword until you feel it.",
    streetConcept: "The 'Jump Test'",
    hookExample: "\"I'm going to jump on this side of the bed. If this wine glass spills, you win ₹5000.\"",
    trustFactor: "High-stakes physical demonstration of motion isolation."
  },
  {
    slug: "fintech",
    name: "Fintech & Apps",
    emoji: "💳",
    painPoint: "Hidden Charges & Scams",
    whyAdsFail: "Too glossy. People think 'If they spend this much on ads, they will steal my money'. Jargon kills conversion.",
    streetConcept: "The 'Small Print' Challenge",
    hookExample: "\"Read this policy. If you can understand it in 1 minute, I'll give you ₹1000.\"",
    trustFactor: "Radical transparency. Showing regular people understanding the app instantly."
  },
  {
    slug: "quick-commerce",
    name: "Quick Commerce (Blinkit/Zepto)",
    emoji: "⚡",
    painPoint: "Impulse & Cart Abandonment",
    whyAdsFail: "Static images on Q-Comm apps are boring. Users scroll past them in milliseconds. You need to trigger immediate desire.",
    streetConcept: "The '10-Minute' Challenge",
    hookExample: "\"I'm ordering this RIGHT NOW. Let's see if it arrives before I finish this coffee.\"",
    trustFactor: "Proving the speed and instant gratification of the platform in real-time."
  }
];
