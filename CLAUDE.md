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

Desktop: Radix NavigationMenu (@radix-ui/react-navigation-menu). delayDuration=150, skipDelayDuration=300.

Nav structure:
- Bestsellers — NavigationMenu.Link (direct link, scrolls to #bestsellers-title)
- Skincare — Trigger + mega menu Content (By Product + By Concern columns + featured image)
- Body + Hair — Trigger + mega menu Content (Body + Hair columns + featured image)
- Sets — NavigationMenu.Link (direct link)
- About — Trigger + small dropdown Content (5 links)

Viewport positioning (JS-hybrid):
- Wide dropdowns (Skincare, Body + Hair): viewport centered in nav-center
- Narrow dropdowns (About): viewport left-aligns to its trigger via onValueChange + getBoundingClientRect
- NARROW_ITEMS Set in Nav.tsx tracks which items get trigger-aligned positioning

Animations:
- Viewport open: 200ms cubic-bezier(0.22, 1, 0.36, 1), translateY(8px→0) + scale(0.96→1)
- Viewport close: 150ms same easing
- Viewport resize between dropdowns: 250ms via CSS transition on width/height using --radix-navigation-menu-viewport-width/height
- Content directional slide: 200ms, data-motion="from-start/from-end/to-start/to-end", translateX(±30px) + opacity
- Indicator: 6px tall container with overflow:hidden, 8×8px rotated square at top 60% (shadcn/ui pattern)

Featured images:
- src/assets/nav/nav-skincare-featured.webp (4 products on marble)
- src/assets/nav/nav-bodyhair-featured.webp (hands with towel + eucalyptus)

Sticky + hide/show nav: unchanged (position sticky, top 0, z-index 50, bg #F7F5F0, scroll direction tracking with 100px threshold, translateY(-100%) on scroll down).

Logo click: smooth scroll to top via window.scrollTo.

Nav button text wipe: unchanged (clip-path two-layer).

### Mobile Menu

Full-screen overlay (src/components/MobileMenu.tsx + MobileMenu.css). Triggered by hamburger button in nav-right. Hidden entirely on desktop via @media (min-width: 1000px) { display: none !important }.

Structure:
- Header: logo + X close button
- Nav list: 5 items
  - Bestsellers — direct link (scrolls to #bestsellers-title)
  - Skincare — accordion (6 sub-links)
  - Body + Hair — accordion (7 sub-links)
  - Sets — direct link
  - About — accordion (5 sub-links)
- Footer CTA: "Build My Regimen" button

Open/close animation:
- Open: clip-path inset(0 0 100% 0) → inset(0), 350ms cubic-bezier(0.16, 1, 0.3, 1) — wipes down from top
- Visibility hidden → visible synced with clip-path

Link entrance:
- Each item: opacity 0 + translateY(8px) → visible, 200ms cubic-bezier(0.22, 1, 0.36, 1)
- Stagger: 100ms / 140ms / 180ms / 220ms / 260ms (40ms intervals, starting at 100ms delay)

Accordion expand/collapse:
- grid-template-rows: 0fr → 1fr technique, 250ms cubic-bezier(0.22, 1, 0.36, 1)
- Inner div uses overflow: hidden to clip collapsed state cleanly
- Only one accordion open at a time (state-managed)
- Chevron: rotates 45deg → -135deg on expand

Link typography:
- Top-level: DM Serif Display, clamp(22px, calc(16px + 2vw), 32px), fluid scaling 22→32px
- Sub-links: DM Sans 16px, color #5E5E5E

Accessibility:
- Body scroll locked when open (overflow: hidden)
- Focus moves to first link on open, returns to hamburger on close
- Escape key closes menu
- aria-expanded on hamburger and accordion triggers
- aria-controls linking hamburger to #mobile-menu
- aria-hidden on overlay when closed

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
- "Got a unique concern?" button: clip-path two-layer hover (200ms, cubic-bezier(0.4,0,0.2,1)). Default text: "Got a unique concern?" (z-0). Hover text: "Let's find your fix" on dark bg (z-10). Mobile: hover span forced visible, default hidden.
- Mobile scroll: native CSS scroll snap, NO scroll-behavior:smooth. scroll-snap-stop:always prevents page skipping.
- Tablet (600–999px): 3.5 cards visible, 2 snap pages (card 1 and card 4)
- Phone (<600px): 2.5 cards visible, 3 snap pages (card 1, card 3, card 5)
- Hidden scrollbar on all mobile viewports

### Bestsellers — Product Carousel
- Desktop (1000–1440px): 3.5 cards visible, 2 snap pages (card 1 and card 4). Swipe only — no chevrons.
- 900–999px: 3.5 cards, 2 pages
- 800–899px: exactly 3 cards, 2 pages (card 1 and card 4)
- <800px: switches to 2-column grid (no horizontal scroll)
- 450–799px: 2-column grid, 16px column gap, 36px row gap. Text wraps freely (no truncation). Name and desc min-height 3em for row alignment.
- <450px: 2-column grid, 12px column gap, 32px row gap. Font sizes reduced (desc 11px, name 13px, price 13px, btn 12px).
- Image: aspect-ratio 4:5, object-fit contain, white (#FFFFFF) background
- Hover: crossfade between product image and clinical validation card, 300ms ease. No hover on mobile.
- Old colorful patterned hover backgrounds REMOVED — replaced with validation images (e.g. "CLINICALLY TESTED — Dark spots reduced by 47% in 4 weeks")
- "View more products" button: clip-path two-layer hover (200ms, cubic-bezier(0.4,0,0.2,1)). Mobile: hover span forced visible.
- "Add to cart" button: same clip-path two-layer. Mobile: hover span forced visible.
- All text truncates on desktop (nowrap + ellipsis). Mobile grid: text wraps freely, desc clamped at 2 lines.
- Native CSS scroll snap on carousel breakpoints, NO scroll-behavior:smooth. scroll-snap-stop:always.

### How it Works — Step Cards
- Desktop: 4-column grid
- 800–999px: 3-card horizontal scroll, 2 snap pages (card 1 and card 4)
- <800px: vertical stack — each step becomes a horizontal row with image left (120px square) and number + title + description stacked on the right. 40px gap between steps. 20px column gap, 8px row gap inside each step.
- Description clamped to 3 lines max
- No scroll-behavior:smooth on any breakpoint
- "Get started" button removed

### Science Banner
- Static "Grounded in science." / "Driven by purpose." headline (2 lines, centered, DM Serif Display, same size as other section headers)
- Infinite horizontal marquee below: "Parabens Free • Cruelty Free • Vegan • Sulfate Free • Clinically Tested • Dermatologist Approved"
- Marquee: 30s linear infinite, items duplicated twice for seamless loop, translateX(0) → translateX(-50%)
- IntersectionObserver pauses marquee animation (animation-play-state: paused) when off-screen
- 40px margin-top from headline (top border REMOVED)
- Original "Every formula passes through..." paragraph text REMOVED

### Team
- 5 team member cards in a horizontal row on desktop
- Each card: portrait photo with dark gradient overlay at the bottom (transparent at 50% → rgba(0,0,0,0.55) at bottom) for text legibility
- Name (DM Serif Display italic) and role (DM Sans) overlaid at bottom of each card
- David Okonkwo role shortened to "Product Dev. Director" to fit 3 lines matching other cards
- Mobile (<1000px): horizontal swipe scroll with snap, same pattern as other sections

### Testimonials
- Section heading: "Real skin, real results" (or as per Pencil)
- Horizontal scrollable row of testimonial cards
- Desktop: 3 cards visible with peek
- 600–999px: 2 cards with peek
- <600px: 1 card with peek
- Hidden scrollbar, scroll-snap-stop:always
- Each card: before/after image pair, person name, duration, testimonial quote
- No scroll-behavior:smooth

### Blog
- Section heading: "From the journal" + "Read more" button (clip-path two-layer text wipe, no arrow, no <a> tag)
- Desktop: 3-column grid
- 600–999px: horizontal scroll, 2 snap pages (card 1 and card 3)
- <600px: vertical stack, full-width cards, 32px gap, no horizontal scroll
- Titles underlined via border-bottom 1px solid #0D0D0D, padding-bottom 2px — no truncation, wraps freely to 2 lines
- Blog title font: var(--text-body) matching Concerns card labels
- No scroll-behavior:smooth

### Footer
- Desktop: image panel (crossfading loop images, 600ms ease, 3.5s interval, 30% dark overlay) + nav panel side by side
- Border-top on .ft-root REMOVED (footer sits flush on page background)
- Logo and tagline REMOVED from image panel
- Signup form (heading, subtitle, email input + subscribe button) inside image panel, left-aligned, white text on dark overlay
- Signup heading: DM Serif Display, left-aligned (not centered)
- Email input + subscribe always horizontal EXCEPT <450px where they stack vertically with individual borders (no shared wrapper border), subscribe button aligned right
- Nav panel: 2-column grid of link columns (Shop, Learn, Connect, Support, Company)
- Nav heading font-weight: 600 — intentional exception to the "never use 600" rule for visual hierarchy on footer column headings
- Nav row-gap: 48px between column rows; link gap: 18px between links within each column
- Bottom: Privacy / Terms / Accessibility links + copyright
- All spacing uses clamp() for fluid scaling between 375px–1440px
- Nav link hover: underline with 3px offset

### Scroll-Triggered Section Reveals

Two utility classes in index.css:
- `.fade-up` — opacity 0→1 + translateY(10px→0), 350ms var(--ease-default). For headings, subtitles, buttons.
- `.fade-in` — opacity 0→1 only, 500ms default (overridden inline per section). For images, cards, marquee. No translateY.

useReveal hook (src/hooks/useReveal.ts): IntersectionObserver with rootMargin `'0px 0px -30% 0px'`. Fires once, disconnects. Skips animation (instantly revealed) if prefers-reduced-motion is set.

RevealHeading component (src/components/RevealHeading.tsx): word-level overflow:hidden + translateY(120%→0) reveal at 350ms/word. Supports `lines` prop for multi-line headings (each line gets its own mask). Supports `externalRevealed` prop to sync with a parent IntersectionObserver instead of its own. staggerMs default 60ms per word. paddingBottom 0.15em on masks for descenders.

Text animation duration: 350ms (fade-up and word reveal per word).
Image/card animation duration: 1000–1200ms (fade-in, opacity only).
CSS uses longhand transition properties (transition-property, transition-duration, transition-timing-function) to allow inline duration/delay overrides.

| Section | Heading | Paragraph | Button | Images/Cards |
|---------|---------|-----------|--------|-------------|
| Hero | word reveal 0ms (350ms/word, 60ms stagger, ~650ms total) | fade-up delay 200ms (done 550ms) | fade-up delay 450ms (done 800ms) | fade-in 1200ms |
| Concerns | fade-up 0ms (done 350ms) | fade-up delay 200ms (done 550ms) | fade-up delay 450ms (done 800ms) | fade-in 1200ms |
| Bestsellers | fade-up 0ms (done 350ms) | fade-up delay 200ms (done 550ms) | fade-up delay 450ms (done 800ms) | fade-in 1200ms |
| Science Banner | word reveal 0ms (~650ms total) | — | — | marquee fade-in delay 400ms, 1000ms duration |
| Testimonials | fade-up 0ms (done 350ms) | fade-up delay 200ms (done 550ms) | fade-up delay 450ms (done 800ms) | fade-in 1200ms |
| Blog | fade-up 0ms (done 350ms) | — | fade-up delay 200ms (done 550ms) | fade-in 1000ms |
| How it Works | NONE | — | — | — |
| Team | NONE | — | — | — |
| Footer | NONE | — | — | — |

Pattern: text elements cascade in sequence, images/cards start at 0ms but take the longest, always finishing last.

Animations ONLY fire when scrolling DOWN. useReveal tracks scroll direction via lastScrollY ref. Scrolling up past an unrevealed section does nothing. Exception: hero fires on page load (scrollY === 0 treated as scrolling down).

All reveals fire once on scroll-down only. Never replay.
Reduced motion: fade-up and fade-in instantly visible, word reveal skipped.

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
