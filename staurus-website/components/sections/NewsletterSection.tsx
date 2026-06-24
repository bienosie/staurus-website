'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, first_name: name }),
      })
      if (!res.ok) {
        setError('Something went wrong. Please check your email and try again.')
        return
      }
      setSubmitted(true)
    } catch {
      setError('We could not reach the server. Please try again in a moment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={{background:'linear-gradient(135deg, #0D1526 0%, #1B2A4A 100%)',padding:'80px 0',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',backgroundSize:'50px 50px'}} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase',marginBottom:'12px'}}>Weekly Intelligence</p>
            <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(1.875rem,4vw,2.5rem)',fontWeight:700,color:'#fff',lineHeight:1.15,letterSpacing:'-0.02em',marginBottom:'16px'}}>
              UK Property Market Insights
              <span style={{color:'#C9A84C'}}> Delivered Every Monday.</span>
            </h2>
            <p style={{fontSize:'0.9375rem',color:'rgba(255,255,255,0.55)',lineHeight:1.75,marginBottom:'28px'}}>
              Every week: the deals added to the pipeline, average BMV discounts, strategy breakdowns, and market intelligence from Manchester and Liverpool. Written by our team. Powered by real data.
            </p>
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
              {['Live deal count and average ROI from the pipeline','Strategy of the week with real anonymised numbers','Postcode-level market intelligence','No spam. Unsubscribe any time.'].map(item => (
                <div key={item} style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <CheckCircle size={14} style={{color:'#C9A84C',flexShrink:0}} />
                  <span style={{fontSize:'0.875rem',color:'rgba(255,255,255,0.6)'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',borderRadius:'12px',padding:'36px'}}>
            {submitted ? (
              <div style={{textAlign:'center',padding:'24px 0'}}>
                <CheckCircle size={48} style={{color:'#C9A84C',margin:'0 auto 16px'}} />
                <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.375rem',fontWeight:700,color:'#fff',marginBottom:'10px'}}>You are on the list.</h3>
                <p style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.55)',lineHeight:1.65}}>Your first weekly intelligence report lands next Monday. Check your inbox for a confirmation email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:'1.25rem',fontWeight:700,color:'#fff',marginBottom:'24px'}}>Get Weekly UK Property Intelligence</h3>
                <div style={{display:'flex',flexDirection:'column',gap:'14px'}}>
                  <div>
                    <label style={{fontSize:'0.75rem',fontWeight:600,color:'rgba(255,255,255,0.5)',letterSpacing:'0.08em',display:'block',marginBottom:'6px'}}>FIRST NAME</label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Your first name"
                      style={{width:'100%',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'6px',padding:'11px 14px',color:'#fff',fontSize:'0.875rem',outline:'none',boxSizing:'border-box'}}
                    />
                  </div>
                  <div>
                    <label style={{fontSize:'0.75rem',fontWeight:600,color:'rgba(255,255,255,0.5)',letterSpacing:'0.08em',display:'block',marginBottom:'6px'}}>EMAIL ADDRESS <span style={{color:'#C9A84C'}}>*</span></label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      style={{width:'100%',background:'rgba(255,255,255,0.07)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:'6px',padding:'11px 14px',color:'#fff',fontSize:'0.875rem',outline:'none',boxSizing:'border-box'}}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',
                      background:'linear-gradient(135deg, #A8872E, #C9A84C)',
                      color:'#1B2A4A',fontWeight:700,padding:'13px',
                      borderRadius:'6px',border:'none',cursor:'pointer',
                      fontSize:'0.9375rem',marginTop:'4px',
                      opacity: loading ? 0.7 : 1,
                    }}>
                    {loading ? 'Subscribing...' : <> Subscribe to Weekly Insights <ArrowRight size={15} /> </>}
                  </button>
                </div>
                {error && (
                  <p style={{fontSize:'0.8rem',color:'#fca5a5',marginTop:'12px',lineHeight:1.5}}>{error}</p>
                )}
                <p style={{fontSize:'0.7rem',color:'rgba(255,255,255,0.3)',marginTop:'14px',lineHeight:1.5}}>By subscribing you agree to receive weekly emails from Staurus Properties. No spam. Unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
