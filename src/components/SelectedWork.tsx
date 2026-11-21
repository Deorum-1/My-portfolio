import Button from "@/components/Button";
import ProjectCard, { type ProjectCardData } from "@/components/ProjectCard";

const projects: ProjectCardData[] = [
  {
    title: "Animated Gaming Site",
    description:
      "An interactive gaming website with scroll and interaction animations.",
    href: "https://award-winning-website-with-reactjs.vercel.app",
    linkLabel: "View live site",
    tags: ["React", "GSAP", "JavaScript"],
    visual: "gaming",
  },
  {
    title: "Real Estate Listing Platform",
    href: "https://real-estate-website-five-bice.vercel.app",
    linkLabel: "View live site",
    visual: "estate",
  },
  {
    title: "Agency.ai",
    href: "https://github.com/Deorum-1/Agency.ai",
    linkLabel: "View repository",
    visual: "agency",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="section-space" aria-labelledby="work-title">
      <div className="max-w-content px-page mx-auto">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="section-title">
              Real projects. Thoughtful builds.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-6">
            A few web projects, each with a different problem to solve.
          </p>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-6 md:gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="border-border bg-surface mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border p-6 sm:p-8">
          <p className="text-muted max-w-lg text-sm leading-6">
            Have a project in mind? Tell me what you are building and where you
            would like a hand.
          </p>
          <Button href="#contact">Start a project</Button>
        </div>
      </div>
    </section>
  );
}
