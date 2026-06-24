// Single source of truth for Staurus Properties brand/contact/compliance data.
// Import these named exports — never re-hardcode these values elsewhere.

export const CONTACT = {
  phone: '+44 161 327 4269',
  phoneHref: 'tel:+441613274269',
  whatsapp: '+44 7405 807069',
  whatsappHref: 'https://wa.me/447405807069',
  email: 'info@staurusproperties.com',
  emailHref: 'mailto:info@staurusproperties.com',
  office: 'Bartle House, Oxford Court, Manchester, M2 3WQ',
} as const

export const DIRECTOR = {
  name: 'Stephen Igweh',
  title: 'Director',
} as const

export const PORTAL_URL = 'https://deals.staurusproperties.com'

export const portalLink = (campaign: string): string =>
  `${PORTAL_URL}?utm_source=marketing&utm_medium=web&utm_campaign=${campaign}`

export const COMPLIANCE = {
  ico: 'ZZB652416',
  aml: 'XCML00000198864',
  prs: 'PRS044023',
  nrla: '3149653',
  companyNo: '14512333',
} as const

export interface FeeTier {
  tier: string
  range: string
  fee: string
}

export const FEES: FeeTier[] = [
  { tier: 'Tier 1', range: 'Up to £150,000', fee: '£6,500' },
  { tier: 'Tier 2', range: '£150,000 – £300,000', fee: '£8,500' },
  { tier: 'Tier 3', range: '£300,000 – £500,000', fee: '£10,000' },
  { tier: 'Tier 4', range: 'Over £500,000', fee: '2.5% of purchase price' },
]

export const COMMITMENT_FEE = '£2,500' // non-refundable, credited at completion (all tiers)
export const REFURB_PM_FEE = '20% of works cost'
export const BRRR_TARGET_ROI = '13%+'

export const MANCHESTER_POSTCODES = ['M9', 'M11', 'M12', 'M18', 'M40'] as const
export const LIVERPOOL_POSTCODES = ['L1', 'L3', 'L6', 'L7', 'L8'] as const

export const SPV_PACKAGES = ['Essential', 'Investor', 'Elite'] as const

export const SITE_URL = 'https://staurusproperties.com'
