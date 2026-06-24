import type { Metadata } from 'next'
import {
  ClipboardList,
  Phone,
  FileSignature,
  Search,
  FileText,
  Home,
  Scale,
  Hammer,
  KeyRound,
  Building2,
} from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import {
  FEES,
  COMMITMENT_FEE,
  REFURB_PM_FEE,
  BRRR_TARGET_ROI,
  SITE_URL,
} from '@/lib/site'

const PATH = '/how-it-works'

export const metadata: Metadata = {
  title: 'How It Works — The Staurus Investor Journey',
  description:
    'The complete 10-step Staurus Properties investor journey, from first enquiry to ongoing management. Transparent sourcing fees, commitment fee terms and refurbishment project management explained.',
  keywords: [
    'property deal sourcing process',
    'how property sourcing works UK',
    'BRRR investment process',
    'property sourcing fees Manchester',
    'investor onboarding property',
  ],
  openGraph: {
    title: 'How It Works — The Staurus Investor Journey',
    description:
      'From enquiry to ongoing management: the 10-step Staurus Properties investor journey, with full transparency on fees.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

const steps = [
  {
    icon: ClipboardList,
    title: 'Enquiry & Investor Profile',
    body: 'You register your interest and tell us your budget, target returns, preferred strategy and timeline. We use this to understand exactly what kind of deal will move your portfolio forward.',
  },
  {
    icon: Phone,
    title: 'Strategy Call',
    body: 'A one-to-one consultation with our team to pressure-test your goals against current market reality in Manchester and Liverpool, and to agree the strategy — BTL, BRRR, HMO or Social Housing — that fits your capital and risk appetite.',
  },
  {
    icon: FileSignature,
    title: 'Mandate & Commitment Fee',
    body: `We issue a clear sourcing mandate setting out the brief, the applicable fee tier and our obligations to you. A commitment fee of ${COMMITMENT_FEE} (non-refundable, and credited against the sourcing fee at completion) secures your place in our active pipeline.`,
  },
  {
    icon: Search,
    title: 'Deal Sourcing',
    body: 'Our acquisitions team works on- and off-market across our target postcodes to find genuine below-market-value stock. Every potential deal is run through our underwriting model before it ever reaches you.',
  },
  {
    icon: FileText,
    title: 'Deal Pack',
    body: `You receive a full deal pack: purchase price, comparable evidence, projected yields, refurbishment costings and exit strategy. For BRRR deals we target a return on capital of ${BRRR_TARGET_ROI} so your money can be recycled into the next acquisition.`,
  },
  {
    icon: Home,
    title: 'Viewing & Offer',
    body: 'We arrange viewings (in person or via video walkthrough for international investors) and, once you are satisfied, negotiate and submit the offer on your behalf to secure the property at the agreed figure.',
  },
  {
    icon: Scale,
    title: 'Legals & Conveyancing',
    body: 'We introduce trusted investor-focused solicitors and coordinate searches, surveys and enquiries, keeping the transaction moving and keeping you updated at every milestone through to exchange.',
  },
  {
    icon: Hammer,
    title: 'Refurbishment (BRRR)',
    body: `Where the strategy involves works, we manage the full refurbishment — vetted trades, schedule of works, budget control and progress reporting. Our project-management fee is ${REFURB_PM_FEE}.`,
  },
  {
    icon: KeyRound,
    title: 'Completion',
    body: 'On completion the property is yours. The sourcing fee becomes due (less the commitment fee already credited), and we hand over all documentation, warranties and compliance certificates.',
  },
  {
    icon: Building2,
    title: 'Ongoing Management',
    body: 'The relationship does not end at completion. We support refinance, tenant placement and ongoing management so your asset performs — and we are ready with the next opportunity when you are.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'How It Works', url: `${SITE_URL}${PATH}` },
        ]}
      />

      <section className="bg-hero-gradient">
        <div className="max-w-site mx-auto px-6 lg:px-10 py-22 text-center">
          <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            The Investor Journey
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            How It Works
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A transparent, ten-step process that takes you from first enquiry to a
            performing asset — with vetted deals, fixed fees and full support at
            every stage.
          </p>
        </div>
      </section>

      <section className="bg-slate-site py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <ol className="space-y-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <li
                  key={step.title}
                  className="group bg-white border border-slate-100 rounded-sm-md p-6 md:p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover flex gap-5"
                >
                  <div className="shrink-0 flex flex-col items-center">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-gold font-display font-bold text-lg">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} className="text-gold" />
                      <h2 className="font-display text-xl font-bold text-navy">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{step.body}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">
              Transparent Pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Our Sourcing Fees
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto leading-relaxed">
              One clear fee per deal, banded by purchase price. No hidden costs, no
              surprises at completion.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm-md border border-slate-200 shadow-card">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 font-display text-sm tracking-wide">Tier</th>
                  <th className="px-6 py-4 font-display text-sm tracking-wide">
                    Purchase Price
                  </th>
                  <th className="px-6 py-4 font-display text-sm tracking-wide text-right">
                    Sourcing Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEES.map((fee, i) => (
                  <tr
                    key={fee.tier}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-slate-site'}
                  >
                    <td className="px-6 py-4 font-semibold text-navy">{fee.tier}</td>
                    <td className="px-6 py-4 text-slate-600">{fee.range}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gold-dark">
                      {fee.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            <div className="bg-slate-site border-l-4 border-gold rounded-sm-md p-5">
              <h3 className="font-display font-bold text-navy mb-1.5">
                Commitment Fee
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A {COMMITMENT_FEE} commitment fee applies to all tiers. It is
                non-refundable but is fully credited against your sourcing fee at
                completion.
              </p>
            </div>
            <div className="bg-slate-site border-l-4 border-gold rounded-sm-md p-5">
              <h3 className="font-display font-bold text-navy mb-1.5">
                Refurbishment Management
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For BRRR and refurbishment projects we charge a project-management
                fee of {REFURB_PM_FEE}, covering trades, scheduling and budget
                control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection campaign="how-it-works" />
      <ComplianceBar />
    </>
  )
}
