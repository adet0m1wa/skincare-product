// Bestsellers — port of pencil-new.pen "Landing Page- new" Section 3 (7DBT4).
// Horizontal product carousel with snap scrolling.
import { useReveal } from '../hooks/useReveal';
import productSerum from '../assets/products/product-serum.webp';
import productSerumHover from '../assets/products/product-serum-hover.webp';
import productMoisturizer from '../assets/products/product-moisturizer.webp';
import productMoisturizerHover from '../assets/products/product-moisturizer-hover.webp';
import productCleanser from '../assets/products/product-cleanser.webp';
import productCleanserHover from '../assets/products/product-cleanser-hover.webp';
import productRetinol from '../assets/products/product-retinol.webp';
import productRetinolHover from '../assets/products/product-retinol-hover.webp';
import productSpf from '../assets/products/product-spf.webp';
import productSpfHover from '../assets/products/product-spf-hover.webp';
import './Bestsellers.css';

const PRODUCTS = [
  { name: 'Brightening Vitamin C Serum', desc: 'Brightens, evens tone, fades dark spots', price: '$48', img: productSerum, hoverImg: productSerumHover },
  { name: 'Hydrating Hyaluronic Moisturizer', desc: 'Hydrates, plumps, restores moisture barrier', price: '$42', img: productMoisturizer, hoverImg: productMoisturizerHover },
  { name: 'Gentle Exfoliating Cleanser', desc: 'Smooths, unclogs pores, refines texture', price: '$32', img: productCleanser, hoverImg: productCleanserHover },
  { name: 'Retinol Night Repair Cream', desc: 'Firms, repairs, reduces fine lines overnight', price: '$58', img: productRetinol, hoverImg: productRetinolHover },
  { name: 'Daily Defense SPF 50', desc: 'Shields, prevents damage, lightweight daily wear', price: '$36', img: productSpf, hoverImg: productSpfHover },
];

export function Bestsellers() {
  const sectionReveal = useReveal();
  return (
    <section className="bestsellers-root" aria-labelledby="bestsellers-title">
      {/* J1Inq — Bestsellers/Header */}
      <div className="bestsellers-header">
        <div className="bestsellers-header-left" ref={sectionReveal.ref}>
          <h2
            id="bestsellers-title"
            className={`bestsellers-title fade-up${sectionReveal.revealed ? ' revealed' : ''}`}
          >
            Bestsellers
          </h2>
          <p
            className={`bestsellers-subtitle fade-up${sectionReveal.revealed ? ' revealed' : ''}`}
            style={{ transitionDelay: sectionReveal.revealed ? '100ms' : '0ms' }}
          >
            Loved most. Repeat purchased more than anything else we make.
          </p>
        </div>
        <button
          type="button"
          className={`bestsellers-view-more group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)] active:scale-[0.97] active:transition-transform active:duration-[80ms] fade-up${sectionReveal.revealed ? ' revealed' : ''}`}
          style={{ transitionDelay: sectionReveal.revealed ? '200ms' : '0ms' }}
        >
          <span className="bs-vm-text relative z-0 text-[#0D0D0D] max-[999px]:hidden">View more products</span>
          <span
            className="bs-vm-clone absolute inset-0 z-10 flex items-center justify-center bg-[#1A1A1A] text-[#F7F5F0] [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)] max-[999px]:[clip-path:inset(0)]"
            aria-hidden="true"
          >
            View more products
          </span>
        </button>
      </div>

      {/* wtvUy — Bestsellers/Cards */}
      <div
        className={`bestsellers-track-wrap fade-in${sectionReveal.revealed ? ' revealed' : ''}`}
        style={{ transitionDuration: '200ms' }}
      >
        <div className="bestsellers-track">
          {PRODUCTS.map((p) => (
            <article key={p.name} className="bestsellers-card">
              <div className="bestsellers-card-image-wrap">
                <img
                  src={p.img}
                  alt={p.name}
                  className="bestsellers-card-image bestsellers-card-image-default"
                />
                <img
                  src={p.hoverImg}
                  alt=""
                  aria-hidden
                  className="bestsellers-card-image bestsellers-card-image-hover"
                />
              </div>
              <span className="bestsellers-card-desc">{p.desc}</span>
              <span className="bestsellers-card-name">{p.name}</span>
              <span className="bestsellers-card-price">{p.price}</span>
              <button
                type="button"
                className="bestsellers-card-btn group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)] active:scale-[0.97] active:transition-transform active:duration-[80ms]"
              >
                <span className="bs-btn-text relative z-0 text-[#0D0D0D] max-[999px]:hidden">Add to cart</span>
                <span
                  className="bs-btn-clone absolute inset-0 z-10 flex items-center justify-center bg-[#1A1A1A] text-[#F7F5F0] [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)] max-[999px]:[clip-path:inset(0)]"
                  aria-hidden="true"
                >
                  Add to cart
                </span>
              </button>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
