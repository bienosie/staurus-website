import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, TrendingUp, Building2 } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { FaqSection, type FaqItem } from '@/components/sections/FaqSection'
import {
  BreadcrumbJsonLd,
  FaqPageJsonLd,
  RealEstateAgentJsonLd,
} from '@/components/seo/JsonLd'
import { LIVERPOOL_POSTCODES, BRRR_TARGET_ROI, SITE_URL, portalLink } from '@/lib/site'

const PATH = '/markets/liverpool'

export const metadata: Metadata = {
  title: 'Liverpool Property Investment | Below Market Value Deals | Staurus Properties',
  description:
    'Where to invest in Liverpool: postcode-by-postcode yields for L1, L3, L6, L7 and L8, the regeneration thesis behind the Knowledge Quarter, Baltic Triangle and Anfield, and live below-market-value deals from Staurus Properties.',
  keywords: [
    'Liverpool property investment',
    'below market value Liverpool',
    'Liverpool buy to let',
    'L8 property investment',
    'Baltic Triangle investment',
    'Knowledge Quarter Liverpool',
    'Anfield regeneration',
    'Liverpool rental yields',
  ],
  openGraph: {
    title: 'Liverpool Property Investment | Staurus Properties',
    description:
      'Postcode-level yields, regeneration intelligence and live below-market-value deals across Liverpool.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

interface PostcodeMeta {
  area: string
  yield: string
  note: string
}

const POSTCODE_DATA: Record<string, PostcodeMeta> = {
  L1: {
    area: 'City Centre, Ropewalks, Baltic Triangle fringe',
    yield: '6.5% – 8.0%',
    note: 'Liverpool’s creative and nightlife core, adjacent to the Baltic Triangle — strong young-professional rental demand and serviced-accommodation potential.',
  },
  L3: {
    area: 'City Centre, Vauxhall, Liverpool Waters',
    yield: '6.5% – 8.0%',
    note: 'Home to the £5bn Liverpool Waters waterfront scheme and the new Everton Stadium at Bramley-Moore Dock, driving a generation of regeneration.',
  },
  L6: {
    area: 'Kensington, Fairfield, Tuebrook',
    yield: '8.0% – 9.5%',
    note: 'On the doorstep of the Knowledge Quarter and its universities and hospitals — high-yield terraced stock with deep student and key-worker demand.',
  },
  L7: {
    area: 'Edge Hill, Kensington, Fairfield',
    yield: '8.0% – 9.5%',
    note: 'Knowledge Quarter and Paddington Village expansion sit here — prime HMO and BRRR territory with some of the city’s strongest gross yields.',
  },
  L8: {
    area: 'Toxteth, Dingle, Baltic Triangle',
    yield: '7.5% – 9.0%',
    note: 'The Baltic Triangle’s creative-district uplift is spilling into Toxteth and the Dingle — early-stage regeneration at genuine BMV entry points.',
  },
}

const REGEN_AREAS = [
  {
    name: 'Knowledge Quarter & Paddington Village',
    detail:
      'A £1bn innovation district anchored by the University of Liverpool, LJMU and a cluster of hospitals and life-science campuses — generating sustained tenant demand across L6 and L7.',
  },
  {
    name: 'Baltic Triangle',
    detail:
      'Liverpool’s fastest-growing creative and digital quarter. Proven value uplift here is migrating into neighbouring L1 and L8, the classic pattern we position ahead of.',
  },
  {
    name: 'Anfield & Liverpool Waters',
    detail:
      'The expanded Anfield stadium scheme and the £5bn Liverpool Waters waterfront regeneration — including the new Everton Stadium at Bramley-Moore Dock — are reshaping the north of the city.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Why invest in Liverpool property?',
    answer:
      'Liverpool offers some of the highest gross rental yields of any major UK city — frequently 8–9.5% in the postcodes we source in — alongside large-scale regeneration in the Knowledge Quarter, Baltic Triangle and the £5bn Liverpool Waters scheme. It is a strong cash-flow market with genuine growth catalysts.',
  },
  {
    question: 'Which Liverpool postcodes do Staurus Properties source in?',
    answer:
      'We focus on L1, L3, L6, L7 and L8 — city-centre and inner-ring postcodes that combine affordable entry prices, high yields and proximity to the city’s flagship regeneration zones.',
  },
  {
    question: 'What returns can I expect on a Liverpool BRRR deal?',
    answer: `Our BRRR (Buy, Refurbish, Refinance, Rent) deals target a ${BRRR_TARGET_ROI} return on invested capital after refinance. Every live Liverpool deal on our portal shows the projected yield, refurbishment budget and post-works valuation in full.`,
  },
  {
    question: 'How does Liverpool compare with Manchester for investors?',
    answer:
      'Both are high-conviction Northern markets. Liverpool typically edges Manchester on raw gross yield, while Manchester’s Victoria North programme is larger in scale. Many of our investors hold in both cities — we source live below-market-value deals across the two.',
  },
]

export default function LiverpoolPage() {
  return (
    <>
      <RealEstateAgentJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Markets', url: `${SITE_URL}/markets` },
          { name: 'Liverpool', url: `${SITE_URL}${PATH}` },
        ]}
      />
      <FaqPageJsonLd items={FAQ.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Hero */}
      <section className="bg-navy-deeper relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative">
          <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-4">
            Markets · Liverpool
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Liverpool: the UK&apos;s standout <span className="text-gold">high-yield market.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Gross yields of 8–9.5% in our core postcodes, billions of pounds of regeneration in the
            Knowledge Quarter and Liverpool Waters, and below-market-value stock still available to
            disciplined buyers. We source where cash flow and growth meet.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={portalLink('markets-liverpool')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              See Live Deals <ArrowRight size={18} />
            </a>
            <Link
              href="/markets/manchester"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:border-gold text-sm tracking-wide"
            >
              Compare with Manchester
            </Link>
          </div>
        </div>
      </section>

      {/* Investment thesis */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-3">
              The Thesis
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              Why Liverpool earns its place in a portfolio
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Best-in-class yields',
                body: 'Inner-city Liverpool postcodes routinely deliver 8–9.5% gross yields — among the highest of any major UK city — for resilient, scalable cash flow.',
              },
              {
                icon: Building2,
                title: 'Regeneration at scale',
                body: 'The £1bn Knowledge Quarter, the Baltic Triangle and the £5bn Liverpool Waters waterfront are transforming the exact areas we buy in.',
              },
              {
                icon: MapPin,
                title: 'Targeted sourcing',
                body: 'We concentrate on five city-centre and inner-ring postcodes where below-market-value stock, tenant demand and regeneration overlap.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-slate-site border border-slate-100 rounded-sm-md p-7 shadow-card"
              >
                <div className="w-11 h-11 rounded-md bg-gold/15 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-semibold text-navy text-lg mb-2">{title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postcode table */}
      <section className="bg-slate-site py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-3">
              Postcode Intelligence
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              Where the numbers stack up
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Indicative gross yield ranges and the regeneration story behind each of our core
              Liverpool postcodes. Yields are indicative and vary by deal — live figures are on the
              portal.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block bg-white border border-slate-100 rounded-sm-md overflow-hidden shadow-card">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-sm font-semibold tracking-wide">Postcode</th>
                  <th className="px-6 py-4 text-sm font-semibold tracking-wide">Areas</th>
                  <th className="px-6 py-4 text-sm font-semibold tracking-wide">Indicative Gross Yield</th>
                  <th className="px-6 py-4 text-sm font-semibold tracking-wide">Why Invest</th>
                </tr>
              </thead>
              <tbody>
                {LIVERPOOL_POSTCODES.map((code, i) => {
                  const row = POSTCODE_DATA[code]
                  return (
                    <tr key={code} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-site/60'}>
                      <td className="px-6 py-5 font-bold text-navy text-lg">{code}</td>
                      <td className="px-6 py-5 text-slate-600 text-sm">{row.area}</td>
                      <td className="px-6 py-5">
                        <span className="inline-block bg-gold/15 text-navy font-semibold text-sm px-3 py-1 rounded-sm-md">
                          {row.yield}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-slate-600 text-sm leading-relaxed">{row.note}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {LIVERPOOL_POSTCODES.map((code) => {
              const row = POSTCODE_DATA[code]
              return (
                <div
                  key={code}
                  className="bg-white border border-slate-100 rounded-sm-md p-6 shadow-card"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-navy text-2xl">{code}</span>
                    <span className="inline-block bg-gold/15 text-navy font-semibold text-sm px-3 py-1 rounded-sm-md">
                      {row.yield}
                    </span>
                  </div>
                  <p className="text-navy font-medium text-sm mb-2">{row.area}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{row.note}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Regeneration */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold text-gold tracking-[0.2em] uppercase mb-3">
              Regeneration
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy leading-tight">
              The regeneration that underwrites the thesis
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REGEN_AREAS.map((area) => (
              <div key={area.name} className="border-l-2 border-gold pl-6 py-1">
                <h3 className="font-display text-xl font-bold text-navy mb-3">{area.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} heading="Liverpool Investment FAQs" />

      <CTASection
        title="See live below-market-value deals in Liverpool"
        subtitle="Register for the Staurus Properties investor portal to view fully-vetted Liverpool opportunities — with projected yields, refurb costings and exit strategies on every deal."
        primaryLabel="See Live Deals"
        campaign="markets-liverpool"
      />

      <ComplianceBar />
    </>
  )
}
