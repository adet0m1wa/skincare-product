// Nav — port of pencil-new.pen "Landing Page- new" Nav (P5EOr) with
// responsive behavior layered on top. Pixel-exact values live in Nav.css.
import { List, ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';
import './Nav.css';

const LINKS = ['Bestsellers', 'Skincare', 'Body + Hair', 'Sets', 'About'];

// Each NavLink wraps text in a container with equal top/bottom padding.
// The underline sits at the container's bottom edge, so LINK_PAD_Y is
// also the distance from the text to the underline.
//
// Container height = LINK_PAD_Y + 15 (text) + LINK_PAD_Y
// With LINK_PAD_Y = 12 → container is 39px, same as the Build My Regimen
// button (12 + 15 + 12). With alignItems center on Nav, the link container
// and the button share identical top/bottom y-values, so the underline at
// y = container_bottom aligns pixel-exactly with the button's bottom border.
//
// Nav-level breathing room:
//   nav-top → link-text-top = 38 + 12 = 50
//   underline → nav-bottom  = 127 − 77 = 50
//
// The underline is currently hidden via opacity: 0 in Nav.css. The element
// stays in the DOM so hover animation can be wired back on later without
// restructuring.
function NavLink({ label }: { label: string }) {
  return (
    <a href="#" className="nav-link">
      <span className="nav-link-text">{label}</span>
      <span aria-hidden className="nav-link-underline" />
    </a>
  );
}

export function Nav() {
  return (
    // P5EOr — see Nav.css for the full layout + responsive rules
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
        {/* fsBN0 — brand wordmark in DM Serif Display Italic */}
        <span className="nav-wordmark">us</span>
      </div>

      {/* UwwL2 — Nav/Center: 5 links (hidden on mobile via CSS) */}
      <nav aria-label="Primary" className="nav-center">
        {LINKS.map((label) => (
          <NavLink key={label} label={label} />
        ))}
      </nav>

      {/* VAsBV — Nav/Right: CTA (desktop only) + cart + hamburger (mobile only) */}
      <div className="nav-right">
        {/* hlFcT — Nav/CTA. Hidden on mobile via CSS. */}
        <button type="button" className="nav-cta">
          Build My Regimen
        </button>

        {/* KRb0i — Nav/CartIcon. Always visible. */}
        <button type="button" aria-label="Shopping bag" className="nav-icon-btn">
          <ShoppingBag size={22} weight="regular" />
        </button>

        {/* Mobile-only hamburger. Positioned last in DOM so it sits at the
            rightmost edge when the nav collapses on small screens. */}
        <button
          type="button"
          aria-label="Open menu"
          className="nav-mobile-toggle"
        >
          <List size={22} weight="regular" />
        </button>
      </div>
    </header>
  );
}
