import { useRef } from 'react';
import { CaretRight, ArrowRight } from '@phosphor-icons/react';
import serum from '../assets/products/product-serum.webp';
import moisturizer from '../assets/products/product-moisturizer.webp';
import cleanser from '../assets/products/product-cleanser.webp';
import retinol from '../assets/products/product-retinol.webp';
import spf from '../assets/products/product-spf.webp';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  rating: string;
  image: string;
  tag: string;
  hoverBg: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'serum',
    name: 'Brightening Vitamin C Serum',
    description: 'Brightens, evens tone, fades dark spots',
    price: '$48',
    rating: '4.8',
    image: serum,
    tag: 'Brightening',
    hoverBg: '#ff6b4a',
  },
  {
    id: 'moisturizer',
    name: 'Hydrating Hyaluronic Moisturizer',
    description: 'Hydrates, plumps, restores moisture barrier',
    price: '$42',
    rating: '4.9',
    image: moisturizer,
    tag: 'Hydration',
    hoverBg: '#3a6fff',
  },
  {
    id: 'cleanser',
    name: 'Gentle Exfoliating Cleanser',
    description: 'Smooths, unclogs pores, refines texture',
    price: '$32',
    rating: '4.7',
    image: cleanser,
    tag: 'Clarity',
    hoverBg: '#ff3d88',
  },
  {
    id: 'retinol',
    name: 'Retinol Night Repair Cream',
    description: 'Firms, repairs, reduces fine lines overnight',
    price: '$58',
    rating: '4.9',
    image: retinol,
    tag: 'Renewal',
    hoverBg: '#6b3fff',
  },
  {
    id: 'spf',
    name: 'Daily Defense SPF 50',
    description: 'Shields, prevents damage, lightweight daily wear',
    price: '$36',
    rating: '4.8',
    image: spf,
    tag: 'Protection',
    hoverBg: '#ffd23f',
  },
];

export function Bestsellers() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    scrollerRef.current?.scrollBy({
      left: 280,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="bestsellers"
      aria-labelledby="bestsellers-heading"
      className="mx-auto w-full max-w-[1360px] px-10 pt-24"
    >
      <header className="mb-10 flex items-end justify-between gap-6">
        <div className="flex flex-col gap-2.5">
          <h2
            id="bestsellers-heading"
            className="font-headline text-[38px] font-normal leading-[1.1] tracking-[-0.02em] text-ink"
          >
            Bestsellers
          </h2>
          <p className="text-[16px] leading-[1.5] text-muted">
            Loved most. Repeat purchased more than anything else we make.
          </p>
        </div>
        <a
          href="#all-products"
          className="group inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-medium text-ink"
        >
          View more products
          <ArrowRight
            size={16}
            weight="regular"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </header>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-10 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PRODUCTS.map((product) => (
            <article
              key={product.id}
              className="group flex w-[calc((100%-160px)/5)] min-w-[220px] shrink-0 snap-start flex-col gap-4"
            >
              <div
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-white transition-opacity duration-300 group-hover:opacity-0" />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: product.hoverBg }}
                />
                <span className="absolute right-4 top-4 z-10 rounded-full bg-tag px-3 py-1.5 text-[13px] font-medium uppercase tracking-[0.04em] text-tag-ink">
                  {product.tag}
                </span>
                <img
                  src={product.image}
                  alt={`${product.name} bottle`}
                  className="absolute inset-0 h-full w-full object-contain p-8"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <h3 className="text-[16px] font-medium leading-tight text-ink">
                  {product.name}
                </h3>
                <p className="text-[14px] leading-[1.5] text-muted">
                  {product.description}
                </p>
                <p className="text-[14px] text-muted">
                  <span>{product.price}</span>
                  <span className="mx-3" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="sr-only">{product.rating} out of 5 stars, </span>
                  <span>{product.rating}</span>
                </p>
              </div>

              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-accent px-4 py-3 text-[14px] font-medium text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
              >
                Add to cart
              </button>
            </article>
          ))}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next products"
          className="absolute right-0 top-[112px] inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-bg text-ink transition-colors duration-200 hover:bg-accent hover:text-white"
        >
          <CaretRight size={20} weight="regular" />
        </button>
      </div>
    </section>
  );
}
