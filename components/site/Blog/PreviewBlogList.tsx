"use client";

import { usePreview } from "@/lib/sanity.preview";

import BlogList from "./BlogList";

type Props = {
  query: string;
};

export default function PreviewBlogList({ query }: Props) {
  const blogPosts = usePreview(null, query);

  // Modified but not yet publish
  return <BlogList posts={blogPosts} />;
}
