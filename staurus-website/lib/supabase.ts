import { createClient } from '@supabase/supabase-js'

// Defensive: fall back to safe placeholders so createClient never throws at
// module load when env vars are absent (e.g. CI/`npm run build` without .env).
// All query functions below catch errors and return empty defaults, so a
// non-functional client can never break the build.
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://zabujxlpbhcrmxtrzxoy.supabase.co'
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'public-anon-key-placeholder'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types
export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  seo_title: string
  seo_description: string
  featured_image: string | null
  published: boolean
  published_at: string
  created_at: string
}

export interface NewsletterSubscriber {
  id: string
  email: string
  first_name: string | null
  source: string
  subscribed: boolean
  subscribed_at: string
}

// Blog queries — defensive: never throw, return safe empty defaults so a
// missing table/key can never break `npm run build`.
export async function getPublishedPosts(limit = 10): Promise<BlogPost[]> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(limit)

    if (error) return []
    return data || []
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single()

    if (error) return null
    return data
  } catch {
    return null
  }
}

// Live deal stats for homepage bar
export async function getLiveDealStats() {
  try {
    const { data, error } = await supabase
      .from('deals')
      .select('id, annual_roi_btl, bmv_discount')
      .eq('published_to_portal', true)
      .eq('deal_status', 'Available')

    if (error || !data || data.length === 0) {
      return { count: 0, avgRoi: 0, avgBmv: 0 }
    }

    const count = data.length
    const avgRoi =
      data.reduce((sum, d) => sum + (d.annual_roi_btl || 0), 0) / count
    const avgBmv =
      data.reduce((sum, d) => sum + (d.bmv_discount || 0), 0) / count

    return {
      count,
      avgRoi: avgRoi.toFixed(1),
      avgBmv: avgBmv.toFixed(1),
    }
  } catch {
    return { count: 0, avgRoi: 0, avgBmv: 0 }
  }
}
