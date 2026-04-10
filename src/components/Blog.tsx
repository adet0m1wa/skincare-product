import { ArrowRight } from '@phosphor-icons/react';

type Post = {
  category: string;
  title: string;
  excerpt: string;
};

const POSTS: Post[] = [
  {
    category: 'Ingredients',
    title: '5 Ingredients Your Dermatologist Wants You to Avoid',
    excerpt:
      'A field guide to the fillers, irritants, and marketing darlings that quietly do nothing for your skin.',
  },
  {
    category: 'Routines',
    title: 'How to Build a Morning Routine That Actually Works',
    excerpt:
      'Four steps, in the right order, under five minutes. No ten-product stack, no cultish rituals.',
  },
  {
    category: 'Ingredients',
    title: 'The Truth About Vitamin C Serums',
    excerpt:
      'L-ascorbic, ethyl ascorbate, tetrahexyldecyl — why the form matters more than the percentage.',
  },
];

export function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="mx-auto w-full max-w-[1360px] px-10 pt-32"
    >
      <header className="mb-10 flex items-end justify-between gap-6">
        <h2
          id="blog-heading"
          className="font-headline text-[38px] font-normal leading-[1.1] tracking-[-0.02em] text-ink"
        >
          From the journal
        </h2>
        <a
          href="#all-posts"
          className="group inline-flex items-center gap-2 whitespace-nowrap text-[15px] font-medium text-ink"
        >
          Read more
          <ArrowRight
            size={16}
            weight="regular"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </header>

      <ul className="grid grid-cols-3 gap-6">
        {POSTS.map((post) => (
          <li key={post.title}>
            <a href="#" className="group flex flex-col gap-5 focus:outline-none">
              {/* Placeholder — blog images not yet generated */}
              <div
                aria-hidden
                className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-image-bg"
              />

              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center rounded-full bg-tag px-3 py-1.5 text-[13px] font-medium uppercase tracking-[0.04em] text-tag-ink">
                  {post.category}
                </span>
                <h3 className="text-[17px] font-medium leading-[1.3] text-ink transition-colors duration-200 group-hover:text-muted">
                  {post.title}
                </h3>
                <p className="text-[14px] leading-[1.5] text-muted">{post.excerpt}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
