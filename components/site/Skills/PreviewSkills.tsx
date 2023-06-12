"use client";


import { usePreview } from "@/lib/sanity.preview"
import Skills from "./Skills";


type Props = {
    query: string;
}


export default function PreviewSkills({ query }: Props) {

    const skill = usePreview(null, query);
    // Modified but not yet publish

    return <Skills skills= {skill} />


}


