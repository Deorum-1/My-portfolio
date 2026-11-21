import Button from "@/components/Button";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We clarify the audience, goals, content and project scope.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the brief into a clear structure and visual direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I develop the responsive frontend and refine it with your feedback.",
  },
  {
    number: "04",
    title: "Launch",
    description: "We review the details together before the site goes live.",
  },
  {
    number: "05",
    title: "Support",
    description: "We agree on any follow-up help your project needs.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-space"
      aria-labelledby="process-title"
    >
      <div className="max-w-content px-page mx-auto">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How we work</p>
            <h2 id="process-title" className="section-title">
              A clear path from brief to launch.
            </h2>
          </div>
          <Button href="#contact" variant="outline">
            Talk through your project
          </Button>
        </div>
        <ol className="process-list mt-12 grid gap-0 md:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="process-step border-border relative border-l py-5 pl-5 md:border-t md:border-l-0 md:pt-6 md:pr-5 md:pl-0"
            >
              <span className="font-display text-muted text-sm font-semibold">
                {step.number}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="text-muted mt-2 text-sm leading-6">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
