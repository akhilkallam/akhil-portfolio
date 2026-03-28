import type { Metadata } from "next";
import { getPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Travel — Akhil",
};

export default function TravelPage() {
  const posts = getPosts("travel");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Travel</h1>
        <p className="text-gray-500 max-w-lg">
          Places explored, people met, and things learned along the way.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400">No posts yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} type="travel" />
          ))}
        </div>
      )}
    </div>
  );
}
