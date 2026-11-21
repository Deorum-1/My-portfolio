import Button from "@/components/Button";
import { site } from "@/lib/site";

const experience = [
  "Freelance",
  "Instructor at SAI",
  "ICTREC internship",
  "AI Fluency certification",
];

const skills = ["React", "Next.js", "GSAP", "JavaScript"];

export default function About() {
  return (
    <section
      id="about"
      className="section-space bg-foreground text-background"
      aria-labelledby="about-title"
    >
      <div className="max-w-content px-page mx-auto grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <p className="eyebrow text-background/60">A little about me</p>
          <h2
            id="about-title"
            className="font-display mt-4 max-w-[12ch] text-4xl leading-[1.02] font-medium tracking-[-0.06em] sm:text-5xl"
          >
            A thoughtful frontend partner for your next build.
          </h2>
          <p className="text-background/70 mt-6 max-w-xl text-base leading-7">
            I’m {site.name}, a {site.title} based in {site.location}. I work
            with businesses and agencies to shape and build web experiences,
            from a focused business site to an interactive frontend.
          </p>
          <p className="text-background/60 mt-4 max-w-xl text-sm leading-6">
            My experience includes freelance work, teaching at SAI, and an
            ICTREC internship. I also hold an AI Fluency certification.
          </p>
          <Button href="#contact" className="mt-8">
            Get in touch
          </Button>
        </div>
        <div className="grid content-start gap-8">
          <div>
            <h3 className="text-background/55 text-xs font-semibold tracking-[0.18em] uppercase">
              Tools I work with
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border-background/20 text-background/80 rounded-full border px-3 py-1.5 text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-background/55 text-xs font-semibold tracking-[0.18em] uppercase">
              Experience
            </h3>
            <ul className="divide-background/15 mt-4 divide-y">
              {experience.map((item) => (
                <li
                  key={item}
                  className="text-background/80 py-3 text-sm first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
