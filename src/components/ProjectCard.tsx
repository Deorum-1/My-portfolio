import Image from "next/image";
import Button from "@/components/Button";

export type ProjectCardData = {
  title: string;
  description?: string;
  href: string;
  linkLabel: string;
  category: string;
  image?: string;
  repoUrl?: string;
  slug?: string;
  tags?: string[];
  visual: "gaming" | "estate" | "agency";
};

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article
      className="group flex min-w-0 flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none"
      data-reveal
    >
      <div
        className={`project-art project-art--${project.visual} relative m-2.5 flex aspect-[1.55] flex-col overflow-hidden rounded-[1.25rem]`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} website screenshot`}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          />
        ) : (
          <>
            <div className="project-art__content relative flex min-h-0 flex-1 flex-col justify-between p-5 sm:p-6">
              <span className="font-display text-foreground/65 text-xs font-medium tracking-[0.16em] uppercase">
                {project.category}
              </span>
              <strong className="font-display text-foreground relative z-10 max-w-[12ch] text-2xl leading-[0.98] font-medium tracking-[-0.055em] sm:text-3xl">
                {project.title}
              </strong>
              <span className="text-foreground/65 relative z-10 flex items-center justify-between text-xs font-medium">
                <span>
                  {project.tags?.slice(0, 2).join(" · ") || "Web project"}
                </span>
                <span aria-hidden="true">↗</span>
              </span>
            </div>
            <span
              className="project-art__shape project-art__shape--one"
              aria-hidden="true"
            />
            <span
              className="project-art__shape project-art__shape--two"
              aria-hidden="true"
            />
          </>
        )}
      </div>
      <div className="flex grow flex-col p-5 pt-3 sm:p-6 sm:pt-3">
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-muted mt-2 line-clamp-2 min-h-12 text-sm leading-6">
              {project.description}
            </p>
          )}
          {project.tags && (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border-border text-muted rounded-full border px-2.5 py-1 text-[0.68rem]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-border mt-auto flex flex-wrap items-center gap-2 border-t pt-4">
          {project.slug && (
            <Button
              href={`/work/${project.slug}`}
              variant="outline"
              className="px-4 text-xs"
            >
              Case study
            </Button>
          )}
          {project.href && (
            <Button
              href={project.href}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              className="px-4 text-xs"
              aria-label={`${project.linkLabel}: ${project.title} (opens in a new tab)`}
            >
              {project.linkLabel}
            </Button>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
              className="text-muted hover:text-foreground focus-visible:outline-focus ml-auto inline-flex min-h-10 items-center rounded-full px-3 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              GitHub <span className="ml-1" aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
