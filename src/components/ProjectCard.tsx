import Button from "@/components/Button";

export type ProjectCardData = {
  title: string;
  description?: string;
  href: string;
  linkLabel: string;
  tags?: string[];
  visual: "gaming" | "estate" | "agency";
};

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article className="group min-w-0" data-reveal>
      <div
        className={`project-art project-art--${project.visual} border-border relative overflow-hidden rounded-[1.75rem] border`}
        aria-hidden="true"
      >
        <div className="border-foreground/10 flex items-center gap-1.5 border-b px-4 py-3">
          <span className="bg-foreground/20 size-2 rounded-full" />
          <span className="bg-foreground/20 size-2 rounded-full" />
          <span className="bg-foreground/20 size-2 rounded-full" />
          <span className="text-foreground/55 ml-3 text-[0.6rem] font-medium tracking-[0.14em] uppercase">
            Project cover
          </span>
        </div>
        <div className="project-art__content relative flex min-h-64 flex-col justify-between p-6 sm:min-h-72 sm:p-8">
          <span className="font-display text-foreground/65 text-xs font-medium tracking-[0.16em] uppercase">
            {project.visual === "gaming"
              ? "Interactive"
              : project.visual === "estate"
                ? "Real estate"
                : "Agency"}
          </span>
          <strong className="font-display text-foreground relative z-10 max-w-[12ch] text-3xl leading-[0.98] font-medium tracking-[-0.055em] sm:text-4xl">
            {project.title}
          </strong>
          <span className="text-foreground/65 relative z-10 flex items-center justify-between text-xs font-medium">
            <span>Web project</span>
            <span aria-hidden="true">↗</span>
          </span>
        </div>
        <span className="project-art__shape project-art__shape--one" />
        <span className="project-art__shape project-art__shape--two" />
      </div>
      <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-muted mt-2 max-w-md text-sm leading-6">
              {project.description}
            </p>
          )}
          {project.tags && (
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tools">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border-border text-muted rounded-full border px-2.5 py-1 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button
          href={project.href}
          variant="outline"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 px-4 text-xs"
        >
          {project.linkLabel}
        </Button>
      </div>
    </article>
  );
}
