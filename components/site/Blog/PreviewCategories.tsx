"use client";


import { usePreview } from "@/lib/sanity.preview"

import Categories from "./Categories"

type Props = {

    query: string;
}


export default function PreviewCategories({ query }: Props) {
    const blogPosts = usePreview(null, query);



    // Modified but not yet publish

    return <Categories posts={blogPosts} />


}