"use client";


import { usePreview } from "@/lib/sanity.preview"
import Banner from "./Banner";


type Props = {
    query: string;
}


export default function PreviewBanner({ query }: Props) {

    const homeBanners = usePreview(null, query);
    // Modified but not yet publish

    return <Banner homeBanners= {homeBanners} />


}