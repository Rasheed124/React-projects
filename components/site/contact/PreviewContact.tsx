
"use client";


import { usePreview } from "@/lib/sanity.preview"

import Contact from "./Contact";


type Props = {
    query: string;
}


export default function PreviewContact({ query }: Props) {

    const contact = usePreview(null, query);
    // Modified but not yet publish

    return <Contact contactPage= {contact} />


}


