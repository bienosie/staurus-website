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
import { MANCHESTER_POSTCODES, BRRR_TARGET_ROI, SITE_URL, portalLink } from '@/lib/site'

const PATH = '/markets/manchester'

export const metadata: Metadata = {
  title: 'Manchester Property Investment | Below Market Value Deals | Staurus Properties',
  description:
    'Where to invest in Manchester: postcode-by-postcode yields for M9, M11, M12, M18 and M40, the regeneration thesis behind Victoria North, Ancoats and Eastlands, and live below-market-value deals from Staurus Properties.',
  keywords: [
    'Manchester property investment',
    'below market value Manchester',
    'Manchester buy to let',
    'M40 property investment',
    'Victoria North regeneration',
    'Ancoats investment',
    'Manchester BRRR',
    'Manchester rental yields',
  ],
  openGraph: {
    title: 'Manchester Property Investment | Staurus Properties',
    description:
      'Postcode-level yields, regeneration intelligence and live below-market-value deals across Manchester.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

interface PostcodeRow {
  code: string
  area: string
  yield: string
  note: string
}

const POSTCODE_DATA: Record<string, Omit<PostcodeRow, 'code'>> = {
  M9: {
    area: 'Harpurhey, Blackley, Charlestown',
    yield: '7.0% – 8.5%',
    note: 'Front line of the £4bn Victoria North / Northern Gateway masterplan — terraced stock at genuine BMV entry points.',
  },
  M11: {
    area: 'Clayton, Openshaw, Beswick',
    yield: '7.5% – 9.0%',
    note: 'Eastlands regeneration corridor around the Etihad Campus and the new Co-op Live arena drives tenant demand.',
  },
  M12: {
    area: 'Ardwick, Longsight, Gorton',
    yield: '7.0% – 8.5%',
    note: 'City-centre fringe with strong student and key-worker rental demand; ideal HMO and BRRR territory.',
  },
  M18: {
    area: 'Gorton, Abbey Hey, Debdale',
    yield: '7.5% – 9.0%',
    note: 'Gorton Hub regeneration and improving transport links lift values in an affordable, high-yield postcode.',
  },
  M40: {
    area: 'Newton Heath, Miles Platting, Moston',
    yield: '7.5% – 9.5%',
    note: 'Some of the highest gross yields in Greater Manchester, anchored by the Victoria North expansion north-east of the city.',
  },
}

const REGEN_AREAS = [
  {
    name: 'Victoria North (Northern Gateway)',
    detail:
      'A £4bn, 15,000-home masterplan transforming Collyhurst, Red Bank and the River Irk valley over the next 15 years — the single largest regeneration programme in the city, sitting directly on the M9 and M40 doorstep.',
  },
  {
    name: 'Ancoats & New Islington',
    detail:
      'Manchester’s most successful neighbourhood regeneration, now extending east. Proven uplift here sets the template for the value migration into M11 and M12.',
  },
  {
    name: 'Eastlands & Etihad Campus',
    detail:
      'The Co-op Live arena, expanded Etihad Campus and surrounding employment land are pulling regeneration and tenant demand through Beswick, Clayton and Openshaw (M11).',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Why invest in Manchester rather than London?',
    answer:
      'Manchester combines lower entry prices with materially higher gross yields — typically 7–9% in the postcodes we source in, against 3–4% in much of London. With the £4bn Victoria North programme and Eastlands regeneration underway, it offers a rare blend of strong cash flow today and capital-growth potential tomorrow.',
  },
  {
    question: 'Which Manchester postcodes do Staurus Properties source in?',
    answer:
      'We focus on M9, M11, M12, M18 and M40 — affordable, high-yield postcodes that sit on or near the city’s flagship regeneration corridors. These are where below-market-value stock and our target returns are most achievable.',
  },
  {
    question: 'What returns can I expect on a Manchester BRRR deal?',
    answer: `Our BRRR (Buy, Refurbish, Refinance, Rent) deals target a ${BRRR_TARGET_ROI} return on invested capital after refinance. Every live deal on our portal shows projected yield, refurbishment costs and the post-works valuation so you can underwrite the numbers yourself.`,
  },
  {
    question: 'Are these deals genuinely below market value?',
    answer:
      'Yes. Each deal is sourced off-market or through motivated-seller channels and data-scored against comparable sold prices before it reaches the portal. We only publish opportunities that clear our BMV and yield thresholds.',
  },
]

export default function ManchesterPage() {
  return (
    <>
      <RealEstateAgentJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Markets', url: `${SITE_URL}/markets` },
          { name: 'Manchester', url: `${SITE_URL}${PATH}` },
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
            Markets · Manchester
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Manchester: the UK&apos;s highest-conviction <span className="text-gold">investment market.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Lower entry prices, 7–9% gross yields and the largest urban regeneration programme in the
            North of England. We source below-market-value deals in the five postcodes where the
            numbers genuinely stack up.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={portalLink('markets-manchester')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              See Live Deals <ArrowRight size={18} />
            </a>
            <Link
              href="/markets/liverpool"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:border-gold text-sm tracking-wide"
            >
              Compare with Liverpool
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
              Why Manchester, and why now
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Yield you can bank',
                body: 'The postcodes we source in deliver 7–9% gross yields — cash flow that covers rising mortgage costs and still leaves room to scale a portfolio.',
              },
              {
                icon: Building2,
                title: 'Generational regeneration',
                body: 'The £4bn Victoria North masterplan and Eastlands expansion are reshaping the exact areas we buy in, supporting both rents and long-term values.',
              },
              {
                icon: MapPin,
                title: 'Disciplined sourcing',
                body: 'We don’t chase the whole city. We concentrate on five high-yield postcodes where below-market-value stock and tenant demand overlap.',
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
              Manchester postcodes. Yields are indicative and vary by deal — live figures are on the
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
                {MANCHESTER_POSTCODES.map((code, i) => {
                  const row = POSTCODE_DATA[code]
                  return (
                    <tr
                      key={code}
                      className={i % 2 === 0 ? 'bg-white' : 'bg-slate-site/60'}
                    >
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
            {MANCHESTER_POSTCODES.map((code) => {
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
              <div
                key={area.name}
                className="border-l-2 border-gold pl-6 py-1"
              >
                <h3 className="font-display text-xl font-bold text-navy mb-3">{area.name}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={FAQ} heading="Manchester Investment FAQs" />

      <CTASection
        title="See live below-market-value deals in Manchester"
        subtitle="Register for the Staurus Properties investor portal to view fully-vetted Manchester opportunities — with projected yields, refurb costings and exit strategies on every deal."
        primaryLabel="See Live Deals"
        campaign="markets-manchester"
      />

      <ComplianceBar />
    </>
  )
}
