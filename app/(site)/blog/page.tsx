

import { draftMode } from "next/headers";

import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";

import PreviewSuspense from "@/components/site/PreviewSuspense";
import PreviewBlogList from "@/components/site/PreviewBlogList";
import BlogList from "@/components/site/BlogList";


const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
   } | order(_createdAt desc)
   `;



export default async function Home() {
    const { isEnabled } = draftMode();

    const posts = await client.fetch(query);

    if (isEnabled) {
        return (

            <BlogList posts={posts} />

        );
    }


    return (

        <PreviewSuspense fallback={
            <div role="status">
                <p className="text-center text-lg text-[#F7AB0A]">
                    Loading Preview Data....
                </p>
            </div>
        }>

            {/* Preview Blog List */}
            <PreviewBlogList query={query} />

        </PreviewSuspense>

    );
}