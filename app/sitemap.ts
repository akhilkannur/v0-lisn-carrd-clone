import { Metadata } from 'next'
import { industryPlaybooks } from '@/lib/industry-data'
 
export default function sitemap() {
  const baseUrl = 'https://lisnagency.online'
  
  // Static routes
  const routes = [
    '',
    '/ugc',
    '/blog',
    '/hooks', // Added new route
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
 
  // Dynamic blog routes
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