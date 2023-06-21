
"use client";


import { usePreview } from "@/lib/sanity.preview"

import ContactInfo from "./contactInfo";


type Props = {
    query: string;
}


export default function PreviewContactInfo({ query }: Props) {

    const contactInfo = usePreview(null, query);
    // Modified but not yet publish

    return <ContactInfo contacts= {contactInfo} />


}


