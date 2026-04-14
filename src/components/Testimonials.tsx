// Testimonials — port of pencil-new.pen "Landing Page- new" Section 7 (NjoTT).
// Horizontal scroll of 8 before/after testimonial cards with name + duration + quote.
import testimonial1 from '../assets/testimonials/testimonial-1.webp';
import testimonial2 from '../assets/testimonials/testimonial-2.webp';
import testimonial3 from '../assets/testimonials/testimonial-3.webp';
import testimonial4 from '../assets/testimonials/testimonial-4.webp';
import testimonial5 from '../assets/testimonials/testimonial-5.webp';
import testimonial6 from '../assets/testimonials/testimonial-6.webp';
import testimonial7 from '../assets/testimonials/testimonial-7.webp';
import testimonial8 from '../assets/testimonials/testimonial-8.webp';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Amara',
    duration: '1 month',
    quote: "I'd tried everything for my acne. This was the first routine that actually stuck, and my skin looks like mine again.",
    img: testimonial1,
  },
  {
    name: 'Marcus',
    duration: '3 months',
    quote: "Cystic acne ran my confidence. Three months in and I don't flinch at the mirror anymore.",
    img: testimonial3,
  },
  {
    name: 'Priya',
    duration: '6 months',
    quote: 'My hyperpigmentation finally faded evenly. No patchy overnight miracle, just steady, real change.',
    img: testimonial4,
  },
  {
    name: 'Tyler',
    duration: '2 months',
    quote: "The cleanser and retinol combo cleared whiteheads I've had for years. Low effort, high payoff.",
    img: testimonial2,
  },
  {
    name: 'Zara',
    duration: '1 year',
    quote: 'My rosacea used to flare at the smallest trigger. A year in and I go out without foundation for the first time.',
    img: testimonial6,
  },
  {
    name: 'Daniel',
    duration: '4 months',
    quote: 'Pores are smaller, texture is smoother, and I finally look like I actually sleep. Wild.',
    img: testimonial5,
  },
  {
    name: 'Nia',
    duration: '8 months',
    quote: 'Winter used to mean flaky, tight skin. This routine carries me through the driest months without a crack.',
    img: testimonial7,
  },
  {
    name: 'Andre',
    duration: '5 months',
    quote: "Old pockmarks finally filling in. Didn't expect this much change from something you can just put on at night.",
    img: testimonial8,
  },
];

export function Testimonials() {
  return (
    <section className="ts-root" aria-labelledby="ts-title">
      {/* u2rTm — Testimonials/Header */}
      <div className="ts-header">
        <div className="ts-header-left">
          <h2 id="ts-title" className="ts-title">
            Real skin. Real results.
          </h2>
          <p className="ts-meta">Results may vary.</p>
        </div>
        <button
          type="button"
          className="ts-cta group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)]"
        >
          <span
            className="ts-cta-fill absolute inset-0 bg-[#1A1A1A] translate-y-full transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-0"
            aria-hidden="true"
          />
          <span className="ts-cta-text relative z-10 text-[#0D0D0D]">Start your journey</span>
          <span
            className="ts-cta-clone absolute inset-0 z-20 flex items-center justify-center text-[#F7F5F0] pointer-events-none [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)]"
            aria-hidden="true"
          >
            Start your journey
          </span>
        </button>
      </div>

      {/* hJv2i — Testimonials/Cards */}
      <div className="ts-cards">
        {TESTIMONIALS.map((t) => (
          <article key={t.name} className="ts-card">
            <div className="ts-card-photo-wrap">
              <img src={t.img} alt={`${t.name}'s before and after`} className="ts-card-photo" />
            </div>
            <div className="ts-card-meta">
              <span className="ts-card-name">{t.name}</span>
              <span className="ts-card-duration">· {t.duration}</span>
            </div>
            <p className="ts-card-quote">&ldquo;{t.quote}&rdquo;</p>
          </article>
        ))}
      </div>
    </section>
  );
}
