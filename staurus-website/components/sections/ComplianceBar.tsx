import { Shield, CheckCircle } from 'lucide-react'

const registrations = [
  { label: 'ICO Registration', value: 'ZZB652416', desc: 'Data Protection' },
  { label: 'AML Registration', value: 'XCML00000198864', desc: 'Anti-Money Laundering' },
  { label: 'PRS Membership', value: 'PRS044023', desc: 'Property Redress Scheme' },
  { label: 'NRLA', value: '3149653', desc: 'National Residential Landlords' },
  { label: 'Companies House', value: '14512333', desc: 'Registered in England & Wales' },
]

export function ComplianceBar() {
  return (
    <section style={{background:'#fff',padding:'60px 0',borderTop:'1px solid rgba(27,42,74,0.07)',borderBottom:'1px solid rgba(27,42,74,0.07)'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',marginBottom:'36px'}}>
          <Shield size={16} style={{color:'#C9A84C'}} />
          <p style={{fontSize:'0.65rem',fontWeight:600,color:'#C9A84C',letterSpacing:'0.2em',textTransform:'uppercase'}}>Regulated and Compliant</p>
        </div>

        <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:'0',borderRadius:'10px',overflow:'hidden',border:'1px solid rgba(27,42,74,0.08)',boxShadow:'0 4px 24px rgba(27,42,74,0.05)'}}>
          {registrations.map((reg, i) => (
            <div key={reg.label} style={{
              display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
              padding:'24px 32px',
              borderRight: i < registrations.length - 1 ? '1px solid rgba(27,42,74,0.08)' : 'none',
              flex:'1 1 180px',
              textAlign:'center',
            }}>
              <div style={{display:'flex',alignItems:'center',gap:'6px',marginBottom:'6px'}}>
                <CheckCircle size={12} style={{color:'#22c55e'}} />
                <span style={{fontSize:'0.7rem',fontWeight:600,color:'#94a3b8',letterSpacing:'0.1em',textTransform:'uppercase'}}>{reg.label}</span>
              </div>
              <div style={{fontFamily:'monospace',fontSize:'0.875rem',fontWeight:700,color:'#1B2A4A',marginBottom:'3px'}}>{reg.value}</div>
              <div style={{fontSize:'0.65rem',color:'#cbd5e1'}}>{reg.desc}</div>
            </div>
          ))}
        </div>

        <p style={{textAlign:'center',fontSize:'0.75rem',color:'#cbd5e1',marginTop:'20px',lineHeight:1.6}}>
          Staurus Properties Limited is registered in England and Wales. All property sourcing activity is conducted in accordance with our AML, ICO and PRS obligations. Investment in property carries risk. Capital at risk.
        </p>
      </div>
    </section>
  )
}
