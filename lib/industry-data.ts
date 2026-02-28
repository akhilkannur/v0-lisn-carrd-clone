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
    whyAdsFail: "Hindi dubbed ads fail in Kerala. Translating text isn't enough; you need to translate the 'Vibe'. Malayali consumers in Kochi and Calicut have a high BS radar for outsiders.",
    streetConcept: "The 'Dialect Challenge'",
    hookExample: "\"We asked 50 Malayalis in Kochi to watch this Hindi ad. Watch their honest reaction.\"",
    trustFactor: "Acknowledging the cultural gap wins respect in South India. Showing you care enough to get the local nuances right."
  },
  {
    slug: "skincare",
    name: "Skincare",
    emoji: "✨",
    painPoint: "Trust & Humidity",
    whyAdsFail: "Studio shots don't show how products handle Kerala's humidity. Customers in Kochi need to know if it's sticky. Models look fake.",
    streetConcept: "The 'Kerala Humidity' Test",
    hookExample: "\"It's 90% humidity in Kochi today. Let's see if this moisturizer melts off her face.\"",
    trustFactor: "Real skin texture in real Indian weather. Proving it works in the tropical South Indian climate."
  },
  {
    slug: "coffee",
    name: "Coffee",
    emoji: "☕",
    painPoint: "Filter Coffee Loyalty",
    whyAdsFail: "South Indians know their coffee. Selling instant coffee in Kerala is hard. 'Notes of chocolate' means nothing to a filter coffee lover.",
    streetConcept: "The 'Filter vs Instant' Blind Test",
    hookExample: "\"Can this Bangalore uncle tell the difference between his filter kaapi and our instant brew?\"",
    trustFactor: "The genuine surprise when a die-hard local coffee lover approves of a D2C brand."
  },
  {
    slug: "jewellery",
    name: "Jewellery",
    emoji: "💎",
    painPoint: "Gold Purity & Trust",
    whyAdsFail: "Kerala buys the most gold in India. They don't trust online photos. They need to see the 'glint' in real sunlight, not studio lights.",
    streetConcept: "The 'Malayali Wedding' Review",
    hookExample: "\"Would you wear this set to a wedding in Thrissur? Be honest.\"",
    trustFactor: "Seeing the jewellery on a real person in natural Kerala sunlight, proving it's not 'toy' quality."
  },
  {
    slug: "athleisure",
    name: "Athleisure",
    emoji: "🏃",
    painPoint: "Modesty & Fit",
    whyAdsFail: "Western ads don't work here. Kerala women want activewear that is modest yet functional. Studio models don't represent real South Indian body types.",
    streetConcept: "The 'Marine Drive' Jog Test",
    hookExample: "\"We are jogging on Marine Drive, Kochi. Let's see if these leggings are see-through in the sun.\"",
    trustFactor: "Strangers testing the fabric in a public, conservative setting builds immense trust."
  },
  {
    slug: "healthy-snacks",
    name: "Healthy Snacks",
    emoji: "🥨",
    painPoint: "Taste vs Health",
    whyAdsFail: "Kerala loves spicy, fried snacks (Banana chips!). 'Healthy' often sounds 'boring'. You need to prove the taste matches the local palate.",
    streetConcept: "The 'Tea Shop' Swap",
    hookExample: "\"Swap your Pazhampori for this protein cookie. Tell me if you hate it.\"",
    trustFactor: "The shock on a local's face when they realize the 'healthy' snack actually tastes good with Chai."
  },
  {
    slug: "perfume",
    name: "Perfume",
    emoji: "👃",
    painPoint: "Sweat & Longevity",
    whyAdsFail: "Will it last in the Kochi heat? That's the only question. Studio ads can't prove longevity.",
    streetConcept: "The 'Auto Rickshaw' Stress Test",
    hookExample: "\"He just took a 30 min auto ride in Kochi traffic. Does he still smell good?\"",
    trustFactor: "Proving the fragrance survives the brutal South Indian heat and commute."
  },
  {
    slug: "haircare",
    name: "Haircare",
    emoji: "💇‍♀️",
    painPoint: "Frizz & Water Quality",
    whyAdsFail: "Kerala water is hard. Humidity is high. Studio hair models have extensions. Locals want to see it work on real, frizzy hair.",
    streetConcept: "The 'Monsoon' Frizz Test",
    hookExample: "\"We found a girl with frizzy hair at Lulu Mall. Watch what happens in 30 seconds.\"",
    trustFactor: "Immediate, visual before-and-after on a stranger in uncontrolled street conditions."
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    emoji: "🏠",
    painPoint: "Traditional Homes",
    whyAdsFail: "Modern decor looks out of place in traditional Kerala homes. You need to show it fits the local aesthetic.",
    streetConcept: "The 'Tharavadu' Fit Check",
    hookExample: "\"Will this modern lamp look good in a traditional Kerala house? Let's try it.\"",
    trustFactor: "Contextualizing the product in a real local home environment."
  },
  {
    slug: "sneakers",
    name: "Sneakers",
    emoji: "👟",
    painPoint: "Street Cred",
    whyAdsFail: "Kochi has a massive sneaker culture. They hate 'corporate' attempts at cool. They trust fellow sneakerheads.",
    streetConcept: "The 'Fort Kochi' Fit Check",
    hookExample: "\"Rate this outfit. We are in Fort Kochi. Would you wear these kicks here?\"",
    trustFactor: "Validation from the Gen Z crowd in Kerala's fashion capital."
  },
  {
    slug: "ayurveda",
    name: "Ayurveda",
    emoji: "🌿",
    painPoint: "Grandma's Approval",
    whyAdsFail: "Kerala is the home of Ayurveda. You can't fake it here. If it looks like 'marketing', they won't buy.",
    streetConcept: "The 'Ammamma' Approval",
    hookExample: "\"Read these ingredients to this grandmother. Does she approve?\"",
    trustFactor: "Breaking the skepticism by getting approval from the older generation who knows real Ayurveda."
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    emoji: "🐶",
    painPoint: "Picky Eaters",
    whyAdsFail: "Ads lie. Dogs don't. Kerala pet owners treat their pets like children and are very skeptical of 'processed' food.",
    streetConcept: "The 'Panampilly Nagar' Dog Test",
    hookExample: "\"We are at a dog park in Panampilly Nagar. Let's see which bowl the dog chooses.\"",
    trustFactor: "Unscripted reaction from a dog. The ultimate truth."
  },
  {
    slug: "baby-care",
    name: "Baby Care",
    emoji: "👶",
    painPoint: "Safety First",
    whyAdsFail: "Moms in Kerala research everything. They trust other moms, not brands.",
    streetConcept: "The 'Lulu Mall' Mom Review",
    hookExample: "\"We asked 10 moms at Lulu Mall to smell this. Does it smell chemical-free?\"",
    trustFactor: "Real moms reacting to the gentleness and safety of the product."
  },
  {
    slug: "mens-grooming",
    name: "Men's Grooming",
    emoji: "🧔",
    painPoint: "Beard Maintenance",
    whyAdsFail: "Kerala men take beards seriously. They spot fake results instantly.",
    streetConcept: "The 'Barber Shop' Review",
    hookExample: "\"We took this beard oil to a local barber in Aluva. Here is what he said.\"",
    trustFactor: "Expert validation from a trusted local authority (the barber)."
  },
  {
    slug: "sustainable-fashion",
    name: "Sustainable Fashion",
    emoji: "🌱",
    painPoint: "Greenwashing",
    whyAdsFail: "Sustainability claims are ignored. You need physical proof.",
    streetConcept: "The 'Cotton' Burn Test",
    hookExample: "\"We are burning a thread right here on the street. Watch it turn to ash.\"",
    trustFactor: "A radical physical demo that proves organic material instantly."
  },
  {
    slug: "sexual-wellness",
    name: "Sexual Wellness",
    emoji: "🔥",
    painPoint: "Taboo & Privacy",
    whyAdsFail: "Too awkward for conservative Kerala society. Needs to be handled with humor and normalcy.",
    streetConcept: "The 'Awkward Box' in Bangalore",
    hookExample: "\"Pick a question. Let's normalize this conversation in Cubbon Park.\"",
    trustFactor: "Breaking the ice publicly makes the brand feel modern and approachable."
  },
  {
    slug: "tea",
    name: "Tea (Chai)",
    emoji: "🫖",
    painPoint: "Strong vs Watery",
    whyAdsFail: "Kerala loves strong tea. Most D2C teas are too 'light' for the local palate.",
    streetConcept: "The 'Thattukada' Comparison",
    hookExample: "\"Compare this to the tea at this Thattukada. Which one is stronger?\"",
    trustFactor: "Benchmarking against the local gold standard (street tea)."
  },
  {
    slug: "smartwatches",
    name: "Smartwatches",
    emoji: "⌚",
    painPoint: "Cheap Look",
    whyAdsFail: "Online renders look fake. People need to see the screen in bright Kerala sunlight.",
    streetConcept: "The 'Mid-Day Sun' Test",
    hookExample: "\"Can you read this screen at 12 PM in Kochi? Let's check.\"",
    trustFactor: "Testing in the harshest real-world condition."
  },
  {
    slug: "handbags",
    name: "Handbags",
    emoji: "👜",
    painPoint: "Utility",
    whyAdsFail: "Can it fit a tiffin box and an umbrella? That's what matters in Kerala.",
    streetConcept: "The 'Office Commute' Stuffing",
    hookExample: "\"Umbrella, Tiffin, Laptop. Will it all zip up? Let's try.\"",
    trustFactor: "Proving utility for the daily life of a working woman in Kerala."
  },
  {
    slug: "eyewear",
    name: "Eyewear",
    emoji: "👓",
    painPoint: "Face Shape",
    whyAdsFail: "Will it fit my face? Models look too perfect.",
    streetConcept: "The 'College Crowd' Styling",
    hookExample: "\"We stopped students at Maharaja's College. Try these on.\"",
    trustFactor: "Seeing the frames on regular people's faces."
  },
  {
    slug: "mattress",
    name: "Mattress",
    emoji: "🛏️",
    painPoint: "Heat Retention",
    whyAdsFail: "Memory foam gets hot. Kerala is hot. Customers worry they will sweat.",
    streetConcept: "The 'Cooling Gel' Touch",
    hookExample: "\"Touch this foam. Does it feel cold? Compare it to the pavement.\"",
    trustFactor: "Physical verification of the cooling feature."
  },
  {
    slug: "fintech",
    name: "Fintech",
    emoji: "💳",
    painPoint: "Trust & Scams",
    whyAdsFail: "People are terrified of scams. Financial ads look suspicious.",
    streetConcept: "The 'Small Print' Challenge",
    hookExample: "\"If you can find a hidden charge in this brochure, I'll give you ₹1000.\"",
    trustFactor: "Radical transparency and confidence."
  },
  {
    slug: "quick-commerce",
    name: "Quick Commerce",
    emoji: "⚡",
    painPoint: "Impulse",
    whyAdsFail: "Boring ads don't work on Blinkit. You need chaos.",
    streetConcept: "The 'Traffic Jam' Order",
    hookExample: "\"We are stuck in Kochi traffic. Can we order snacks before the signal turns green?\"",
    trustFactor: "Proving speed in a relatable, high-stress situation."
  }
];