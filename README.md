# personal-web

Source code for my personal homepage: [sixsevenlabs.xyz](https://sixsevenlabs.xyz)

Built with Next.js, TypeScript, Tailwind CSS, and a playful geometric visual system.

## What This Is

This is a personal brand site with Chinese and English language switching:

- a strong visual identity
- a content-rich one-page layout
- centralized copy in a typed content file
- production deployment on Vercel

The homepage includes:

- Hero
- Keyword marquee
- Open source projects
- Selected experiments
- Writing
- Social links

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Editing Content

Most homepage content lives here:

- [`lib/site-content.ts`](./lib/site-content.ts)

Main UI composition lives here:

- [`components/homepage.tsx`](./components/homepage.tsx)

Global styles live here:

- [`app/globals.css`](./app/globals.css)

## Deployment

- Production: [sixsevenlabs.xyz](https://sixsevenlabs.xyz)
- `www.sixsevenlabs.xyz` permanently redirects to the apex domain
- Hosted on Vercel

The host-based redirect is configured in:

- [`next.config.ts`](./next.config.ts)

## Design Direction

The visual context for this site is documented in:

- [`.impeccable.md`](./.impeccable.md)
