import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  try {
    let body: { email?: unknown; first_name?: unknown }
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid_request' }, { status: 400 })
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const firstName =
      typeof body.first_name === 'string' ? body.first_name.trim().slice(0, 120) : null

    if (!email || email.length > 320 || !EMAIL_RE.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Persist to Supabase (defensive — never let a missing table/key break the form)
    if (supabaseUrl && supabaseKey) {
      try {
        const supabase = createClient(supabaseUrl, supabaseKey, {
          auth: { persistSession: false },
        })
        await supabase
          .from('newsletter_subscribers')
          .insert({ email, first_name: firstName, source: 'website' })
      } catch {
        // swallow — subscriber persistence is best-effort
      }
    }

    // Fire-and-forget to Make webhook
    const webhook = process.env.MAKE_NEWSLETTER_WEBHOOK
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, first_name: firstName, source: 'website' }),
        }).catch(() => {})
      } catch {
        // ignore webhook failures
      }
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
