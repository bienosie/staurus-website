import Link from 'next/link'
import { ArrowRight, TrendingDown, BarChart3, Shield } from 'lucide-react'

export function HeroSection() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0D1526 0%, #1B2A4A 55%, #1e305a 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Architectural grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Gold accent orb */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(27,42,74,0.6) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)',
              borderRadius: '100px', padding: '6px 14px', marginBottom: '28px',
            }}>
              <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#C9A84C'}} />
              <span style={{fontSize:'0.7rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.15em',textTransform:'uppercase'}}>
                Live Deal Intelligence
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}>
              We Find UK Property
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #A8872E 0%, #C9A84C 50%, #D4B96A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Deals the Market
              </span>
              <br />
              Has Not Priced Yet.
            </h1>

            <p style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.62)',
              lineHeight: 1.75,
              marginBottom: '36px',
              maxWidth: '480px',
            }}>
              Live, data-scored below-market-value opportunities in Manchester and Liverpool.
              Full investment analysis across BTL, BRRR, HMO and Social Housing
              strategies -- delivered to serious investors before the wider market sees them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="https://deals.staurusproperties.com" target="_blank"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  background: 'linear-gradient(135deg, #A8872E 0%, #C9A84C 100%)',
                  color: '#1B2A4A', fontWeight: 700, padding: '14px 28px',
                  borderRadius: '6px', fontSize: '0.9375rem', textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(201,168,76,0.35)', transition: 'all 0.2s',
                  letterSpacing: '0.01em',
                }}>
                Access Live Deals <ArrowRight size={16} />
              </Link>
              <Link href="/how-it-works"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  border: '1.5px solid rgba(201,168,76,0.4)', color: '#C9A84C',
                  fontWeight: 600, padding: '14px 28px', borderRadius: '6px',
                  fontSize: '0.9375rem', textDecoration: 'none', transition: 'all 0.2s',
                }}>
                How It Works
              </Link>
            </div>

            {/* Trust signals row */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: TrendingDown, text: 'Avg 18% Below Market Value' },
                { icon: BarChart3, text: 'Live ROI Calculators' },
                { icon: Shield, text: 'FCA-Compliant Process' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{display:'flex',alignItems:'center',gap:'7px'}}>
                  <Icon size={13} style={{color:'#C9A84C',flexShrink:0}} />
                  <span style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.5)',fontWeight:500}}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Deal card mockup */}
          <div style={{position:'relative'}}>
            {/* Main card */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              padding: '28px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'20px'}}>
                <div style={{display:'flex',gap:'6px'}}>
                  <span style={{background:'rgba(201,168,76,0.15)',color:'#C9A84C',fontSize:'0.65rem',fontWeight:600,padding:'4px 10px',borderRadius:'100px',border:'1px solid rgba(201,168,76,0.2)'}}>BTL</span>
                  <span style={{background:'rgba(201,168,76,0.15)',color:'#C9A84C',fontSize:'0.65rem',fontWeight:600,padding:'4px 10px',borderRadius:'100px',border:'1px solid rgba(201,168,76,0.2)'}}>BRRR</span>
                </div>
                <span style={{fontSize:'0.65rem',color:'rgba(255,255,255,0.35)',fontWeight:500}}>M11 · 47 days</span>
              </div>

              {/* Property placeholder */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(27,42,74,0.8) 0%, rgba(17,28,51,0.9) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '8px', height: '140px', marginBottom: '20px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em',textTransform:'uppercase'}}>Property Photo</div>
                  <div style={{fontSize:'0.6rem',color:'rgba(255,255,255,0.15)',marginTop:'4px'}}>Manchester · 3 Bed Terrace</div>
                </div>
                <div style={{position:'absolute',top:'10px',right:'10px',background:'rgba(201,168,76,0.9)',borderRadius:'4px',padding:'3px 8px'}}>
                  <span style={{fontSize:'0.6rem',fontWeight:700,color:'#1B2A4A'}}>TIER 3 EXCLUSIVE</span>
                </div>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px',marginBottom:'20px'}}>
                {[
                  { label: 'Asking Price', value: '£89,500' },
                  { label: 'BMV Discount', value: '21.3%', gold: true },
                  { label: 'Gross Yield', value: '9.8%', gold: true },
                ].map(item => (
                  <div key={item.label} style={{textAlign:'center'}}>
                    <div style={{fontSize:'1.125rem',fontWeight:700,fontFamily:'Georgia,serif',color: item.gold ? '#C9A84C' : '#fff'}}>{item.value}</div>
                    <div style={{fontSize:'0.6rem',color:'rgba(255,255,255,0.4)',marginTop:'2px',letterSpacing:'0.05em'}}>{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Motivation score */}
              <div style={{background:'rgba(201,168,76,0.08)',border:'1px solid rgba(201,168,76,0.15)',borderRadius:'6px',padding:'10px 14px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <span style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.6)'}}>Motivation Score</span>
                <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                  <div style={{display:'flex',gap:'3px'}}>
                    {[1,2,3,4,5,6,7,8,9,10].map(i => (
                      <div key={i} style={{width:'12px',height:'4px',borderRadius:'2px',background: i <= 8 ? '#C9A84C' : 'rgba(255,255,255,0.1)'}} />
                    ))}
                  </div>
                  <span style={{fontSize:'0.7rem',fontWeight:700,color:'#C9A84C'}}>HIGH</span>
                </div>
              </div>

              <div style={{marginTop:'16px',display:'flex',gap:'10px'}}>
                <button style={{flex:1,background:'linear-gradient(135deg, #A8872E, #C9A84C)',color:'#1B2A4A',fontWeight:700,padding:'10px',borderRadius:'6px',border:'none',fontSize:'0.8125rem',cursor:'pointer'}}>
                  View Full Analysis
                </button>
                <button style={{padding:'10px 14px',background:'rgba(255,255,255,0.06)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'6px',color:'rgba(255,255,255,0.6)',cursor:'pointer',fontSize:'0.8125rem'}}>
                  Save
                </button>
              </div>
            </div>

            {/* Floating badge */}
            <div style={{
              position:'absolute',top:'-16px',right:'-16px',
              background:'linear-gradient(135deg, #A8872E, #C9A84C)',
              borderRadius:'10px',padding:'14px 18px',
              boxShadow:'0 8px 32px rgba(201,168,76,0.4)',
            }}>
              <div style={{fontSize:'1.5rem',fontWeight:800,fontFamily:'Georgia,serif',color:'#1B2A4A',lineHeight:1}}>47</div>
              <div style={{fontSize:'0.6rem',fontWeight:600,color:'rgba(27,42,74,0.7)',letterSpacing:'0.1em',textTransform:'uppercase',marginTop:'2px'}}>Live Deals</div>
            </div>

            {/* Second floating badge */}
            <div style={{
              position:'absolute',bottom:'-14px',left:'-16px',
              background:'#111C33',border:'1px solid rgba(201,168,76,0.3)',
              borderRadius:'10px',padding:'12px 16px',
              boxShadow:'0 8px 24px rgba(0,0,0,0.4)',
            }}>
              <div style={{fontSize:'1.25rem',fontWeight:800,fontFamily:'Georgia,serif',color:'#C9A84C',lineHeight:1}}>13.2%</div>
              <div style={{fontSize:'0.6rem',fontWeight:600,color:'rgba(255,255,255,0.45)',letterSpacing:'0.1em',textTransform:'uppercase',marginTop:'2px'}}>Avg ROI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'120px',background:'linear-gradient(to bottom, transparent, #ffffff)',pointerEvents:'none'}} />
    </section>
  )
}
