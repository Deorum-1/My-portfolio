import Button from "@/components/Button";
import HeroVisual from "@/components/HeroVisual";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="border-border/70 relative overflow-hidden border-b"
      aria-labelledby="hero-title"
    >
      <div className="max-w-content px-page mx-auto grid min-h-[calc(100svh-5rem)] items-center gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-4 lg:py-20">
        <div className="relative z-10 max-w-2xl">
          <p className="border-border bg-surface text-muted mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium">
            <span
              className="bg-accent size-2 rounded-full"
              aria-hidden="true"
            />
            {site.availability}
          </p>
          <h1
            id="hero-title"
            className="font-display max-w-[13ch] text-[clamp(3rem,6.4vw,6.5rem)] leading-[0.94] font-medium tracking-[-0.075em]"
          >
            Frontend work,
            <span className="text-muted mt-1 block">made to connect.</span>
          </h1>
          <p className="text-muted mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
            I build responsive websites and expressive React interfaces, with
            thoughtful motion, accessible details, and a sharp eye for design.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Start a project</Button>
            <Button href="#work" variant="outline">
              Explore selected work
            </Button>
          </div>
          <dl className="border-border mt-9 grid max-w-xl grid-cols-3 gap-3 border-t pt-5">
            <div>
              <dt className="text-muted text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                Focus
              </dt>
              <dd className="mt-1 text-sm font-semibold">React + Next.js</dd>
            </div>
            <div>
              <dt className="text-muted text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                Delivery
              </dt>
              <dd className="mt-1 text-sm font-semibold">Responsive</dd>
            </div>
            <div>
              <dt className="text-muted text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                Status
              </dt>
              <dd className="mt-1 text-sm font-semibold">Available</dd>
            </div>
          </dl>
        </div>
        <HeroVisual />
      </div>
      <div className="bg-accent/10 pointer-events-none absolute -top-32 -right-36 size-[28rem] rounded-full blur-3xl" />
    </section>
  );
}
