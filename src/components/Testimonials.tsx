import { useRef } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';
import t1 from '../assets/testimonials/testimonial-1.webp';
import t2 from '../assets/testimonials/testimonial-2.webp';
import t3 from '../assets/testimonials/testimonial-3.webp';
import t4 from '../assets/testimonials/testimonial-4.webp';
import t5 from '../assets/testimonials/testimonial-5.webp';
import t6 from '../assets/testimonials/testimonial-6.webp';
import t7 from '../assets/testimonials/testimonial-7.webp';
import t8 from '../assets/testimonials/testimonial-8.webp';

type Story = {
  name: string;
  duration: string;
  quote: string;
  image: string;
};

// Mapping verified against image content in a prior session —
// Marcus↔3, Priya↔4, Tyler↔2, Zara↔6, Daniel↔5 are corrected pairings.
const STORIES: Story[] = [
  {
    name: 'Amara',
    duration: '1 month',
    quote:
      'I&rsquo;d tried everything for my acne. This was the first routine that actually stuck, and my skin looks like mine again.',
    image: t1,
  },
  {
    name: 'Marcus',
    duration: '3 months',
    quote:
      'Cystic acne ran my confidence. Three months in and I don&rsquo;t flinch at the mirror anymore.',
    image: t3,
  },
  {
    name: 'Priya',
    duration: '6 months',
    quote:
      'My hyperpigmentation finally faded evenly. No patchy overnight miracle, just steady, real change.',
    image: t4,
  },
  {
    name: 'Tyler',
    duration: '2 months',
    quote:
      'The cleanser and retinol combo cleared whiteheads I&rsquo;ve had for years. Low effort, high payoff.',
    image: t2,
  },
  {
    name: 'Zara',
    duration: '1 year',
    quote:
      'My rosacea used to flare at the smallest trigger. A year in and I go out without foundation for the first time.',
    image: t6,
  },
  {
    name: 'Daniel',
    duration: '4 months',
    quote:
      'Pores are smaller, texture is smoother, and I finally look like I actually sleep. Wild.',
    image: t5,
  },
  {
    name: 'Nia',
    duration: '8 months',
    quote:
      'Winter used to mean flaky, tight skin. This routine carries me through the driest months without a crack.',
    image: t7,
  },
  {
    name: 'Andre',
    duration: '5 months',
    quote:
      'Old pockmarks finally filling in. Didn&rsquo;t expect this much change from something you can just put on at night.',
    image: t8,
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: -1 | 1) => {
    scrollerRef.current?.scrollBy({
      left: direction * 326,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="mx-auto w-full max-w-[1360px] px-10 pt-32"
    >
      <header className="mb-12 flex items-end justify-between gap-6">
        <div className="flex flex-col gap-2.5">
          <h2
            id="testimonials-heading"
            className="font-headline text-[38px] font-normal leading-[1.1] tracking-[-0.02em] text-ink"
          >
            Real skin. Real results.
          </h2>
          <p className="flex flex-wrap items-center gap-x-3 text-[15px] text-muted">
            <span aria-hidden>★★★★★</span>
            <span className="sr-only">4.8 out of 5 stars</span>
            <span>4.8 out of 5</span>
            <span aria-hidden className="text-muted/50">·</span>
            <span>4,800+ verified reviews</span>
          </p>
        </div>
        <a
          href="#start-journey"
          className="inline-flex items-center whitespace-nowrap rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white transition-opacity duration-200 hover:opacity-90"
        >
          Start your journey
        </a>
      </header>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {STORIES.map((story) => (
            <figure
              key={story.name}
              className="flex w-[302px] shrink-0 snap-start flex-col gap-5"
            >
              <div className="overflow-hidden rounded-xl bg-image-bg">
                <img
                  src={story.image}
                  alt={`${story.name} before and after ${story.duration} of use`}
                  className="h-[240px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="flex flex-col gap-3">
                <p className="text-[16px] font-medium text-ink">
                  {story.name}
                  <span className="mx-2 text-muted" aria-hidden>
                    ·
                  </span>
                  <span className="text-muted">{story.duration}</span>
                </p>
                <blockquote
                  className="text-[14px] leading-[1.6] text-muted"
                  dangerouslySetInnerHTML={{ __html: `&ldquo;${story.quote}&rdquo;` }}
                />
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous testimonials"
          className="absolute -left-2 top-[100px] inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-bg text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
        >
          <CaretLeft size={20} weight="regular" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next testimonials"
          className="absolute -right-2 top-[100px] inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-bg text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
        >
          <CaretRight size={20} weight="regular" />
        </button>
      </div>

      <p className="mt-6 text-[13px] text-muted">
        Results may vary. Drag to see more stories →
      </p>
    </section>
  );
}
