// Hero — port of pencil-new.pen "Landing Page- new" Section 1 Hero (9Q81H)
// with responsive behavior layered on top. Pixel-exact values live in Hero.css.
// Per the initial port instructions, no before/after drag interaction yet —
// the uzHxA drag handle is visual-only.
import { useState, useRef } from 'react';
import heroCouple from '../assets/hero/hero-couple.webp';
import heroFemaleBefore from '../assets/hero/hero-female-before.webp';
import heroMaleBefore from '../assets/hero/hero-male-before.webp';
import heroFemaleAfter from '../assets/hero/hero-female-after.webp';
import heroMaleAfter from '../assets/hero/hero-male-after.webp';
import './Hero.css';

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [dragPercent, setDragPercent] = useState(100);
  const [pressing, setPressing] = useState(false);
  const heroRightRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const scaleValue = prevIndex === null
    ? 0
    : prevIndex === 0 && activeIndex !== 0
      ? 1
      : prevIndex !== 0 && activeIndex === 0
        ? 0
        : 1;

  const scaleTransition = prevIndex === null
    ? undefined
    : prevIndex === 0 && activeIndex !== 0
      ? 'transform 310ms cubic-bezier(0.34, 1.56, 0.64, 1), left 0s'
      : prevIndex !== 0 && activeIndex === 0
        ? 'transform 240ms cubic-bezier(0.4, 0, 0.2, 1), left 0s'
        : undefined;

  const dragStyle: React.CSSProperties = {
    transform: `translateY(-50%) scale(${scaleValue * (pressing ? 1.15 : 1)})`,
    transition: pressing
      ? 'transform 240ms cubic-bezier(0.34, 1.56, 0.64, 1), left 0s'
      : scaleTransition ?? 'transform 240ms ease-out, left 0s',
    left: `calc(${dragPercent}% - var(--drag-size) / 2)`,
    right: 'auto',
    pointerEvents: activeIndex === 0 ? 'none' : 'auto',
    cursor: dragging.current ? 'grabbing' : 'grab',
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (activeIndex === 0) return;
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragging.current = true;
    setPressing(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !heroRightRef.current) return;
    const rect = heroRightRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setDragPercent(percent);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    dragging.current = false;
    setPressing(false);
  };

  return (
    // 9Q81H — Hero section. Layout + responsive rules in Hero.css.
    <section className="hero-root" aria-labelledby="hero-headline">
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

          {/* Z9T6d — Hero/Left/CTA. Exact same structure as Build My Regimen
              in Nav.tsx: fill + black text + white text clone, all Tailwind,
              duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]. */}
          <button
            type="button"
            className="hero-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)]"
          >
            <span
              className="hero-cta-fill absolute inset-0 bg-[#1A1A1A] translate-y-full transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0"
              aria-hidden="true"
            />
            <span className="hero-cta-text relative z-10 text-[#0D0D0D]">Shop now</span>
            <span
              className="hero-cta-clone absolute inset-0 z-20 flex items-center justify-center text-[#F7F5F0] pointer-events-none [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)]"
              aria-hidden="true"
            >
              Shop now
            </span>
          </button>
        </div>
      </div>

      {/* kZjmW — Hero/Right: image column with dots overlay + drag handle */}
      <div className="hero-right" ref={heroRightRef}>
        {/* N7tAr — Hero/Right/Images — crossfade stack */}
        <img
          src={heroCouple}
          alt="A couple holding us serum bottles, leaning together in warm natural light."
          className="hero-image"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: activeIndex === 0 ? 1 : 0, zIndex: activeIndex === 0 ? 1 : 0, transition: 'opacity 450ms ease' }}
        />
        <img
          src={heroFemaleBefore}
          alt="Female skin before treatment."
          className="hero-image"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: activeIndex === 1 ? 1 : 0, zIndex: activeIndex === 1 ? 1 : 0, transition: 'opacity 450ms ease' }}
        />
        <img
          src={heroMaleBefore}
          alt="Male skin before treatment."
          className="hero-image"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: activeIndex === 2 ? 1 : 0, zIndex: activeIndex === 2 ? 1 : 0, transition: 'opacity 450ms ease' }}
        />
        <img
          src={heroFemaleAfter}
          alt="Female skin after treatment."
          className="hero-image"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: activeIndex === 1 ? 1 : 0, zIndex: activeIndex === 1 ? 1 : 0, transition: 'opacity 450ms ease', clipPath: `inset(0 0 0 ${dragPercent}%)` }}
        />
        <img
          src={heroMaleAfter}
          alt="Male skin after treatment."
          className="hero-image"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: activeIndex === 2 ? 1 : 0, zIndex: activeIndex === 2 ? 1 : 0, transition: 'opacity 450ms ease', clipPath: `inset(0 0 0 ${dragPercent}%)` }}
        />

        {/* EyVnF — Hero/Right/Dots. Absolute at the bottom edge. */}
        <div
          role="tablist"
          aria-label="Hero image navigation"
          className="hero-dots"
        >
          {/* WVxD4 — Dot/1: couple */}
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === 0}
            aria-label="Couple"
            className={`hero-dot ${activeIndex === 0 ? 'hero-dot-active' : 'hero-dot-inactive'}`}
            onClick={() => { setPrevIndex(activeIndex); setActiveIndex(0); }}
          >
            <img src={heroCouple} alt="" />
          </button>

          {/* 2ahNG — Dot/2: female before/after */}
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === 1}
            aria-label="Female before/after"
            className={`hero-dot ${activeIndex === 1 ? 'hero-dot-active' : 'hero-dot-inactive'}`}
            onClick={() => { if (activeIndex === 0) setDragPercent(100); setPrevIndex(activeIndex); setActiveIndex(1); }}
          >
            <img src={heroFemaleBefore} alt="" />
          </button>

          {/* u4fmO — Dot/3: male before/after */}
          <button
            type="button"
            role="tab"
            aria-selected={activeIndex === 2}
            aria-label="Male before/after"
            className={`hero-dot ${activeIndex === 2 ? 'hero-dot-active' : 'hero-dot-inactive'}`}
            onClick={() => { if (activeIndex === 0) setDragPercent(100); setPrevIndex(activeIndex); setActiveIndex(2); }}
          >
            <img src={heroMaleBefore} alt="" />
          </button>
        </div>

        {/* uzHxA — Drag handle. Visual only, no interaction wired yet. */}
        <div
          aria-hidden
          className="hero-drag-handle"
          style={dragStyle}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <span className="hero-drag-handle-label">Drag</span>
        </div>
      </div>
    </section>
  );
}
