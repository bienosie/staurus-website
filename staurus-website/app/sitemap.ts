import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { getPublishedPosts } from '@/lib/supabase'

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']; priority: number }[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/how-it-works', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/nigerian-investors', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/live-deals', changeFrequency: 'daily', priority: 0.9 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/strategies/buy-to-let', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/strategies/brrr', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/strategies/hmo', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/strategies/social-housing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/markets/manchester', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/markets/liverpool', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.7 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/spv-formation', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/compliance', changeFrequency: 'yearly', priority: 0.4 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  let postEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await getPublishedPosts(1000)
    postEntries = posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.published_at ? new Date(post.published_at) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch {
    postEntries = []
  }

  return [...staticEntries, ...postEntries]
}
