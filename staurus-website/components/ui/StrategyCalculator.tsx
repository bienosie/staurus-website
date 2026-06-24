'use client'

import { useState, useMemo } from 'react'

const GBP = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'GBP',
  maximumFractionDigits: 0,
})

interface FieldProps {
  label: string
  suffix?: string
  prefix?: string
  value: number
  onChange: (n: number) => void
  step?: number
  min?: number
}

function Field({ label, suffix, prefix, value, onChange, step = 1, min = 0 }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-2xs font-semibold uppercase tracking-widest text-slate-400 mb-1.5">
        {label}
      </span>
      <div className="flex items-center bg-white border border-slate-200 rounded-sm-md focus-within:border-gold transition-colors">
        {prefix && <span className="pl-3 text-slate-400 text-sm">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent px-3 py-2.5 text-navy font-semibold outline-none"
        />
        {suffix && <span className="pr-3 text-slate-400 text-sm">{suffix}</span>}
      </div>
    </label>
  )
}

interface StatProps {
  label: string
  value: string
  highlight?: boolean
}

function Stat({ label, value, highlight }: StatProps) {
  return (
    <div
      className={`rounded-sm-md p-4 text-center ${
        highlight ? 'bg-gold text-navy' : 'bg-navy-light text-white'
      }`}
    >
      <p
        className={`text-2xs uppercase tracking-widest mb-1 ${
          highlight ? 'text-navy/70' : 'text-slate-300'
        }`}
      >
        {label}
      </p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}

export function StrategyCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(150000)
  const [monthlyRent, setMonthlyRent] = useState(950)
  const [annualCosts, setAnnualCosts] = useState(2400)
  const [depositPct, setDepositPct] = useState(25)

  const results = useMemo(() => {
    const annualRent = monthlyRent * 12
    const deposit = purchasePrice * (depositPct / 100)
    const mortgage = purchasePrice - deposit
    // Buying costs estimate: 5% (stamp duty, legal, sourcing) on top of deposit.
    const buyingCosts = purchasePrice * 0.05
    const cashInvested = deposit + buyingCosts
    // Interest-only mortgage estimate at 5.5% to derive a net figure.
    const mortgageInterest = mortgage * 0.055
    const netAnnual = annualRent - annualCosts - mortgageInterest

    const grossYield = purchasePrice > 0 ? (annualRent / purchasePrice) * 100 : 0
    const netYield = purchasePrice > 0 ? ((annualRent - annualCosts) / purchasePrice) * 100 : 0
    const roiOnCash = cashInvested > 0 ? (netAnnual / cashInvested) * 100 : 0

    return {
      grossYield,
      netYield,
      annualCashFlow: netAnnual,
      roiOnCash,
      cashInvested,
    }
  }, [purchasePrice, monthlyRent, annualCosts, depositPct])

  return (
    <div className="bg-slate-site border border-slate-100 rounded-sm-md p-6 md:p-8 shadow-card">
      <h3 className="font-display text-2xl font-bold text-navy mb-1">Buy-to-Let Yield Calculator</h3>
      <p className="text-sm text-slate-500 mb-6">
        Adjust the figures to model gross yield, net yield and return on cash invested. Estimates
        only — not financial advice.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-7">
        <Field
          label="Purchase Price"
          prefix="£"
          value={purchasePrice}
          onChange={setPurchasePrice}
          step={1000}
        />
        <Field
          label="Monthly Rent"
          prefix="£"
          value={monthlyRent}
          onChange={setMonthlyRent}
          step={25}
        />
        <Field
          label="Annual Costs"
          prefix="£"
          value={annualCosts}
          onChange={setAnnualCosts}
          step={100}
        />
        <Field
          label="Deposit"
          suffix="%"
          value={depositPct}
          onChange={setDepositPct}
          step={1}
          min={0}
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Stat label="Gross Yield" value={`${results.grossYield.toFixed(1)}%`} />
        <Stat label="Net Yield" value={`${results.netYield.toFixed(1)}%`} />
        <Stat label="Annual Cash Flow" value={GBP.format(Math.round(results.annualCashFlow))} />
        <Stat label="ROI on Cash" value={`${results.roiOnCash.toFixed(1)}%`} highlight />
      </div>

      <p className="text-2xs text-slate-400 mt-4">
        Assumes ~5% buying costs and an interest-only mortgage at 5.5%. Cash invested:{' '}
        {GBP.format(Math.round(results.cashInvested))}.
      </p>
    </div>
  )
}

export default StrategyCalculator
