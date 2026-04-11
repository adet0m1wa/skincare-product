// Nav — pixel-for-pixel port of pencil-new.pen "Landing Page- new" → Nav (P5EOr).
// All measurements and colors read directly from the .pen file.
import { lazy, Suspense, useState } from 'react';
import { ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';
import { NAV_DIAL_DEFAULTS, type NavDials } from './nav-dials';

// Dev-only: lazy-import the DialKit host for the Nav underline. In prod,
// `import.meta.env.DEV` is statically `false`, so the ternary resolves to
// `null` and Rollup eliminates the dynamic import along with the entire
// dialkit graph. Verified by grepping the prod bundle for registerPanel /
// updateValue / Nav Underline.
const NavDialsHost = import.meta.env.DEV
  ? lazy(() => import('./nav-dials-dev'))
  : null;

const LINKS = ['Bestsellers', 'Skincare', 'Body + Hair', 'Sets', 'About'];

// Y-alignment math:
// - Nav padding [38, 40, 50, 40] + alignItems center
// - Button (Nav/CTA) is 39px tall (12 + 15 text + 12), tallest child
//   so content area is 39px. With alignItems center, button and link
//   text both center on y = top_padding + 19.5
// - Link text (15px) sits at text_top = 38 + (39−15)/2 = 50
// - Underline sits at the Build My Regimen button bottom = top_padding
//   + button_height = 38 + 39 = 77 → that's text_top + 27, or equivalently
//   12px below the link text's bottom edge. Encoded as `bottom: -12px`
//   relative to the link's text box.
// - Nav height = 38 + 39 + 50 = 127
// - Top breathing room (nav top → text top): 50
// - Bottom breathing room (underline → nav bottom): 127 − 77 = 50 ✓
const UNDERLINE_BASE_BOTTOM = 12;

function NavLink({ label, dials }: { label: string; dials: NavDials }) {
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
      {/* Underline bar — lineThickness / duration / easing are driven by
          DialKit in dev, static defaults in prod. transform-origin center
          + scaleX(0→1) gives the grow-outward-from-center, shrink-inward-
          to-center behavior. CSS transitions are bidirectional so a single
          transition rule handles both the hover-in and mouse-leave phases. */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          // Aligned to Build My Regimen bottom border (see alignment math above)
          bottom: -UNDERLINE_BASE_BOTTOM,
          height: dials.lineThickness,
          backgroundColor: '#1A1A1A',
          transform: `scaleX(${active ? 1 : 0})`,
          transformOrigin: 'center',
          transition: `transform ${dials.duration}s ${dials.easing}`,
          pointerEvents: 'none',
        }}
      />
    </a>
  );
}

export function Nav() {
  // Dev: NavDialsHost (lazy) feeds live values into this state on every
  // slider change. Prod: state stays locked at NAV_DIAL_DEFAULTS forever
  // because NavDialsHost is null.
  const [dials, setDials] = useState<NavDials>(NAV_DIAL_DEFAULTS);

  return (
    // P5EOr — horizontal, alignItems center, justifyContent space-around,
    // fill #F7F5F0. Padding is 38 top / 40 horizontal / 50 bottom so the
    // link text's top breathing room (50px) matches the underline's bottom
    // breathing room (50px). See UNDERLINE_BASE_BOTTOM comment for the full
    // derivation — this is an intentional deviation from the Pencil file's
    // uniform 50/40 padding, per the user's equal-breathing-room rule.
    // Bottom stroke exists in the file but is disabled → no border rendered.
    <header
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#F7F5F0',
        padding: '38px 40px 50px 40px',
      }}
    >
      {NavDialsHost && (
        <Suspense fallback={null}>
          <NavDialsHost onChange={setDials} />
        </Suspense>
      )}

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
          <NavLink key={label} label={label} dials={dials} />
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
