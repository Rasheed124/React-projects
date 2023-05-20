import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../lib/sanity.client";

import { PreviewSuspense } from "next-sanity/preview";
// import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";


const PreviewBlogList = lazy(() => import("@/components/PreviewBlogList"));
const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
   } | order(_createdAt desc)`;



export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const data = await client.fetch(query);

  return { props: { preview, data } };
};





export default function HomePage({
  preview,
  data,
}: {
  preview: Boolean;
  data: SanityDocument[];
}) {

  // PreviewSuspense shows while data is being fetched
  // The fetch happens inside PreviewMovies
  return preview ? (
    <PreviewSuspense fallback="Loading...">
      <PreviewBlogList query={query} />
    </PreviewSuspense>
  ) : (
    <BlogList posts={data} />
  );
}