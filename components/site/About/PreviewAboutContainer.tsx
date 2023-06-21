
"use client";


import { usePreview } from "@/lib/sanity.preview"

import AboutContainer from "./AboutContainer";


type Props = {
    query: string;
}


export default function PreviewAbout({ query }: Props) {

    const aboutQuery = usePreview(null, query);
    // Modified but not yet publish

    return <AboutContainer abouts= {aboutQuery} />


}


