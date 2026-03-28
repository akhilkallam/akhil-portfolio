import { getPost, getPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getPosts("fitness");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost("fitness", params.slug);
  if (!post) return {};
  return { title: `${post.title} — Akhil` };
}

export default function FitnessPost({ params }: { params: { slug: string } }) {
  const post = getPost("fitness", params.slug);

  if (!post) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
      <Link
        href="/fitness"
        className="text-sm text-gray-400 hover:text-gray-900 transition-colors mb-8 inline-block"
      >
        &larr; Fitness
      </Link>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-10">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <article className="prose prose-gray max-w-none">
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
