"use client";


import { usePreview } from "@/lib/sanity.preview"
import Testimonial from "./Testimonial";


type Props = {
    query: string;
}


export default function PreviewTestimonials({ query }: Props) {

    const testimonial = usePreview(null, query);
    // Modified but not yet publish

    return <Testimonial testimonials= {testimonial} />


}


