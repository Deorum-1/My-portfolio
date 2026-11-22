const services = [
  {
    number: "01",
    title: "Responsive websites",
    description:
      "Modern, mobile-friendly websites with clear structure, polished layouts, and accessible details.",
  },
  {
    number: "02",
    title: "Interactive interfaces",
    description:
      "Engaging React experiences with purposeful animation and interactions that feel natural.",
  },
  {
    number: "03",
    title: "React and Next.js development",
    description:
      "Reusable components and well-crafted page flows for products, portfolios, and web apps.",
  },
  {
    number: "04",
    title: "Frontend refresh and refinement",
    description:
      "Improve an existing website with better usability, responsive behavior, accessibility, and performance.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-space bg-surface"
      aria-labelledby="services-title"
    >
      <div className="max-w-content px-page mx-auto">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">What I do</p>
            <h2 id="services-title" className="section-title">
              Frontends built with care.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-6">
            Pick up a focused project or bring me into a larger team.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.number}
              className="service-card group border-border bg-background hover:border-foreground/30 rounded-3xl border p-6 transition-colors sm:p-8"
              data-reveal
            >
              <span className="font-display text-muted text-sm font-medium">
                {service.number}
              </span>
              <h3 className="font-display mt-8 text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted mt-3 max-w-md text-sm leading-6">
                {service.description}
              </p>
              <span
                className="border-border mt-8 inline-grid size-9 place-items-center rounded-full border text-lg transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
