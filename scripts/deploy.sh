#!/bin/bash
set -euo pipefail

echo "Deploying to Cloudflare Pages..."

# Build the site
pnpm build

# Deploy using wrangler
npx wrangler pages deploy dist/client --project-name handbolmatadejonc

echo "Deploy complete!"
