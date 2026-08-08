# Club Handbol Mata de Jonc

Official website for Club Handbol Mata de Jonc, built with Astro.

## Tech Stack

- **Framework:** Astro 7.1.1
- **Styling:** Tailwind CSS v4
- **Hosting:** Cloudflare Pages
- **Languages:** Catalan (CA), Spanish (ES), English (EN)

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test

# Type check
pnpm check
```

## Deployment

The site builds to static HTML in `dist/` and is hosted on Cloudflare Pages. Connect the GitHub repository to Cloudflare Pages for automatic deployments on push to `main`.

Manual deploy:

```bash
# Build the site
pnpm build

# Deploy using wrangler (Cloudflare Pages)
pnpm dlx wrangler pages deploy dist --project-name handbolmatadejonc
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── sections/     # Page sections (About, Sponsors, Contact, etc.)
│   ├── Header.astro
│   ├── Footer.astro
│   └── SEO.astro
├── i18n/            # Translation dictionaries
├── layouts/         # Page layouts
├── pages/           # Route pages
│   ├── index.astro  # Catalan (default)
│   ├── es/          # Spanish
│   └── en/          # English
└── styles/          # Global styles
```

## Content

All content is in Catalan by default, with Spanish and English translations available. The site uses verbatim copy from the original Wix site to maintain consistency.

## Contact Form

The contact form uses FormSubmit.co for form handling. Forms submit directly to `handbolmatadejonc@gmail.com` without requiring server-side code.
