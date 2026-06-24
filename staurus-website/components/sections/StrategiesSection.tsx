'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const strategies = [
  {
    tag: 'BTL',
    name: 'Buy to Let',
    href: '/strategies/buy-to-let',
    headline: 'Steady rental income from day one.',
    desc: 'Traditional buy-to-let with strong Northern yields. We source properties already achieving or close to achieving target rents, with tenant demand verified before you commit.',
    metrics: [{ label: 'Target Gross Yield', value: '8–11%' }, { label: 'Typical LTV', value: '75%' }, { label: 'Avg. Monthly Cash Flow', value: '£350+' }],
    color: '#1B2A4A',
  },
  {
    tag: 'BRRR',
    name: 'Buy, Refurbish, Refinance, Rent',
    href: '/strategies/brrr',
    headline: 'Recycle your capital. Keep the asset.',
    desc: 'The most capital-efficient strategy in our arsenal. Buy below market, add value through refurbishment, refinance to pull most of your capital back out, and hold a cash-flowing asset.',
    metrics: [{ label: 'Target ROI', value: '13%+' }, { label: 'Capital Recycled', value: '70–90%' }, { label: 'GDV Uplift', value: '25–40%' }],
    color: '#1B2A4A',
    featured: true,
  },
  {
    tag: 'HMO',
    name: 'House in Multiple Occupation',
    href: '/strategies/hmo',
    headline: 'Maximum yield per square foot.',
    desc: 'Purpose-converted HMOs in high-demand rental corridors near universities and employment hubs. Yield uplift of 40–70% over single-let comparables in the same postcode.',
    metrics: [{ label: 'Target Net Yield', value: '12–16%' }, { label: 'Uplift vs BTL', value: '+40–70%' }, { label: 'Min. Rooms', value: '4' }],
    color: '#1B2A4A',
  },
  {
    tag: 'Social',
    name: 'Social Housing',
    href: '/strategies/social-housing',
    headline: 'Guaranteed rent. Zero voids. Five years.',
    desc: 'Council and housing association lease agreements that guarantee your rental income for five years regardless of occupancy. The most passive strategy in the portfolio.',
    metrics: [{ label: 'Lease Term', value: '5 Years' }, { label: 'Void Risk', value: 'Zero' }, { label: 'Target Yield', value: '7–9%' }],
    color: '#1B2A4A',
  },
]

export function StrategiesSection() {
  return (
    <section style={{background:'#fff',padding:'96px 0'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'space-between',gap:'24px',marginBottom:'56px'}}>
          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'12px'}}>Investment Strategies</p>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.875rem,4vw,2.75rem)',fontWeight:700,color:'#1B2A4A',lineHeight:1.15,letterSpacing:'-0.02em'}}>
              Four Strategies.<br />One Intelligent System.
            </h2>
          </div>
          <p style={{fontSize:'0.9375rem',color:'#64748b',lineHeight:1.7,maxWidth:'380px',paddingTop:'8px'}}>
            Every deal in our pipeline is tagged, scored and pre-calculated across all applicable strategies. You choose the approach. We find the opportunity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((s) => (
            <Link key={s.tag} href={s.href} className="hover-lift" style={{
              display:'flex',flexDirection:'column',
              background: s.featured ? 'linear-gradient(135deg, #0D1526 0%, #1B2A4A 100%)' : '#F4F6F9',
              borderRadius:'10px',padding:'28px',textDecoration:'none',
              border: s.featured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(27,42,74,0.07)',
              transition:'all 0.25s',position:'relative',overflow:'hidden',
            }}>

              {s.featured && (
                <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,opacity:0.04,backgroundImage:'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',backgroundSize:'30px 30px'}} />
              )}

              <div style={{marginBottom:'16px',position:'relative'}}>
                <span style={{
                  background: s.featured ? 'rgba(201,168,76,0.2)' : 'rgba(27,42,74,0.1)',
                  color: s.featured ? '#C9A84C' : '#1B2A4A',
                  fontSize:'0.65rem',fontWeight:700,padding:'4px 10px',
                  borderRadius:'100px',letterSpacing:'0.1em',
                  border: s.featured ? '1px solid rgba(201,168,76,0.3)' : '1px solid rgba(27,42,74,0.12)',
                }}>{s.tag}</span>
                {s.featured && <span style={{marginLeft:'6px',fontSize:'0.6rem',color:'#C9A84C',fontWeight:600}}>★ Most Popular</span>}
              </div>

              <h3 style={{
                fontFamily:'Georgia,serif',fontSize:'1.125rem',fontWeight:700,
                color: s.featured ? '#fff' : '#1B2A4A',
                marginBottom:'8px',lineHeight:1.25,position:'relative',
              }}>{s.name}</h3>

              <p style={{fontSize:'0.8125rem',fontWeight:600,color: s.featured ? '#C9A84C' : '#C9A84C',marginBottom:'10px',position:'relative'}}>{s.headline}</p>

              <p style={{fontSize:'0.8125rem',color: s.featured ? 'rgba(255,255,255,0.55)' : '#64748b',lineHeight:1.65,marginBottom:'20px',flex:1,position:'relative'}}>{s.desc}</p>

              <div style={{display:'flex',flexDirection:'column',gap:'8px',marginBottom:'20px',position:'relative'}}>
                {s.metrics.map(m => (
                  <div key={m.label} style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <span style={{fontSize:'0.7rem',color: s.featured ? 'rgba(255,255,255,0.4)' : '#94a3b8'}}>{m.label}</span>
                    <span style={{fontSize:'0.8125rem',fontWeight:700,color: s.featured ? '#C9A84C' : '#1B2A4A'}}>{m.value}</span>
                  </div>
                ))}
              </div>

              <div style={{display:'flex',alignItems:'center',gap:'6px',color:'#C9A84C',fontSize:'0.8125rem',fontWeight:600,position:'relative'}}>
                Learn more <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
