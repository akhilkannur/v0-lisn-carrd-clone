import { Metadata } from 'next'
import { industryPlaybooks } from '@/lib/industry-data'
 
export default function sitemap() {
  const baseUrl = 'https://lisnagency.online'
  
  // Static routes
  const routes = [
    '',
    '/ugc',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
 
  // Dynamic blog routes
  // Note: In a real app, you'd import this from the data source. 
  // For now, I'm hardcoding based on the known slugs in lib/blog-data.ts
  // to avoid importing the large data file here if not strictly necessary, 
  // but importing is better for maintenance.
  
  const blogSlugs = [
    "why-your-ads-fail-in-kerala",
    "selling-sensory-products-online",
    "stop-hiring-influencers",
    "scale-or-die-creative-volume",
    "market-research-hack",
    "why-ugly-ads-win"
  ]

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // Dynamic Industry Playbook routes
  const playbookRoutes = industryPlaybooks.map((industry) => ({
    url: `${baseUrl}/playbook/${industry.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...playbookRoutes]
}
