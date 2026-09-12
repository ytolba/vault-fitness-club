---
name: Vault Fitness Club
description: A modern architectural fitness identity built around the warm-lit threshold of the real club.
colors:
  threshold-black: "#090a0a"
  soft-black: "#111212"
  warm-ink: "#171612"
  warm-white: "#f2ede2"
  dim-cream: "#c6bfb2"
  metallic-gold: "#d6a52e"
  halo-gold: "#f0c65a"
  deep-gold: "#74510f"
  dark-rule: "rgba(242, 237, 226, 0.18)"
  light-rule: "rgba(23, 22, 18, 0.18)"
typography:
  display:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(4.1rem, 7vw, 8.6rem)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(3rem, 5.8vw, 7rem)"
    fontWeight: 700
    lineHeight: 0.93
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Barlow Condensed", sans-serif'
    fontSize: "clamp(1.35rem, 2.3vw, 2.35rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "clamp(1rem, 1.35vw, 1.22rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    fontSize: "0.72rem"
    fontWeight: 800
    lineHeight: 1.5
    letterSpacing: "0.13em"
rounded:
  square: "0"
  circle: "50%"
spacing:
  page-gutter: "clamp(1.25rem, 4.2vw, 5rem)"
  header-desktop: "5.25rem"
  header-compact: "4.7rem"
  action-gap: "0.75rem"
  section-block: "clamp(7rem, 11vw, 11rem)"
components:
  button-gold:
    backgroundColor: "{colors.halo-gold}"
    textColor: "{colors.threshold-black}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.25rem"
    height: "3.7rem"
  button-gold-hover:
    backgroundColor: "{colors.warm-white}"
    textColor: "{colors.threshold-black}"
    rounded: "{rounded.square}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.warm-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0.85rem 1.25rem"
    height: "3.7rem"
  button-outline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.halo-gold}"
    rounded: "{rounded.square}"
---

# Design System: Vault Fitness Club

## Overview

**Creative North Star: "Halo Threshold"**

Halo Threshold translates the real club's illuminated nighttime sign into a modern architectural visual world. Near-black fields hold the experience in tension while warm white and tightly controlled metallic gold mark the points where a visitor crosses from looking to acting. The mood is restrained and premium, but grounded in the actual Vault exterior, real amenities, and local utility rather than luxury theater.

The system is bold through scale, contrast, and spatial confidence—not effects. Condensed uppercase display type, long structural rules, squared controls, generous negative space, and alternating black, cream, and gold fields create the rhythm. The gold threshold line is the reusable signature: a precise seam that can divide imagery, mark progress, or signal a change of state.

**Key Characteristics:**

- Architectural rather than ornamental
- Premium but grounded in the real club
- Near-black, warm white, and rare metallic gold
- Condensed display typography against quiet system-sans body copy
- Flat, square, rule-based surfaces with generous negative space
- A continuous gold threshold line as the signature gesture

## Colors

The palette carries the warm glow of the exterior sign into an otherwise disciplined black-and-cream environment.

### Primary

- **Halo Gold** (`halo-gold`): The highest-energy accent for primary actions, emphasized words, active progress, and the full recovery field.
- **Metallic Gold** (`metallic-gold`): The quieter structural gold for seams, dividers, and controlled hover borders.
- **Deep Gold** (`deep-gold`): The grounded gold for hairline separators and gold typography on light fields.

### Neutral

- **Threshold Black** (`threshold-black`): The dominant page ground and dark control text.
- **Soft Black** (`soft-black`): The subtle image fallback and secondary dark surface.
- **Warm Ink** (`warm-ink`): Primary text on cream and gold fields.
- **Warm White** (`warm-white`): Primary text on black and the large light editorial surface.
- **Dim Cream** (`dim-cream`): Secondary copy on black; it keeps hierarchy without cooling the palette.
- **Dark Rule** (`dark-rule`): Low-contrast structural borders on black.
- **Light Rule** (`light-rule`): Low-contrast structural borders on cream.

### Named Rules

**The Controlled Halo Rule.** Gold marks action, transition, and high-value emphasis; it is never scattered as decorative sparkle.

**The No Turf Rule.** Turf green does not enter the primary identity. The brand world remains near-black, warm metallic gold, warm white, and restrained neutrals.

## Typography

**Display Font:** Barlow Condensed (self-hosted, with sans-serif fallback)  
**Body Font:** Helvetica Neue (with Helvetica, Arial, and system sans-serif fallbacks)

**Character:** Barlow Condensed supplies the compressed, architectural silhouette of the VAULT wordmark without becoming aggressive bodybuilding graphics. Helvetica Neue keeps supporting information direct, familiar, and locally useful.

### Hierarchy

- **Display** (700, `clamp(4.1rem, 7vw, 8.6rem)`, 0.84): Hero statements only; uppercase, tightly stacked, and capped near 12 characters per line.
- **Headline** (700, `clamp(3rem, 5.8vw, 7rem)`, 0.93): Section declarations; uppercase and deliberately compact.
- **Title** (700, `clamp(1.35rem, 2.3vw, 2.35rem)`, 1): Amenity titles and structured subheads.
- **Body** (400, `clamp(1rem, 1.35vw, 1.22rem)`, 1.5): Explanatory copy, usually constrained to 34–40rem for calm reading.
- **Label** (800, `0.72rem`, `0.13em`, uppercase): Navigation, actions, metadata, and category labels.

### Named Rules

**The Compressed Declaration Rule.** Use condensed uppercase type for decisive statements; use the body face for explanation and evidence.

**The Narrow Label Rule.** Labels stay small, uppercase, and widely tracked. They organize the architecture rather than compete with it.

## Layout

The spatial model is an editorial grid with a fluid horizontal gutter (`clamp(1.25rem, 4.2vw, 5rem)`) and deep section rhythm (`clamp(7rem, 11vw, 11rem)`). Desktop compositions are intentionally asymmetric: the hero balances a broad statement column against a tall photographic threshold; content sections use offset two-column grids, ruled lists, or a strict three-column amenity matrix.

At 960px, the header becomes a two-part shell and navigation becomes a full-screen typographic menu. Multi-column editorial sections collapse toward one column while keeping their visual tension. At 700px, the exterior image moves before the hero copy, actions become full-width, the amenity matrix becomes two columns, and a fixed two-action rail anchors the viewport. Mobile spacing stays generous; density is reduced by reflow, not miniaturization.

**The Real Place First Rule.** On narrow screens, the exterior photograph appears before the headline so the physical club remains the first piece of evidence.

## Elevation & Depth

The system is flat by design and uses no box shadows. Depth comes from hard changes in field color, image contrast, warm translucent header glass, overlapping oversized typography, and 1px structural rules. The exterior photograph is treated as an architectural plane rather than a floating card.

**The Flat Structure Rule.** Never use drop shadows to simulate quality. Establish hierarchy with contrast, cropping, field changes, and precise borders.

## Shapes

The form language is square and exact. Buttons, grids, rails, image frames, and section boundaries use hard corners with 1px rules. Circular geometry is reserved for the supplied VAULT mark; it is an identity asset, not a general component radius. Arrow icons use square line caps and mitered joins to reinforce the architecture.

**The One Circle Rule.** The circular silhouette belongs to the VAULT mark. Interactive and content surfaces remain square.

## Components

### Buttons

Direct, rectangular actions with strong label typography and enough width to read like architectural plates.

- **Shape:** Hard square corners (`0`) with a 1px border and minimum height of `3.7rem`.
- **Primary:** Halo-gold field with threshold-black text; horizontal padding is `1.25rem` and the arrow is separated by a `2rem` internal gap.
- **Hover / Focus:** Primary shifts to warm white in `180ms ease`; keyboard focus uses a 2px halo-gold outline with a 4px offset.
- **Secondary:** Transparent on dark fields with a dark rule border; hover changes the label and border to gold. On cream, it uses warm ink with the light rule.

### Navigation

Quiet and exact at desktop, immersive on compact screens.

- **Desktop:** Centered uppercase labels in dim cream; hover changes only the text to halo gold.
- **Header:** Fixed three-column grid, translucent threshold-black fill, 1px bottom rule, and a 16px backdrop blur.
- **Compact:** At 960px the menu button appears and the navigation opens as a full-screen threshold-black field with oversized condensed labels.
- **Mobile actions:** At 700px a fixed two-column bottom rail keeps Call and Directions continuously available; Call receives the gold fill.

### Cards / Containers

The system avoids floating cards. Amenity tiles, recovery entries, image captions, and feature rows are structural containers defined by shared borders and alignment.

- **Corner Style:** Square (`0`).
- **Background:** Usually inherited from the containing black, cream, or gold field.
- **Shadow Strategy:** None; see Elevation & Depth.
- **Border:** 1px low-contrast rule appropriate to the field.
- **Internal Padding:** Amenity tiles use `1.4rem`; line items use roughly `1.35rem` to `1.55rem` vertically.

### Threshold Line

The signature threshold is a 2px fixed vertical gold seam with a quiet metallic track and a brighter progress fill. It follows page progress without attracting focus. Under reduced motion, it resolves immediately to a complete static line.

### Brand Lockup

The circular VAULT mark pairs with condensed uppercase “Vault” and a smaller, widely tracked gold “Fitness Club.” Preserve the supplied mark's proportions and let the circular asset remain the only recurring round form.

## Do's and Don'ts

### Do:

- **Do** use gold for actions, transitions, and a small number of decisive words or fields.
- **Do** let oversized condensed headlines and generous negative space carry the drama.
- **Do** use the real exterior photograph as architectural evidence and preserve its warm nighttime halo.
- **Do** build hierarchy with 1px rules, field changes, cropping, and alignment.
- **Do** keep call and directions visually primary, especially on mobile.

### Don't:

- **Don't** introduce turf green, neon gradients, chrome effects, or decorative gold glitter.
- **Don't** round buttons, tiles, navigation surfaces, or content containers.
- **Don't** add shadows or floating-card stacks to create depth.
- **Don't** replace the restrained body face with an aggressive gym-display font.
- **Don't** present generated interiors or people as documentary photography of the club.
