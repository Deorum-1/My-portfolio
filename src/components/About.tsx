import Button from "@/components/Button";
import { site } from "@/lib/site";

const experience = [
  {
    role: "Freelance",
    detail:
      "Full-stack web development for businesses, agencies, and individuals.",
  },
  { role: "Instructor", detail: "SAI" },
  { role: "Internship", detail: "ICTREC" },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Appwrite",
  "GSAP",
];
const focusAreas = [
  "Business websites",
  "Interactive frontends",
  "Full-stack web apps",
  "API development",
];

export default function About() {
  return (
    <section
      id="about"
      className="section-space bg-foreground text-background"
      aria-labelledby="about-title"
    >
      <div className="max-w-content px-page mx-auto grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div data-reveal>
          <p className="eyebrow text-background/60">A little about me</p>
          <h2
            id="about-title"
            className="font-display mt-4 max-w-[12ch] text-4xl leading-[1.02] font-medium tracking-[-0.06em] sm:text-5xl"
          >
            A thoughtful frontend partner for your next build.
          </h2>
          <p className="text-background/70 mt-6 max-w-xl text-base leading-7">
            I’m {site.name}, a {site.title}. I work across the whole product:
            React and Next.js on the front-end,
            with Node.js and APIs on the back-end. I turn ideas and designs
            into responsive, maintainable web experiences.
          </p>
          <p className="text-background/60 mt-4 max-w-xl text-sm leading-6">
            My experience includes freelance work, teaching at SAI, and an
            ICTREC internship. I also hold an AI Fluency certification.
          </p>
          <Button href="#contact" className="mt-8">
            Get in touch
          </Button>
        </div>
        <div className="grid content-start gap-8" data-reveal>
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
                  key={item.role}
                  className="flex flex-col gap-1 py-3 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span className="text-background/90 text-sm font-medium">
                    {item.role}
                  </span>
                  <span className="text-background/60 text-sm">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-background/55 text-xs font-semibold tracking-[0.18em] uppercase">
              Project focus
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="border-background/20 text-background/80 rounded-full border px-3 py-1.5 text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-background/60 mt-5 text-sm">
              Certification: AI Fluency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
