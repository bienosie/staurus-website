'use client'

import Link from 'next/link'
import { ArrowRight, UserPlus, Search, FileText, PoundSterling, Home } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Register Free',
    desc: 'Create your free investor profile in under two minutes. Tell us your strategy preference, budget range and target postcodes.',
    detail: 'Instant access to our deal board at the district level. No credit card. No commitment.',
    cta: null,
  },
  {
    num: '02',
    icon: Search,
    title: 'Browse Live Deals',
    desc: 'See anonymised deal cards with strategy tags, days on market, banded pricing and projected ROI ranges.',
    detail: 'Updated as deals are added. Email alerts when new deals matching your criteria are published.',
    cta: null,
  },
  {
    num: '03',
    icon: FileText,
    title: 'Pay the £2,500 Commitment Fee',
    desc: 'When you are ready to proceed, a £2,500 commitment fee unlocks Tier 3 full access and starts the sourcing relationship.',
    detail: 'Fully credited against your final sourcing fee. Engagement letter sent via DocuSign.',
    cta: null,
  },
  {
    num: '04',
    icon: PoundSterling,
    title: 'Access Full Deal Intelligence',
    desc: 'Full addresses, live strategy calculators, agent contact details and one-click PDF deal packs for every property.',
    detail: 'Compare BTL, BRRR, HMO and Social Housing returns side by side on any deal.',
    cta: null,
  },
  {
    num: '05',
    icon: Home,
    title: 'Transact and Receive Your Fee Credit',
    desc: 'When you proceed to purchase, the final sourcing fee is invoiced minus the £2,500 already paid.',
    detail: 'Tier 1 (under £150k): £6,500 total. Tier 2 (£150k–£300k): £8,500 total.',
    cta: null,
  },
]

export function HowItWorksSection() {
  return (
    <section style={{background:'#F4F6F9',padding:'96px 0'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'12px'}}>The Investor Journey</p>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.875rem,4vw,2.75rem)',fontWeight:700,color:'#1B2A4A',lineHeight:1.15,letterSpacing:'-0.02em',marginBottom:'16px'}}>
            From Registration to Completed Deal
          </h2>
          <p style={{fontSize:'0.9375rem',color:'#64748b',lineHeight:1.7,maxWidth:'520px',margin:'0 auto'}}>
            A transparent, data-led process designed to move serious investors from registration to ownership efficiently.
          </p>
        </div>

        {/* Steps */}
        <div style={{display:'flex',flexDirection:'column',gap:'0',position:'relative'}}>
          {/* Vertical line */}
          <div style={{position:'absolute',left:'28px',top:'40px',bottom:'40px',width:'2px',background:'linear-gradient(to bottom, #C9A84C, rgba(201,168,76,0.1))',display:'none'}} className="hidden lg:block" />

          {steps.map((step, i) => (
            <div key={step.num} style={{
              display:'grid',
              gridTemplateColumns:'auto 1fr',
              gap:'24px',
              padding:'32px 0',
              borderBottom: i < steps.length - 1 ? '1px solid rgba(27,42,74,0.08)' : 'none',
              alignItems:'flex-start',
            }}>
              {/* Step indicator */}
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'8px',paddingTop:'4px'}}>
                <div style={{
                  width:'56px',height:'56px',borderRadius:'50%',
                  background:'linear-gradient(135deg, #0D1526, #1B2A4A)',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  border:'2px solid rgba(201,168,76,0.4)',
                  flexShrink:0,
                }}>
                  <step.icon size={20} style={{color:'#C9A84C'}} />
                </div>
              </div>

              {/* Content */}
              <div style={{display:'grid',gridTemplateColumns:'1fr auto',gap:'24px',alignItems:'center'}}>
                <div>
                  <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'8px'}}>
                    <span style={{fontFamily:'Georgia,serif',fontSize:'0.8rem',fontWeight:700,color:'rgba(201,168,76,0.5)',letterSpacing:'0.05em'}}>{step.num}</span>
                    <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.25rem',fontWeight:700,color:'#1B2A4A',lineHeight:1.2}}>{step.title}</h3>
                  </div>
                  <p style={{fontSize:'0.9375rem',color:'#374151',lineHeight:1.7,marginBottom:'6px'}}>{step.desc}</p>
                  <p style={{fontSize:'0.8375rem',color:'#94a3b8',lineHeight:1.6}}>{step.detail}</p>
                </div>
                {i === 0 && (
                  <Link href="https://deals.staurusproperties.com" target="_blank"
                    style={{flexShrink:0,display:'inline-flex',alignItems:'center',gap:'6px',background:'#C9A84C',color:'#1B2A4A',fontWeight:700,padding:'10px 18px',borderRadius:'6px',fontSize:'0.8125rem',textDecoration:'none',whiteSpace:'nowrap'}}>
                    Register Free <ArrowRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fee table */}
        <div style={{marginTop:'64px',background:'#fff',borderRadius:'10px',border:'1px solid rgba(27,42,74,0.08)',overflow:'hidden',boxShadow:'0 4px 24px rgba(27,42,74,0.06)'}}>
          <div style={{background:'linear-gradient(135deg, #0D1526, #1B2A4A)',padding:'20px 28px'}}>
            <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.125rem',fontWeight:700,color:'#fff'}}>Fee Structure — Full Transparency</h3>
          </div>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%',borderCollapse:'collapse'}}>
              <thead>
                <tr style={{borderBottom:'1px solid rgba(27,42,74,0.08)'}}>
                  {['Tier', 'Property Value', 'Commitment Fee', 'Total Sourcing Fee', 'Balance at Completion'].map(h => (
                    <th key={h} style={{padding:'14px 20px',textAlign:'left',fontSize:'0.7rem',fontWeight:600,color:'#94a3b8',letterSpacing:'0.1em',textTransform:'uppercase',whiteSpace:'nowrap'}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tier 1', 'Up to £150,000', '£2,500', '£6,500', '£4,000'],
                  ['Tier 2', '£150,000 – £300,000', '£2,500', '£8,500', '£6,000'],
                  ['Tier 3', '£300,000 – £500,000', '£2,500', '£10,000', '£7,500'],
                  ['Tier 4', 'Over £500,000', '£2,500', '2.5% of price', 'Balance of 2.5%'],
                ].map((row, i) => (
                  <tr key={row[0]} style={{borderBottom:'1px solid rgba(27,42,74,0.05)',background: i % 2 === 0 ? '#fff' : '#F9FAFB'}}>
                    {row.map((cell, j) => (
                      <td key={j} style={{padding:'14px 20px',fontSize:'0.875rem',color: j === 0 ? '#1B2A4A' : j === 3 ? '#C9A84C' : '#374151',fontWeight: j === 0 || j === 3 ? 600 : 400,fontFamily: j === 3 ? 'Georgia,serif' : 'inherit'}}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{padding:'16px 20px',background:'#F9FAFB',borderTop:'1px solid rgba(27,42,74,0.06)'}}>
            <p style={{fontSize:'0.75rem',color:'#94a3b8'}}>The £2,500 commitment fee is non-refundable and fully credited against the final sourcing fee at completion. Refurbishment project management is charged at 20% of total works cost.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
