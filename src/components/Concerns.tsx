// Concerns — port of pencil-new.pen "Landing Page- new" Section 2 (WRRkE).
// 6 concern cards in a horizontal grid, each with an image and label.
import concernAging from '../assets/concerns/concern-aging.webp';
import concernCongestion from '../assets/concerns/concern-congestion.webp';
import concernTexture from '../assets/concerns/concern-texture.webp';
import concernEyecare from '../assets/concerns/concern-eyecare.webp';
import concernRedness from '../assets/concerns/concern-redness.webp';
import concernDryness from '../assets/concerns/concern-dryness.webp';
import './Concerns.css';

const CONCERNS = [
  { src: concernAging, label: 'Aging' },
  { src: concernCongestion, label: 'Congestion' },
  { src: concernTexture, label: 'Texture' },
  { src: concernEyecare, label: 'Eye Care' },
  { src: concernRedness, label: 'Redness' },
  { src: concernDryness, label: 'Dryness' },
];

export function Concerns() {
  return (
    <section className="concerns-root" aria-labelledby="concerns-title">
      {/* PNzr4 — Concerns/Header */}
      <div className="concerns-header">
        <div className="concerns-header-left">
          <h2 id="concerns-title" className="concerns-title">
            Common concerns, considered
          </h2>
          <p className="concerns-subtitle">
            Start with what your skin is telling you. We'll take it from there.
          </p>
        </div>
        <button
          type="button"
          className="concerns-link group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)]"
        >
          <span
            className="concerns-link-fill absolute inset-0 bg-[#1A1A1A] translate-y-full transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0"
            aria-hidden="true"
          />
          <span className="concerns-link-text relative z-10 text-[#0D0D0D]">
            Got a unique concern?
          </span>
          <span
            className="concerns-link-clone absolute inset-0 z-20 flex items-center justify-center text-[#F7F5F0] pointer-events-none [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)]"
            aria-hidden="true"
          >
            Let's find your fix
          </span>
        </button>
      </div>

      {/* KJsRw — Concerns/Cards */}
      <div className="concerns-cards">
        {CONCERNS.map((c) => (
          <div key={c.label} className="concerns-card">
            <div className="concerns-card-image-wrap">
              <img
                src={c.src}
                alt={c.label}
                className="concerns-card-image"
              />
            </div>
            <span className="concerns-card-label">
              <span className="concerns-card-label-text">{c.label}</span>
              <span className="concerns-card-arrow" aria-hidden>→</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
