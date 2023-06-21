
"use client";


import { usePreview } from "@/lib/sanity.preview"

import Portfolio from "./Portfolio";


type Props = {
    query: string;
}


export default function PreviewPortfolio({ query }: Props) {

    const projectsQuery = usePreview(null, query);
    // Modified but not yet publish

    return <Portfolio projects= {projectsQuery} />


}


