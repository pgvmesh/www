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

Defined in the frontmatter of `index.astro`:

- Discord: https://discord.com/invite/AUjz5RGGVu
- MeshMapper region: https://pgv.meshmapper.net/
- Contact: info@pgvmesh.org

## Network facts (keep the site consistent with these)

- Radio basics: USA/Canada (Recommended) preset — 910.525 MHz, 62.5 kHz bandwidth, SF7. The site presents this as "select the preset" rather than raw numbers. TennMesh (https://tennmesh.com/settings/) is the reference, but PGV diverges where noted below.
- **Coding rate 8 for BOTH companions and repeaters** (PGV recommendation; differs from TennMesh's companion CR 5).
- PGV Mesh uses **3-byte path hashes**.
- Coverage is sparse — pockets of 0–2 repeaters per area — so **repeater adverts are FREQUENT** (helps discovery on a small network): zero-hop every 60 min, flood every 3 hours. **Companions don't need to worry about adverts** — don't add advert guidance for them.
- Node naming convention: **`pgvmesh.org <area>`**, e.g. `pgvmesh.org Grimesland` or `pgvmesh.org NC-43`.
- Repeater console commands: `set txdelay 0.3`, `set direct.txdelay 0.1`, `set agc.reset.interval 4`. New repeaters should be coordinated on Discord before deploying.
- Settings tables are labeled **Companion** and **Repeater** with a one-line role description each; duplicate shared rows in both tables rather than using a combined "Everyone" block (clarity over DRY).

## External resources (use these, not alternatives)

- Official MeshCore site: **meshcore.io** — do NOT link meshcore.co.uk (unofficial) or the old ripplebiz GitHub (project moved to meshcore-dev)
- Flashing: **flasher.meshcore.io** (browser-based) — never instruct manual GitHub downloads
- Observer setup: link to the MeshMapper docs at https://wiki.meshmapper.net/mqtt-setup/ rather than writing our own instructions

## Content conventions

- Prefer linking to official external docs over writing instructions inline; keep copy concise
- Page order: Hero → Why a Mesh → Get Started → Settings → Emergency → Observer → Volunteer → Quick Links
- Settings are split "Everyone" vs "Repeaters Only"; keep them preset-first and minimal
- Site mission framing: community-built, decentralized network for disaster resilience and off-grid communication, including emergency reporting when cell/internet are down (always with the "not a replacement for 911" disclaimer)
- Dark theme, green accent (`--accent: #3fb950`); styling lives in global.css with CSS variables
- austinmesh.org (CC-BY-SA) is a good reference for onboarding patterns (preset-first settings, "be patient — contacts appear only after they advert", "Heard X repeats" verification)
