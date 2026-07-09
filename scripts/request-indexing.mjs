import { google } from "googleapis"

const KEY_PATH = process.argv[2] || "/home/akhilnairmk/findsday-airtable/indexing-key.json"
const BASE = "https://lisnagency.online"

const urls = [
  // Previous push: homepage retarget, ugc-pricing (new), onam-ideas (upgrade)
  `${BASE}/`,
  `${BASE}/ugc-pricing`,
  `${BASE}/onam-ideas`,

  // Previous push: 24 playbook pages (FAQ schema added)
  `${BASE}/playbook/kerala-market-entry`,
  `${BASE}/playbook/skincare`,
  `${BASE}/playbook/coffee`,
  `${BASE}/playbook/jewellery`,
  `${BASE}/playbook/athleisure`,
  `${BASE}/playbook/healthy-snacks`,
  `${BASE}/playbook/perfume`,
  `${BASE}/playbook/haircare`,
  `${BASE}/playbook/home-decor`,
  `${BASE}/playbook/sneakers`,
  `${BASE}/playbook/ayurveda`,
  `${BASE}/playbook/pet-care`,
  `${BASE}/playbook/baby-care`,
  `${BASE}/playbook/mens-grooming`,
  `${BASE}/playbook/sustainable-fashion`,
  `${BASE}/playbook/sexual-wellness`,
  `${BASE}/playbook/tea`,
  `${BASE}/playbook/smartwatches`,
  `${BASE}/playbook/handbags`,
  `${BASE}/playbook/eyewear`,
  `${BASE}/playbook/mattress`,
  `${BASE}/playbook/fintech`,
  `${BASE}/playbook/quick-commerce`,

  // This push: canonicals added
  `${BASE}/events`,
  `${BASE}/hooks`,
  `${BASE}/blog`,

  // This push: blog posts with rewritten titles
  `${BASE}/blog/death-of-unboxing`,
  `${BASE}/blog/stop-hiring-influencers`,
  `${BASE}/blog/cac-is-high-ads-look-like-ads`,
  `${BASE}/blog/street-interviews-vs-focus-groups`,
  `${BASE}/blog/scale-or-die-creative-volume`,
  `${BASE}/blog/beyond-bangalore-vernacular-ads`,

  // All other blog posts (canonical per-post added)
  `${BASE}/blog/top-influencer-marketing-agencies-kerala-2026`,
  `${BASE}/blog/malayali-filter-ad-conversion`,
  `${BASE}/blog/skincare-trust-gap`,
  `${BASE}/blog/roi-of-rejection`,
  `${BASE}/blog/national-brands-fail-kerala`,
  `${BASE}/blog/why-your-ads-fail-in-kerala`,
  `${BASE}/blog/selling-sensory-products-online`,
  `${BASE}/blog/market-research-hack`,
  `${BASE}/blog/why-ugly-ads-win`,
  `${BASE}/blog/the-cod-trap-trust-deficit`,
  `${BASE}/blog/de-influencing-trend-2026`,
  `${BASE}/blog/quick-commerce-blinkit-zepto-ads`,

  // Tool pages
  `${BASE}/blog/amazon-calculator`,
  `${BASE}/blog/ugc-roi-calculator`,
  `${BASE}/blog/amazon-image-validator`,
]

async function main() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEY_PATH,
    scopes: ["https://www.googleapis.com/auth/indexing"],
  })
  const client = await auth.getClient()
  const token = await client.getAccessToken()

  let success = 0
  let failed = 0

  for (const url of urls) {
    try {
      const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          url,
          type: "URL_UPDATED",
        }),
      })
      const body = await res.json()
      if (res.ok) {
        console.log(`OK  ${url}`)
        success++
      } else {
        console.log(`ERR ${url} — ${body.error?.message || res.status}`)
        failed++
      }
    } catch (e) {
      console.log(`ERR ${url} — ${e.message}`)
      failed++
    }
    // Rate limit: 200 URLs/day, so small delay is fine
    await new Promise((r) => setTimeout(r, 200))
  }

  console.log(`\nDone — ${success} OK, ${failed} failed`)
}

main().catch(console.error)
