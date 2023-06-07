import { lazy } from "react";
import { groq } from "next-sanity";
import type { SanityDocument } from "@sanity/client";
import { client } from "../../lib/sanity.client";

import { PreviewSuspense } from "next-sanity/preview";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";


// const PreviewBlogList = lazy(() => import("@/components/PreviewBlogList"));
// const query = groq`
//   *[_type == "post"]{
//     ...,
//     author->,
//     categories[]->
//    } | order(_createdAt desc)`;

const getPostData = async () => {
  const res = await fetch(
    groq`
    *[_type == "post"]{
      ...,
      author->,
      categories[]->
     } | order(_createdAt desc)`
  );
  return res.json()
}



export default async function PostList() {

}
// export const  = async ({ preview = false }) => {
//   if (preview) {
//     return { props: { preview } };
//   }

//   const data = await client.fetch(query);

//   <>{console.log(data)}</>



//   return { props: { preview, data } };
// };




