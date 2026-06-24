import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: Request) {
  try {
    let body: { name?: unknown; email?: unknown; phone?: unknown; message?: unknown }
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ ok: false, error: 'invalid_request' }, { status: 400 })
    }

    const name = typeof body.name === 'string' ? body.name.trim().slice(0, 200) : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const phone = typeof body.phone === 'string' ? body.phone.trim().slice(0, 60) : ''
    const message = typeof body.message === 'string' ? body.message.trim().slice(0, 5000) : ''

    if (!name || !message || !email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ ok: false, error: 'invalid_input' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL

    // Degrade gracefully when email is not configured (200 so the form shows a soft message)
    if (!apiKey || !fromEmail) {
      return NextResponse.json({ ok: false, error: 'email_not_configured' }, { status: 200 })
    }

    const html = `
      <h2>New website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
    `.trim()

    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: 'info@staurusproperties.com',
          reply_to: email,
          subject: 'New website enquiry',
          html,
        }),
      })

      if (!res.ok) {
        return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
      }
    } catch {
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'server_error' }, { status: 500 })
  }
}
