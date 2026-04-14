# us — Design System

> This document defines the complete visual design system for the "us" skincare brand landing page. Claude Code must follow these tokens and rules exactly when generating designs in Pencil or writing code.

---

## 1. Color Tokens

### Primary palette — Obsidian & Ivory

| Token | Hex | Usage |
|-------|-----|-------|
| `color.bg` | #F7F5F0 | Page background, left hero column, card backgrounds |
| `color.accent` | #1A1A1A | Primary buttons, active nav indicators, filled elements |
| `color.text` | #0D0D0D | Headlines, nav links, primary body text |
| `color.textSecondary` | #5E5E5E | Supporting copy, subtitles, meta text, hero body text |
| `color.imageBg` | #E0DDD6 | Right hero column, image placeholder backgrounds |
| `color.tagBg` | #1A1A1A0D | Tag pill backgrounds, subtle tinted surfaces |
| `color.tagText` | #3A3A3A | Tag pill text |
| `color.white` | #FFFFFF | Button text on dark backgrounds, text on dark images |
| `color.border` | #0D0D0D0D | Divider lines, trust line top border |

### Hover background accent colors (Bestseller cards only)

> **UPDATE:** Colorful patterned hover backgrounds have been replaced with clinical validation card images. The accent colors in this table are no longer used.

| Product | Hover Background | Pattern |
|---------|-----------------|---------|
| Brightening Vitamin C Serum | Coral/orange | Wavy horizontal stripes |
| Hydrating Hyaluronic Moisturizer | Electric blue | Squiggle patterns |
| Gentle Exfoliating Cleanser | Hot pink | Diagonal stripes |
| Retinol Night Repair Cream | Deep purple | Confetti/dot patterns |
| Daily Defense SPF 50 | Bright yellow | Zigzag patterns |

These accent colors appear ONLY on hover state of bestseller product cards. They do not appear anywhere else on the page.

---

## 2. Typography

### Font families

| Token | Font | Source |
|-------|------|--------|
| `font.headline` | DM Serif Display | Google Fonts |
| `font.body` | DM Sans | Google Fonts |

### Type scale

| Element | Font | Size | Weight | Line height | Color | Letter spacing |
|---------|------|------|--------|-------------|-------|----------------|
| Hero headline | DM Serif Display | 46px | 400 | 1.1 | `color.text` | -0.02em |
| Section headline | DM Serif Display | 30–34px | 400 | 1.2 | `color.text` | -0.02em |
| Nav links | DM Sans | 15px | 500 | 1 | `color.text` | 0 |
| Body text | DM Sans | 15–16px | 400 | 1.65 | `color.textSecondary` | 0 |
| Tag pill | DM Sans | 13px | 500 | 1 | `color.tagText` | 0.04em |
| Trust line | DM Sans | 13px | 400 | 1 | `color.textSecondary` | 0 |
| Button text | DM Sans | 14–15px | 500 | 1 | `color.white` | 0 |
| Card labels | DM Sans | 15px | 500 | 1.3 | `color.text` | 0 |
| Card subtitle | DM Sans | 13–14px | 400 | 1.4 | `color.textSecondary` | 0 |
| Concern tag | DM Sans | 13px | 500 | 1 | varies | 0.04em |
| Footer links | DM Sans | 13–14px | 400 | 1.5 | `color.textSecondary` | 0 |
| Footer headings | DM Sans | 14px | 500 | 1.3 | `color.text` | 0.04em |
| Testimonial name | DM Sans | 17px | 500 | 1.3 | `color.text` | 0 |
| Testimonial quote | DM Sans | 15px | 400 | 1.6 | `color.textSecondary` | 0 |
| Team name overlay | DM Sans | 16px | 500 | 1.3 | `color.white` | 0 |
| Team role overlay | DM Sans | 14px | 400 | 1.3 | `color.white` at 80% opacity | 0 |
| Product description | DM Sans | 14px | 400 | 1.4 | `color.textSecondary` | 0 |

**Minimum font size: 13px. Nothing smaller than 13px anywhere in the design.**

### Rules
- ALL headlines use DM Serif Display. No exceptions.
- ALL body text, labels, buttons, and UI elements use DM Sans. No exceptions.
- Never use Inter, Roboto, Arial, or system fonts anywhere.
- Never use font weights above 500. Only 400 (regular) and 500 (medium).
- Uppercase text is ONLY used for tag pills and footer column headings. Nothing else.

---

## 3. Spacing

### Base unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space.xs` | 4px | Tight internal gaps |
| `space.sm` | 8px | Between icon and text, nav indicator gaps |
| `space.md` | 12px | Card internal padding, gap between small elements |
| `space.lg` | 16px | Section internal gaps, between text blocks |
| `space.xl` | 20px | Between major content blocks within a section |
| `space.2xl` | 24px | Between carousel items, card grid gaps |
| `space.3xl` | 32px | Between section heading and content |
| `space.4xl` | 40px | Hero column internal padding (horizontal) |
| `space.5xl` | 48px | Hero column internal padding (vertical) |
| `space.section` | 80–100px | Vertical space between sections |

### Rules
- All spacing uses multiples of 4px. No arbitrary values.
- Sections are separated by 80–100px of vertical space.
- The hero section has generous internal padding: 48px vertical, 40px horizontal on the copy side.
- Card grids use 24px gaps.

---

## 4. Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius.sm` | 4px | Small tags, badges |
| `radius.md` | 8px | Cards, concern images |
| `radius.lg` | 12px | Product cards, team cards |
| `radius.xl` | 16px | Hero container, large sections |
| `radius.full` | 9999px | Buttons, pills, nav indicators, tag pills |

### Rules
- Buttons are always fully rounded (`radius.full`).
- Cards use `radius.md` or `radius.lg`.
- The hero container uses `radius.xl`.
- Never use border-radius: 0 on any visible element.

---

## 5. Shadows & Effects

- NO drop shadows anywhere on the page. The design is flat.
- NO gradients on surfaces or buttons.
- The ONLY gradient allowed is the gradient blur fade at the bottom of the hero image column (transparent to `color.imageBg`).
- NO glow effects, no neon, no blur filters on UI elements.
- Hover effects on bestseller cards use a background color swap, not a shadow or glow.

---

## 6. Component Patterns

### Buttons
- Primary: `color.accent` background, `color.white` text, `radius.full`, padding 12px 28px
- Secondary/CTA: transparent background, 1px `color.accent` border, `color.text` text, `radius.full`
- No button uses a shadow or gradient. Ever.

### Tag pills
- Background: `color.tagBg`, text: `color.tagText`
- Padding: 5px 12px
- Border radius: `radius.full`
- Text: uppercase, 11px, DM Sans 500, letter-spacing 0.04em

### Cards (product, concern, team, testimonial)
- Background: `color.bg` or transparent
- Border radius: `radius.md` to `radius.lg`
- No borders, no shadows
- Image fills the card area
- Text content sits below the image, never overlaid (exception: team cards where name/role overlay the image with a dark gradient underneath)

### Navigation
- Logo left, links center, CTA right
- Underline animation on hover: line grows from center outward, contracts inward on leave
- Active page indicated by persistent underline
- CTA is a bordered pill (1px `color.accent` border, no fill)

### Carousel
- Horizontal scroll with chevron navigation
- Items slide smoothly with ~300ms transition
- Peek effect: show a sliver of the next item at the right edge to signal scrollability

---

## 7. Animation Tokens (Locked Values)

### Nav
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Underline hover | 0.19s | ease-in-out | scaleX from center, thickness 1.5px |
| Button text wipe fill | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | clip-path:inset() technique, both Build My Regimen and Shop now |

### Hero
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Image crossfade | 450ms | ease | All 5 images (3 before + 2 after) |
| Drag handle scale up | 310ms | cubic-bezier(0.34, 1.56, 0.64, 1) | Couple → person, bounce overshoot |
| Drag handle scale down | 240ms | cubic-bezier(0.4, 0, 0.2, 1) | Person → couple, at current position |
| Drag handle press | 240ms | cubic-bezier(0.34, 1.56, 0.64, 1) | Scale × 1.15, release 240ms ease-out |

### Concerns
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Image hover scale | 300ms | ease | scale(1.05), overflow:hidden on wrapper, no scale on mobile |
| Arrow reveal | 200ms | ease | opacity + translateX(-4px→0), hidden on mobile |
| Button text wipe fill | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | Hover text changes to "Let's find your fix" |
| Mobile scroll snap | native | browser-controlled | No scroll-behavior:smooth, scroll-snap-stop:always |

### Bestsellers
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Image hover crossfade | 300ms | ease | Product ↔ validation card. No hover on mobile |
| Button text wipe fill | 200ms | cubic-bezier(0.4, 0, 0.2, 1) | "View more products" and "Add to cart" |
| Mobile scroll snap | native | browser-controlled | Carousel breakpoints only (800+). <800px uses grid, no scroll. |

### Science Banner
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Marquee scroll | 30s | linear | Infinite, translateX(0→-50%), duplicated items for seamless loop |

### Team
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Mobile scroll snap | native | browser-controlled | No scroll-behavior:smooth |

### Testimonials
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Mobile scroll snap | native | browser-controlled | No scroll-behavior:smooth |

### Footer
| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Image crossfade | 600ms | ease | 5 images cycling every 3.5s with 30% dark overlay |

---

## 8. Image Treatment

- All product photography uses soft studio lighting, subtle shadows
- All model photography uses warm natural lighting
- Hero images fill the right column completely — no padding, no border
- Concern images are tight crops of skin — no full faces, just the affected area
- Team photos have a subtle dark gradient at the bottom for text legibility
- Footer loop images crossfade every 3–4 seconds
- Before/after testimonial images sit flush side by side with a thin 2–4px gap

---

## 9. Responsive Behavior

- Desktop: full two-column hero, 5-product carousel, 6 concern cards in a row
- Tablet: hero stacks to single column (copy on top, image below), 3–4 concern cards per row, 3 products visible
- Mobile: everything single column, 2 concern cards per row, 1–2 products visible with horizontal scroll, team carousel becomes swipeable

---

## 10. Brand Voice (for copy reference)

- Clean, confident, science-backed
- Uses "us" naturally in sentences (the brand name is also a pronoun)
- Hero copy: "Formulated by dermatologists, made for us — every skin type, every concern, one standard of care."
- Never clinical/cold — warm but credible
- No exclamation marks. No hype language. Let the results speak.
