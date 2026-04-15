// Blog — port of pencil-new.pen "Landing Page- new" Section 8 (PfLT6).
// 3 blog post cards: image + title. Title is underlined via border-bottom.
import { useReveal } from '../hooks/useReveal';
import blog1 from '../assets/blog/blog-1.webp';
import blog2 from '../assets/blog/blog-2.webp';
import blog3 from '../assets/blog/blog-3.webp';
import './Blog.css';

const POSTS = [
  { title: '5 Ingredients Your Dermatologist Wants You to Avoid', img: blog1 },
  { title: 'How to Build a Morning Routine That Actually Works', img: blog2 },
  { title: 'The Truth About Vitamin C Serums', img: blog3 },
];

export function Blog() {
  const sectionReveal = useReveal();
  return (
    <section className="blog-root" aria-labelledby="blog-title">
      {/* 3wLDi — Blog/Header */}
      <div className="blog-header" ref={sectionReveal.ref}>
        <h2
          id="blog-title"
          className={`blog-title fade-up${sectionReveal.revealed ? ' revealed' : ''}`}
        >
          From the journal
        </h2>
        <button
          type="button"
          className={`blog-read-more group relative inline-flex items-center justify-center overflow-hidden border border-[#1A1A1A] bg-transparent cursor-pointer [transform:translateZ(0)] active:scale-[0.97] active:transition-transform active:duration-[80ms] fade-up${sectionReveal.revealed ? ' revealed' : ''}`}
          style={{ transitionDelay: sectionReveal.revealed ? '100ms' : '0ms' }}
        >
          <span className="relative z-0 text-[#0D0D0D] max-[999px]:hidden">Read more</span>
          <span
            className="absolute inset-0 z-10 flex items-center justify-center bg-[#1A1A1A] text-[#F7F5F0] [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[clip-path:inset(0_0_0_0)] max-[999px]:[clip-path:inset(0)]"
            aria-hidden="true"
          >
            Read more
          </span>
        </button>
      </div>

      {/* O2oFN — Blog/Cards */}
      <div
        className={`blog-cards fade-in${sectionReveal.revealed ? ' revealed' : ''}`}
        style={{ transitionDuration: '150ms' }}
      >
        {POSTS.map((p) => (
          <article key={p.title} className="blog-card">
            <div className="blog-card-image-wrap">
              <img src={p.img} alt={p.title} className="blog-card-image" />
            </div>
            <h3 className="blog-card-title">
              <span className="blog-card-title-text">{p.title}</span>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
