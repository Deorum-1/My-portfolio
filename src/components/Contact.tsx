import Button from "@/components/Button";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-space border-border border-t"
      aria-labelledby="contact-title"
    >
      <div className="max-w-content px-page mx-auto grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-start">
        <div data-reveal className="lg:sticky lg:top-28">
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
            <Button
              href={`${site.whatsapp}?text=${encodeURIComponent("Hi Oluwaferanmi, I'd like to discuss a project.")}`}
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </Button>
          </div>
        </div>
        <div className="border-border rounded-2xl border p-5 sm:p-7" data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
