const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Responsive, accessible pages that explain what you do and make the next step clear.",
  },
  {
    number: "02",
    title: "Animated and interactive frontends",
    description:
      "Careful motion and interaction that add character without getting in the way.",
  },
  {
    number: "03",
    title: "React and Next.js web apps",
    description:
      "Component-based web experiences built around your project’s needs.",
  },
  {
    number: "04",
    title: "Website redesigns",
    description:
      "A clearer structure and more considered responsive experience for an existing site.",
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
              Useful websites, built with care.
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
