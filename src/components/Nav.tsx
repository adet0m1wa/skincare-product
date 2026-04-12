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
        <button type="button" className="nav-cta">
          Build My Regimen
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
