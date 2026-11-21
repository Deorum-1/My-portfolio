const plannedPosts = [
  "How I added GSAP scroll animations without slowing the page down",
  "What a small business should know before hiring a web developer",
  "React vs Next.js: which one does your website need?",
];

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="section-space bg-surface"
      aria-labelledby="blog-title"
    >
      <div className="max-w-content px-page mx-auto">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Notes from the process</p>
            <h2 id="blog-title" className="section-title">
              Writing about the work.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-6">
            Planned topics on frontend development and making good choices for
            the web.
          </p>
        </div>
        <ul className="divide-border border-border mt-8 divide-y border-y">
          {plannedPosts.map((title, index) => (
            <li
              key={title}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-display text-lg font-medium tracking-tight sm:max-w-2xl">
                {title}
              </span>
              <span className="text-muted shrink-0 text-xs font-medium">
                Planned article · 0{index + 1}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
