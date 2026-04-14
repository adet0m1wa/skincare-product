// ScienceBanner — static paragraph + headline + infinite marquee.
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
  return (
    <section className="sb-root" aria-label="Our standards">
      {/* Headline */}
      <h2 className="sb-headline">
        {'Grounded in science.\nDriven by purpose.'}
      </h2>

      {/* Marquee */}
      <div className="sb-marquee" aria-hidden>
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
