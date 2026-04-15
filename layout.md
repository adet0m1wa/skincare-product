# us — Skincare Brand Landing Page Layout

---

## Navigation (top bar)

**Structure:** Full-width, sits on the ivory background
- **Left:** "us" logo (logo_black.png) — the custom logomark with the two circles and overlapping s
- **Center:** Nav links — Bestsellers, Skincare, Body + Hair, Sets, About
- **Right:** Cart icon (Phosphor Icons) + CTA pill button — "Build My Regimen" with subtle 1px #1A1A1A border, no fill
- **Icons:** All icons across the site use Phosphor Icons
- **Interaction:** Underline animation on hover — line grows outward from center on hover, contracts inward on leave
- **Style:** No background color, sits on the ivory page background. Text is #0D0D0D. Minimal, no borders or dividers between nav and hero

**Reference:** reference-ordinary-nav.png

---

## Section 1 — Hero

**Layout:** Two-column grid, equal width, contained in a rounded box

**Left column — Copy (background #F7F5F0 ivory):**
1. Tag pill — "Clinically tested · Dermatologist approved" — uppercase, 13px, DM Sans 500, #3A3A3A text on #1A1A1A0D background, full rounded
2. Headline — DM Serif Display, ~46px, #0D0D0D, two lines: "Your skin deserves more than guesswork"
3. Supporting copy — DM Sans 400, 15px, #6B6B65, max-width ~360px: "Formulated by dermatologists, made for us — every skin type, every concern, one standard of care."
4. CTA row — Primary pill button only (#1A1A1A background, white text, "Shop now"). No secondary text link.
5. Trust line — "★★★★★ 4,800+ reviews | Free shipping over $50" — 13px, #6B6B65, separated from above by a subtle 1px top border

**Right column — Image area (background #E0DDD6):**
- 3 images controlled by square navigation boxes at the bottom
- Gradient blur fade at the bottom where navigation controls sit
- **Image 1 (default):** Static shot — male and female model together, each holding a navy blue "us" serum bottle. Aspirational, relaxed, woman resting head on man's shoulder with eyes closed, man looking at camera. No slider.
- **Image 2:** Female before/after with drag slider. Before = hoodie, comedones and congestion. After = braids, clear glowing skin, Spider-Man tee, peace sign, outdoors. No product in hand.
- **Image 3:** Male before/after with drag slider. Before = tank top on couch, pockmarks, puffed cheeks. After = suit in car, clear smooth skin, confident smile.
- Navigation: 3 small square boxes at bottom center over the gradient. Active square is filled (#1A1A1A), inactive squares are outlined/muted.

**Interactions:**
- Square thumbnail navigation switches between 3 images with 450ms ease crossfade
- Drag handle appears on images 2 and 3 only (scales up with bounce from right edge)
- Drag handle moves horizontally across the image. At start (right edge): full "before" visible. Dragging left reveals "after" from the right via clip-path split.
- Drag position persists when switching between images 2 and 3. Resets to right edge only when returning from couple.
- Image 1 (couple) is static — no slider, no drag handle

**References:** reference-kit-hero.png, reference-curology-hero.png

**Assets:**
- hero-couple.webp (Image 1)
- hero-female-before.webp, hero-female-after.webp (Image 2)
- hero-male-before.webp, hero-male-after.webp (Image 3)

---

## Section 2 — Concerns

**Layout:** Full-width section, centered content
- Section heading at top left — "Common Concerns" or similar
- Subheading — one line of supporting text

**Content:** Horizontal row of 6 concern cards
- Each card has a close-up skin photo (cropped face showing the concern area)
- Concern label underneath — Aging, Congestion, Texture, Eye Care, Redness, Dryness
- Arrow (→) beside each label indicating it's clickable
- No product images in this section — purely about the problem

**Card style:**
- Rounded corners
- Image fills the card
- Text sits below the image, not overlaid
- Even spacing between cards

**Interactions:**
- Cards: image scales 1.05 on hover, label arrow slides in from left on hover
- Labels are underlined (border-bottom), arrow hidden by default
- "Got a unique concern?" button uses text wipe fill — hover reveals "Let's find your fix"
- Mobile: 2-card snap scroll with peek, no hover effects, button pre-filled dark

**Reference:** reference-ordinary-concerns.png

**Assets:** 6 concern close-up images (aging, congestion, texture, eye-care, redness, dryness)

---

## Section 3 — Bestsellers

**Layout:** Full-width section
- Header row: "Bestsellers" heading on the left, "View more products →" link on the right (leads to sign-up gate)
- Product carousel below

**Carousel:**
- Desktop: 3.5 cards with swipe, 2 snap pages. No chevrons.
- 900–999px: 3.5 cards, 2 pages
- 800–899px: 3 cards, 2 pages
- <800px: 2-column product grid (no horizontal scroll)
- 450–799px: 2-column grid, text wraps freely, no truncation
- <450px: 2-column grid with reduced font sizes
- All card text wraps on mobile grid, no truncation
- Native scroll snap at carousel breakpoints, no smooth behavior
- Product images: contain fit on white background, aspect 4:5
- Hover: crossfade to clinical validation card (e.g. 'CLINICALLY TESTED — Dark spots reduced by 47% in 4 weeks'). No colorful backgrounds.

**Product card contents:**
- Product image on a neutral white background (default state)
- On hover: crossfade to clinical validation card (e.g. 'CLINICALLY TESTED — Dark spots reduced by 47% in 4 weeks'). No colorful backgrounds.
- Concern tag at top right corner of the card — e.g. "Aging", "Texture", "Redness", "Hydration", "Protection"
- Below the image: product name, short description (1 line), price, star rating
- "Add to cart" CTA button at the bottom of each card (bordered pill style, matching NIOD layout)

**Product descriptions:**
1. Brightening Vitamin C Serum — "Brightens, evens tone, fades dark spots"
2. Hydrating Hyaluronic Moisturizer — "Hydrates, plumps, restores moisture barrier"
3. Gentle Exfoliating Cleanser — "Smooths, unclogs pores, refines texture"
4. Retinol Night Repair Cream — "Firms, repairs, reduces fine lines overnight"
5. Daily Defense SPF 50 — "Shields, prevents damage, lightweight daily wear"

**Navigation:** No chevrons — swipe/scroll only on all viewports.

**Products:**
1. Brightening Vitamin C Serum — navy blue pump bottle (hover: coral/orange wavy stripes)
2. Hydrating Hyaluronic Moisturizer — matte white jar (hover: electric blue squiggles)
3. Gentle Exfoliating Cleanser — sage green squeeze tube (hover: hot pink diagonal stripes)
4. Retinol Night Repair Cream — matte black jar with gold lid (hover: deep purple confetti dots)
5. Daily Defense SPF 50 — terracotta pump bottle (hover: bright yellow zigzags)

**Card style:**
- Rounded corners
- Generous card height — image dominates
- Name and price sit below the card, not inside it
- Hover transition is smooth (~300ms)

**References:** reference-drunkelephant-bestsellers.png, reference-ordinary-bestsellers.png

**Assets:** 5 product images (normal) + 5 product images (hovered) = 10 total

---

## Section 4 — How We Operate

**Layout:** Full-width section
- Section heading: "How it works" — DM Serif Display, left-aligned
- Mobile (<800px): vertical stack — image left (120px), text right. Description clamped to 3 lines.

**Content:** 4 steps in a horizontal row, each with an image above and numbered step below

**Steps:**
1. **"Tell us about your skin"** — User takes a skin assessment. Image: woman on couch answering quiz on her phone.
2. **"We match your regimen"** — Brand recommends personalized products. Image: flat lay of curated product set on marble surface.
3. **"Delivered to your door"** — Products ship. Image: man opening delivery box with products inside.
4. **"Track your glow-up"** — Ongoing support and reminders. Image: woman checking progress tracker on phone in bathroom.

**Each step card:**
- Image fills the top portion (rounded corners)
- Large number (1, 2, 3, 4) in DM Serif Display, ~42px, #0D0D0D
- Step title in DM Sans 500, 17px, #0D0D0D
- Short description in DM Sans 400, 14px, #6B6B65 (visible at all times, no hover required)

**Assets:** 4 images in assets/how-it-works/ (how-it-works-1.png through how-it-works-4.png)

---

## Section 5 — Our Team / Why Trust Us

**Layout:** Two parts stacked vertically

**Part 1 — Copy block (top):**
- Bold headline — DM Serif Display — "Grounded in Science. Driven by Purpose."
- Short paragraph — DM Sans, secondary text color — about safety, clinical testing, dermatologist-formulated products. No specific ingredient lists.
- CTA button — "Meet the team" or "Look inside our lab" — bordered pill style

**Part 2 — Team carousel (below):**
- Horizontal scrollable row of 5 team member cards
- Each card is a portrait photo (professional, white lab coat with embroidered circular leaf logo, MD credentials)
- Name and role overlaid at the bottom of each card with a small divider line above the text
- Cards have slight overlap or peek effect at the edges to signal scrollability

**Team members:**
1. Dr. Amara Osei — Chief Dermatologist
2. Dr. James Adebayo — Head of Research
3. Leah Chen — Lead Cosmetic Chemist
4. David Okonkwo — Product Development Director
5. Sofia Mensah — Clinical Trials Manager

**Card style:**
- Tall portrait ratio
- Rounded corners
- Name in DM Sans medium, role in regular weight, both overlaid on the image
- Subtle dark gradient at the bottom of each image for text legibility
- Card images have dark gradient overlay (transparent → rgba(0,0,0,0.55)) for name/role legibility. David Okonkwo role: "Product Dev. Director".

**Reference:** reference-ordinary-team-intro.png, reference-ordinary-team-carousel.png

**Assets:** 5 team portrait images

---

## Section 5.5 — Science Banner

**Layout:** Full-width, centered
- Headline: "Grounded in science." / "Driven by purpose." — DM Serif Display, centered, 2 lines
- Below: infinite horizontal marquee of trust signals
- Items: "Parabens Free • Cruelty Free • Vegan • Sulfate Free • Clinically Tested • Dermatologist Approved"

---

## Section 6 — Testimonials

**Layout:** Full-width section
- Section heading at top — star rating + total review count + CTA button on the right ("Start your journey")

**Content:** Horizontal row of 8 testimonial cards, scrollable

**Each testimonial card contains:**
- Side-by-side before/after photos of the same person (no labels — labels added in design, not on images)
- "Results may vary" disclaimer text in small print below the photos
- Quote mark icon (")
- Person's first name — DM Sans medium
- Short testimonial quote — DM Sans regular, secondary text color, 2–3 lines max

**Testimonials:**
1. Amara — acne, 1 month
2. Marcus — cystic acne, 3 months
3. Priya — hyperpigmentation, 6 months
4. Tyler — congestion/whiteheads, 2 months
5. Zara — redness/rosacea, 1 year
6. Daniel — texture/pores, 4 months
7. Nia — dryness/flaking, 8 months
8. Andre — pockmarks/scarring, 5 months

**Card style:**
- No card border or background — clean, open layout
- Before/after photos sit flush next to each other with a thin gap
- Text content sits below the photo pair
- Even spacing between testimonial groups

**Interactions:** Desktop: 3 cards with peek. Tablet: 2 with peek. Phone: 1 with peek. Horizontal scroll with snap, no scroll-behavior:smooth.

**Reference:** reference-curology-testimonials.png

**Assets:** 8 before/after testimonial image pairs

---

## Section 7 — Blog

**Layout:** Full-width section
- Section heading: "From the journal" — DM Serif Display, left-aligned
- "Read more" button on the right (clip-path two-layer text wipe, no arrow)

**Content:** 3 blog post cards in a horizontal row

**Interactions:** Desktop: 3-column grid. Tablet (600–999px): horizontal scroll, 2 snap pages. Phone (<600px): vertical stack, 32px gap. Titles underlined (border-bottom), no truncation.

**Blog posts:**
1. **"5 Ingredients Your Dermatologist Wants You to Avoid"** — Category: Ingredients. Image: flat lay of products with red X marks.
2. **"How to Build a Morning Routine That Actually Works"** — Category: Routines. Image: bathroom countertop with products lined up in morning light.
3. **"The Truth About Vitamin C Serums"** — Category: Ingredients. Image: orange slices with a dark glass dropper bottle on marble.

**Each blog card:**
- Featured image fills the top portion (rounded corners)
- Category tag pill below the image (uppercase, small, same style as concern tags)
- Blog post title in DM Sans 500, 17px, #0D0D0D
- Short excerpt in DM Sans 400, 14px, #6B6B65, 2 lines max

**Assets:** 3 images in assets/blog/ (blog-1.png, blog-2.png, blog-3.png)

---

## Section 8 — Footer

**Layout:** Two parts stacked vertically

**Part 1 — Pre-footer (image panel + nav panel side by side):**
- **Image panel:** Crossfading loop images with 30% dark overlay. No logo overlay.
- **Signup form inside image panel:** Heading ("Sign up and receive 15% off your first order."), subtitle, email input + "Subscribe" button
- Signup heading left-aligned. Email + subscribe horizontal always, except <450px: stack vertically with individual borders, subscribe aligned right.
- All spacing uses clamp() for fluid scaling.

**Part 2 — Footer nav (bottom):**
- Multiple columns of navigation links organized by category
- Suggested columns: Skincare, Body Care, Sets, Learn, Connect
- Each column has a bold category heading with regular-weight links underneath
- Nav heading font-weight: 600 (intentional exception to the weight-500 rule, for visual hierarchy on column headings)
- Nav row-gap: 48px between column rows; link gap: 18px between individual links
- Bottom row: copyright text ("© 2026 us Skincare"), privacy policy, terms links

**Style:**
- Footer sits flush on page background — no top border on .ft-root
- Footer nav text is small (13–14px), secondary color
- Clean column alignment with even spacing

**Reference:** reference-drunkelephant-footer.png

**Assets:** 5 footer loop images (people holding products)

---
