"use client";

import { usePreview } from "@/lib/sanity.preview";

import PostSlug from "./PostSlug";

type Props = {
  params: { slug: string };
};

export default function PreviewPostSlug({ params }: Props) {
  const blogPosts = usePreview(null, params.slug);

  // Modified but not yet publish
  return <PostSlug params={params} />;
}
