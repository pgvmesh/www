# PGV Mesh Website

Static one-page site for PGV Mesh, a community MeshCore LoRa mesh network. Live at https://pgvmesh.org.

## Stack

- **Astro** (static output, no SSR adapter) — the whole site is [src/pages/index.astro](src/pages/index.astro) plus [src/styles/global.css](src/styles/global.css)
- **Wrangler** deploys the built `dist/` to **Cloudflare Pages** (project name `pgv-mesh`)

## Commands

- `npm run dev` — Astro dev server
- `npm run build` — build to `dist/`
- `npm run deploy` — build + `wrangler pages deploy dist`
- `npx wrangler dev` — local Cloudflare preview; uses `[build]` in wrangler.toml to rebuild on `src/` changes. Add `--tunnel` for a shareable `*.trycloudflare.com` URL (press `t` to toggle).

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

- Official MeshCore site: **meshcore.io** — do NOT link meshcore.co.uk (unofficial) or the old ripplebiz GitHub (project moved to meshcore-dev)
- Flashing: **flasher.meshcore.io** (browser-based) — never instruct manual GitHub downloads
- Observer setup: link to the MeshMapper wiki rather than writing our own instructions (the live link is in the Observer section of `index.astro`)

## Content conventions

- Prefer linking to official external docs over writing instructions inline; keep copy concise
- Channels are MeshCore hashtag channels: the name starts with `#` and the key is auto-derived from the name, so names must be typed exactly and are case-sensitive. Present them preset-style in a table.
- Keep the settings tables preset-first and minimal, split by node role
- Site mission framing: community-built, decentralized network for disaster resilience and off-grid communication, including emergency reporting when cell/internet are down (always with the "not a replacement for 911" disclaimer)
- Dark theme with a green accent; styling lives in global.css with CSS variables
- austinmesh.org (CC-BY-SA) is a good reference for onboarding patterns (preset-first settings, "be patient — contacts appear only after they advert", "Heard X repeats" verification)
