import Link from "next/link";
import { getPosts } from "@/lib/content";

export default function BlogPreview() {
  const posts = getPosts().slice(0, 3);
  return (
    <section
      id="blog"
      className="section-space bg-surface"
      aria-labelledby="blog-title"
    >
      <div className="max-w-content px-page mx-auto">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Notes from the process</p>
            <h2 id="blog-title" className="section-title">
              Writing about the work.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-6">
            Practical notes on frontend development and making good choices for
            the web.
          </p>
        </div>
        <ul className="divide-border border-border mt-8 divide-y border-y">
          {posts.map((post, index) => (
            <li
              key={post.slug}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
              data-reveal
            >
              <Link
                href={`/blog/${post.slug}`}
                className="font-display text-lg font-medium tracking-tight hover:underline sm:max-w-2xl"
              >
                {post.title}
              </Link>
              <span className="text-muted shrink-0 text-xs font-medium">
                {post.readingTime} min read · 0{index + 1}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/blog"
          className="text-muted hover:text-foreground mt-6 inline-flex text-sm font-semibold underline underline-offset-4"
        >
          Visit the blog
        </Link>
      </div>
    </section>
  );
}
