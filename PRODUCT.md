# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with distinct jobs, both served by one page.

- **Builders.** Radio and maker hobbyists who flash firmware, host repeaters, and run the network's physical infrastructure. They need exact, authoritative settings and coordinate on Discord before deploying hardware.
- **Members.** Pitt County residents with no radio background who want off-grid messaging, most acutely during hurricane season. They need a path from "what is this" to a working companion node, and never need to touch repeater tuning.

Builders create the coverage that members depend on. The site must not make either audience pay for the other's needs.

## Product Purpose

PGV Mesh is a volunteer-run MeshCore LoRa radio network around Greenville and Pitt County, North Carolina. It carries text messages radio to radio, with no cell towers, no internet, and no subscription.

The site exists to explain what the mesh is, get new people onto it, publish the settings that keep the network interoperable, show live coverage, and recruit repeater hosts.

Success over the next year is measured as: more repeater sites and denser coverage; a network proven to work before an emergency rather than during one; and a model other North Carolina clubs copy.

## Positioning

The network is physical infrastructure owned by the neighbors who use it. There is no central tower or server to fail, no company behind it, and no fee. Every repeater was placed by a volunteer and several run on solar.

Its durable advantage is that it is already in daily use for ordinary chat, so it is working before anyone needs it to. A competitor cannot truthfully copy locally owned hardware placed by local volunteers.

## Operating Context

Eastern North Carolina loses cell and internet service most often during hurricane season and after ice storms, when downed lines and flooded roads can keep repair crews out for days. A LoRa mesh does not route through that infrastructure at all.

Coverage is currently sparse, with pockets of 0–2 repeaters per area. Coordination, support, and new-repeater planning all happen on Discord. Live coverage and node status are published through MeshMapper.

The project has had four active contributors in the past year and descends from an earlier community site, which is consistent with its intent to be reused.

## Capabilities and Constraints

- Runs MeshCore firmware on LoRa boards listed in the MeshCore Web Flasher, typically $20–40.
- Three node roles: Companion (phone-paired), Repeater (fixed, extends coverage), Room Server (store-and-forward room).
- Uses the license-free 902–928 MHz ISM band under FCC Part 15. No amateur radio license required.
- Channel keys are derived from the exact channel name, so names are case-sensitive and renaming a channel silently moves everyone already on it.
- Node names follow `pgvmesh.org <area>` and carry no role marker, because the app already shows node type by icon.
- A solar repeater costs roughly $30–60 in parts and runs with no wiring and no internet.
- Radio settings diverge from the TennMesh reference where the sparse local coverage requires it.
- The site is a static single page; there is no account system, no backend, and no user data collected.

## Brand Commitments

- Name **PGV Mesh**, domain **pgvmesh.org**. The domain is embedded in the node naming convention, so it is operationally load-bearing, not only cosmetic.
- The circle-and-triangle node mark.
- Voice is plainspoken and concrete: name real things, prefer specifics over cleverness, no em dashes in prose.
- The accent color is an owner-confirmed binding constraint, not a default to be revisited.
- Site content is licensed Creative Commons specifically so other clubs can reuse it.

## Evidence on Hand

- Three real photographs at `public/img/`: a hand-held SenseCAP node, an unboxed board with antenna, and a pole-mounted repeater in a weatherproof enclosure.
- A live MeshMapper region map showing real nodes and coverage, both embedded and linked.
- The real channel list and the real radio settings currently in production use.
- **No testimonials, member counts, uptime figures, coverage percentages, or case studies exist.** Future work must not fabricate them. Claims about network size or reliability have no source to draw on.

## Product Principles

1. Two audiences, one page. Builders need exact values; members need a way in. Neither may be sacrificed for the other.
2. Prefer the network's own live data over claims about it. The map is the proof.
3. Settings are published as authoritative and exact, because interoperability depends on people entering them identically.
4. Never overstate emergency capability. This is a community best-effort network and never a replacement for 911.
5. Write so another club can fork it. Keep club-specific facts separable from general guidance.

## Accessibility & Inclusion

The site may be read under stress, on a phone, on a degraded connection, by someone who has just lost power. WCAG AA contrast is a maintained bar rather than an aspiration. Keyboard focus, reduced-motion support, a skip link, and landmark structure are maintained affordances that were added deliberately and must survive future layout work.
