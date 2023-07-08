"use client";

import { usePreview } from "@/lib/sanity.preview";

import PostList from "./PostList";

type Props = {
  query: string;
};

export default function PreviewPostList({ query }: Props) {
  const posts = usePreview(null, query);

  console.log("Loading..", posts);

  // Modified but not yet publish

  return <PostList posts={posts} />;
}
