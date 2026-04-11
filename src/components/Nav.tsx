// Nav — pixel-for-pixel port of pencil-new.pen "Landing Page- new" → Nav (P5EOr).
// All measurements and colors read directly from the .pen file.
import { useState } from 'react';
import { ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';

const LINKS = ['Bestsellers', 'Skincare', 'Body + Hair', 'Sets', 'About'];

// Y-alignment math (see commit message for full derivation):
// - Nav padding [50, 40] + alignItems center
// - Button (Nav/CTA) is 39px tall (12 + 15 + 12), so its bottom edge sits
//   19.5px below the nav's content center
// - Link text is 15px tall, so its bottom edge sits 7.5px below center
// - Gap = 19.5 - 7.5 = 12px → underline lives at `bottom: -12px`
//   on each link, which matches the "Build My Regimen" bottom border
const UNDERLINE_OFFSET_PX = 12;

function NavLink({ label }: { label: string }) {
  // onMouseEnter/Leave drives hover; onFocus/Blur keeps keyboard users
  // in sync with the same animation.
  const [active, setActive] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: '"DM Sans", system-ui, sans-serif',
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 1,
        color: '#0D0D0D',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
      {/* Underline: 1px #1A1A1A bar sitting 12px below the text box.
          transform-origin center + scaleX(0→1) gives the grow-outward,
          shrink-inward animation on hover/leave; 250ms ease-out. */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -UNDERLINE_OFFSET_PX,
          height: 1,
          backgroundColor: '#1A1A1A',
          transform: active ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'center',
          transition: 'transform 250ms ease-out',
          pointerEvents: 'none',
        }}
      />
    </a>
  );
}

export function Nav() {
  return (
    // P5EOr — horizontal, alignItems center, justifyContent space-around, padding 50/40, fill #F7F5F0.
    // Bottom stroke exists in the file but is disabled → no border rendered.
    <header
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F7F5F0',
        padding: '50px 40px',
      }}
    >
      {/* E2bh1 — Nav/Left: horizontal, gap 4, width fill_container */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}
      >
        {/* 5LhE9 — Nav/Logo: 25×25, image logo_black.png fit, no stroke */}
        <img
          src={logoBlack}
          alt=""
          width={25}
          height={25}
          style={{ width: 25, height: 25, objectFit: 'contain' }}
          draggable={false}
        />
        {/* fsBN0 — DM Serif Display italic 30, letter-spacing -1.04, lh 1.08, #0D0D0D */}
        <span
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 1.08,
            letterSpacing: '-1.04px',
            color: '#0D0D0D',
          }}
        >
          us
        </span>
      </div>

      {/* UwwL2 — Nav/Center: horizontal, justifyContent center, gap 36, width fill_container */}
      <nav
        aria-label="Primary"
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 36,
        }}
      >
        {LINKS.map((label) => (
          <NavLink key={label} label={label} />
        ))}
      </nav>

      {/* VAsBV — Nav/Right: horizontal, justifyContent end, alignItems center, gap 12
          Children order in Pencil: Nav/CTA first, Nav/CartIcon second */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 12,
        }}
      >
        {/* hlFcT — Nav/CTA: alignItems center, gap 8, padding 12/24,
            1px inside stroke #1A1A1A, NO cornerRadius, NO fill */}
        <button
          type="button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 24px',
            border: '1px solid #1A1A1A',
            backgroundColor: 'transparent',
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 1,
            color: '#0D0D0D',
            cursor: 'pointer',
          }}
        >
          Build My Regimen
        </button>

        {/* KRb0i — Nav/CartIcon: Phosphor shopping-bag, 22×22, weight 400, fill #0D0D0D */}
        <button
          type="button"
          aria-label="Shopping bag"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 22,
            height: 22,
            padding: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <ShoppingBag size={22} weight="regular" color="#0D0D0D" />
        </button>
      </div>
    </header>
  );
}
