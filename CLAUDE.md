# CLAUDE.md

This file provides guidance when working with code in this repository.

## What this repo is

The PGV Mesh website — `www.pgvmesh.org`. Built with Astro, deployed as a fully static single-page site to Cloudflare via Workers Static Assets (Workers Builds). 

Constraint: **no client-side framework runtime**.

## Common commands

- `npm run dev` — Astro dev server on http://localhost:4321
- `npm run build` — production build (includes Pagefind postbuild)
- `npm run preview` — preview the built site locally

## Architecture

- **Single Page:** The landing page is authored directly as an Astro component at `src/pages/index.astro`.
- **BaseLayout owns the `<head>`**: title, description, canonical, full OG/Twitter set, favicons, manifest, sitemap link. The default `og:image` is `src/assets/hero/pgv-mesh-pine-node.png`, processed through `getImage()` to produce an absolute URL.
- **Deploy:** Production lives on Cloudflare Workers Static Assets. `wrangler.jsonc` declares the project name as `pgvmesh`. Workers Builds runs on every push to the repo.

## Gotchas

- Images must live under `src/assets/` and be imported as ES modules so Astro can fingerprint and optimize them.
- `data-pagefind-ignore="all"` is set on `SiteHeader`, `Nav`, and `SiteFooter` so Pagefind ignores these layout elements during search indexing.
