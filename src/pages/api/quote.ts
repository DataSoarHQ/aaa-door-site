import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { handleQuote } from '../../lib/quote.js';

export const prerender = false;

export const POST: APIRoute = ({ request }) =>
  handleQuote(request, {
    key: getSecret('RESEND_API_KEY'),
    to: getSecret('QUOTE_TO_EMAIL'),
    from: getSecret('QUOTE_FROM_EMAIL'),
  });
