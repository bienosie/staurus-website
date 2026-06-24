'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'

const navLinks = [
  {
    label: 'Strategies',
    href: '#',
    children: [
      { label: 'Buy to Let (BTL)', href: '/strategies/buy-to-let', desc: 'Steady rental income' },
      { label: 'BRRR', href: '/strategies/brrr', desc: 'Recycle your capital' },
      { label: 'HMO', href: '/strategies/hmo', desc: 'Maximise yield per property' },
      { label: 'Social Housing', href: '/strategies/social-housing', desc: 'Guaranteed 5-year income' },
    ],
  },
  {
    label: 'Markets',
    href: '#',
    children: [
      { label: 'Manchester', href: '/markets/manchester', desc: 'M9, M11, M12, M18, M40' },
      { label: 'Liverpool', href: '/markets/liverpool', desc: 'L1, L3, L6, L7, L8' },
    ],
  },
  { label: 'Live Deals', href: '/live-deals' },
  { label: 'Nigerian Investors', href: '/nigerian-investors' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null as string | null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy/98 backdrop-blur-md shadow-lg' : 'bg-navy'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span style={{fontFamily:'Georgia,serif',fontSize:'1.25rem',fontWeight:700,color:'#fff',letterSpacing:'-0.02em',lineHeight:1}}>STAURUS</span>
              <span style={{fontFamily:'Inter,Arial,sans-serif',fontSize:'0.6rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.22em',textTransform:'uppercase',lineHeight:1,marginTop:'3px'}}>PROPERTIES</span>
            </div>
            <div style={{width:'1px',height:'32px',background:'rgba(201,168,76,0.3)',marginLeft:'4px'}} />
            <div style={{width:'6px',height:'6px',borderRadius:'50%',background:'#C9A84C'}} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                {link.children ? (
                  <button className="nav-menu-btn" style={{display:'flex',alignItems:'center',gap:'4px',padding:'8px 16px',color:'rgba(255,255,255,0.8)',fontFamily:'Inter,sans-serif',fontSize:'0.875rem',fontWeight:500,background:'none',border:'none',cursor:'pointer',borderRadius:'6px'}}>
                    {link.label}
                    <ChevronDown size={13} style={{transition:'transform 0.2s',transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none'}} />
                  </button>
                ) : (
                  <Link href={link.href} style={{
                    display:'block',padding:'8px 16px',
                    fontFamily:'Inter,sans-serif',fontSize:'0.875rem',fontWeight:500,
                    color: link.label === 'Nigerian Investors' ? '#C9A84C' : 'rgba(255,255,255,0.8)',
                    borderRadius:'6px',transition:'all 0.2s',textDecoration:'none'
                  }}>
                    {link.label}
                  </Link>
                )}
                {link.children && activeDropdown === link.label && (
                  <div style={{position:'absolute',top:'100%',left:0,marginTop:'4px',width:'220px',background:'#111C33',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'6px',boxShadow:'0 20px 60px rgba(0,0,0,0.4)',overflow:'hidden',zIndex:100}}>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} className="nav-dropdown-item" style={{display:'flex',flexDirection:'column',padding:'12px 16px',borderBottom:'1px solid rgba(255,255,255,0.05)',textDecoration:'none',transition:'background 0.15s'}}>
                        <span style={{fontSize:'0.875rem',fontWeight:500,color:'#fff'}}>{child.label}</span>
                        <span style={{fontSize:'0.65rem',color:'rgba(255,255,255,0.45)',marginTop:'2px'}}>{child.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="https://deals.staurusproperties.com" target="_blank" className="nav-cta"
              style={{display:'inline-flex',alignItems:'center',gap:'6px',background:'#C9A84C',color:'#1B2A4A',fontWeight:600,padding:'10px 20px',borderRadius:'6px',fontSize:'0.8125rem',letterSpacing:'0.02em',textDecoration:'none',transition:'all 0.2s'}}>
              View Live Deals <ArrowRight size={13} />
            </Link>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden" style={{background:'none',border:'none',color:'#fff',padding:'8px',cursor:'pointer'}}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{background:'#111C33',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <div style={{padding:'8px 12px',color:'rgba(255,255,255,0.35)',fontSize:'0.6rem',letterSpacing:'0.2em',textTransform:'uppercase',fontWeight:600}}>{link.label}</div>
                    {link.children.map((child) => (
                      <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                        style={{display:'block',padding:'10px 24px',fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',textDecoration:'none'}}>
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link href={link.href} onClick={() => setMobileOpen(false)}
                    style={{display:'block',padding:'10px 12px',fontSize:'0.875rem',fontWeight:500,color: link.label === 'Nigerian Investors' ? '#C9A84C' : 'rgba(255,255,255,0.8)',textDecoration:'none'}}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{paddingTop:'12px',borderTop:'1px solid rgba(255,255,255,0.1)',marginTop:'8px'}}>
              <Link href="https://deals.staurusproperties.com" target="_blank" onClick={() => setMobileOpen(false)}
                style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'6px',background:'#C9A84C',color:'#1B2A4A',fontWeight:600,padding:'12px',borderRadius:'6px',fontSize:'0.875rem',textDecoration:'none'}}>
                View Live Deals <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
