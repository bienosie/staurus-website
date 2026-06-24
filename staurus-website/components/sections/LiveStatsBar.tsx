import { getLiveDealStats } from '@/lib/supabase'

export async function LiveStatsBar() {
  let live = { count: 0, avgRoi: 0 as number | string, avgBmv: 0 as number | string }
  try {
    live = await getLiveDealStats()
  } catch {
    live = { count: 0, avgRoi: 0, avgBmv: 0 }
  }

  const hasLive = Number(live.count) > 0

  const stats = [
    {
      value: hasLive ? String(live.count) : '—',
      label: 'Active Deals',
      suffix: '',
    },
    {
      value: hasLive ? String(live.avgBmv) : '—',
      label: 'Avg BMV Discount',
      suffix: hasLive ? '%' : '',
    },
    {
      value: hasLive ? String(live.avgRoi) : '—',
      label: 'Avg Projected BTL ROI',
      suffix: hasLive ? '%' : '',
    },
    { value: '9', label: 'Target Postcodes', suffix: '' },
    { value: 'M & L', label: 'Active Markets', suffix: '' },
  ]

  return (
    <section style={{background:'#1B2A4A',borderTop:'1px solid rgba(201,168,76,0.2)',borderBottom:'1px solid rgba(201,168,76,0.2)'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{display:'flex',alignItems:'stretch',overflowX:'auto',gap:0}}>
          {/* Live indicator */}
          <div style={{display:'flex',alignItems:'center',gap:'10px',padding:'20px 28px 20px 0',borderRight:'1px solid rgba(255,255,255,0.08)',flexShrink:0}}>
            <div style={{width:'8px',height:'8px',borderRadius:'50%',background:'#4ade80',boxShadow:'0 0 0 3px rgba(74,222,128,0.2)',animation:'pulse 2s infinite'}} />
            <span style={{fontSize:'0.65rem',fontWeight:600,color:'rgba(255,255,255,0.5)',letterSpacing:'0.18em',textTransform:'uppercase',whiteSpace:'nowrap'}}>Live Pipeline</span>
          </div>

          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
              padding:'20px 32px',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              flexShrink:0,
            }}>
              <div style={{fontFamily:'Georgia,serif',fontSize:'1.625rem',fontWeight:700,color:'#C9A84C',lineHeight:1,letterSpacing:'-0.02em'}}>
                {stat.value}{stat.suffix}
              </div>
              <div style={{fontSize:'0.65rem',fontWeight:500,color:'rgba(255,255,255,0.45)',marginTop:'4px',letterSpacing:'0.08em',whiteSpace:'nowrap'}}>
                {stat.label}
              </div>
            </div>
          ))}

          {/* Manchester + Liverpool pill */}
          <div style={{display:'flex',alignItems:'center',gap:'8px',padding:'20px 0 20px 28px',marginLeft:'auto',flexShrink:0}}>
            {['Manchester', 'Liverpool'].map(city => (
              <span key={city} style={{
                background:'rgba(201,168,76,0.12)',border:'1px solid rgba(201,168,76,0.2)',
                borderRadius:'100px',padding:'4px 12px',
                fontSize:'0.7rem',fontWeight:600,color:'#C9A84C',
                letterSpacing:'0.05em',whiteSpace:'nowrap',
              }}>{city}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
