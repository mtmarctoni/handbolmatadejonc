# Club Handbol Mata de Jonc

Official website for Club Handbol Mata de Jonc, rebuilt with Astro and Cloudflare Pages.

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

```bash
# Deploy to Cloudflare Pages
./scripts/deploy.sh
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── sections/     # Page sections (About, Sponsors, etc.)
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
