'use client'

import Link from 'next/link'
import { ArrowRight, Users, MapPin, Calendar } from 'lucide-react'

// Photo IDs from the Drive - Ushers Pictures folder (7U1A series)
// These will be served via Google Drive direct links or Cloudinary once uploaded
const summitPhotos = [
  { id: '1YdjSLdD_F6TiVbfkVnTQvPsfa0zFiwiP', alt: 'Stephen presenting at the Lagos Real Estate Summit with Staurus Properties roller banner', caption: 'Live deal showcase on the day' },
  { id: '1qX65Th4H7bM0hggDusC5imZhZ4V2lpLx', alt: 'Staurus Properties presentation screen showing investment strategies and compliance details', caption: 'Strategy deep-dives for Nigerian investors' },
  { id: '1IeWzt_RL36yV5p1raiJmigLwX_hpkq1O', alt: 'Investors engaging at the Lagos Summit', caption: 'Personal consultations on the day' },
]

export function LagosSummitSection() {
  return (
    <section style={{background:'#1B2A4A',padding:'96px 0',position:'relative',overflow:'hidden'}}>
      {/* Grid overlay */}
      <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',backgroundSize:'50px 50px'}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'12px'}}>Verified Market Presence</p>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.875rem,4vw,2.75rem)',fontWeight:700,color:'#fff',lineHeight:1.15,letterSpacing:'-0.02em',marginBottom:'20px'}}>
              We Brought UK Deal Intelligence
              <span style={{color:'#C9A84C'}}> to Lagos.</span>
            </h2>
            <p style={{fontSize:'0.9375rem',color:'rgba(255,255,255,0.6)',lineHeight:1.75,marginBottom:'32px'}}>
              In February 2025, Staurus Properties hosted an exclusive Real Estate Summit in Lagos for Nigerian investors.
              We presented live UK property deals, walked through step-by-step investment strategies, and held private consultations
              with investors ready to deploy capital into the UK market.
            </p>
            <p style={{fontSize:'0.9375rem',color:'rgba(255,255,255,0.6)',lineHeight:1.75,marginBottom:'36px'}}>
              This was not a webinar. This was not a slide deck. This was a room full of serious investors, live deals on screen,
              and a team that flew from Manchester to Lagos to make it happen.
            </p>

            <div style={{display:'flex',flexDirection:'column',gap:'16px',marginBottom:'40px'}}>
              {[
                { icon: Calendar, text: 'February 2025 — Lagos, Nigeria' },
                { icon: Users, text: 'Exclusive investor audience' },
                { icon: MapPin, text: 'Live UK property deals showcased on the day' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{display:'flex',alignItems:'center',gap:'12px'}}>
                  <div style={{width:'32px',height:'32px',borderRadius:'6px',background:'rgba(201,168,76,0.15)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                    <Icon size={15} style={{color:'#C9A84C'}} />
                  </div>
                  <span style={{fontSize:'0.875rem',color:'rgba(255,255,255,0.7)',fontWeight:500}}>{text}</span>
                </div>
              ))}
            </div>

            <Link href="/nigerian-investors"
              style={{display:'inline-flex',alignItems:'center',gap:'8px',border:'1.5px solid rgba(201,168,76,0.5)',color:'#C9A84C',fontWeight:600,padding:'13px 24px',borderRadius:'6px',fontSize:'0.9375rem',textDecoration:'none',transition:'all 0.2s'}}>
              Nigerian Investor Information <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Photo grid */}
          <div style={{display:'grid',gridTemplateRows:'auto auto',gap:'12px'}}>
            {/* Main photo placeholder - tallest, most prominent */}
            <div style={{
              borderRadius:'10px',overflow:'hidden',
              background:'linear-gradient(135deg, #111C33, #1B2A4A)',
              border:'1px solid rgba(201,168,76,0.2)',
              height:'280px',
              display:'flex',alignItems:'center',justifyContent:'center',
              position:'relative',
            }}>
              {/* This becomes the real photo: 7U1A7788.jpg showing Stephen at the roller banner */}
              <div style={{textAlign:'center',padding:'24px'}}>
                <div style={{fontSize:'2rem',marginBottom:'8px'}}>📸</div>
                <p style={{fontSize:'0.8125rem',color:'rgba(255,255,255,0.5)',fontWeight:600}}>Lagos Summit — Main Stage</p>
                <p style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.3)',marginTop:'4px'}}>Photo: 7U1A7788.jpg</p>
              </div>
              <div style={{position:'absolute',bottom:'12px',left:'12px',background:'rgba(201,168,76,0.9)',borderRadius:'4px',padding:'4px 10px'}}>
                <span style={{fontSize:'0.65rem',fontWeight:700,color:'#1B2A4A'}}>Lagos, Nigeria · Feb 2025</span>
              </div>
            </div>

            {/* Two smaller photos side by side */}
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px'}}>
              {[
                { file: '7U1A7807.jpg', label: 'Presentation Screen' },
                { file: '7U1A7716.jpg', label: 'Investor Engagement' },
              ].map(photo => (
                <div key={photo.file} style={{
                  borderRadius:'8px',overflow:'hidden',
                  background:'linear-gradient(135deg, #111C33, #1B2A4A)',
                  border:'1px solid rgba(201,168,76,0.15)',
                  height:'160px',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  position:'relative',
                }}>
                  <div style={{textAlign:'center',padding:'16px'}}>
                    <p style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.4)'}}>📷 {photo.label}</p>
                    <p style={{fontSize:'0.6rem',color:'rgba(255,255,255,0.2)',marginTop:'4px'}}>{photo.file}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summit stats bar */}
        <div style={{
          marginTop:'64px',paddingTop:'48px',
          borderTop:'1px solid rgba(255,255,255,0.08)',
          display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',gap:'32px',
        }}>
          {[
            { value: '1st', label: 'UK Property Company to host a live deal summit in Lagos' },
            { value: '100%', label: 'Live deals shown on the day — real properties, real numbers' },
            { value: '2', label: 'Cities covered — Manchester and Liverpool deals presented' },
            { value: 'Feb 2025', label: 'Summit held — with more events planned' },
          ].map(item => (
            <div key={item.label} style={{textAlign:'center'}}>
              <div style={{fontFamily:'Georgia,serif',fontSize:'2rem',fontWeight:700,color:'#C9A84C',lineHeight:1,marginBottom:'8px'}}>{item.value}</div>
              <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.45)',lineHeight:1.5}}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
