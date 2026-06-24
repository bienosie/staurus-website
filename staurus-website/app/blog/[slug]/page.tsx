import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import { getPublishedPosts, getPostBySlug, type BlogPost } from '@/lib/supabase'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/site'

// Incremental Static Regeneration — refresh each post every 5 minutes.
export const revalidate = 300

const FALLBACK_IMAGE = '/images/og-image.png'

interface PageProps {
  params: { slug: string }
}

// Never throw — return [] on any error so the build can't break.
export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts(50)
    return posts.map((p) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let post: BlogPost | null = null
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    post = null
  }

  if (!post) {
    return {
      title: 'Article Not Found | Staurus Properties',
      description: 'The requested article could not be found.',
    }
  }

  const title = post.seo_title || post.title
  const description = post.seo_description || post.excerpt || ''
  const url = `${SITE_URL}/blog/${post.slug}`
  const image = post.featured_image || FALLBACK_IMAGE

  return {
    title: `${title} | Staurus Properties`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title,
      description,
      url,
      images: [image],
    },
  }
}

function formatDate(value: string | null | undefined): string {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// Heuristic: treat as HTML if it contains a tag-like structure.
function looksLikeHtml(content: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(content)
}

export default async function BlogPostPage({ params }: PageProps) {
  let post: BlogPost | null = null
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    post = null
  }

  if (!post) notFound()

  const dateLabel = formatDate(post.published_at || post.created_at)
  const content = post.content || ''
  const isHtml = looksLikeHtml(content)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy-deeper">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16 md:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
          >
            <ArrowLeft size={15} />
            Back to all insights
          </Link>
          <div className="mt-6 flex items-center gap-4 text-2xs uppercase tracking-widest text-slate-400">
            {post.category && (
              <span className="inline-flex items-center gap-1 text-gold font-semibold">
                <Tag size={12} />
                {post.category}
              </span>
            )}
            {dateLabel && (
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} />
                {dateLabel}
              </span>
            )}
          </div>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Featured image */}
      {post.featured_image && (
        <section className="bg-slate-site">
          <div className="max-w-3xl mx-auto px-6 lg:px-10 -mt-6 md:-mt-10">
            <div className="relative aspect-[16/9] rounded-sm-md overflow-hidden shadow-card-hover">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Body */}
      <section className="bg-slate-site">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-12 md:py-16">
          {content ? (
            isHtml ? (
              <div
                className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-navy prose-a:text-gold prose-strong:text-navy prose-img:rounded-sm-md"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="space-y-5">
                {content
                  .split(/\n{2,}/)
                  .map((para) => para.trim())
                  .filter(Boolean)
                  .map((para, i) => (
                    <p
                      key={i}
                      className="text-base text-slate-700 leading-relaxed whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
              </div>
            )
          ) : (
            <p className="text-slate-600">This article is being prepared.</p>
          )}
        </div>
      </section>

      <CTASection campaign="blog-post" />
      <ComplianceBar />
    </>
  )
}
