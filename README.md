# AAA Door website

Marketing site for AAA Door LLC (Orange, TX). Static [Astro](https://astro.build) site with one Vercel function for the quote form.

```sh
npm install
npm run dev     # local site
npm test        # quote form endpoint tests
npm run build   # output in dist/
```

## Editing content

Business facts, services, towns, team, reviews and FAQs are all in `src/data/site.ts`. Photos are listed in `src/data/photos.ts`.

## Quote form

`api/quote.js` emails requests through [Resend](https://resend.com). Until these Vercel environment variables are set, the form tells visitors their request wasn't sent and asks them to call.

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `QUOTE_TO_EMAIL` | Where requests go (comma-separated for several) |
| `QUOTE_FROM_EMAIL` | Sender on a domain verified in Resend |

## Launch

The site is canonical to `https://aaadoortx.com`. To go live, add the domain to the Vercel project and update only the web records (`A` for the root, `CNAME` for `www`) in GoDaddy. Leave any `MX` and email records alone.
