// Hero — port of pencil-new.pen "Landing Page- new" Section 1 Hero (9Q81H)
// with responsive behavior layered on top. Pixel-exact values live in Hero.css.
// Per the initial port instructions, no before/after drag interaction yet —
// the uzHxA drag handle is visual-only.
//
// DialKit: the "Button Hover" panel controls fillDuration and fillEasing
// on the Shop now button in dev. In prod, static defaults from btn-dials.ts
// are used and dialkit is tree-shaken out.
import { lazy, Suspense, useState } from 'react';
import heroCouple from '../assets/hero/hero-couple.webp';
import heroFemaleBefore from '../assets/hero/hero-female-before.webp';
import heroMaleBefore from '../assets/hero/hero-male-before.webp';
import { BTN_DIAL_DEFAULTS, type BtnDials } from './btn-dials';
import './Hero.css';

const BtnDialsHost = import.meta.env.DEV
  ? lazy(() => import('./btn-dials-dev'))
  : null;

export function Hero() {
  const [dials, setDials] = useState<BtnDials>(BTN_DIAL_DEFAULTS);

  // Inline transition style applied to both the fill and the clone so
  // they stay perfectly synced. Overrides the Tailwind duration/easing
  // classes so DialKit values take effect in real-time.
  const fillTransition = `transform ${dials.fillDuration}ms ${dials.fillEasing}`;
  const clipTransition = `clip-path ${dials.fillDuration}ms ${dials.fillEasing}`;

  return (
    // 9Q81H — Hero section. Layout + responsive rules in Hero.css.
    <section className="hero-root" aria-labelledby="hero-headline">
      {BtnDialsHost && (
        <Suspense fallback={null}>
          <BtnDialsHost onChange={setDials} />
        </Suspense>
      )}

      {/* VHI4l — Hero/Left: copy column */}
      <div className="hero-left">
        <div className="hero-left-stack">
          {/* T7EqY — Hero/Left/Headline */}
          <h1 id="hero-headline" className="hero-headline">
            {'Your skin deserves\nmore than guesswork'}
          </h1>

          {/* W8V99 — Hero/Left/Body */}
          <p className="hero-body">
            Formulated by dermatologists, made for us — every skin type, every
            concern, one standard of care.
          </p>

          {/* Z9T6d — Hero/Left/CTA */}
          <button
            type="button"
            className="hero-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)]"
          >
            {/* Fill layer — rises from bottom */}
            <span
              className="hero-cta-fill absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0"
              style={{ transition: fillTransition }}
              aria-hidden="true"
            />
            {/* Black text — always visible */}
            <span className="hero-cta-text relative z-10 text-[#0D0D0D]">Shop now</span>
            {/* White text clone — clipped to fill area */}
            <span
              className="hero-cta-clone absolute inset-0 z-20 flex items-center justify-center text-[#F7F5F0] pointer-events-none [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
              style={{ transition: clipTransition }}
              aria-hidden="true"
            >
              Shop now
            </span>
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
