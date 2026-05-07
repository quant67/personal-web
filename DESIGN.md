---
name: Sixseven Labs
description: A composed personal homepage for AI Native projects, writing, experiments, and public trajectory.
colors:
  warm-paper-bg: "#f6f2ea"
  warm-paper-top: "#f9f6ef"
  warm-paper-bottom: "#efe8dc"
  ink: "#171511"
  soft-ink: "#6b655b"
  muted-sand: "#e2dbcf"
  card-paper: "#fbf8f1"
  nav-paper: "#fbf7ef"
  electric-blue: "#2458f5"
  soft-blue: "#8aa8ff"
  violet-note: "#7a6df0"
  black-sticker: "#111111"
typography:
  display:
    fontFamily: "Outfit, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.3rem, 4.8vw, 4.7rem)"
    fontWeight: 800
    lineHeight: 0.94
    letterSpacing: "-0.032em"
  headline:
    fontFamily: "Outfit, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(2.15rem, 4vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.065em"
  title:
    fontFamily: "Outfit, Avenir Next, Segoe UI, sans-serif"
    fontSize: "clamp(1.55rem, 2.6vw, 2.25rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.65
  label:
    fontFamily: "Plus Jakarta Sans, Segoe UI, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.2em"
rounded:
  pill: "999px"
  nav: "1.15rem"
  avatar: "999px"
  icon-soft: "0.78rem"
spacing:
  shell-x-mobile: "1.25rem"
  shell-x-tablet: "1.75rem"
  shell-x-desktop: "2.5rem"
  section-y: "4rem"
  section-y-large: "5rem"
  row-y: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.warm-paper-bg}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.625rem 1rem"
  nav-sticker:
    backgroundColor: "{colors.nav-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.nav}"
    padding: "0.72rem 0.76rem"
---

# Design System: Sixseven Labs

## 1. Overview

**Creative North Star: "The Builder's Field Ledger"**

Sixseven Labs is a composed personal brand surface for a creator whose proof
lives in projects, experiments, writing, and public trajectory. The system feels
like a warm field ledger: structured rows, clear labels, tactile paper surfaces,
and a few signature interactions that make the path memorable.

The site uses professional restraint as its default posture. Typography carries
authority, hairlines organize the page, and warm neutrals keep the reading
environment calm. Blue and violet accents appear as precise annotations across
focus states, motion anchors, and selected marks.

Chinese leads the narrative, English supports the structure, and both languages
stay compact. The strongest visual moments are the native intro, the journey
road, the keyword marquee, the sticky navigation sticker, and ledger-style
project rows.

**Key Characteristics:**
- Warm paper canvas with ink-first typography.
- Hairline-led sections with dense, readable content rhythm.
- Heavy Outfit headings paired with steady Plus Jakarta Sans body copy.
- Rounded pills and circular avatar geometry used as signature shapes.
- Motion that reveals trajectory and respects reduced-motion preferences.

## 2. Colors

The palette is warm paper, primary ink, and precise electric annotation. It
supports credibility first, then adds controlled personal energy.

### Primary
- **Electric Annotation Blue**: Primary action, selection, focus outline, marquee dot, and rare high-energy emphasis.

### Secondary
- **Soft Sky Annotation**: Atmospheric glow and supporting accent wash.
- **Violet Note**: Secondary accent for varied experiment and journey moments.

### Tertiary
- **Black Sticker Ink**: High-contrast status pills and the strongest graphic marks.

### Neutral
- **Warm Paper Background**: Main page background and quiet reading surface.
- **Top Paper Glow**: Top-of-page gradient warmth.
- **Aged Paper Bottom**: Bottom-of-page gradient depth.
- **Primary Ink**: Main text, borders, button fills, and icon strokes.
- **Soft Ink**: Supporting copy, metadata, labels, and subdued navigation.
- **Muted Sand**: Soft dividers, tonal fills, and SVG road surfaces.
- **Card Paper**: Avatar frame and raised paper surfaces.
- **Navigation Paper**: Sticky navigation sticker surface.

### Named Rules

**The Annotation Rule.** Blue works as a mark of intent: focus, action, selection, and tiny movement cues.

**The Paper First Rule.** Large surfaces stay in the warm paper family so the site feels calm, readable, and personal.

## 3. Typography

**Display Font:** Outfit, with Avenir Next, Segoe UI, and sans-serif fallback.
**Body Font:** Plus Jakarta Sans, with Segoe UI and sans-serif fallback.
**Label/Mono Font:** Plus Jakarta Sans, uppercased for metadata.

**Character:** Outfit gives the page confident public-builder energy. Plus Jakarta Sans keeps bilingual body copy precise, compact, and trustworthy.

### Hierarchy
- **Display** (800, `clamp(2.3rem, 4.8vw, 4.7rem)`, `0.94`): Hero headlines and intro title.
- **Headline** (900, `clamp(2.15rem, 4vw, 4rem)`, `0.95`): Section titles.
- **Title** (900, `clamp(1.55rem, 2.6vw, 2.25rem)`, `1`): Project, field note, and article titles.
- **Body** (500, `0.95rem`, `1.65`): Summaries and explanatory copy, capped around 42-48rem on the page.
- **Label** (900, `0.7rem`, `0.2em`, uppercase): Eyebrows, metadata, status labels, and category markers.

### Named Rules

**The Bilingual Priority Rule.** Chinese carries the primary narrative; English clarifies and supports with quieter rhythm.

**The Compact Authority Rule.** Headings are heavy and tight. Body copy stays open enough for scanning and long enough for trust.

## 4. Elevation

The system uses low ambient shadows and structural hairlines. Depth comes from
paper surfaces, round geometry, hover lift, sticky navigation, and SVG drop
shadows.

### Shadow Vocabulary
- **Navigation Ambient** (`0 0.8rem 2rem color-mix(in oklch, var(--foreground) 3%, transparent)`): Resting sticky navigation.
- **Navigation Scrolled** (`0 1rem 2.4rem color-mix(in oklch, var(--foreground) 5%, transparent)`): Sticky navigation after scroll.
- **Social Hover Lift** (`0 0.75rem 1.6rem color-mix(in oklch, var(--foreground) 10%, transparent), 0 0 0 0.28rem color-mix(in oklch, var(--foreground) 7%, transparent)`): Round icon links on hover and focus.
- **Road Vehicle Shadow** (`drop-shadow(0 0.85rem 1rem color-mix(in oklch, var(--foreground) 9%, transparent))`): Interactive road car.

### Named Rules

**The Ledger Line Rule.** Sections, rows, ledgers, and strips use hairline dividers as their primary structure.

**The Responsive Lift Rule.** Shadows intensify through interaction: hover, focus, scroll, and animated story moments.

## 5. Components

### Buttons

Buttons are compact pill actions with an icon capsule at the end.

- **Shape:** Full pill (`999px`) with minimum height (`2.75rem`).
- **Primary:** Primary Ink fill with Warm Paper text, border in Primary Ink, and compact horizontal padding (`1rem`).
- **Secondary:** Transparent fill with Primary Ink text and border.
- **Hover / Focus:** Primary moves toward an ink-blue mix; secondary flips to ink fill and warm paper text. Arrow icons nudge forward.

### Chips

Chips are small moving labels used for keywords and metadata.

- **Style:** Inline pill-like text with a tiny electric blue dot.
- **Motion:** Marquee track loops for 42s with linear timing.
- **Tone:** Muted supporting text keeps the animation present while preserving the reading hierarchy.

### Cards / Containers

The site favors ledger rows and paper strips over generic card stacks.

- **Corner Style:** Large round avatar (`999px`), soft icon corner (`0.78rem`), navigation sticker (`1.15rem`).
- **Background:** Card Paper and Navigation Paper on top of Warm Paper.
- **Shadow Strategy:** Ambient shadows on nav and social links; row sections rely on hairlines.
- **Border:** Hairline borders use foreground mixed at 13-18%.
- **Internal Padding:** Rows use `1.2rem-1.5rem` vertical rhythm; section shell uses `1.25rem-2.5rem` horizontal padding.

### Inputs / Fields

The current homepage has no text input components. Future fields should inherit
Card Paper, Primary Ink borders, pill or soft-rounded shape, and the existing
2px Electric Annotation Blue focus outline.

### Navigation

Navigation is a sticky paper sticker with brand avatar, horizontal anchor pills,
and a bilingual language switcher.

- **Surface:** Navigation Paper with a 1px mixed-ink border and low ambient shadow.
- **Shape:** Rounded rectangle (`1.15rem`) with compact padding.
- **Links:** Rounded nav pills in muted ink, with foreground hover and focus states.
- **Language Toggle:** Mini pill buttons, active state filled with Primary Ink and Warm Paper text.
- **Mobile:** Navigation keeps brand and language switcher visible while link row scrolls horizontally from tablet width upward.

### Signature Component: Road Journey

The road journey is the site's signature interactive story object. A hand-drawn
SVG path, numbered stops, and a tiny car reveal the creator's history through
motion and linked panels.

- **Trigger:** Pointer enter, click, or focus opens the journey.
- **Motion:** Car and path use 1900ms linear keyframes; panels enter with staggered 260-520ms transitions.
- **Visual Role:** This component turns resume content into a clear personal trajectory.

### Signature Component: Native Intro Overlay

The intro overlay creates the first-visit brand moment.

- **Structure:** Full-screen overlay, circular avatar, compact AI Native kicker, and large Chinese title.
- **Motion:** Avatar moves from center into final composition over 2380ms; copy enters after 1160ms.
- **Accessibility:** Reduced-motion users skip the intro; manual skip is always available.

## 6. Do's and Don'ts

### Do:

- **Do** keep the site in light mode with warm paper surfaces.
- **Do** let Chinese lead and use English as clean support text.
- **Do** use hairline rules for structure before adding boxes.
- **Do** preserve electric blue for action, selection, focus, and small animated marks.
- **Do** use Outfit for bold headings and Plus Jakarta Sans for bilingual body copy.
- **Do** keep focus states obvious with a 2px Electric Annotation Blue outline and 4px offset.
- **Do** respect reduced-motion settings across new animations.

### Don't:

- **Don't** make the site feel like a polished corporate portfolio.
- **Don't** use overly formal resume language as the main brand voice.
- **Don't** replace the current ledger rhythm with generic case-study tiles.
- **Don't** turn project sections into identical icon-card grids.
- **Don't** use purple-blue gradients as the main identity device.
- **Don't** add glass panels, blur-heavy surfaces, or decorative gradient text.
- **Don't** use colored side-stripe borders on cards, alerts, rows, or callouts.
