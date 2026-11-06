# AAA Door website

Marketing site for AAA Door LLC (Orange, TX). Static [Astro](https://astro.build) site with one Vercel function for the quote form.

```sh
npm install
npm run dev     # local site
npm test        # quote form endpoint tests
npm run build   # output in dist/
```

## Editing content

Business facts, services, team, reviews and FAQs are in `src/data/site.ts`. Each service area and its page text is in `src/data/areas.ts`, and adding an entry there creates the page. Photos are listed in `src/data/photos.ts`.

## SEO and metadata

Page titles and descriptions are set on each page's `<Base>` tag. `src/layouts/Base.astro` adds the shared tags and structured data from `src/data/site.ts`. The sitemap and `/llms.txt` (a plain-text summary of the business) are generated at build time, so they follow the same data.

## Quote form

`src/pages/api/quote.ts` emails requests to the company through [Resend](https://resend.com). It runs under `npm run dev` and on Vercel. Until all three settings below exist, the form tells visitors their request wasn't sent and asks them to call.

For local use, copy `.env.example` to `.env`. In production, add the same three values in the Vercel project's environment variables.

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `QUOTE_TO_EMAIL` | Company inbox that receives requests (comma-separated for several) |
| `QUOTE_FROM_EMAIL` | `forms@datasoar.io`. The code adds the name, so emails come from `AAA Door LLC Website <forms@datasoar.io>` |

To send from the company's own domain instead, verify `aaadoortx.com` in Resend, which means adding the DNS records Resend lists in GoDaddy. They sit alongside the Microsoft 365 email records, so don't change the existing `MX` or root `SPF` records.

## Launch

The site is canonical to `https://aaadoortx.com`. To go live, add the domain to the Vercel project and update only the web records (`A` for the root, `CNAME` for `www`) in GoDaddy. Leave any `MX` and email records alone.
