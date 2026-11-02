// Validates a quote request and emails it to the company through Resend.
const json = (body, status) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const clean = (value, max) => String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, max);

export async function handleQuote(request, { key, to, from }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'The request could not be read.' }, 400);
  }
  if (!data || typeof data !== 'object') return json({ error: 'The request could not be read.' }, 400);

  // Bots fill the hidden field. Report success so they don't retry.
  if (clean(data.company, 200)) return json({ ok: true }, 200);

  const name = clean(data.name, 120);
  const phone = clean(data.phone, 30);
  const email = clean(data.email, 200);
  const town = clean(data.town, 120);
  const type = clean(data.type, 120);
  const message = String(data.message ?? '').trim().slice(0, 4000);

  if (!name) return json({ error: 'Enter your name so we know who to ask for.' }, 400);
  if (phone.replace(/\D/g, '').length < 10) return json({ error: 'Enter a 10-digit phone number so we can reach you.' }, 400);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: 'Check the email address, or leave it blank.' }, 400);

  if (!key || !to || !from) {
    console.error('Quote form is not configured: missing email environment variables.');
    return json({ error: 'not_configured' }, 503);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((x) => x.trim()),
      subject: `Quote request: ${type || 'Website'} from ${name}`,
      ...(email ? { reply_to: email } : {}),
      text: [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email || 'not given'}`, `Town: ${town || 'not given'}`, `Needs: ${type || 'not given'}`, '', message || '(no message)'].join('\n'),
    }),
  }).catch((err) => {
    console.error('Quote email request failed:', err);
    return null;
  });

  if (!res || !res.ok) {
    if (res) console.error('Resend rejected the quote email:', res.status, await res.text());
    return json({ error: 'send_failed' }, 502);
  }
  return json({ ok: true }, 200);
}
