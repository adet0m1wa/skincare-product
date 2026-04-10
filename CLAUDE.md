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
- Text is always #0D0D0D or #6B6B65. Never pure black (#000000).
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
- Underline animation: CSS transform-origin center, scaleX 0→1 on hover, 1→0 on leave. Duration ~250ms, ease-out.

### Hero image navigation
- 3 square boxes at bottom of image column
- Click switches image with a soft crossfade (~400ms)
- Active box: filled #1A1A1A. Inactive: outlined/muted.

### Before/after slider (Hero images 2 & 3)
- Horizontal drag slider dividing the image into before (left) and after (right)
- Slider handle: thin vertical line with a small circular grip
- Drag is constrained horizontally within the image bounds
- Default position: 50% (center)

### Bestseller carousel
- 5 items visible on desktop
- Circular chevron navigation button on the right edge (Phosphor Icons chevron inside a circular frame with 1px border)
- Scrolling slides first 2 out, revealing next 3
- Smooth scroll animation ~400ms
- Product cards: on hover, background transitions from white to the product's accent color/pattern (~300ms)
- "Add to cart" button at the bottom of each card (bordered pill style)

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
