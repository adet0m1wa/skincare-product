// ScienceBanner — static paragraph + headline + infinite marquee.
import { useEffect, useRef } from 'react';
import { RevealHeading } from './RevealHeading';
import { useReveal } from '../hooks/useReveal';
import './ScienceBanner.css';

const MARQUEE_ITEMS = [
  'Parabens Free',
  'Cruelty Free',
  'Vegan',
  'Sulfate Free',
  'Clinically Tested',
  'Dermatologist Approved',
];

export function ScienceBanner() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sectionReveal = useReveal();

  useEffect(() => {
    const node = marqueeRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.remove('sb-marquee-paused');
        } else {
          node.classList.add('sb-marquee-paused');
        }
      },
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sb-root" aria-label="Our standards" ref={sectionReveal.ref as unknown as React.RefObject<HTMLElement>}>
      {/* Headline */}
      <RevealHeading
        lines={["Grounded in science.", "Driven by purpose."]}
        tag="h2"
        className="sb-headline"
        staggerMs={60}
        externalRevealed={sectionReveal.revealed}
      />

      {/* Marquee */}
      <div
        className={`sb-marquee fade-in${sectionReveal.revealed ? ' revealed' : ''}`}
        aria-hidden
        ref={marqueeRef}
        style={{ transitionDuration: '250ms', transitionDelay: '300ms' }}
      >
        <div className="sb-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="sb-marquee-item">
              <span>{item}</span>
              <span className="sb-marquee-dot">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
