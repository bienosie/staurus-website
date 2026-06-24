import { HeroSection } from '@/components/sections/HeroSection'
import { LiveStatsBar } from '@/components/sections/LiveStatsBar'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { LagosSummitSection } from '@/components/sections/LagosSummitSection'
import { StrategiesSection } from '@/components/sections/StrategiesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { ComplianceBar } from '@/components/sections/ComplianceBar'
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Below Market Value UK Property Investment | Staurus Properties',
  description: 'Live, data-scored below-market-value property deals in Manchester and Liverpool. BTL, BRRR, HMO and Social Housing strategies for UK and international investors. Register free today.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveStatsBar />
      <ProblemSection />
      <StrategiesSection />
      <LagosSummitSection />
      <HowItWorksSection />
      <ComplianceBar />
      <BlogPreviewSection />
      <NewsletterSection />
    </>
  )
}
