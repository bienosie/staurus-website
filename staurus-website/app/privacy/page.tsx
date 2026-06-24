import type { Metadata } from 'next'
import { CTASection } from '@/components/sections/CTASection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd'
import { CONTACT, COMPLIANCE, SITE_URL } from '@/lib/site'

const PATH = '/privacy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Staurus Properties Limited collects, uses, stores and protects your personal data under UK GDPR and the Data Protection Act 2018, including lawful bases, retention periods and your data subject rights.',
  keywords: [
    'Staurus Properties privacy policy',
    'property company GDPR',
    'data protection property sourcing',
    'UK GDPR privacy notice',
  ],
  openGraph: {
    title: 'Privacy Policy',
    description:
      'How Staurus Properties Limited handles your personal data under UK GDPR and the Data Protection Act 2018.',
    images: ['/images/og-image.png'],
    url: `${SITE_URL}${PATH}`,
  },
  alternates: { canonical: `${SITE_URL}${PATH}` },
}

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Privacy Policy', url: `${SITE_URL}${PATH}` },
        ]}
      />

      <section className="bg-hero-gradient">
        <div className="max-w-site mx-auto px-6 lg:px-10 py-22 text-center">
          <p className="text-2xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Your Data, Protected
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-5 text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Last updated 24 June 2026. This policy explains how we handle your
            personal data in line with UK GDPR and the Data Protection Act 2018.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <article className="space-y-10 text-slate-700 leading-relaxed">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                1. Who we are
              </h2>
              <p>
                This website is operated by Staurus Properties Limited
                (&ldquo;Staurus&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a
                company registered in England and Wales under company number{' '}
                <strong>{COMPLIANCE.companyNo}</strong>, with its registered office
                at {CONTACT.office}. We are the data controller responsible for your
                personal data and are registered with the Information
                Commissioner&rsquo;s Office (ICO) under registration number{' '}
                <strong>{COMPLIANCE.ico}</strong>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                2. The data we collect
              </h2>
              <p>Depending on how you interact with us, we may collect:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li>
                  Identity and contact data — your name, email address, telephone
                  number and postal address.
                </li>
                <li>
                  Investor profile data — your budget, target returns, preferred
                  strategy and investment goals.
                </li>
                <li>
                  Verification data — identity documents and source-of-funds
                  evidence, where required for anti-money-laundering checks.
                </li>
                <li>
                  Technical data — IP address, browser type and usage data collected
                  through cookies and analytics.
                </li>
                <li>
                  Communications — the content of messages you send us via our forms,
                  email, telephone or WhatsApp.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                3. Our lawful bases for processing
              </h2>
              <p>
                We only process your personal data where the law allows us to. We
                rely on the following lawful bases:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li>
                  <strong>Consent</strong> — where you have actively opted in, for
                  example to receive deal alerts or marketing.
                </li>
                <li>
                  <strong>Contract</strong> — where processing is necessary to
                  provide our sourcing and management services to you.
                </li>
                <li>
                  <strong>Legal obligation</strong> — to meet our anti-money-laundering,
                  tax and other statutory duties.
                </li>
                <li>
                  <strong>Legitimate interests</strong> — to operate, secure and
                  improve our business, where your rights do not override those
                  interests.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                4. How we use your data
              </h2>
              <p>
                We use your data to respond to enquiries, deliver sourcing and
                refurbishment services, carry out due diligence and AML checks, send
                you relevant opportunities where you have consented, comply with our
                legal obligations and protect against fraud.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                5. Sharing your data
              </h2>
              <p>
                We never sell your personal data. We may share it with carefully
                selected partners strictly where needed to deliver our service —
                including solicitors and conveyancers, our SPV formation partner Mint
                Formations, vetted contractors, and our IT and analytics providers.
                We may also disclose data where required by law or a regulator.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                6. Data retention
              </h2>
              <p>
                We keep personal data only for as long as necessary. Enquiry data is
                generally retained for up to 24 months from your last contact. Where
                we enter into a contract or complete a transaction, records —
                including AML documentation — are retained for a minimum of five years
                after the end of the business relationship, as required by law, after
                which they are securely deleted or anonymised.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                7. Data security
              </h2>
              <p>
                We use appropriate technical and organisational measures to protect
                your data against unauthorised access, loss or misuse, including
                access controls, encryption in transit and restricted handling of
                verification documents.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                8. Your rights
              </h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li>access the personal data we hold about you;</li>
                <li>request correction of inaccurate or incomplete data;</li>
                <li>request erasure of your data in certain circumstances;</li>
                <li>restrict or object to our processing of your data;</li>
                <li>request portability of the data you provided to us;</li>
                <li>withdraw consent at any time, where we rely on consent.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a
                  href={CONTACT.emailHref}
                  className="text-gold-dark font-semibold hover:underline"
                >
                  {CONTACT.email}
                </a>
                . You also have the right to lodge a complaint with the ICO at{' '}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-dark font-semibold hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                9. Cookies
              </h2>
              <p>
                Our website uses cookies to enable core functionality and to
                understand how visitors use the site so we can improve it. You can
                control or disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-3">
                10. Contact us
              </h2>
              <p>
                For any questions about this policy or how we handle your data, please
                contact:
              </p>
              <p className="mt-3">
                <strong>Staurus Properties Limited</strong>
                <br />
                {CONTACT.office}
                <br />
                Email:{' '}
                <a
                  href={CONTACT.emailHref}
                  className="text-gold-dark font-semibold hover:underline"
                >
                  {CONTACT.email}
                </a>
                <br />
                Telephone:{' '}
                <a
                  href={CONTACT.phoneHref}
                  className="text-gold-dark font-semibold hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>

      <CTASection campaign="privacy" />
      <ComplianceBar />
    </>
  )
}
