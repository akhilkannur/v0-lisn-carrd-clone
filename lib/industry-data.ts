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
  }
];
