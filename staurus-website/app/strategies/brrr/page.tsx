import type { Metadata } from 'next'
import { ArrowRight, RefreshCw, Hammer, Banknote, Home, Repeat } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { FaqSection } from '@/components/sections/FaqSection'
import { BreadcrumbJsonLd, FaqPageJsonLd } from '@/components/seo/JsonLd'
import { SITE_URL, portalLink, BRRR_TARGET_ROI, REFURB_PM_FEE } from '@/lib/site'

const PATH = '/strategies/brrr'

export const metadata: Metadata = {
  title: 'BRRR Property Investment | Buy, Refurbish, Refinance, Rent | Staurus Properties',
  description:
    'BRRR strategy in Manchester and Liverpool — buy below market value, refurbish, refinance to recycle your capital, then rent. Target 13%+ ROI with our managed refurb service.',
  keywords: [
    'BRRR strategy UK',
    'buy refurbish refinance rent',
    'BRRR Manchester',
    'BRRR Liverpool',
    'capital recycling property',
    'below market value refurbishment',
  ],
  openGraph: {
    title: 'BRRR Property Investment | Staurus Properties',
    description:
      'Buy, refurbish, refinance and rent to recycle your capital and target 13%+ ROI across Manchester and Liverpool.',
    images: ['/images/og-image.png'],
    url: SITE_URL + PATH,
  },
  alternates: { canonical: SITE_URL + PATH },
}

const FAQS = [
  {
    question: 'What does BRRR actually mean?',
    answer:
      'BRRR stands for Buy, Refurbish, Refinance, Rent. You buy a property below market value (ideally one needing work), refurbish it to add value, refinance against the new higher valuation to pull most of your original capital back out, then rent it to a tenant. Because you recycle your capital, you can repeat the process on the next deal — hence the final R that many investors add: Repeat.',
  },
  {
    question: 'What ROI does Staurus target on a BRRR deal?',
    answer: `We target ${BRRR_TARGET_ROI} return on the capital that remains invested after refinance. When a BRRR is executed well and a large share of the original outlay is recovered, the return on the small amount left in the deal can be very high. Every BRRR opportunity on our portal carries its own projected figures — capital at risk, returns are never guaranteed.`,
  },
  {
    question: 'How does the refurbishment management service work?',
    answer: `We manage the refurb end to end — scoping the works, appointing and supervising trusted local trades in Manchester and Liverpool, and keeping the project on budget and on time. Our refurb project-management fee is ${REFURB_PM_FEE}, charged on the cost of works, so our incentive is aligned with delivering the uplift the deal needs.`,
  },
  {
    question: 'How much of my capital can I expect to get back?',
    answer:
      'It depends on how much value the refurbishment adds and the refinance loan-to-value your lender offers. The goal of a good BRRR is to add enough value that the post-works valuation lets you refinance and recover most — sometimes nearly all — of your purchase and refurb costs. We model this conservatively on every deal before you commit.',
  },
  {
    question: 'How long does a typical BRRR cycle take?',
    answer:
      'A full cycle — purchase, refurbishment, the six-month seasoning period most lenders require before refinance, and re-mortgage — typically runs around 6 to 9 months. We keep you updated at each stage and handle the on-the-ground coordination so the timeline stays tight.',
  },
  {
    question: 'Is BRRR riskier than a standard buy-to-let?',
    answer:
      'BRRR carries more moving parts — refurbishment cost, valuation and refinance risk — so it suits investors comfortable with an active strategy. We de-risk it by sourcing the right stock below market value, managing the works ourselves and modelling the refinance conservatively. As with all property investment, your capital is at risk.',
  },
]

const cycle = [
  { icon: Banknote, title: 'Buy', body: 'Acquire below market value — usually a property needing work that others overlook.' },
  { icon: Hammer, title: 'Refurbish', body: 'We manage the works to add real, valuation-driving value to the property.' },
  { icon: RefreshCw, title: 'Refinance', body: 'Re-mortgage against the higher post-works value to pull most of your capital back out.' },
  { icon: Home, title: 'Rent', body: 'Place a tenant for ongoing cash flow on a property you now own with little left in.' },
  { icon: Repeat, title: 'Repeat', body: 'Redeploy the recycled capital into the next BRRR deal and compound your portfolio.' },
]

export default function BrrrPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Strategies', url: SITE_URL + '/strategies' },
          { name: 'BRRR', url: SITE_URL + PATH },
        ]}
      />
      <FaqPageJsonLd items={FAQS.map((f) => ({ q: f.question, a: f.answer }))} />

      {/* Hero */}
      <section className="bg-hero-gradient pt-28 pb-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <p className="text-2xs font-semibold uppercase tracking-widest text-gold mb-4">
            Investment Strategy
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            BRRR: recycle your capital, compound your portfolio
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            Buy below market value, refurbish to add value, refinance to pull your money back out,
            then rent. Do it again. We source the stock and manage the works across Manchester and
            Liverpool — targeting <span className="text-gold font-semibold">{BRRR_TARGET_ROI} ROI</span> on
            the capital left in.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href={portalLink('brrr')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold px-8 py-4 rounded-sm-md transition-all duration-200 hover:bg-gold-light hover:shadow-gold active:scale-[0.98] text-sm tracking-wide"
            >
              See Live Deals
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* The cycle */}
      <section className="bg-white py-20">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center">
            The capital-recycling cycle
          </h2>
          <p className="mt-4 text-slate-600 text-center max-w-2xl mx-auto">
            Each turn of the cycle releases capital to fund the next deal — the engine behind portfolio growth.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {cycle.map((c, i) => (
              <div key={c.title} className="bg-slate-site border border-slate-100 rounded-sm-md p-6 shadow-card text-center">
                <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-sm-md bg-navy text-gold mb-4">
                  <c.icon size={22} />
                </div>
                <p className="text-2xs font-semibold uppercase tracking-widest text-gold mb-1">Step {i + 1}</p>
                <h3 className="font-semibold text-navy text-lg mb-2">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section className="bg-slate-site py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            A worked BRRR example
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Illustrative figures for a typical North West terraced deal. Estimates only — your numbers
            will differ. Capital at risk.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
              <h3 className="font-semibold text-navy text-lg mb-5">Money in</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Purchase price (BMV)', '£110,000'],
                  ['Refurbishment works', '£25,000'],
                  ['Buying & legal costs', '£8,000'],
                  ['Total cash deployed', '£143,000'],
                ].map(([k, v], i, arr) => (
                  <div key={k} className={`flex justify-between ${i === arr.length - 1 ? 'border-t border-slate-100 pt-3 font-bold text-navy' : 'text-slate-600'}`}>
                    <dt>{k}</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
              <h3 className="font-semibold text-navy text-lg mb-5">Money out (refinance &amp; rent)</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Post-works valuation', '£170,000'],
                  ['Refinance at 75% LTV', '£127,500'],
                  ['Capital recycled out', '£127,500'],
                  ['Capital left in deal', '£15,500'],
                ].map(([k, v], i, arr) => (
                  <div key={k} className={`flex justify-between ${i === arr.length - 1 ? 'border-t border-slate-100 pt-3 font-bold text-navy' : 'text-slate-600'}`}>
                    <dt>{k}</dt>
                    <dd className="font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-2xs text-slate-400 leading-relaxed">
                On ~£15,500 left in producing a healthy annual net rent, the return on remaining
                capital comfortably exceeds our {BRRR_TARGET_ROI} target — while you retain a
                cash-flowing asset.
              </p>
            </div>
          </div>

          {/* Capital left-in vs recycled illustration */}
          <div className="mt-8 bg-white border border-slate-100 rounded-sm-md p-7 shadow-card">
            <h3 className="font-semibold text-navy text-lg mb-4">Capital recycled vs left in</h3>
            <div className="flex h-12 w-full overflow-hidden rounded-sm-md">
              <div
                className="flex items-center justify-center bg-gold text-navy text-xs font-bold"
                style={{ width: '89%' }}
              >
                Recycled out · 89%
              </div>
              <div
                className="flex items-center justify-center bg-navy text-white text-xs font-bold"
                style={{ width: '11%' }}
              >
                11%
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2 text-slate-600">
                <span className="inline-block w-3 h-3 rounded-sm bg-gold" /> Capital pulled back out (£127,500)
              </span>
              <span className="flex items-center gap-2 text-slate-600">
                <span className="inline-block w-3 h-3 rounded-sm bg-navy" /> Capital left in the deal (£15,500)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Refurb PM service */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="bg-navy rounded-sm-md p-8 md:p-12 shadow-card">
            <Hammer size={28} className="text-gold mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Managed refurbishment, end to end
            </h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl">
              The refurbishment is where BRRR value is created — and where projects go wrong without
              the right people on the ground. We scope the works, appoint and supervise trusted local
              trades, and hold the project to budget and timeline. Our refurb project-management fee
              is <span className="text-gold font-semibold">{REFURB_PM_FEE}</span>, so we only do well
              when your refurb delivers the uplift the deal depends on.
            </p>
          </div>
        </div>
      </section>

      <FaqSection items={FAQS} heading="BRRR FAQs" />

      <CTASection campaign="brrr" />
      <ComplianceBar />
    </>
  )
}
