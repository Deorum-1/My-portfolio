import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getPostBySlug, getPosts, type PostFrontmatter } from "@/lib/content";

export const instant = false;

export function generateStaticParams() {
  return getPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return post
    ? { title: post.title, description: post.description }
    : { title: "Post not found" };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const { content } = await compileMDX<PostFrontmatter>({
    source: post.content,
  });

  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <article className="section-space">
          <div className="max-w-content px-page mx-auto">
            <p className="eyebrow">Article</p>
            <h1 className="font-display mt-4 max-w-[18ch] text-4xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              {post.title}
            </h1>
            <p className="text-muted mt-5 text-sm">
              {new Date(`${post.date}T00:00:00`).toLocaleDateString("en", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {post.readingTime} min read
            </p>
            <div className="text-muted mt-10 max-w-3xl space-y-6 [&_h2]:font-display [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_p]:leading-8 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_li]:leading-8">
              {content}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/blog" variant="outline">
                Back to the blog
              </Button>
              <Button href="/#work">See selected work</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
