import { Metadata } from 'next'
import { industryPlaybooks } from '@/lib/industry-data'
import { blogPosts } from '@/lib/blog-data'
 
export default function sitemap() {
  const baseUrl = 'https://lisnagency.online'
  
  // Static routes
  const routes = [
    '',
    '/ugc',
    '/blog',
    '/hooks',
    '/blog/amazon-calculator',
    '/blog/amazon-image-validator',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))
 
  // Dynamic blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  // Dynamic Industry Playbook routes
  const playbookRoutes = industryPlaybooks.map((industry) => ({
    url: `${baseUrl}/playbook/${industry.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...playbookRoutes]
}