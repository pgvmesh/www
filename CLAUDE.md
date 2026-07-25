# PGV Mesh Website

Static one-page site for PGV Mesh, a community MeshCore LoRa mesh network. Live at https://pgvmesh.org.

## Stack

- **Astro** (static output, no SSR adapter); the whole site is [src/pages/index.astro](src/pages/index.astro) plus [src/styles/global.css](src/styles/global.css)
- **Wrangler** deploys the built `dist/` to **Cloudflare Pages** (project name `pgv-mesh`)
- Photos live in `public/img/*.webp`, referenced with explicit `width`/`height` + `loading="lazy"`

## Commands

- `npm run dev`: Astro dev server
- `npm run build`: build to `dist/`
- `npm run deploy`: build + `wrangler pages deploy dist`
- `npx wrangler dev`: local Cloudflare preview; uses `[build]` in wrangler.toml to rebuild on `src/` changes. Add `--tunnel` for a shareable `*.trycloudflare.com` URL (press `t` to toggle).

## Site constants

The Discord invite, MeshMapper region URL, and contact address are defined once in the frontmatter of [src/pages/index.astro](src/pages/index.astro). Read them there; don't hardcode copies elsewhere.

## Network decisions (rationale the markup can't show)

The settings tables in `index.astro` are authoritative for the exact values. What follows is the reasoning behind them, which reading the site won't tell you.

- Radio basics: the USA/Canada (Recommended) preset covers 910.525 MHz, 62.5 kHz bandwidth, SF7. Lead with the preset name and treat those numbers as what it sets for you, rather than asking people to enter raw values. TennMesh (https://tennmesh.com/settings/) is our reference, but PGV diverges where noted below.
- **Coding rate 8 for BOTH companions and repeaters** (PGV recommendation; differs from TennMesh's companion CR 5).
- PGV Mesh uses **3-byte path hashes**.
- Coverage is sparse, with pockets of 0–2 repeaters per area, so **repeater adverts are FREQUENT** to help discovery on a small network. **Companions don't need to worry about adverts**; don't add advert guidance for them.
- Node naming convention: **`pgvmesh.org <area>`** for every role, since the app already shows node type by icon.
- New repeaters should be coordinated on Discord before deploying.
- Duplicate shared rows across the per-role settings tables rather than factoring them into a combined block (clarity over DRY).

## External resources (use these, not alternatives)

- Official MeshCore site: **meshcore.io**; do NOT link meshcore.co.uk (unofficial) or the old ripplebiz GitHub (project moved to meshcore-dev)
- Flashing: **flasher.meshcore.io** (browser-based); never instruct manual GitHub downloads
- Observer setup: link to the MeshMapper wiki rather than writing our own instructions (the live link is in the Observer section of `index.astro`). Note `/mqtt-setup/` is a dead URL; the page is at `/mqtt-main/`.
- Live map embeds: `embed.php?zoom=11`, plus `&fail_grid=1` for the hero's coverage-grid variant

## Design

The current look came from a Claude Design handoff (July 2026): editorial, flat, full-bleed. Keep it consistent.

- Type: **Source Serif 4** headings, **IBM Plex Sans** body, **IBM Plex Mono** for eyebrows, specs, and console commands; loaded from Google Fonts
- Palette is the design's "dusk" tone: bg `#333333`, ink `#f0f0f0`, accent lime `#9fd63a`, clay button `#4a6318`, band `#3c3c3c`. The volunteer CTA inverts to a light band (`#f0f0f0` with dark ink, accent `#6f8f1f`)
- **No border-radius anywhere**, and no shadows except the hero panel's edge; sections are separated by 1px hairline rules, not cards
- Sections are full-bleed with `--pad` horizontal padding (40px, 24px under 760px); paragraphs are constrained by `ch` max-widths rather than a page-wide container
- Brand assets (`favicon.svg`, `favicon.ico`, `logo.svg`, `og.png`) use the lime accent; keep them in sync if the accent changes
- The design prototype shipped no breakpoints and no accessibility affordances. Both were added here: breakpoints at 900/760/520px, plus a skip link, `<main>` landmark, focus-visible outlines, reduced-motion handling, and a mobile nav toggle. Preserve them when reworking layout.

## Content conventions

- Prefer linking to official external docs over writing instructions inline; keep copy concise
- Page order: Hero → How It Works → Get Started → Live Map → Outage Context → Technical Reference → Volunteer → Footer
- The Technical Reference is four `<details>` accordions, closed by default: Settings → Channels → Emergencies → Observer
- Channels are MeshCore hashtag channels: the name starts with `#` and the key is auto-derived from the name, so names must be typed exactly and are case-sensitive
- Keep the settings preset-first and minimal, split by node role (Companion, Repeater, Room Server)
- Site mission framing: community-built, decentralized network for disaster resilience and off-grid communication, including emergency reporting when cell/internet are down (always with the "not a replacement for 911" disclaimer)
- No em dashes in prose; use a colon, semicolon, or comma. En dashes in numeric ranges (`$20–40`, `902–928 MHz`) are fine.
- austinmesh.org (CC-BY-SA) is a good reference for onboarding patterns (preset-first settings, "be patient: contacts appear only after they advert", "Heard X repeats" verification)
