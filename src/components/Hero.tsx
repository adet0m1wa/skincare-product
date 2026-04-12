// Hero — port of pencil-new.pen "Landing Page- new" Section 1 Hero (9Q81H)
// with responsive behavior layered on top. Pixel-exact values live in Hero.css.
import heroCouple from '../assets/hero/hero-couple.webp';
import heroFemaleBefore from '../assets/hero/hero-female-before.webp';
import heroMaleBefore from '../assets/hero/hero-male-before.webp';
import type { BtnDials } from './btn-dials';
import './Hero.css';

export function Hero({ btnDials }: { btnDials: BtnDials }) {
  const fillTransition = `transform ${btnDials.fillDuration}ms ${btnDials.fillEasing}`;
  const clipTransition = `clip-path ${btnDials.fillDuration}ms ${btnDials.fillEasing}`;

  return (
    <section className="hero-root" aria-labelledby="hero-headline">
      {/* VHI4l — Hero/Left: copy column */}
      <div className="hero-left">
        <div className="hero-left-stack">
          <h1 id="hero-headline" className="hero-headline">
            {'Your skin deserves\nmore than guesswork'}
          </h1>

          <p className="hero-body">
            Formulated by dermatologists, made for us — every skin type, every
            concern, one standard of care.
          </p>

          {/* Z9T6d — Shop now. Same structure as Build My Regimen, same
              DialKit-driven transition values via inline style overrides. */}
          <button
            type="button"
            className="hero-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)]"
          >
            <span
              className="hero-cta-fill absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0"
              style={{ transition: fillTransition }}
              aria-hidden="true"
            />
            <span className="hero-cta-text relative z-10 text-[#0D0D0D]">Shop now</span>
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

      {/* kZjmW — Hero/Right */}
      <div className="hero-right">
        <img
          src={heroCouple}
          alt="A couple holding us serum bottles, leaning together in warm natural light."
          className="hero-image"
        />

        <div
          role="tablist"
          aria-label="Hero image navigation"
          className="hero-dots"
        >
          <button type="button" role="tab" aria-selected="true" aria-label="Couple" className="hero-dot hero-dot-active">
            <img src={heroCouple} alt="" />
          </button>
          <button type="button" role="tab" aria-selected="false" aria-label="Female before/after" className="hero-dot hero-dot-inactive">
            <img src={heroFemaleBefore} alt="" />
          </button>
          <button type="button" role="tab" aria-selected="false" aria-label="Male before/after" className="hero-dot hero-dot-inactive">
            <img src={heroMaleBefore} alt="" />
          </button>
        </div>

        <div aria-hidden className="hero-drag-handle">
          <span className="hero-drag-handle-label">Drag</span>
        </div>
      </div>
    </section>
  );
}
