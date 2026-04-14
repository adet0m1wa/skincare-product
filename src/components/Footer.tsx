// Footer — port of pencil-new.pen "Landing Page- new" Section 9 (8ykGB).
// Loop image panel (logo + signup form over crossfading imagery) beside a
// nav panel with link columns + bottom row (legal links + copyright).
import { useEffect, useState, type FormEvent } from 'react';
import logoWhite from '../assets/logo/logo_white.png';
import footerLoop1 from '../assets/footer/footer-loop-1.webp';
import footerLoop2 from '../assets/footer/footer-loop-2.webp';
import footerLoop3 from '../assets/footer/footer-loop-3.webp';
import footerLoop4 from '../assets/footer/footer-loop-4.webp';
import footerLoop5 from '../assets/footer/footer-loop-5.webp';
import './Footer.css';

const LOOP_IMAGES = [footerLoop1, footerLoop2, footerLoop3, footerLoop4, footerLoop5];

const NAV_COLS = [
  {
    heading: 'Shop',
    links: ['Bestsellers', 'Skincare', 'Sets'],
  },
  {
    heading: 'Learn',
    links: ['Ingredient index', 'Routines by concern', 'Journal', 'Clinical studies'],
  },
  {
    heading: 'Connect',
    links: ['Instagram', 'TikTok', 'YouTube', 'Newsletter'],
  },
  {
    heading: 'Support',
    links: ['Shipping & returns', 'Contact', 'Help center', 'Gift cards'],
  },
  {
    heading: 'Company',
    links: ['About us', 'Our team', 'Sustainability'],
  },
];

export function Footer() {
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setLoopIndex((i) => (i + 1) % LOOP_IMAGES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <footer className="ft-root">
      {/* 7XXII — Footer/LoopImage: logo + signup over crossfading imagery */}
      <div className="ft-loop">
        {LOOP_IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            aria-hidden
            className="ft-loop-image"
            style={{ opacity: i === loopIndex ? 1 : 0 }}
          />
        ))}
        <div className="ft-loop-overlay" aria-hidden />

        <div className="ft-loop-content">
          {/* dQkU8 — Footer/LogoCol */}
          <div className="ft-logo-col">
            <div className="ft-logo-row">
              <img src={logoWhite} alt="" className="ft-logo-mark" />
              <span className="ft-logo-word">us</span>
            </div>
            <p className="ft-logo-tagline">
              {'Every skin type.\nEvery concern. One standard.'}
            </p>
          </div>

          {/* erc1B — Footer/SignupCol */}
          <div className="ft-signup-col">
            <h3 className="ft-signup-head">
              Sign up and receive 15% off your first order.
            </h3>
            <p className="ft-signup-sub">
              Early access to new formulas, clinical trial invites, and the
              occasional honest letter from our team.
            </p>
            <form className="ft-signup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="ft-signup-input"
              />
              <button type="submit" className="ft-signup-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* o3ARB — Footer/NavWrap */}
      <div className="ft-nav-wrap">
        {/* lAWrM — Footer/Nav: 5 link columns */}
        <div className="ft-nav">
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="ft-nav-col">
              <h4 className="ft-nav-heading">{col.heading}</h4>
              <ul className="ft-nav-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="ft-nav-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* dmhqu — Footer/Bottom: legal links + copyright */}
        <div className="ft-bottom">
          <div className="ft-bottom-links">
            <a href="#" className="ft-bottom-link">Privacy</a>
            <a href="#" className="ft-bottom-link">Terms</a>
            <a href="#" className="ft-bottom-link">Accessibility</a>
          </div>
          <span className="ft-copyright">
            © 2026 US Skincare. Made in small batches, in Lagos.
          </span>
        </div>
      </div>
    </footer>
  );
}
