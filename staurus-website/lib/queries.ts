// Convenience wrappers around Supabase data access. All defensive: any error
// returns a safe empty default so the build can never break.
import { getPublishedPosts, getPostBySlug, type BlogPost } from './supabase'

export { getPublishedPosts, getPostBySlug }
export type { BlogPost }

// Returns up to `limit` recent published posts (e.g. for "related" rails).
export async function getRelatedPosts(limit = 3): Promise<BlogPost[]> {
  try {
    return await getPublishedPosts(limit)
  } catch {
    return []
  }
}
