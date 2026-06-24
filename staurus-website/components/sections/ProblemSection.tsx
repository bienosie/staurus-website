import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function ProblemSection() {
  return (
    <section style={{background:'#F4F6F9',padding:'96px 0'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{textAlign:'center',marginBottom:'64px'}}>
          <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'12px'}}>The Problem We Solve</p>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.875rem,4vw,2.75rem)',fontWeight:700,color:'#1B2A4A',lineHeight:1.15,letterSpacing:'-0.02em',maxWidth:'640px',margin:'0 auto'}}>
            Two Investors. One Painful Problem. One Solution.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              label: 'The Overseas Investor',
              flag: '🇳🇬',
              headline: 'Capital ready. Deal flow missing.',
              body: 'You are in Lagos, Accra or anywhere outside the UK. You know UK property delivers strong, GBP-denominated returns that protect your wealth against naira volatility. But you cannot view properties remotely, build agent relationships from abroad, or distinguish genuine BMV deals from wishful thinking. You have capital and no reliable pipeline.',
              points: ['Cannot visit and assess properties', 'No local agent relationships', 'No way to verify BMV claims', 'Currency risk from naira depreciation'],
            },
            {
              label: 'The Time-Poor UK Investor',
              flag: '🇬🇧',
              headline: 'Knowledge ready. Time missing.',
              body: 'You know property is a strong asset class. You understand yield calculations and know Manchester and Liverpool offer better returns than London. But monitoring nine postcodes daily, running scenarios manually, and maintaining agent relationships in cities you do not live in is a second job you cannot afford.',
              points: ['No time to monitor Rightmove daily', 'Yield calculations done manually', 'No agent network in target cities', 'Missing deals while they are still available'],
            },
          ].map((card) => (
            <div key={card.label} style={{
              background:'#fff',borderRadius:'10px',padding:'36px',
              boxShadow:'0 4px 24px rgba(27,42,74,0.07)',
              border:'1px solid rgba(27,42,74,0.07)',
            }}>
              <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'20px'}}>
                <span style={{fontSize:'1.5rem'}}>{card.flag}</span>
                <span style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.15em',textTransform:'uppercase'}}>{card.label}</span>
              </div>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.375rem',fontWeight:700,color:'#1B2A4A',marginBottom:'14px',lineHeight:1.25}}>{card.headline}</h3>
              <p style={{fontSize:'0.9rem',color:'#4a5568',lineHeight:1.75,marginBottom:'20px'}}>{card.body}</p>
              <ul style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                {card.points.map(point => (
                  <li key={point} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                    <div style={{width:'5px',height:'5px',borderRadius:'50%',background:'#C9A84C',flexShrink:0}} />
                    <span style={{fontSize:'0.8375rem',color:'#64748b'}}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Convergence */}
        <div style={{
          background:'linear-gradient(135deg, #0D1526 0%, #1B2A4A 100%)',
          borderRadius:'12px',padding:'48px',textAlign:'center',
          border:'1px solid rgba(201,168,76,0.2)',
          position:'relative',overflow:'hidden',
        }}>
          <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,opacity:0.04,backgroundImage:'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',backgroundSize:'40px 40px'}} />
          <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'16px',position:'relative'}}>The Staurus Solution</p>
          <h3 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.5rem,3vw,2.25rem)',fontWeight:700,color:'#fff',lineHeight:1.2,marginBottom:'16px',position:'relative',letterSpacing:'-0.02em'}}>
            Staurus finds the deal. Scores it. Calculates every strategy.<br />
            <span style={{color:'#C9A84C'}}>Delivers it to your screen before the market catches up.</span>
          </h3>
          <p style={{fontSize:'0.9375rem',color:'rgba(255,255,255,0.55)',maxWidth:'540px',margin:'0 auto 32px',lineHeight:1.7,position:'relative'}}>
            Our proprietary Motivation Scoring system and live deal pipeline means serious investors see qualified, data-verified opportunities the moment they become available.
          </p>
          <Link href="/how-it-works" style={{
            display:'inline-flex',alignItems:'center',gap:'8px',
            background:'linear-gradient(135deg, #A8872E, #C9A84C)',
            color:'#1B2A4A',fontWeight:700,padding:'14px 28px',
            borderRadius:'6px',fontSize:'0.9375rem',textDecoration:'none',
            position:'relative',
          }}>
            See How It Works <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
