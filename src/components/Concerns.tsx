import { ArrowRight } from '@phosphor-icons/react';
import aging from '../assets/concerns/concern-aging.webp';
import congestion from '../assets/concerns/concern-congestion.webp';
import texture from '../assets/concerns/concern-texture.webp';
import eyecare from '../assets/concerns/concern-eyecare.webp';
import redness from '../assets/concerns/concern-redness.webp';
import dryness from '../assets/concerns/concern-dryness.webp';

type Concern = { label: string; image: string; href: string };

const CONCERNS: Concern[] = [
  { label: 'Aging', image: aging, href: '#aging' },
  { label: 'Congestion', image: congestion, href: '#congestion' },
  { label: 'Texture', image: texture, href: '#texture' },
  { label: 'Eye Care', image: eyecare, href: '#eye-care' },
  { label: 'Redness', image: redness, href: '#redness' },
  { label: 'Dryness', image: dryness, href: '#dryness' },
];

export function Concerns() {
  return (
    <section
      id="concerns"
      aria-labelledby="concerns-heading"
      className="mx-auto w-full max-w-[1360px] px-10 pt-24"
    >
      <header className="mb-10 flex items-end justify-between gap-6">
        <div className="flex flex-col gap-2.5">
          <h2
            id="concerns-heading"
            className="font-headline text-[38px] font-normal leading-[1.1] tracking-[-0.02em] text-ink"
          >
            Common concerns, considered
          </h2>
          <p className="text-[16px] leading-[1.5] text-muted">
            Start with what your skin is telling you. We&rsquo;ll take it from there.
          </p>
        </div>
        <a
          href="#unique-concern"
          className="group inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-medium text-ink"
        >
          Got a unique concern?
          <ArrowRight
            size={16}
            weight="regular"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </header>

      <ul className="grid grid-cols-6 gap-5">
        {CONCERNS.map(({ label, image, href }) => (
          <li key={label}>
            <a
              href={href}
              className="group flex flex-col gap-4 focus:outline-none"
            >
              <div className="overflow-hidden rounded-xl bg-image-bg">
                <img
                  src={image}
                  alt={`Close-up skin photo representing ${label.toLowerCase()}`}
                  className="h-[280px] w-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <span className="inline-flex items-center gap-2 text-[16px] font-medium text-ink">
                {label}
                <ArrowRight
                  size={14}
                  weight="regular"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
