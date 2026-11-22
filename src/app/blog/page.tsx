import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes by Oluwaferanmi Sokunbi on frontend development and web project decisions.",
};

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <section className="section-space">
          <div className="max-w-content px-page mx-auto">
            <p className="eyebrow">Blog</p>
            <h1 className="section-title">Writing about the work.</h1>
            <ul className="divide-border border-border mt-10 divide-y border-y">
              {posts.map((post, index) => (
                <li key={post.slug} className="py-6" data-reveal>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-start justify-between gap-6"
                  >
                    <div>
                      <h2 className="font-display max-w-2xl text-xl font-medium tracking-tight group-hover:underline sm:text-3xl">
                        {post.title}
                      </h2>
                      <p className="text-muted mt-3 max-w-xl text-sm leading-6">
                        {post.description}
                      </p>
                      <p className="text-muted mt-3 text-xs">
                        {new Date(`${post.date}T00:00:00`).toLocaleDateString("en", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}{" "}
                        · {post.readingTime} min read
                      </p>
                    </div>
                    <span className="text-muted text-xs font-medium">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
