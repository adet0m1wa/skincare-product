import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import loop1 from '../assets/footer/footer-loop-1.webp';
import loop2 from '../assets/footer/footer-loop-2.webp';
import loop3 from '../assets/footer/footer-loop-3.webp';
import loop4 from '../assets/footer/footer-loop-4.webp';
import loop5 from '../assets/footer/footer-loop-5.webp';

const LOOP_IMAGES = [loop1, loop2, loop3, loop4, loop5];
const LOOP_INTERVAL = 3500;

type Column = {
  heading: string;
  links: { label: string; href: string }[];
};

const COLUMNS: Column[] = [
  {
    heading: 'Shop',
    links: [
      { label: 'Bestsellers', href: '#bestsellers' },
      { label: 'Skincare', href: '#skincare' },
      { label: 'Body + Hair', href: '#body' },
      { label: 'Sets', href: '#sets' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'Ingredient index', href: '#ingredients' },
      { label: 'Routines by concern', href: '#routines' },
      { label: 'Journal', href: '#journal' },
      { label: 'Clinical studies', href: '#clinical' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '#about' },
      { label: 'Our team', href: '#team' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Press', href: '#press' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Shipping & returns', href: '#shipping' },
      { label: 'Contact', href: '#contact' },
      { label: 'Help center', href: '#help' },
      { label: 'Gift cards', href: '#gift-cards' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Instagram', href: '#instagram' },
      { label: 'TikTok', href: '#tiktok' },
      { label: 'YouTube', href: '#youtube' },
      { label: 'Newsletter', href: '#newsletter' },
    ],
  },
];

export function Footer() {
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setLoopIndex((i) => (i + 1) % LOOP_IMAGES.length);
    }, LOOP_INTERVAL);
    return () => window.clearInterval(id);
  }, []);

  return (
    <footer
      id="footer"
      className="mt-32 border-t border-border bg-bg"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto w-full max-w-[1360px] px-10 pb-10 pt-24">
        {/* Pre-footer — 3 columns */}
        <div className="grid grid-cols-[1fr_1fr_1fr] items-start gap-12">
          {/* Logo column — oversized "us" wordmark in DM Serif Display Italic
              per CLAUDE.md brand rule (nav/footer wordmark = italic serif) */}
          <div className="flex flex-col items-start gap-6">
            <span
              aria-label="us"
              className="font-headline italic text-[200px] leading-[0.8] tracking-[-0.04em] text-ink"
            >
              us
            </span>
            <p className="text-[14px] leading-[1.5] text-muted">
              Every skin type.
              <br />
              Every concern. One standard.
            </p>
          </div>

          {/* Email signup */}
          <div className="flex flex-col gap-5 pt-4">
            <h3 className="font-headline text-[26px] font-normal leading-[1.2] tracking-[-0.02em] text-ink">
              Sign up and receive 15% off your first order.
            </h3>
            <p className="text-[14px] leading-[1.6] text-muted">
              Early access to new formulas, clinical trial invites, and the
              occasional honest letter from our team.
            </p>
            <form
              className="flex items-center gap-2 rounded-full border border-accent p-1.5 pl-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-[15px] text-ink placeholder:text-muted focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition-opacity duration-200 hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Crossfade image loop */}
          <div
            className="relative h-[360px] overflow-hidden rounded-xl bg-image-bg"
            aria-hidden
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={loopIndex}
                src={LOOP_IMAGES[loopIndex]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Footer nav */}
        <nav
          aria-label="Footer"
          className="mt-24 grid grid-cols-5 gap-10 border-t border-border pt-12"
        >
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3.5">
              <h3 className="text-[13px] font-medium uppercase tracking-[0.04em] text-ink">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] leading-[1.5] text-muted transition-colors duration-200 hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom row */}
        <div className="mt-12 flex items-center justify-between gap-6 border-t border-border pt-6">
          <p className="text-[13px] text-muted">
            © 2026 us Skincare. Made in small batches, in California.
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#privacy"
                className="text-[13px] text-muted transition-colors duration-200 hover:text-ink"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="text-[13px] text-muted transition-colors duration-200 hover:text-ink"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#accessibility"
                className="text-[13px] text-muted transition-colors duration-200 hover:text-ink"
              >
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
