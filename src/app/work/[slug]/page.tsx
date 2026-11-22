import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getProjectBySlug, getProjects, type ProjectFrontmatter } from "@/lib/content";

export const instant = false;

export function generateStaticParams() {
  return getProjects().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project
    ? { title: `${project.title} — Case Study`, description: project.summary }
    : { title: "Project not found" };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const { content } = await compileMDX<ProjectFrontmatter>({
    source: project.content,
  });
  const projectUrl = project.liveUrl || project.repoUrl;
  const projectLinkLabel = project.liveUrl
    ? "View live site"
    : "View repository";

  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <section className="section-space">
          <div className="max-w-content px-page mx-auto">
            <p className="eyebrow">{project.category}</p>
            <h1 className="font-display mt-4 max-w-[14ch] text-5xl font-medium leading-[0.98] tracking-[-0.07em] sm:text-7xl">
              {project.title}
            </h1>
            <p className="text-muted mt-6 max-w-2xl text-lg leading-8">
              {project.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="border-border rounded-full border px-3 py-2 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              {projectUrl && (
                <Button
                  href={projectUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {projectLinkLabel}
                </Button>
              )}
              <Button href="/#work" variant="outline">
                Back to selected work
              </Button>
            </div>
          </div>
        </section>
        {project.image && (
          <section className="border-border border-t py-8 sm:py-12">
            <div className="max-w-content px-page mx-auto">
              <div className="border-border relative aspect-[1.7] overflow-hidden rounded-3xl border">
                <Image
                  src={project.image}
                  alt={`${project.title} website screenshot`}
                  fill
                  sizes="(max-width: 1152px) 100vw, 1152px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </section>
        )}
        <section className="border-border border-t">
          <article className="max-w-content px-page mx-auto py-12 [&_h2]:font-display [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:text-muted [&_p]:mt-3 [&_p]:max-w-3xl [&_p]:leading-7">
            {content}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
