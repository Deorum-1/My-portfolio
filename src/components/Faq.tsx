const questions = [
  {
    question: "How long does a website take to build?",
    answer:
      "It depends on the scope, features and how ready the content is. Once we have the brief, I can suggest a realistic timeline before work begins.",
  },
  {
    question: "What content do you need from me?",
    answer:
      "Any copy, images, brand files and links you already have are a useful start. We can agree what is still needed during discovery.",
  },
  {
    question: "Can I edit the site after launch?",
    answer:
      "That depends on the project and how it is built. We can discuss what you need to update and include the right setup in the scope.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing depends on the requirements and complexity. Share what you have in mind and I’ll respond with a clear scope and estimate.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "I’m based in Abeokuta, Nigeria, and available for freelance and agency projects. We can coordinate online and agree on a communication rhythm that fits the work.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="section-space" aria-labelledby="faq-title">
      <div className="max-w-content px-page mx-auto grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div data-reveal>
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title" className="section-title">
            A few useful answers.
          </h2>
          <p className="text-muted mt-4 max-w-sm text-sm leading-6">
            Have a question that isn’t covered here? Reach out and tell me what
            you’re planning.
          </p>
        </div>
        <div className="divide-border border-border divide-y border-y">
          {questions.map((item) => (
            <details key={item.question} className="group py-5" data-reveal>
              <summary className="font-display focus-visible:outline-focus flex cursor-pointer list-none items-start justify-between gap-5 rounded-lg text-lg font-semibold tracking-tight marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4">
                {item.question}
                <span
                  aria-hidden="true"
                  className="border-border grid size-7 shrink-0 place-items-center rounded-full border text-sm transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="text-muted max-w-xl pt-4 pr-8 text-sm leading-6">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
