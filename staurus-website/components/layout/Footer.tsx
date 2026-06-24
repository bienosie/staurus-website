'use client'

import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  strategies: [
    { label: 'Buy to Let (BTL)', href: '/strategies/buy-to-let' },
    { label: 'BRRR Strategy', href: '/strategies/brrr' },
    { label: 'HMO Investment', href: '/strategies/hmo' },
    { label: 'Social Housing', href: '/strategies/social-housing' },
  ],
  markets: [
    { label: 'Manchester Deals', href: '/markets/manchester' },
    { label: 'Liverpool Deals', href: '/markets/liverpool' },
    { label: 'Live Deal Board', href: '/live-deals' },
    { label: 'Nigerian Investors', href: '/nigerian-investors' },
  ],
  company: [
    { label: 'About Staurus', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'SPV Formation', href: '/spv-formation' },
    { label: 'Blog', href: '/blog' },
    { label: 'Compliance', href: '/compliance' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
}

const compliance = [
  { label: 'ICO', value: 'ZZB652416' },
  { label: 'AML', value: 'XCML00000198864' },
  { label: 'PRS', value: 'PRS044023' },
  { label: 'NRLA', value: '3149653' },
  { label: 'Co. No.', value: '14512333' },
]

export function Footer() {
  return (
    <footer style={{background:'#0D1526',color:'#fff'}}>
      {/* Newsletter strip */}
      <div style={{background:'#1B2A4A',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'8px'}}>Weekly Intelligence</p>
              <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.5rem',fontWeight:700,color:'#fff',lineHeight:1.2}}>UK Property Market Insights<br />Delivered Every Monday</h3>
            </div>
            <form className="flex gap-3 flex-col sm:flex-row w-full lg:w-auto lg:min-w-[420px]">
              <input
                type="email"
                placeholder="Your email address"
                style={{flex:1,background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'6px',padding:'12px 16px',color:'#fff',fontSize:'0.875rem',outline:'none'}}
              />
              <button type="submit" style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#C9A84C',color:'#1B2A4A',fontWeight:600,padding:'12px 20px',borderRadius:'6px',fontSize:'0.8125rem',border:'none',cursor:'pointer',whiteSpace:'nowrap'}}>
                Subscribe <ArrowRight size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div style={{fontFamily:'Georgia,serif',fontSize:'1.375rem',fontWeight:700,color:'#fff',letterSpacing:'-0.02em',lineHeight:1}}>STAURUS</div>
              <div style={{fontSize:'0.6rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.22em',textTransform:'uppercase',marginTop:'3px'}}>PROPERTIES</div>
            </div>
            <p style={{fontSize:'0.875rem',color:'rgba(255,255,255,0.55)',lineHeight:1.7,marginBottom:'24px',maxWidth:'300px'}}>
              Intelligence-led UK property deal sourcing. We find below-market-value opportunities in Manchester and Liverpool before the market prices them correctly.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin size={14} style={{color:'#C9A84C',marginTop:'3px',flexShrink:0}} />
                <span style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)'}}>Bartle House, Oxford Court, Manchester M2 3WQ</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} style={{color:'#C9A84C',flexShrink:0}} />
                <a href="tel:+441613274269" style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>01613 274 269</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} style={{color:'#C9A84C',flexShrink:0}} />
                <a href="mailto:info@staurusproperties.com" style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)',textDecoration:'none'}}>info@staurusproperties.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-8">
              {[
                { href: 'https://www.facebook.com/staurusproperties', icon: Facebook },
                { href: 'https://www.instagram.com/staurusproperties', icon: Instagram },
                { href: 'https://x.com/staurusproperti', icon: Twitter },
                { href: 'https://www.youtube.com/@Staurus_Properties', icon: Youtube },
              ].map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{width:'36px',height:'36px',borderRadius:'6px',background:'rgba(255,255,255,0.07)',display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(255,255,255,0.5)',transition:'all 0.2s'}}
                  onMouseOver={e => { e.currentTarget.style.background='rgba(201,168,76,0.2)'; e.currentTarget.style.color='#C9A84C' }}
                  onMouseOut={e => { e.currentTarget.style.background='rgba(255,255,255,0.07)'; e.currentTarget.style.color='rgba(255,255,255,0.5)' }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'16px'}}>Strategies</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.strategies.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)',textDecoration:'none',transition:'color 0.15s'}}
                    onMouseOver={e => (e.currentTarget.style.color='#C9A84C')}
                    onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.5)')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'16px'}}>Markets</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.markets.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)',textDecoration:'none',transition:'color 0.15s'}}
                    onMouseOver={e => (e.currentTarget.style.color='#C9A84C')}
                    onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.5)')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.18em',textTransform:'uppercase',marginBottom:'16px'}}>Company</p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)',textDecoration:'none',transition:'color 0.15s'}}
                    onMouseOver={e => (e.currentTarget.style.color='#C9A84C')}
                    onMouseOut={e => (e.currentTarget.style.color='rgba(255,255,255,0.5)')}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Compliance bar */}
        <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid rgba(255,255,255,0.07)'}}>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-6">
            {compliance.map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <span style={{fontSize:'0.6rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.15em',textTransform:'uppercase'}}>{item.label}:</span>
                <span style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.45)',fontFamily:'monospace'}}>{item.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.3)',lineHeight:1.6,maxWidth:'640px'}}>
              Staurus Properties Limited is registered in England and Wales. Property investment carries risk. Past performance does not guarantee future results. Capital at risk. This website does not constitute financial advice.
            </p>
            <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.25)',whiteSpace:'nowrap'}}>
              © {new Date().getFullYear()} Staurus Properties Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
