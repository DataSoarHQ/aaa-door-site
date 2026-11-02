import type { APIRoute } from 'astro';
import { business as b, commercial, faqs, nav, residential, team, towns } from '../data/site';

// A plain-text summary of the business for AI assistants and text-only readers.
const list = (items: string[]) => items.map((item) => `- ${item}`).join('\n');

export const GET: APIRoute = () => {
  const body = `# ${b.legalName}

> Family-owned garage door and commercial door company in ${b.city}, ${b.region}, serving Southeast Texas and Southwest Louisiana since ${b.since}. Repairs, new doors and 24/7 emergency service.

## Contact

- Phone: ${b.phoneDisplay}
- Address: ${b.street}, ${b.city}, ${b.region} ${b.zip}
- Website: ${b.url}/
- Free quotes: ${b.url}/contact-us/

## Hours

Monday to Friday, 7:00 AM to 5:00 PM. Closed weekends and major holidays. Emergency service available 24/7.

## Residential services

${list(residential.map((s) => `${s.name}: ${s.text}`))}

## Commercial services

${list(commercial.map((s) => `${s.name}: ${s.text}`))}

## Service areas

Texas: ${towns.TX.join(', ')}
Louisiana: ${towns.LA.join(', ')}

## Team

${list(team.map((t) => `${t.name}, ${t.role}`))}

## Pages

${list(nav.map((n) => `[${n.label}](${b.url}${n.href})`))}

## Common questions

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
