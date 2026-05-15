const { Resend } = require('resend');

const ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
const escapeHtml = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESCAPE[c]);
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s || '').trim());
const clamp = (s, n) => (String(s || '').slice(0, n));

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  // Honeypot: bots fill hidden "website" field. Pretend success.
  if (body.website) return res.status(200).json({ ok: true });

  const name         = clamp(body.name, 200).trim();
  const email        = clamp(body.email, 200).trim();
  const company      = clamp(body.company, 200).trim();
  const inquiry_type = clamp(body.inquiry_type, 100).trim() || 'Other';
  const message      = clamp(body.message, 5000).trim();

  if (!name)            return res.status(400).json({ ok: false, error: 'Name is required.' });
  if (!isEmail(email))  return res.status(400).json({ ok: false, error: 'A valid email is required.' });
  if (message.length < 2) return res.status(400).json({ ok: false, error: 'Message is required.' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('contact: RESEND_API_KEY not set');
    return res.status(500).json({ ok: false, error: 'Email service not configured.' });
  }

  const to    = process.env.CONTACT_TO   || 'jin@seerstone.vip';
  const from  = process.env.RESEND_FROM  || 'SeerStone Contact <onboarding@resend.dev>';

  const tag = `[${inquiry_type}]`;
  const subject = `${tag} ${name}${company ? ' · ' + company : ''}`;

  const lines = [
    `From:    ${name} <${email}>`,
    company ? `Company: ${company}` : null,
    `Type:    ${inquiry_type}`,
    '',
    message,
    '',
    '---',
    'Sent from the seerstone.vip contact form.',
  ].filter(Boolean);
  const text = lines.join('\n');

  const html =
    `<div style="font-family:Inter,system-ui,sans-serif;color:#0A152D;line-height:1.55;">` +
      `<table style="border-collapse:collapse;font-size:14px;">` +
        `<tr><td style="padding:2px 12px 2px 0;color:#64748B;">From</td><td>${escapeHtml(name)} &lt;<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>&gt;</td></tr>` +
        (company ? `<tr><td style="padding:2px 12px 2px 0;color:#64748B;">Company</td><td>${escapeHtml(company)}</td></tr>` : '') +
        `<tr><td style="padding:2px 12px 2px 0;color:#64748B;">Type</td><td>${escapeHtml(inquiry_type)}</td></tr>` +
      `</table>` +
      `<hr style="border:0;border-top:1px solid #E5E7EB;margin:16px 0;"/>` +
      `<div style="white-space:pre-wrap;">${escapeHtml(message)}</div>` +
      `<hr style="border:0;border-top:1px solid #E5E7EB;margin:16px 0;"/>` +
      `<div style="color:#64748B;font-size:12px;">Sent from the seerstone.vip contact form.</div>` +
    `</div>`;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
      html,
    });
    if (result && result.error) {
      console.error('contact: Resend error', result.error);
      return res.status(502).json({ ok: false, error: 'Mail provider rejected the message.' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact: unexpected', err);
    return res.status(500).json({ ok: false, error: 'Unexpected error sending message.' });
  }
};
