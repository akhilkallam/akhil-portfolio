import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export function getPosts(type: "travel" | "fitness"): Post[] {
  const contentDir = path.join(process.cwd(), "content", type);

  if (!fs.existsSync(contentDir)) return [];

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const filePath = path.join(contentDir, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        content,
      } satisfies Post;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPost(
  type: "travel" | "fitness",
  slug: string
): Post | null {
  const extensions = [".mdx", ".md"];

  for (const ext of extensions) {
    const filePath = path.join(process.cwd(), "content", type, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        content,
      };
    }
  }

  return null;
}
