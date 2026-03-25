
import { industryPlaybooks } from './lib/industry-data.js';
import { blogPosts } from './lib/blog-data.js';

const sitemap = () => {
  const baseUrl = 'https://lisnagency.online';

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/events', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/audit', priority: 0.9, changeFrequency: 'daily' },
    { path: '/blog', priority: 0.8, changeFrequency: 'daily' },
    { path: '/hooks', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/ugc-roi-calculator', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/amazon-calculator', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog/amazon-image-validator', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'monthly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'monthly' },
  ].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  const playbookRoutes = industryPlaybooks.map((industry) => ({
    url: `${baseUrl}/playbook/${industry.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogRoutes, ...playbookRoutes];
};

sitemap().then(urls => console.log(urls.map(u => u.url).join('
')));

