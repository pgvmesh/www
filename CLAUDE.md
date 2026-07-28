# PGV Mesh Website

Static one-page site for PGV Mesh, a community MeshCore LoRa mesh network. Live at https://pgvmesh.org.

The whole site is [src/pages/index.astro](src/pages/index.astro) plus [src/styles/global.css](src/styles/global.css). Astro, static output, no SSR adapter; Wrangler deploys `dist/` to Cloudflare. Scripts are in `package.json`, deploy config in `wrangler.jsonc`; read them there rather than trusting a copy here.

`npx wrangler dev` gives a local Cloudflare preview and rebuilds on `src/` changes. Add `--tunnel` for a shareable `*.trycloudflare.com` URL (press `t` to toggle).

The Discord invite, MeshMapper region URL, and contact address are defined once in the frontmatter of `index.astro`. Read them there; don't hardcode copies elsewhere.

## Network decisions (rationale the markup can't show)

The settings cards in `index.astro` are authoritative for the exact values. What follows is the reasoning behind them, which reading the site won't tell you.

- TennMesh (https://tennmesh.com/settings/) is our reference, but PGV diverges where noted below.
- **Coding rate 8 for BOTH companions and repeaters**: a PGV recommendation that differs from TennMesh's companion CR 5.
- Coverage is sparse, with pockets of 0–2 repeaters per area, so **repeater adverts are FREQUENT** to help discovery on a small network. **Companions don't need to worry about adverts**; don't add advert guidance for them.
- Node names carry no role marker because the app already shows node type by icon. Only add a qualifier to break a tie when one area runs two devices.
- New repeaters should be coordinated on Discord before deploying.
- Channel keys are auto-derived from the channel name, so names are case-sensitive and must be typed exactly. Renaming a channel silently moves everyone already on it; announce changes on Discord first.

## External resources (use these, not alternatives)

- Official MeshCore site: **meshcore.io**; do NOT link meshcore.co.uk (unofficial) or the old ripplebiz GitHub (project moved to meshcore-dev)
- Flashing: **flasher.meshcore.io** (browser-based); never instruct manual GitHub downloads
- Observer setup: link to the MeshMapper wiki rather than writing our own instructions. The page is at `/mqtt-main/`; `/mqtt-setup/` is a dead URL that 404s.

## Design

The look came from a Claude Design handoff (July 2026): editorial, flat, full-bleed. `global.css` holds the actual values. What it can't tell you:

- The flatness is deliberate. No border-radius, no card surfaces, no shadows beyond the hero panel's edge; sections are separated by hairline rules and full-bleed padding rather than a centered container.
- The prototype shipped no breakpoints and no accessibility affordances. Both were added afterward: the responsive rules, plus the skip link, `<main>` landmark, focus-visible outlines, reduced-motion handling, and mobile nav toggle. Preserve them when reworking layout.
- Brand assets (`favicon.svg`, `favicon.ico`, `logo.svg`, `og.png`) are hand-colored to match the accent and are not generated from it. Re-export them if the accent changes.
- The type stack deliberately departs from the handoff, which specified Source Serif 4 and IBM Plex. The current faces were chosen for their civic provenance; this is not drift to be corrected.
- `.impeccable/config.json` silences three detector rules because each flags a deliberate choice, not a defect: `side-tab` (the accent rule on the settings cards), `repeated-section-kickers` and `all-caps-body` (the mono eyebrow above every section heading). `line-length` is left reporting deliberately: body paragraphs (`.how p`, `.step p`, `.outage p`, `.ref-body`) are capped at `max-width: 70ch`, but the section containers themselves stay full-bleed, so the rule still fires on container width and that's expected.

## Content conventions

- Prefer linking to official external docs over writing instructions inline; keep copy concise
- Keep the settings preset-first: lead with the preset name and present the frequency, bandwidth, and spreading factor as what it sets for you, rather than asking people to enter raw values
- Site mission framing: community-built, decentralized network for disaster resilience and off-grid communication, including emergency reporting when cell/internet are down (always with the "not a replacement for 911" disclaimer)
- No em dashes in prose; use a colon, semicolon, or comma. En dashes in numeric ranges (`$20–40`, `902–928 MHz`) are fine.
- austinmesh.org (CC-BY-SA) is a good reference for onboarding patterns (preset-first settings, "be patient: contacts appear only after they advert", "Heard X repeats" verification)
