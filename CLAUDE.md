# CLAUDE.md

This file provides guidance when working with code in this repository.

## What this repo is

The PGV Mesh website — `www.pgvmesh.org`. Built with Astro + MDX, deployed as a fully static site to Cloudflare via Workers Static Assets (Workers Builds). Page content is authored in MDX under the `pages` content collection; layout and elements (header, footer, nav) are centralized.

Constraint: **no client-side framework runtime**.

## Common commands

- `npm run dev` — Astro dev server on http://localhost:4321
- `npm run build` — production build (includes Pagefind postbuild)
- `npm run preview` — preview the built site locally
- `npx astro sync` — regenerate content-collection types after editing `src/content/config.ts`

## Architecture

- **Pages live in `src/content/pages/`** as `.mdx` files. Frontmatter is validated against the schema in `src/content/config.ts` (`title`, `description` required; `ogImage`, `ogImageAlt`, `canonical`, `publishedAt` optional).
- **Routing is a single catch-all** at `src/pages/[...slug].astro` that renders entries in the pages collection through `BaseLayout`. `index.mdx` is the only active page in the `pages` collection.
- **BaseLayout owns the `<head>`**: title, description, canonical, full OG/Twitter set, favicons, manifest, sitemap link. The default `og:image` is `src/assets/hero/pgv-mesh-wildflower-center-large.webp`, processed through `getImage()` to produce an absolute URL.
- **Deploy:** Production lives on Cloudflare Workers Static Assets. `wrangler.jsonc` declares the project name as `pgvmesh`. Workers Builds runs on every push to the repo.

## Gotchas

- After editing `src/content/config.ts`, run `npx astro sync` so the TypeScript types for `getCollection('pages')` regenerate.
- Images used in MDX must live under `src/assets/` and be imported as ES modules so Astro can fingerprint and optimize them.
- `data-pagefind-ignore="all"` is set on `SiteHeader`, `Nav`, and `SiteFooter` so Pagefind ignores these layout elements during search indexing.

