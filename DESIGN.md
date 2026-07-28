---
name: PGV Mesh
description: A community LoRa mesh network site for Greenville and Pitt County, NC
colors:
  bg: "#333333"
  ink: "#f0f0f0"
  ink-soft: "#c8c8c8"
  ink-faint: "#a0a0a0"
  rule: "#4a4a4a"
  band: "#3c3c3c"
  accent: "#9fd63a"
  on-accent: "#333333"
  accent-deep: "#4a6318"
  on-accent-deep: "#f5f5f0"
  invert-bg: "#f0f0f0"
  invert-ink: "#333333"
  invert-ink-soft: "#5a5a5a"
typography:
  display:
    fontFamily: "Zilla Slab, Georgia, serif"
    fontSize: "clamp(30px, 4vw, 44px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "normal"
  headline:
    fontFamily: "Zilla Slab, Georgia, serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Zilla Slab, Georgia, serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.1em"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "56px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.body}"
    padding: "12px 22px"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "12px 22px"
  settings-card:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    padding: "18px 18px 20px"
---

# Design System: PGV Mesh

## Overview

**Creative North Star: "The Net Control Log"**

This is the visual world of a volunteer radio net: the flat, hairline-ruled logbook a net control operator keeps, not a marketing brochure for one. Every section reads like an entry in that log: a mono-set eyebrow labeling what follows, a serif heading stating it plainly, and a body of plain sans text with no persuasion in its voice. The lime accent behaves like a signal indicator, an LED that lights up exactly where something is live or actionable, never as decoration.

The layout is full-bleed and edge-to-edge; nothing floats in a centered card. Sections stack and separate with 1px hairline rules the way logbook entries separate with a line, not a gap. The one departure from flatness, the hero panel's soft directional shadow, exists because that panel sits physically in front of the live map behind it: everywhere else, surfaces are flush with the page.

This system explicitly rejects rounded, soft, "friendly app" styling: no border-radius, no card elevation, no gradients. It also rejects the hobbyist-clutter look of DIY radio sites (dense tables, no hierarchy, default system fonts): the civic type stack and generous section padding keep it legible under stress, on a phone, on a bad connection.

**Key Characteristics:**
- Flat and full-bleed: hairline rules and padding do the work borders and shadows would elsewhere
- Mono-set eyebrows and technical spec tables read like instrument readouts, not labels
- The accent is a signal indicator: sparse, and always attached to something live or actionable
- Serif headlines carry civic, institutional weight against a plain, quiet sans body

## Colors

Two charcoal neutrals, a signal-lime accent, and one inverted light block; nothing else.

### Primary
- **Beacon Lime** (`#9fd63a`): the network's single accent. Marks the eyebrow label above every section, the step numerals in "Get on the mesh," the settings cards' top rule, the hop-relay animation dot, and filled buttons. Never used for large fills or backgrounds outside buttons.
- **Deep Moss** (`#4a6318`): the accent's inverted counterpart, used only inside the light "Host a repeater" block, where full-saturation lime would fail contrast against the near-white background. Same signal role as Beacon Lime, different surface.

### Neutral
- **Radio Charcoal** (`#333333`): the page background and the default surface for every section except the inverted volunteer block.
- **Panel Charcoal** (`#3c3c3c`): a barely-lighter charcoal used to band alternating sections ("Get on the mesh," settings card interiors sit on Radio Charcoal against this band) so sections read as distinct without a border.
- **Hairline Gray** (`#4a4a4a`): every 1px rule that separates sections, cards, and list rows.
- **Signal White** (`#f0f0f0`): primary text on the dark surface, and the background of the inverted volunteer block.
- **Soft Static Gray** (`#c8c8c8`): secondary body copy, hero subhead, card descriptions.
- **Faint Static Gray** (`#a0a0a0`): tertiary text (fine print, source notes, spec labels). Raised from an earlier lower-contrast value to clear WCAG AA; do not lower it again.
- **Charcoal-on-White** (`#333333` as `invert-ink`): body text inside the inverted volunteer block.
- **Muted Charcoal** (`#5a5a5a` as `invert-ink-soft`): secondary text inside the inverted volunteer block.

### Named Rules
**The Signal, Not Scenery Rule.** Beacon Lime never fills a background or a large surface. It marks a point: a label, a numeral, a rule, a button, a live indicator. If lime is covering more than a stripe or a button, it's being used wrong.

## Typography

**Display Font:** Zilla Slab (with Georgia, serif fallback)
**Body Font:** Public Sans (with system-ui, sans-serif fallback)
**Label/Mono Font:** Martian Mono (with ui-monospace, monospace fallback)

**Character:** A civic serif for headlines paired with a plain, neutral sans for reading, plus a monospace voice reserved for anything that reads as a technical readout: eyebrows, radio spec sheets, channel tables. The pairing is deliberately not the original handoff's Source Serif 4 / IBM Plex; these faces were chosen for civic provenance and are not drift to correct.

### Hierarchy
- **Display** (700, `clamp(30px, 4vw, 44px)`, 1.12): the hero `h1` only.
- **Headline** (700, 30px, ~1.2): top-level section headings ("Get on the mesh," "Host a repeater").
- **Title** (600, 26px, ~1.25): secondary section headings ("How it works," "Live network map").
- **Body** (400, 16px, 1.5): default paragraph text; card and step copy runs smaller (14.5–15.5px) at the same weight.
- **Label** (400, 11px, letter-spacing 0.1em, uppercase): the eyebrow line above every section and settings-card headers; the mono spec/channel tables run at 12–12.5px with slight negative tracking (-0.02em) because Martian Mono sets wider than the sans.

### Named Rules
**The One Eyebrow Rule.** Every section opens with exactly one mono, uppercase, lime eyebrow naming what follows. It is the section's only all-caps text; body copy is always sentence case.

## Layout

Full-bleed throughout: no centered max-width container. Sections use a shared horizontal padding token (`--pad`, 40px, dropping to 24px under 760px) rather than a wrapping container, so content runs edge to edge and hairline rules span the full viewport width.

Two-column sections (`how`, `start-layout`, `volunteer`) use CSS grid with a fixed-ish narrow column (200–340px) beside a flexible wide one, collapsing to a single column under 900px. The settings grid is `repeat(auto-fit, minmax(260px, 1fr))` with a 1px gap that doubles as the dividing hairline (the grid background shows through as rules between cards).

Section vertical rhythm runs 40–60px of padding depending on section weight (hero panel 44px, "Get on the mesh" 60px, technical reference 40px). Below 760px the header becomes a toggled overlay nav instead of shrinking inline, and the hero stacks the map below the text panel instead of behind it. Below 520px, the hop diagram and settings/spec grids drop to a single column and buttons go full-width.

## Elevation & Depth

The system is flat by default: no drop shadows, no card elevation, no z-axis layering as a design device. Depth is conveyed instead by hairline rules and the alternating Radio Charcoal / Panel Charcoal background band. The one exception is intentional and singular.

### Shadow Vocabulary
- **Hero panel edge** (`box-shadow: 18px 0 40px -20px rgba(0,0,0,.35)`): used only on the hero text panel, which sits physically in front of the live map iframe behind it. Removed entirely on mobile, where the panel stacks above the map instead of floating over it.

### Named Rules
**The Flat-Except-One Rule.** No new shadow tokens. The hero panel's edge shadow is the sole sanctioned exception because it depicts a real front-to-back relationship (panel over map); it is not a decoration to imitate elsewhere.

## Shapes

No border-radius anywhere; every edge is square. Form language runs entirely on 1px hairline rules and thin accent strokes rather than corners or fills:

- Settings cards carry a 3px solid Beacon Lime top border as their only distinguishing edge.
- List-style content (`.step`, `.ref`) is separated by 1px top/bottom rules rather than boxed in a bordered container.
- The outage note and settings-card interiors use a small solid accent mark (a 3px vertical bar, an 8px square bullet) instead of an icon or rounded chip.

## Components

### Buttons
- **Shape:** square corners, no radius.
- **Primary (`.btn-fill`):** Beacon Lime background, `on-accent` charcoal text, 12px/22px padding, 14.5px semibold. Inside the inverted volunteer block, swaps to Deep Moss background with `on-accent-deep` text so it still passes contrast on the light surface.
- **Ghost (`.btn-ghost`):** transparent fill, 1px `ink`-colored border (or `invert-ink` inside the light block), same padding and type as primary.
- **Hover:** opacity drops to 0.82 (buttons) or 0.6–0.75 (text links); no color shift, no shadow, no scale.

### Cards / Containers
- **Corner Style:** square.
- **Background:** Radio Charcoal, distinguished from the page only by the 3px lime top rule and the 1px hairline grid gap between cards.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none besides the top accent rule; card separation comes from the grid's 1px background gap.
- **Internal Padding:** 18px sides, 18px/20px top/bottom.

### Navigation
- **Style:** inline flex row, 13.5px text, 22px gaps, no active-state underline; links dim to 0.6 opacity on hover.
- **Mobile treatment:** collapses behind a bordered square icon toggle (`.nav-toggle`) into a full-width overlay panel banded in Panel Charcoal, rows separated by hairline rules, each row full-width and larger (15px) for touch targets.

### Disclosure rows (`.ref`, signature component)
The technical-reference accordion is the system's signature interaction: a `<details>`/`<summary>` row banded in Panel Charcoal, a small lime square bullet before the label, and a lime "+" glyph that rotates 45° to an "×" on open. No chevron icon, no rounded chip: the rotation itself is the only affordance change.

## Do's and Don'ts

### Do:
- **Do** treat Beacon Lime as a point indicator (label, rule, numeral, button, live dot), never a fill or background.
- **Do** separate content with 1px Hairline Gray rules and full-bleed padding instead of bordered or elevated cards.
- **Do** keep every section's eyebrow the only all-caps text on the page; everything else is sentence case.
- **Do** keep Martian Mono for anything that reads as a technical readout (spec values, channel tables, eyebrows) and Public Sans for everything a visitor reads at length.
- **Do** preserve the hero panel's edge shadow as the sole shadow in the system; it depicts a real overlap, not a style choice to spread.

### Don't:
- **Don't** add border-radius, drop shadows, or gradients anywhere outside the hero panel's existing edge shadow.
- **Don't** center content in a max-width container; the layout is full-bleed by design.
- **Don't** substitute Source Serif 4 or IBM Plex for the current civic type stack; the departure from the original handoff fonts is deliberate, not drift.
- **Don't** fill large surfaces with the accent color, in either its lime or deep-moss form.
- **Don't** lower Faint Static Gray's contrast; it was raised specifically to clear WCAG AA.
