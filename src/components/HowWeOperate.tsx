// HowWeOperate — port of pencil-new.pen "Landing Page- new" Section 4 (eUzrb).
// 4-step horizontal row explaining the process.
import howItWorks1 from '../assets/how-it-works/how-it-works-1.webp';
import howItWorks2 from '../assets/how-it-works/how-it-works-2.webp';
import howItWorks3 from '../assets/how-it-works/how-it-works-3.webp';
import howItWorks4 from '../assets/how-it-works/how-it-works-4.webp';
import './HowWeOperate.css';

const STEPS = [
  {
    num: '01',
    title: 'Tell us about your skin',
    desc: 'A quick skin assessment — the same questions a dermatologist would ask at a first visit.',
    img: howItWorks1,
  },
  {
    num: '02',
    title: 'We match your regimen',
    desc: 'Our team of dermatologists and chemists picks the right formulas for your skin type and goals.',
    img: howItWorks2,
  },
  {
    num: '03',
    title: 'Delivered to your door',
    desc: 'Your personalized routine arrives in a few days. No store visits, no guesswork.',
    img: howItWorks3,
  },
  {
    num: '04',
    title: 'Track your glow-up',
    desc: 'Check-ins, reminders, and adjustments as your skin changes. Real support for real results.',
    img: howItWorks4,
  },
];

export function HowWeOperate() {
  return (
    <section className="hiw-root" aria-labelledby="hiw-title">
      {/* HBP29 — HowItWorks/Header */}
      <div className="hiw-header">
        <h2 id="hiw-title" className="hiw-title">
          How it works
        </h2>
      </div>

      {/* o1g10 — HowItWorks/Cards */}
      <div className="hiw-cards">
        {STEPS.map((s) => (
          <article key={s.num} className="hiw-card">
            <div className="hiw-card-image-wrap">
              <img src={s.img} alt={s.title} className="hiw-card-image" />
            </div>
            <span className="hiw-card-number">{s.num}</span>
            <h3 className="hiw-card-title">{s.title}</h3>
            <p className="hiw-card-desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
