// Nav — sticky header with Radix NavigationMenu for desktop dropdowns.
// Scroll behavior (scrolled border, hide/show on scroll direction) kept as-is.
import { useState, useEffect, useRef, useCallback } from 'react';
import { List, ShoppingBag } from '@phosphor-icons/react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import logoBlack from '../assets/logo/logo_black.png';
import navSkincareFeatured from '../assets/nav/nav-skincare-featured.webp';
import navBodyhairFeatured from '../assets/nav/nav-bodyhair-featured.webp';
import { MobileMenu } from './MobileMenu';
import './Nav.css';

const NARROW_ITEMS = new Set(['about']);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navCenterRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [viewportStyle, setViewportStyle] = useState<React.CSSProperties>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeValue, setActiveValue] = useState<string>('');

  const handleValueChange = useCallback((value: string) => {
    setActiveValue(value);
    if (!value || !navCenterRef.current) {
      setViewportStyle({});
      return;
    }
    if (!NARROW_ITEMS.has(value)) {
      setViewportStyle({ left: '0', right: '0', display: 'flex', justifyContent: 'center' });
      return;
    }
    const trigger = triggerRefs.current[value];
    if (!trigger || !navCenterRef.current) return;
    const rootRect = navCenterRef.current.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const triggerLeft = triggerRect.left - rootRect.left;
    setViewportStyle({ left: `${triggerLeft}px`, right: 'auto', display: 'block', justifyContent: 'initial' });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      if (currentY > 100) {
        setHidden(currentY > lastScrollY.current);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`nav-root${scrolled ? ' nav-scrolled' : ''}${hidden ? ' nav-hidden' : ''}`}
    >
      {/* E2bh1 — Nav/Left: logo + italic wordmark */}
      <div
        className="nav-left"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
        role="button"
        aria-label="Scroll to top"
      >
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

      {/* UwwL2 — Nav/Center: Radix NavigationMenu */}
      <NavigationMenu.Root
        className="nav-center"
        delayDuration={150}
        skipDelayDuration={300}
        ref={navCenterRef}
        value={activeValue}
        onValueChange={handleValueChange}
      >
        <NavigationMenu.List className="nav-menu-list">
          {/* Bestsellers — direct link, no dropdown */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="nav-link"
              href="#bestsellers-title"
              onMouseEnter={() => setActiveValue('')}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('bestsellers-title')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="nav-link-text">Bestsellers</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          {/* Skincare — mega menu */}
          <NavigationMenu.Item value="skincare">
            <NavigationMenu.Trigger
              className="nav-link nav-link-trigger"
              ref={(el) => { triggerRefs.current.skincare = el; }}
            >
              <span className="nav-link-text">Skincare</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="nav-dropdown-content nav-dropdown-mega">
              <div className="nav-mega-grid">
                <div className="nav-mega-col">
                  <span className="nav-mega-heading">By Product</span>
                  <ul className="nav-mega-links">
                    <li><a href="#">Cleansers</a></li>
                    <li><a href="#">Serums</a></li>
                    <li><a href="#">Moisturizers</a></li>
                    <li><a href="#">Eye Care</a></li>
                    <li><a href="#">SPF</a></li>
                    <li><a href="#">Masks &amp; Treatments</a></li>
                  </ul>
                </div>
                <div className="nav-mega-col">
                  <span className="nav-mega-heading">By Concern</span>
                  <ul className="nav-mega-links">
                    <li><a href="#">Aging</a></li>
                    <li><a href="#">Acne</a></li>
                    <li><a href="#">Dryness</a></li>
                    <li><a href="#">Redness</a></li>
                    <li><a href="#">Texture</a></li>
                    <li><a href="#">Dark Spots</a></li>
                  </ul>
                </div>
                <div className="nav-mega-featured">
                  <img src={navSkincareFeatured} alt="" className="nav-mega-featured-img" />
                  <a href="#" className="nav-mega-featured-link">Shop All Skincare</a>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Body + Hair — mega menu */}
          <NavigationMenu.Item value="bodyhair">
            <NavigationMenu.Trigger
              className="nav-link nav-link-trigger"
              ref={(el) => { triggerRefs.current.bodyhair = el; }}
            >
              <span className="nav-link-text">Body + Hair</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="nav-dropdown-content nav-dropdown-mega">
              <div className="nav-mega-grid">
                <div className="nav-mega-col">
                  <span className="nav-mega-heading">Body</span>
                  <ul className="nav-mega-links">
                    <li><a href="#">Body Wash</a></li>
                    <li><a href="#">Body Lotion</a></li>
                    <li><a href="#">Scrubs &amp; Exfoliants</a></li>
                    <li><a href="#">Hand Care</a></li>
                  </ul>
                </div>
                <div className="nav-mega-col">
                  <span className="nav-mega-heading">Hair</span>
                  <ul className="nav-mega-links">
                    <li><a href="#">Shampoo</a></li>
                    <li><a href="#">Conditioner</a></li>
                    <li><a href="#">Scalp Care</a></li>
                    <li><a href="#">Leave-In Treatments</a></li>
                  </ul>
                </div>
                <div className="nav-mega-featured">
                  <img src={navBodyhairFeatured} alt="" className="nav-mega-featured-img" />
                  <a href="#" className="nav-mega-featured-link">Shop All Body + Hair</a>
                </div>
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          {/* Sets — direct link, no dropdown */}
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className="nav-link"
              href="#"
              onMouseEnter={() => setActiveValue('')}
            >
              <span className="nav-link-text">Sets</span>
            </NavigationMenu.Link>
          </NavigationMenu.Item>

          {/* About — small dropdown */}
          <NavigationMenu.Item value="about">
            <NavigationMenu.Trigger
              className="nav-link nav-link-trigger"
              ref={(el) => { triggerRefs.current.about = el; }}
            >
              <span className="nav-link-text">About</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="nav-dropdown-content nav-dropdown-small">
              <ul className="nav-small-links">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Ingredients</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="nav-indicator">
            <div className="nav-indicator-arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="nav-viewport-position" style={viewportStyle}>
          <NavigationMenu.Viewport className="nav-viewport" />
        </div>
      </NavigationMenu.Root>

      {/* VAsBV — Nav/Right */}
      <div className="nav-right">
        <button
          type="button"
          className="nav-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent px-6 py-3 cursor-pointer [transform:translateZ(0)] active:scale-[0.97] active:transition-transform active:duration-[80ms]"
        >
          <span className="relative z-0 text-[#0D0D0D]">Build My Regimen</span>
          <span
            className="absolute inset-0 z-10 flex items-center justify-center bg-[#1A1A1A] text-[#F7F5F0] [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)] max-[999px]:[clip-path:inset(0)]"
            aria-hidden="true"
          >
            Build My Regimen
          </span>
        </button>
        <button type="button" aria-label="Shopping bag" className="nav-icon-btn">
          <ShoppingBag size={22} weight="regular" />
        </button>
        <button
          type="button"
          aria-label="Open menu"
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(true)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <List size={22} weight="regular" />
        </button>
      </div>

      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
