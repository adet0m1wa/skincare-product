# CLAUDE.md — us Skincare Landing Page

> Instructions for Claude Code when working on this project. Read this file completely before making any changes.

---

## Project Overview

A landing page for "us" — a premium, unisex skincare brand. The page has 8 sections: Navigation, Hero, Concerns, Bestsellers, How We Operate, Our Team, Testimonials, Blog, and Footer. The design will be created first in Pencil, then built as code. All icons use Phosphor Icons.

---

## Design Phase — Skills to Activate

When generating or editing designs in Pencil, activate these skills IN THIS ORDER:

1. **`userinterface-wiki`** (Salaja) — `~/.agents/skills/userinterface-wiki`
   Load first. Apply UI design principles, layout fundamentals, and visual hierarchy rules to every frame.
2. **`make-interfaces-feel-better`** (Jakub) — `~/.agents/skills/make-interfaces-feel-better`
   Load second. Apply micro-polish: spacing precision, alignment, visual weight balance, subtle details that elevate the design from good to premium.
3. **`web-design-guidelines`** — `~/.agents/skills/web-design-guidelines`
   Load third. Web-specific design best practices.
4. **`design-audit`** — `~/.claude/skills/design-audit`
   Run after each section is designed. Audit for design system consistency, token usage, spacing alignment.
5. **`design-system-builder`** — `~/.claude/skills/design-system-builder`
   Reference when extracting or verifying design tokens from the design.

## Code Phase — Skills to Activate

When converting designs to code, activate these:

6. **`emil-design-eng`** — `~/.agents/skills/emil-design-eng`
   Primary code generation skill. Design-engineer approach — pixel-accurate, production-grade output.
7. **`animation-patterns`** — `~/.claude/skills/animation-patterns`
   For all animation and transition decisions. Scroll triggers, hover states, carousel transitions, before/after slider interaction.
8. **`component-generation`** — `~/.claude/skills/component-generation`
   For generating reusable React components from the design.
9. **`accessibility-checker`** — `~/.claude/skills/accessibility-checker`
   Run after code generation. Verify semantic HTML, ARIA labels, color contrast, keyboard navigation.
10. **DialKit** (`npm install dialkit motion`) — For fine-tuning animation parameters (easing curves, spring configs, durations). Use during animation QA.

## Deployment & Workflow Skills

11. **`deploy-to-vercel`** — `~/.agents/skills/deploy-to-vercel`
    For deployment when the build is ready.
12. **`git-guardrails-claude-code`** — `~/.agents/skills/git-guardrails-claude-code`
    Always active. Follow git safety rules — commit before experimenting, never stash drop without backup.
13. **`project-mode`** — `~/.claude/skills/project-mode`
    For structuring multi-phase project workflows.
14. **`find-skills`** — `~/.agents/skills/find-skills`
    Use if you need to discover additional skills mid-session.

## Skills NOT used on this project

- **`rive-animation`** — Not needed. This is for the AI marketplace landing page (separate project).
- **`google-docs-report`** — Not needed for this project.

---

## Required Files — Read Before Designing

Before generating ANY design or writing ANY code, read these files in this order:

1. `references.md` — Visual references with annotations on what to replicate and what to adapt
2. `layout.md` — Section-by-section structure with exact content, interactions, and component specs
3. `design-system.md` — Color tokens, typography scale, spacing system, component patterns, image treatment rules

These three files are the single source of truth. If something in this CLAUDE.md conflicts with those files, those files win.

---

## Brand Identity

- **Brand name:** us (always lowercase, never "Us" or "US")
- **Logo:** Custom logomark — lowercase "u" with two circles on top of each stroke (representing male and female), "s" overlapping the right stroke of the "u". The "us" text wherever it appears uses DM Serif Display Italic. Logo files: `logo_black.png` and `logo_white.png`. Leaf emblem files: `emblem-black.png` and `emblem-white.png`.
- **Palette:** Obsidian & Ivory — see design-system.md for all tokens
- **Fonts:** DM Serif Display (headlines only), DM Sans (everything else). No other fonts permitted.

---

## Design Rules — Non-Negotiable

### Typography
- Headlines = DM Serif Display, weight 400. Always.
- Brand name "us" = DM Serif Display Italic wherever it appears.
- Body/UI = DM Sans, weight 400 or 500. Always.
- Never use weight 600 or 700 anywhere.
- Never use Inter, Roboto, Arial, Poppins, or system fonts.
- Minimum font size: 13px. Nothing smaller than 13px anywhere.
- Uppercase text ONLY on tag pills and footer column headings. Nowhere else.

### Color
- Page background is always #F7F5F0 (ivory). Never pure white (#FFFFFF).
- Text is always #0D0D0D or #5E5E5E. Never pure black (#000000).
- The only colorful elements on the entire page are the bestseller hover backgrounds. Everything else is Obsidian & Ivory.
- Button text on dark backgrounds uses #FFFFFF.

### Spacing
- All spacing uses 4px multiples. No arbitrary pixel values.
- Sections separated by 80–100px vertical space.
- Never cram content. Generous whitespace is part of the premium feel.

### Effects
- NO drop shadows. The design is flat.
- NO gradients except the hero image column bottom fade.
- NO glow, blur, or neon effects.
- Hover effects use color swaps, not shadows.

### Layout
- Desktop-first design. 1440px viewport width as the base.
- The hero is a two-column grid inside a rounded container.
- All carousels (products, team) use horizontal scroll with chevron navigation.
- Testimonials are a horizontal row, scrollable.
- Concern cards are a 6-column grid.

---

## Image Assets

All images are in the `assets/` folder. Compressed images use `.webp` format. Use them as specified in layout.md:

### Hero
- `hero-couple.webp` — Image 1, static, no slider
- `hero-female-before.webp` + `hero-female-after.webp` — Image 2, drag slider
- `hero-male-before.webp` + `hero-male-after.webp` — Image 3, drag slider

### Products (normal + hovered states)
- `product-serum.webp` + `product-serum-hover.webp`
- `product-moisturizer.webp` + `product-moisturizer-hover.webp`
- `product-cleanser.webp` + `product-cleanser-hover.webp`
- `product-retinol.webp` + `product-retinol-hover.webp`
- `product-spf.webp` + `product-spf-hover.webp`

### Concerns
- `concern-aging.webp`
- `concern-congestion.webp`
- `concern-texture.webp`
- `concern-eyecare.webp`
- `concern-redness.webp`
- `concern-dryness.webp`

### How We Operate (pending — images not yet generated)
- `how-it-works-1.webp` — Step 1: Tell us about your skin
- `how-it-works-2.webp` — Step 2: We match your regimen
- `how-it-works-3.webp` — Step 3: Delivered to your door
- `how-it-works-4.webp` — Step 4: Track your glow-up

### Team
- `team-amara.webp` — Dr. Amara Osei, Chief Dermatologist
- `team-james.webp` — Dr. James Adebayo, Head of Research
- `team-leah.webp` — Leah Chen, Lead Cosmetic Chemist
- `team-david.webp` — David Okonkwo, Product Development Director
- `team-sofia.webp` — Sofia Mensah, Clinical Trials Manager

### Testimonials
- 8 before/after pairs: `testimonial-1.webp` through `testimonial-8.webp`

### Footer loop
- `footer-loop-1.webp` through `footer-loop-5.webp`

### Blog (pending — images not yet generated)
- `blog-1.webp` — "5 Ingredients Your Dermatologist Wants You to Avoid"
- `blog-2.webp` — "How to Build a Morning Routine That Actually Works"
- `blog-3.webp` — "The Truth About Vitamin C Serums"

### Logos (PNG — not compressed)
- `logo_black.png` — for use on light backgrounds
- `logo_white.png` — for use on dark backgrounds or image overlays
- `emblem-black.png` — circular leaf logo mark, light backgrounds
- `emblem-white.png` — circular leaf logo mark, dark backgrounds

---

## Interactions — Code Phase

### Navigation
- Nav underline hover: scaleX 0→1 from center on hover, 1→0 on leave. Duration 0.19s, thickness 1.5px, offset Y 0, easing ease-in-out. HARDCODED — no DialKit.
- Button text wipe fill (Build My Regimen + Shop now): dual-layer clip-path:inset() technique. Fill span translateY 100%→0, black text span z-10, ivory (#F7F5F0) text clone span with clip-path:inset(100% 0 0 0)→inset(0 0 0 0) z-20. Duration 200ms, easing cubic-bezier(0.4, 0, 0.2, 1). Safari fix: [transform:translateZ(0)] on button. HARDCODED — no DialKit.
- Below 1000px: Shop now is pre-filled (#1A1A1A bg, #F7F5F0 text), fill/clone spans hidden. Build My Regimen hidden.

### Hero — Image Navigation
- 3 square thumbnails at bottom of image column
- Click switches main image with crossfade: 450ms ease. All 5 images (3 before + 2 after) always in DOM, stacked absolutely, controlled via opacity 0/1.
- Active thumbnail: opacity 0.3, no border. Inactive: 1px solid #1A1A1A border, full opacity.
- Thumbnails and drag handle use z-index: 2 to sit above the image stack.

### Hero — Drag Handle
- Circular handle positioned at right edge (100%) by default. Only interactive on images 2 and 3 (female/male). pointerEvents none on couple image.
- Background: #F7F5F0, text: #0D0D0D, no opacity.
- Scale animation on navigation:
  - Couple → person: scale 0→1, 310ms cubic-bezier(0.34, 1.56, 0.64, 1) (bounce overshoot)
  - Person → couple: scale 1→0 at current drag position, 240ms cubic-bezier(0.4, 0, 0.2, 1)
  - Person → person: stays scale 1, no animation, drag position preserved
  - Couple → person: drag resets to 100% (right edge)
- Press bounce: scale × 1.15 on pointer down, 240ms cubic-bezier(0.34, 1.56, 0.64, 1). Release: 240ms ease-out.
- Drag is horizontal only, 0–100% of container width. Uses pointer capture.
- Cursor: grab (idle), grabbing (dragging).

### Hero — Before/After Reveal
- Only active on images 2 (female) and 3 (male). Image 1 (couple) has no reveal.
- "After" image sits on top of "before" image, clipped via clipPath: inset(0 0 0 dragPercent%).
- At 100% (start): full "before" visible. At 0%: full "after" visible. At 50%: left half before, right half after.
- After images crossfade in/out with the same 450ms ease as before images.

### Concerns — Cards
- 6 cards in a horizontal grid (desktop)
- Image hover: scale 1.05, 300ms ease. No scale on mobile.
- Image wrap has overflow:hidden to contain the scale
- Label: underline via border-bottom 1px solid #0D0D0D, padding-bottom 2px
- Arrow: hidden by default, on card hover slides in from left (opacity 0→1, translateX -4px→0, 200ms ease). Hidden on mobile.
- "Got a unique concern?" button: text wipe fill (200ms, cubic-bezier(0.4,0,0.2,1)). Default text: "Got a unique concern?". Hover text: "Let's find your fix". Mobile: pre-filled #1A1A1A, no hover animation.
- Mobile scroll: native CSS scroll snap, NO scroll-behavior:smooth. scroll-snap-stop:always prevents page skipping.
- Tablet (600–999px): 3.5 cards visible, 2 snap pages (card 1 and card 4)
- Phone (<600px): 2.5 cards visible, 3 snap pages (card 1, card 3, card 5)
- Hidden scrollbar on all mobile viewports

### Bestsellers — Product Carousel
- Desktop (1000–1440px): 3.5 cards visible, 2 snap pages (card 1 and card 4). No chevrons — swipe only.
- 900–999px: 3.5 cards, 2 pages
- 800–899px: exactly 3 cards, 2 pages (card 1 and card 4)
- 450–799px: exactly 2 cards, 3 pages (card 1, card 3, card 5)
- <450px: 1 card full width, image 75% centered, button 75% centered, 5 pages (every card)
- Image hover: crossfade between default and validation image, 300ms ease. No hover on mobile.
- All text truncates (nowrap + ellipsis) — desc, name, price, button
- Image: object-fit contain, white (#FFFFFF) background, aspect-ratio 3/4
- "View more products" button: text wipe fill (200ms, cubic-bezier(0.4,0,0.2,1)). Mobile: pre-filled dark.
- "Add to cart" button: same text wipe fill. Mobile: pre-filled dark.
- Native CSS scroll snap, NO scroll-behavior:smooth. scroll-snap-stop:always.

### Testimonials carousel
- Circular chevron navigation arrows (same style as bestsellers) on both left and right edges
- Smooth horizontal scroll

### Team carousel
- Horizontal scroll with peek effect at edges
- Smooth drag/scroll behavior

### Footer loop
- Images crossfade every 3–4 seconds
- Soft transition ~600ms

---

## Reporting Format

- Use TABLES for any audit or status reports. Never prose paragraphs.
- Reference elements by LAYER NAME, never by node ID.
- When reporting design issues, sort by severity highest to lowest.
- Go screen by screen in section order (Nav → Hero → Concerns → Bestsellers → How We Operate → Team → Testimonials → Blog → Footer).

---

## Git & Workflow

- ALWAYS commit before experimenting with layout or animation changes.
- Branch strategy: `main` (stable) + `feature/design` (active work)
- Update this CLAUDE.md at every stable checkpoint.
- Never edit design.pen while Claude Code is running.

---

## What NOT to Do

- Do NOT use abbreviations "CD" or "CC" — always say "Claude AI" and "Claude Code" in full.
- Do NOT generate placeholder/lorem ipsum text. All copy is provided in layout.md.
- Do NOT add sections, components, or pages not specified in layout.md.
- Do NOT use any font other than DM Serif Display and DM Sans.
- Do NOT use shadows, gradients, or glow effects.
- Do NOT place the "us" brand name in uppercase or title case. It is always lowercase.
- Do NOT use Rive animations on this project. Rive is for the AI marketplace landing page only.
