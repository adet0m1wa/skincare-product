// Nav — pixel-for-pixel port of pencil-new.pen "Landing Page- new" → Nav (P5EOr).
// All measurements and colors read directly from the .pen file.
import { ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';

const LINKS = ['Bestsellers', 'Skincare', 'Body + Hair', 'Sets', 'About'];

// Each NavLink wraps text in a container with equal top/bottom padding.
// The underline sits at the container's bottom edge, so LINK_PAD_Y is also
// the distance from the text to the underline.
//
// Container height = LINK_PAD_Y + 15 (text) + LINK_PAD_Y
// With LINK_PAD_Y = 12 → container is 39px, same as the Build My Regimen
// button (12 + 15 + 12). With alignItems center on the parent Nav, the
// container and the button share identical top/bottom y-values, so the
// underline at y = container_bottom aligns pixel-exactly with the button's
// bottom border.
//
// Animation is intentionally not wired yet — this step is for verifying
// the spacing structure. The underline renders statically at full width so
// the bottom edge of each container is visible.
const LINK_PAD_Y = 12;

function NavLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Equal top/bottom padding, zero horizontal → container width =
        // text width, so gap: 36 on Nav/Center still reads as text-edge
        // to text-edge exactly as before.
        padding: `${LINK_PAD_Y}px 0`,
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontWeight: 500,
          fontSize: 15,
          lineHeight: 1,
          color: '#0D0D0D',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      {/* Static underline at the container's bottom edge. No animation,
          no hover — visible at all times so the spacing can be verified.
          Will be re-animated (scaleX grow from center + DialKit) once the
          user confirms the structure is right. */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 1.5,
          backgroundColor: '#1A1A1A',
          pointerEvents: 'none',
        }}
      />
    </a>
  );
}

export function Nav() {
  return (
    // P5EOr — horizontal, alignItems center, justifyContent space-around,
    // fill #F7F5F0. Padding 38/40/50/40 keeps equal breathing room on the
    // nav level: 50px from nav-top to link-text-top and 50px from underline
    // to nav-bottom (see LINK_PAD_Y comment block for the full derivation).
    // Bottom stroke exists in the .pen file but is disabled → no border.
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
