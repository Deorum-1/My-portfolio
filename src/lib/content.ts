import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  order: number;
  category: string;
  visual: "gaming" | "estate" | "agency";
};

export type Project = ProjectFrontmatter & {
  content: string;
};

const projectsDirectory = path.join(process.cwd(), "src", "content", "projects");
const blogDirectory = path.join(process.cwd(), "src", "content", "blog");

export function getProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];

  return fs
    .readdirSync(projectsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(projectsDirectory, file), "utf8");
      const { data, content } = matter(source);
      return { ...(data as ProjectFrontmatter), content };
    })
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getProjects().find((project) => project.slug === slug);
}

export type PostFrontmatter = {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
};

export type Post = PostFrontmatter & {
  content: string;
  readingTime: number;
};

export function getPosts(): Post[] {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const source = fs.readFileSync(path.join(blogDirectory, file), "utf8");
      const { data, content } = matter(source);
      const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
      return {
        ...(data as PostFrontmatter),
        content,
        readingTime: Math.max(1, Math.ceil(wordCount / 200)),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}
