import type { Metadata } from 'next'
import { ArrowRight, TrendingUp, Percent, Building2, Lock } from 'lucide-react'
import { getLiveDealStats } from '@/lib/supabase'
import { DealCard } from '@/components/ui/DealCard'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd, RealEstateAgentJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, portalLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Live Property Deals | Below Market Value BTL & BRRR | Staurus Properties',
  description:
    'Live, fully-vetted below-market-value property deals across Manchester and Liverpool. View projected BTL ROI, BMV discounts, refurb costings and exit strategies on the Staurus investor portal.',
  keywords: [
    'live property deals',
    'below market value property',
    'BMV deals Manchester',
    'BMV deals Liverpool',
    'BTL investment deals',
    'BRRR property deals',
    'UK property sourcing',
    'Staurus Properties',
  ],
  openGraph: {
    title: 'Live Property Deals | Staurus Properties',
    description:
      'Fully-vetted below-market-value deals in Manchester and Liverpool with projected returns, refurb costings and exit strategies on every opportunity.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}/live-deals`,
  },
  alternates: { canonical: `${SITE_URL}/live-deals` },
}

// Defensive: getLiveDealStats already swallows errors, but guard again here so
// a thrown/undefined response can never break the build.
async function safeStats() {
  try {
    const s = await getLiveDealStats()
    return {
      count: Number(s?.count) || 0,
      avgRoi: s?.avgRoi ?? 0,
      avgBmv: s?.avgBmv ?? 0,
    }
  } catch {
    return { count: 0, avgRoi: 0, avgBmv: 0 }
  }
}

// Representative teaser cards across our core Manchester & Liverpool patches.
const TEASERS = [
  { area: 'Manchester · M40', strategy: 'BTL', headlineRoi: '13.4%', bmv: '18%' },
  { area: 'Liverpool · L6', strategy: 'BRRR', headlineRoi: '15.1%', bmv: '22%' },
  { area: 'Manchester · M18', strategy: 'BTL', headlineRoi: '12.8%', bmv: '15%' },
  { area: 'Liverpool · L8', strategy: 'HMO', headlineRoi: '16.7%', bmv: '20%' },
  { area: 'Manchester · M9', strategy: 'BRRR', headlineRoi: '14.2%', bmv: '24%' },
  { area: 'Liverpool · L7', strategy: 'Social Housing', headlineRoi: '13.9%', bmv: '17%' },
]

export default async function LiveDealsPage() {
  const stats = await safeStats()
  const hasData = stats.count > 0

  const statBlocks = [
    {
      icon: Building2,
      label: 'Available Deals',
      value: hasData ? `${stats.count}` : 'Updating',
      sub: 'Live on the portal now',
    },
    {
      icon: TrendingUp,
      label: 'Avg. BTL ROI',
      value: hasData ? `${stats.avgRoi}%` : '13%+',
      sub: 'Across current listings',
    },
    {
      icon: Percent,
      label: 'Avg. BMV Discount',
      value: hasData ? `${stats.avgBmv}%` : '15–25%',
      sub: 'Below open-market value',
    },
  ]

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Live Deals', url: `${SITE_URL}/live-deals` },
        ]}
      />
      <RealEstateAgentJsonLd />

      {/* Hero */}
      <section className="bg-navy-deeper">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 text-2xs font-semibold uppercase tracking-widest text-gold border border-gold/40 rounded-sm-md px-3 py-1.5">
            <Lock size={13} />
            Investor portal access
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Live Below-Market-Value Property Deals
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every Staurus deal is sourced, scored and stress-tested before it
            reaches you — across Manchester (M9, M11, M12, M18, M40) and
            Liverpool (L1, L3, L6, L7, L8). Full addresses, prices, refurb
            schedules and exit strategies are released to registered investors
            on the portal.
          </p>
          <div className="mt-9">
            <a
              href={portalLink('live-deals')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              Unlock Full Deals on the Portal
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-slate-site border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {statBlocks.map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="bg-white border border-slate-100 rounded-sm-md shadow-card p-6 text-center"
              >
                <Icon size={24} className="text-gold mx-auto" />
                <p className="mt-4 font-display text-3xl font-bold text-navy">
                  {value}
                </p>
                <p className="mt-1 text-sm font-semibold text-navy uppercase tracking-wide">
                  {label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser grid */}
      <section className="bg-slate-site">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              A Snapshot of What&rsquo;s Live
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              These are representative of the opportunities currently moving
              through our pipeline. Prices and addresses are reserved for
              registered investors — register free to see the full deal pack on
              each one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEASERS.map((deal) => (
              <DealCard key={`${deal.area}-${deal.strategy}`} {...deal} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={portalLink('live-deals')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-navy-deeper active:scale-[0.98] text-sm tracking-wide"
            >
              See Every Live Deal on the Portal
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        campaign="live-deals"
        title="Full deal packs are waiting on the portal"
        subtitle="Register free to unlock addresses, asking prices, refurbishment schedules, projected returns and exit strategies on every live Staurus deal."
      />
      <ComplianceBar />
    </>
  )
}
