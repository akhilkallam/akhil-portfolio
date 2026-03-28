import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function PostCard({
  post,
  type,
}: {
  post: Post;
  type: "travel" | "fitness";
}) {
  return (
    <Link href={`/${type}/${post.slug}`}>
      <div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer h-full flex flex-col">
        <p className="text-xs text-gray-400 mb-3">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3 className="font-semibold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
