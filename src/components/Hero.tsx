import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import heroCouple from '../assets/hero/hero-couple.webp';
import heroFemaleBefore from '../assets/hero/hero-female-before.webp';
import heroMaleBefore from '../assets/hero/hero-male-before.webp';

type HeroState = {
  src: string;
  alt: string;
  thumbLabel: string;
};

const STATES: HeroState[] = [
  {
    src: heroCouple,
    alt: 'Two models holding us serum bottles, resting together in warm natural light.',
    thumbLabel: 'Our story',
  },
  {
    src: heroFemaleBefore,
    alt: 'Before and after of a womans skincare journey from congested to clear.',
    thumbLabel: 'Her journey',
  },
  {
    src: heroMaleBefore,
    alt: 'Before and after of a mans skincare journey from pockmarks to smooth skin.',
    thumbLabel: 'His journey',
  },
];

const FADE_EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="mx-auto flex w-full max-w-[1360px] overflow-hidden"
    >
      {/* Left — copy column */}
      <div className="flex flex-1 flex-col justify-between border border-border bg-bg p-14">
        <div className="flex flex-col items-start gap-7">
          <span className="inline-flex items-center rounded-full bg-tag px-[14px] py-[7px] text-[13px] font-medium uppercase tracking-[0.04em] text-tag-ink">
            Clinically tested · Dermatologist approved
          </span>

          <h1
            id="hero-heading"
            className="font-headline text-[54px] font-normal leading-[1.08] tracking-[-0.02em] text-ink"
          >
            Your skin deserves
            <br />
            more than guesswork
          </h1>

          <p className="max-w-[420px] text-[16px] leading-[1.65] text-muted">
            Formulated by dermatologists, made for us — every skin type, every concern,
            one standard of care.
          </p>

          <a
            href="#shop"
            className="mt-2 inline-flex items-center rounded-full bg-accent px-8 py-4 text-[15px] font-medium text-white transition-opacity duration-200 hover:opacity-90"
          >
            Shop now
          </a>
        </div>

        <div className="mt-10 border-t border-border pt-5">
          <p className="flex flex-wrap items-center gap-x-3 text-[13px] text-muted">
            <span aria-hidden>★★★★★</span>
            <span className="sr-only">5 out of 5 stars,</span>
            <span>4,800+ reviews</span>
            <span aria-hidden className="text-muted/50">|</span>
            <span>Free shipping over $50</span>
          </p>
        </div>
      </div>

      {/* Right — image column */}
      <div className="relative flex-1 overflow-hidden bg-image-bg" style={{ minHeight: 533 }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.img
            key={active}
            src={STATES[active].src}
            alt={STATES[active].alt}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: FADE_EASE }}
          />
        </AnimatePresence>

        {/* Bottom fade + thumbnail navigation */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-image-bg via-image-bg/70 to-transparent pb-5 pt-20">
          <div
            role="tablist"
            aria-label="Hero image navigation"
            className="flex gap-5"
          >
            {STATES.map((state, i) => {
              const isActive = i === active;
              return (
                <button
                  key={state.thumbLabel}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show ${state.thumbLabel}`}
                  onClick={() => setActive(i)}
                  className={`h-10 w-10 overflow-hidden rounded-lg border transition-opacity duration-200 ${
                    isActive
                      ? 'border-accent opacity-100'
                      : 'border-ink/30 opacity-60 hover:opacity-90'
                  }`}
                >
                  <img
                    src={state.src}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
