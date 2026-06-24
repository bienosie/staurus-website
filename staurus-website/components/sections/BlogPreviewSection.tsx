'use client'

import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

// Placeholder posts -- replaced by Supabase live data
const placeholderPosts = [
  {
    slug: 'brrr-strategy-manchester-2025',
    category: 'Strategy',
    title: 'Why BRRR in Manchester Is Outperforming Every Other UK City in 2025',
    excerpt: 'With average refurbishment uplifts of 28–35% in M9, M11 and M40 postcodes, the numbers behind Manchester BRRR have never been more compelling for the patient investor.',
    readTime: '6 min read',
    date: '18 Jun 2025',
  },
  {
    slug: 'nigerian-investors-uk-property-guide',
    category: 'Nigerian Investors',
    title: 'The Complete Guide to UK Property Investment for Nigerian Investors in 2025',
    excerpt: 'GBP-denominated returns, SPV structures, Naira payment options and how to assess BMV deals remotely -- everything a Lagos-based investor needs to know before committing capital.',
    readTime: '11 min read',
    date: '12 Jun 2025',
  },
  {
    slug: 'social-housing-guaranteed-rent-explainer',
    category: 'Social Housing',
    title: 'Guaranteed Rent for 5 Years: How Social Housing Leases Actually Work',
    excerpt: 'Council and housing association lease arrangements explained plainly. Who pays when the property is empty, what happens at year five, and which property types qualify.',
    readTime: '8 min read',
    date: '5 Jun 2025',
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Strategy': { bg: 'rgba(27,42,74,0.08)', text: '#1B2A4A' },
  'Nigerian Investors': { bg: 'rgba(201,168,76,0.12)', text: '#A8872E' },
  'Social Housing': { bg: 'rgba(34,197,94,0.1)', text: '#15803d' },
}

export function BlogPreviewSection() {
  return (
    <section style={{background:'#F4F6F9',padding:'96px 0'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'24px',marginBottom:'48px',flexWrap:'wrap'}}>
          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'12px'}}>Weekly Intelligence</p>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.875rem,4vw,2.5rem)',fontWeight:700,color:'#1B2A4A',lineHeight:1.15,letterSpacing:'-0.02em'}}>
              UK Property Investment Insights
            </h2>
          </div>
          <Link href="/blog" style={{display:'inline-flex',alignItems:'center',gap:'6px',color:'#C9A84C',fontWeight:600,fontSize:'0.875rem',textDecoration:'none',whiteSpace:'nowrap',paddingBottom:'4px'}}>
            All articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {placeholderPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{
              display:'flex',flexDirection:'column',
              background:'#fff',borderRadius:'10px',overflow:'hidden',
              border:'1px solid rgba(27,42,74,0.07)',textDecoration:'none',
              boxShadow:'0 4px 24px rgba(27,42,74,0.06)',
              transition:'all 0.25s',
            }}
              onMouseOver={e => { e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(27,42,74,0.12)' }}
              onMouseOut={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='0 4px 24px rgba(27,42,74,0.06)' }}>

              {/* Image placeholder -- replaced with Cloudinary URL from Supabase */}
              <div style={{
                height:'180px',
                background: i === 0
                  ? 'linear-gradient(135deg, #0D1526, #1B2A4A)'
                  : i === 1
                  ? 'linear-gradient(135deg, #1B2A4A, #243660)'
                  : 'linear-gradient(135deg, #111C33, #1e305a)',
                display:'flex',alignItems:'center',justifyContent:'center',
                position:'relative',
              }}>
                <span style={{fontSize:'2.5rem',opacity:0.4}}>
                  {i === 0 ? '🏘️' : i === 1 ? '🇳🇬' : '🏠'}
                </span>
                <div style={{position:'absolute',top:'12px',left:'12px'}}>
                  <span style={{
                    background: categoryColors[post.category]?.bg || 'rgba(27,42,74,0.1)',
                    color: categoryColors[post.category]?.text || '#1B2A4A',
                    fontSize:'0.65rem',fontWeight:600,padding:'4px 10px',
                    borderRadius:'100px',letterSpacing:'0.08em',
                  }}>{post.category}</span>
                </div>
              </div>

              <div style={{padding:'24px',flex:1,display:'flex',flexDirection:'column'}}>
                <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'12px'}}>
                  <Clock size={11} style={{color:'#cbd5e1'}} />
                  <span style={{fontSize:'0.7rem',color:'#cbd5e1'}}>{post.readTime}</span>
                  <span style={{color:'#e2e8f0',fontSize:'0.7rem'}}>·</span>
                  <span style={{fontSize:'0.7rem',color:'#cbd5e1'}}>{post.date}</span>
                </div>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.0625rem',fontWeight:700,color:'#1B2A4A',lineHeight:1.35,marginBottom:'10px'}}>{post.title}</h3>
                <p style={{fontSize:'0.8375rem',color:'#64748b',lineHeight:1.7,flex:1}}>{post.excerpt}</p>
                <div style={{display:'flex',alignItems:'center',gap:'5px',marginTop:'18px',color:'#C9A84C',fontWeight:600,fontSize:'0.8125rem'}}>
                  Read article <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
