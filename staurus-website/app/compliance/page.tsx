import type { Metadata } from 'next'
import { Shield, Lock, FileCheck, Users, Landmark, BadgeCheck } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { COMPLIANCE, SITE_URL } from '@/lib/site'

const PATH = '/compliance'

export const metadata: Metadata = {
  title: 'Compliance & Regulation',
  description:
    'Staurus Properties is a fully registered and regulated UK property sourcing company. View our ICO, HMRC anti-money-laundering, Property Redress Scheme, NRLA and Companies House registrations, and what each one means for investor protection.',
  keywords: [
    'property sourcing compliance UK',
    'ICO registered property company',
    'AML registered property sourcing',
    'Property Redress Scheme PRS',
    'regulated property deal sourcing',
  ],
  openGraph: {
    title: 'Compliance & Regulation',
    description:
      'Every registration that protects you as an investor — ICO, HMRC AML, PRS, NRLA and Companies House.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

const registrations = [
  {
    icon: Lock,
    label: 'ICO Registration',
    value: COMPLIANCE.ico,
    name: "Information Commissioner's Office",
    desc: 'We are registered with the ICO as a data controller under UK data protection law. This means your personal information is handled lawfully, stored securely and only used for the purposes you have agreed to.',
  },
  {
    icon: Shield,
    label: 'Anti-Money-Laundering Registration',
    value: COMPLIANCE.aml,
    name: 'HMRC Supervised',
    desc: 'We are supervised by HMRC for anti-money-laundering (AML). We carry out identity and source-of-funds checks on every client, protecting you and the integrity of every transaction we facilitate.',
  },
  {
    icon: FileCheck,
    label: 'Property Redress Scheme',
    value: COMPLIANCE.prs,
    name: 'PRS Member',
    desc: 'Membership of the Property Redress Scheme gives you access to an independent, free route to resolve any complaint. It is a legal requirement for property professionals and a clear sign of accountability.',
  },
  {
    icon: Users,
    label: 'NRLA Membership',
    value: COMPLIANCE.nrla,
    name: 'National Residential Landlords Association',
    desc: 'As NRLA members we stay current with landlord legislation, lettings standards and best practice — so the deals and management we deliver are built on up-to-date, compliant foundations.',
  },
  {
    icon: Landmark,
    label: 'Companies House',
    value: COMPLIANCE.companyNo,
    name: 'Registered in England & Wales',
    desc: 'Staurus Properties Limited is a registered UK limited company. Our filings are public, our structure is transparent, and you can verify us at any time on the Companies House register.',
  },
]

export default function CompliancePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Compliance', url: `${SITE_URL}${PATH}` },
        ]}
      />

      <section className="bg-hero-gradient">
        <div className="max-w-site mx-auto px-6 lg:px-10 py-22 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BadgeCheck size={18} className="text-gold" />
            <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold">
              Regulated & Accountable
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Compliance & Regulation
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Property sourcing should never be a leap of faith. We hold every
            registration a credible UK property company should — and we are happy for
            you to check each one.
          </p>
        </div>
      </section>

      <section className="bg-slate-site py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-5">
          {registrations.map((reg) => {
            const Icon = reg.icon
            return (
              <div
                key={reg.label}
                className="bg-white border border-slate-100 rounded-sm-md p-6 md:p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover flex gap-5"
              >
                <div className="shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-navy text-gold">
                    <Icon size={22} />
                  </span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                    <h2 className="font-display text-xl font-bold text-navy">
                      {reg.label}
                    </h2>
                    <span className="font-mono text-sm font-bold text-gold-dark bg-gold-pale px-2.5 py-0.5 rounded-sm-md">
                      {reg.value}
                    </span>
                  </div>
                  <p className="text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                    {reg.name}
                  </p>
                  <p className="text-slate-600 leading-relaxed">{reg.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection
        campaign="compliance"
        title="Invest with a company you can verify"
        subtitle="Every Staurus deal is sourced and managed under these regulatory obligations. Explore our live, fully-vetted opportunities in the investor portal."
      />
      <ComplianceBar />
    </>
  )
}
