// Nav — port of pencil-new.pen "Landing Page- new" Nav (P5EOr) with
// responsive behavior + hover underline animation tunable via DialKit.
import { lazy, Suspense, useState } from 'react';
import { List, ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';
import { NAV_DIAL_DEFAULTS, type NavDials } from './nav-dials';
import './Nav.css';

const LINKS = ['Bestsellers', 'Skincare', 'Body + Hair', 'Sets', 'About'];

// Dev-only: lazy-import the DialKit host. In prod the ternary resolves
// to null and Rollup drops the entire nav-dials-dev module + dialkit.
const NavDialsHost = import.meta.env.DEV
  ? lazy(() => import('./nav-dials-dev'))
  : null;

// Each NavLink wraps text in a container with equal top/bottom padding
// (12px each side of 15px text → 39px tall container). The underline
// sits at the container's bottom edge, aligned to the Build My Regimen
// button's bottom border. lineOffsetY from DialKit shifts it up/down
// from that baseline for live tuning.
function NavLink({ label, dials }: { label: string; dials: NavDials }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#"
      className="nav-link"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <span className="nav-link-text">{label}</span>
      {/* Underline bar. All visual params driven by DialKit in dev,
          static defaults in prod. transform-origin center + scaleX
          gives the grow-outward / shrink-inward animation. */}
      <span
        aria-hidden
        className="nav-link-underline"
        style={{
          bottom: -dials.lineOffsetY,
          height: dials.lineThickness,
          opacity: hovered ? 1 : 0,
          transform: `scaleX(${hovered ? 1 : 0})`,
          transformOrigin: 'center',
          transition: `transform ${dials.duration}s ${dials.easing}, opacity ${dials.duration}s ${dials.easing}`,
        }}
      />
    </a>
  );
}

export function Nav() {
  const [dials, setDials] = useState<NavDials>(NAV_DIAL_DEFAULTS);

  return (
    <header className="nav-root">
      {NavDialsHost && (
        <Suspense fallback={null}>
          <NavDialsHost onChange={setDials} />
        </Suspense>
      )}

      {/* E2bh1 — Nav/Left: logo + italic wordmark */}
      <div className="nav-left">
        <img
          src={logoBlack}
          alt=""
          width={25}
          height={25}
          className="nav-logo"
          draggable={false}
        />
        <span className="nav-wordmark">us</span>
      </div>

      {/* UwwL2 — Nav/Center: 5 links (hidden on mobile via CSS) */}
      <nav aria-label="Primary" className="nav-center">
        {LINKS.map((label) => (
          <NavLink key={label} label={label} dials={dials} />
        ))}
      </nav>

      {/* VAsBV — Nav/Right */}
      <div className="nav-right">
        <button
          type="button"
          className="nav-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent px-6 py-3 cursor-pointer [transform:translateZ(0)]"
        >
          {/* Fill layer — rises from bottom */}
          <span
            className="absolute inset-0 bg-[#1A1A1A] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:translate-y-0"
            aria-hidden="true"
          />
          {/* Black text — always visible */}
          <span className="relative z-10 text-[#0D0D0D]">Build My Regimen</span>
          {/* White text clone — clipped to fill area */}
          <span
            className="absolute inset-0 z-20 flex items-center justify-center text-[#F7F5F0] pointer-events-none [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:[clip-path:inset(0_0_0_0)]"
            aria-hidden="true"
          >
            Build My Regimen
          </span>
        </button>
        <button type="button" aria-label="Shopping bag" className="nav-icon-btn">
          <ShoppingBag size={22} weight="regular" />
        </button>
        <button type="button" aria-label="Open menu" className="nav-mobile-toggle">
          <List size={22} weight="regular" />
        </button>
      </div>
    </header>
  );
}
