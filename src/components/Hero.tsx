// Hero — port of pencil-new.pen "Landing Page- new" Section 1 Hero (9Q81H)
// with responsive behavior layered on top. Pixel-exact values live in Hero.css.
// Per the initial port instructions, no before/after drag interaction yet —
// the uzHxA drag handle is visual-only.
//
// DialKit integration: headlineToBody / bodyToButton gaps and bodyColor are
// tunable live in dev via the "Hero Copy" panel. In prod, static defaults
// from hero-dials.ts are used and dialkit is tree-shaken out.
import { lazy, Suspense, useState } from 'react';
import heroCouple from '../assets/hero/hero-couple.webp';
import heroFemaleBefore from '../assets/hero/hero-female-before.webp';
import heroMaleBefore from '../assets/hero/hero-male-before.webp';
import { HERO_DIAL_DEFAULTS, type HeroDials } from './hero-dials';
import './Hero.css';

// Dev-only: lazy-import the DialKit host. Same tree-shake guarantee as
// the Nav dials — in prod the ternary resolves to null and Rollup drops
// the entire hero-dials-dev module + its dialkit transitive deps.
const HeroDialsHost = import.meta.env.DEV
  ? lazy(() => import('./hero-dials-dev'))
  : null;

export function Hero() {
  const [dials, setDials] = useState<HeroDials>(HERO_DIAL_DEFAULTS);

  return (
    // 9Q81H — Hero section. Layout + responsive rules in Hero.css.
    <section className="hero-root" aria-labelledby="hero-headline">
      {HeroDialsHost && (
        <Suspense fallback={null}>
          <HeroDialsHost onChange={setDials} />
        </Suspense>
      )}

      {/* VHI4l — Hero/Left: copy column */}
      <div className="hero-left">
        {/* V5VS2 — vertical stack. Individual gaps between the three
            children are driven by DialKit values (headlineToBody,
            bodyToButton) so the shared CSS gap is set to 0. */}
        <div className="hero-left-stack" style={{ gap: 0 }}>
          {/* T7EqY — Hero/Left/Headline */}
          <h1 id="hero-headline" className="hero-headline">
            {'Your skin deserves\nmore than guesswork'}
          </h1>

          {/* W8V99 — Hero/Left/Body */}
          <p
            className="hero-body"
            style={{
              marginTop: dials.headlineToBody,
              color: dials.bodyColor,
            }}
          >
            Formulated by dermatologists, made for us — every skin type, every
            concern, one standard of care.
          </p>

          {/* Z9T6d — Hero/Left/CTA (bordered pill, no fill per Pencil) */}
          <button
            type="button"
            className="hero-cta"
            style={{ marginTop: dials.bodyToButton }}
          >
            Shop now
          </button>
        </div>
      </div>

      {/* kZjmW — Hero/Right: image column with dots overlay + drag handle */}
      <div className="hero-right">
        {/* N7tAr — Hero/Right/Image */}
        <img
          src={heroCouple}
          alt="A couple holding us serum bottles, leaning together in warm natural light."
          className="hero-image"
        />

        {/* EyVnF — Hero/Right/Dots. Absolute at the bottom edge. */}
        <div
          role="tablist"
          aria-label="Hero image navigation"
          className="hero-dots"
        >
          {/* WVxD4 — Dot/1: couple (active, opacity 0.3, no border) */}
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-label="Couple"
            className="hero-dot hero-dot-active"
          >
            <img src={heroCouple} alt="" />
          </button>

          {/* 2ahNG — Dot/2: female before/after */}
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-label="Female before/after"
            className="hero-dot hero-dot-inactive"
          >
            <img src={heroFemaleBefore} alt="" />
          </button>

          {/* u4fmO — Dot/3: male before/after */}
          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-label="Male before/after"
            className="hero-dot hero-dot-inactive"
          >
            <img src={heroMaleBefore} alt="" />
          </button>
        </div>

        {/* uzHxA — Drag handle. Visual only, no interaction wired yet. */}
        <div aria-hidden className="hero-drag-handle">
          <span className="hero-drag-handle-label">Drag</span>
        </div>
      </div>
    </section>
  );
}
