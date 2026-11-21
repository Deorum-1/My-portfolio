import Button from "@/components/Button";
import { site } from "@/lib/site";

const contacts = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "WhatsApp", href: site.whatsapp },
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-space border-border border-t"
      aria-labelledby="contact-title"
    >
      <div className="max-w-content px-page mx-auto grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div data-reveal>
          <p className="eyebrow">Have something in mind?</p>
          <h2
            id="contact-title"
            className="font-display mt-4 max-w-[13ch] text-4xl leading-[1.02] font-medium tracking-[-0.06em] sm:text-6xl"
          >
            Let’s make your next project real.
          </h2>
          <p className="text-muted mt-5 max-w-xl text-base leading-7">
            Share a little about the idea, what you need, and how you’d like to
            work together.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`}>Start a project</Button>
            <Button
              href={site.whatsapp}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </Button>
          </div>
        </div>
        <ul
          className="flex flex-wrap gap-x-5 gap-y-3 md:max-w-48 md:flex-col md:items-start"
          data-reveal
        >
          {contacts.slice(2).map((contact) => (
            <li key={contact.label}>
              <a
                className="text-muted decoration-border hover:text-foreground text-sm underline underline-offset-4 transition-colors"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
