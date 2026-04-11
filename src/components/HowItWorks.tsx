import { ArrowRight } from '@phosphor-icons/react';
import step1 from '../assets/how-it-works/how-it-works-1.webp';
import step2 from '../assets/how-it-works/how-it-works-2.webp';
import step3 from '../assets/how-it-works/how-it-works-3.webp';
import step4 from '../assets/how-it-works/how-it-works-4.webp';

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Tell us about your skin',
    description:
      'A quick skin assessment — the same questions a dermatologist would ask at a first visit.',
    image: step1,
    alt: 'Woman on a couch taking a skin assessment on her phone',
  },
  {
    number: '02',
    title: 'We match your regimen',
    description:
      'Our team of dermatologists and chemists picks the right formulas for your skin type and goals.',
    image: step2,
    alt: 'Flat lay of a curated set of us products on a marble surface',
  },
  {
    number: '03',
    title: 'Delivered to your door',
    description:
      'Your personalized routine arrives in a few days. No store visits, no guesswork.',
    image: step3,
    alt: 'Man unboxing a delivery of us skincare products at his front door',
  },
  {
    number: '04',
    title: 'Track your glow-up',
    description:
      'Check-ins, reminders, and adjustments as your skin changes. Real support for real results.',
    image: step4,
    alt: 'Woman checking her skincare progress tracker on her phone in the bathroom',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="mx-auto w-full max-w-[1360px] px-10 pt-24"
    >
      <header className="mb-10 flex items-end justify-between gap-6">
        <h2
          id="how-it-works-heading"
          className="font-headline text-[38px] font-normal leading-[1.1] tracking-[-0.02em] text-ink"
        >
          How it works
        </h2>
        <a
          href="#get-started"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-accent px-6 py-3 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
        >
          Get started
          <ArrowRight size={16} weight="regular" />
        </a>
      </header>

      <ol className="grid grid-cols-4 gap-6">
        {STEPS.map((step) => (
          <li key={step.number} className="group flex flex-col gap-5">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-image-bg">
              <img
                src={step.image}
                alt={step.alt}
                className="h-full w-full object-cover transition-transform duration-[500ms] ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-headline text-[42px] leading-none text-ink">
                {step.number}
              </span>
              <h3 className="text-[17px] font-medium leading-[1.3] text-ink">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.5] text-muted">
                {step.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
