// Blog — port of pencil-new.pen "Landing Page- new" Section 8 (PfLT6).
// 3 blog post cards: image + title. Title is underlined via border-bottom.
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
  return (
    <section className="blog-root" aria-labelledby="blog-title">
      {/* 3wLDi — Blog/Header */}
      <div className="blog-header">
        <h2 id="blog-title" className="blog-title">
          From the journal
        </h2>
        <a href="#" className="blog-read-more">
          Read more&nbsp;&nbsp;&rarr;
        </a>
      </div>

      {/* O2oFN — Blog/Cards */}
      <div className="blog-cards">
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
