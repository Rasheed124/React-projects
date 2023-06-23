
"use client";


import { usePreview } from "@/lib/sanity.preview"

import ContentWriting from "./ContentWriting";


type Props = {
    query: string;
}


export default function PreviewContentWriting({ query }: Props) {

    const writingQuery = usePreview(null, query);
    // Modified but not yet publish

    return <ContentWriting contentwriting= {writingQuery} />


}


