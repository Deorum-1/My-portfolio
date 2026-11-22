import Button from "@/components/Button";
import ProjectCard, { type ProjectCardData } from "@/components/ProjectCard";
import { getProjects } from "@/lib/content";

export default function SelectedWork() {
  const projects: ProjectCardData[] = getProjects().map((project) => {
    const href = project.liveUrl || project.repoUrl || `/work/${project.slug}`;
    return {
      title: project.title,
      description: project.summary,
      href,
      linkLabel: project.liveUrl
        ? "View live site"
        : project.repoUrl
          ? "View repository"
          : "View project",
      category: project.category,
      image: project.image,
      repoUrl: project.liveUrl ? project.repoUrl : undefined,
      slug: project.slug,
      tags: project.tags,
      visual: project.visual,
    };
  });
  const visibleProjects = projects.slice(0, 6);
  const additionalProjects = projects.slice(6);

  return (
    <section id="work" className="section-space" aria-labelledby="work-title">
      <div className="max-w-content px-page mx-auto">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="section-title">
              Frontend work, made to stand out.
            </h2>
          </div>
          <p className="text-muted max-w-sm text-sm leading-6">
            A selection of responsive websites and interfaces, with the design,
            interaction, and detail kept in focus.
          </p>
        </div>
        <div className="border-border mt-8 flex items-center justify-between border-y py-3">
          <span className="text-muted text-xs font-medium uppercase tracking-[0.14em]">
            Project archive
          </span>
          <span className="text-muted text-xs font-medium">
            {String(projects.length).padStart(2, "0")} projects
          </span>
        </div>
        <div className="mt-6 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {additionalProjects.length > 0 && (
          <details className="project-expander mt-6">
            <summary className="border-border bg-surface hover:bg-background focus-visible:outline-focus mx-auto mt-8 inline-flex min-h-12 cursor-pointer list-none items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4">
              <span className="project-expander__more">Show more</span>
              <span className="project-expander__less">Show less</span>
              <span className="project-expander__icon" aria-hidden="true">
                ⌄
              </span>
            </summary>
            <div className="project-expander__content mt-6 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
              {additionalProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </details>
        )}
        <div
          className="border-border bg-surface mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border p-6 sm:p-8"
          data-reveal
        >
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
