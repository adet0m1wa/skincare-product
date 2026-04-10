import { ShoppingBag } from '@phosphor-icons/react';
import logoBlack from '../assets/logo/logo_black.png';

type NavLink = { label: string; href: string };

const LINKS: NavLink[] = [
  { label: 'Bestsellers', href: '#bestsellers' },
  { label: 'Skincare', href: '#skincare' },
  { label: 'Body + Hair', href: '#body' },
  { label: 'Sets', href: '#sets' },
  { label: 'About', href: '#about' },
];

export function Nav() {
  return (
    <header className="w-full border-b border-border bg-bg">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1440px] items-center px-10 py-7"
      >
        {/* Left — logo */}
        <div className="flex flex-1 items-end">
          <a
            href="#top"
            aria-label="us — home"
            className="inline-flex items-center"
          >
            <img
              src={logoBlack}
              alt="us"
              width={48}
              height={48}
              className="h-12 w-12 select-none"
              draggable={false}
            />
          </a>
        </div>

        {/* Center — nav links */}
        <ul className="flex flex-1 items-center justify-center gap-9">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="group relative inline-block py-1 text-[15px] font-medium text-ink"
              >
                {label}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -bottom-0.5 block h-px origin-center scale-x-0 bg-ink transition-transform duration-[250ms] ease-out group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right — cart + CTA */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <button
            type="button"
            aria-label="Shopping bag (0 items)"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-ink/5"
          >
            <ShoppingBag size={22} weight="regular" />
          </button>
          <a
            href="#regimen"
            className="inline-flex items-center rounded-full border border-accent px-6 py-3 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
          >
            Build My Regimen
          </a>
        </div>
      </nav>
    </header>
  );
}
