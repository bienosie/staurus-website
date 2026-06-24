import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { getPublishedPosts, type BlogPost } from '@/lib/supabase'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Property Investment Insights & Strategy | Staurus Properties Blog',
  description:
    'Data-led UK property investment insights from Staurus Properties — BTL, BRRR, HMO and Social Housing strategy, Manchester and Liverpool market analysis, and below-market-value sourcing know-how.',
  keywords: [
    'UK property investment blog',
    'BTL strategy',
    'BRRR strategy',
    'Manchester property market',
    'Liverpool property market',
    'below market value sourcing',
    'HMO investment',
    'Staurus Properties insights',
  ],
  openGraph: {
    title: 'Property Investment Insights | Staurus Properties',
    description:
      'Data-led insights on UK below-market-value property investment across Manchester and Liverpool.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}/blog`,
  },
  alternates: { canonical: `${SITE_URL}/blog` },
}

const FALLBACK_IMAGE = '/images/og-image.png'

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

export default async function BlogIndexPage() {
  let posts: BlogPost[] = []
  try {
    posts = await getPublishedPosts(50)
  } catch {
    posts = []
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy-deeper">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 text-2xs font-semibold uppercase tracking-widest text-gold border border-gold/40 rounded-sm-md px-3 py-1.5">
            Insights
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Property Investment Insights
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Data-led analysis, sourcing strategy and on-the-ground market
            intelligence from the Staurus Properties team — written for serious
            UK and international property investors.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-slate-site">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 md:py-20">
          {posts.length === 0 ? (
            <div className="max-w-xl mx-auto text-center bg-white border border-slate-100 rounded-sm-md shadow-card p-12">
              <h2 className="font-display text-2xl font-bold text-navy">
                New insights coming soon
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We&rsquo;re preparing fresh analysis on Manchester and Liverpool
                below-market-value opportunities, BRRR returns and strategy. In
                the meantime, explore our live deals on the investor portal.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id ?? post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white border border-slate-100 rounded-sm-md overflow-hidden shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/9] bg-navy/5 overflow-hidden">
                    <Image
                      src={post.featured_image || FALLBACK_IMAGE}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 text-2xs uppercase tracking-widest text-slate-400 mb-3">
                      {post.category && (
                        <span className="inline-flex items-center gap-1 text-gold font-semibold">
                          <Tag size={12} />
                          {post.category}
                        </span>
                      )}
                      {formatDate(post.published_at || post.created_at) && (
                        <span className="inline-flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(post.published_at || post.created_at)}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display text-xl font-bold text-navy leading-snug group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                      Read article
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection campaign="blog" />
      <ComplianceBar />
    </>
  )
}
