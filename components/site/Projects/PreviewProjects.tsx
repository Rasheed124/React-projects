"use client";


import { usePreview } from "@/lib/sanity.preview"
import Projects from "./Projects";


type Props = {
    query: string;
}


export default function PreviewProjects({ query }: Props) {

    const project = usePreview(null, query);
    // Modified but not yet publish

    return <Projects projects= {project} />


}


