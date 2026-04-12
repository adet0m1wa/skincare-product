// Nav — port of pencil-new.pen "Landing Page- new" Nav (P5EOr) with
// responsive behavior + hover underline animation (hardcoded final values).
import { useState } from 'react';
import { List, ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';
import type { BtnDials } from './btn-dials';
import './Nav.css';

const LINKS = ['Bestsellers', 'Skincare', 'Body + Hair', 'Sets', 'About'];

function NavLink({ label }: { label: string }) {
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
      <span
        aria-hidden
        className="nav-link-underline"
        style={{
          opacity: hovered ? 1 : 0,
          transform: `scaleX(${hovered ? 1 : 0})`,
        }}
      />
    </a>
  );
}

export function Nav({ btnDials }: { btnDials: BtnDials }) {
  const fillTransition = `transform ${btnDials.fillDuration}ms ${btnDials.fillEasing}`;
  const clipTransition = `clip-path ${btnDials.fillDuration}ms ${btnDials.fillEasing}`;

  return (
    <header className="nav-root">
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
          <NavLink key={label} label={label} />
        ))}
      </nav>

      {/* VAsBV — Nav/Right */}
      <div className="nav-right">
        <button
          type="button"
          className="nav-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent px-6 py-3 cursor-pointer [transform:translateZ(0)]"
        >
          <span
            className="absolute inset-0 bg-[#1A1A1A] translate-y-full group-hover:translate-y-0"
            style={{ transition: fillTransition }}
            aria-hidden="true"
          />
          <span className="relative z-10 text-[#0D0D0D]">Build My Regimen</span>
          <span
            className="absolute inset-0 z-20 flex items-center justify-center text-[#F7F5F0] pointer-events-none [clip-path:inset(100%_0_0_0)] group-hover:[clip-path:inset(0_0_0_0)]"
            style={{ transition: clipTransition }}
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
