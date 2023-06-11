import { groq } from 'next-sanity'

import { client } from "@/lib/sanity.client";


// Getting HomeBanner
export async function getHomeBanner(): Promise<HomeBanner[]> {

    return client.fetch(

        groq`*[_type == "homeBanner"]{
            _id, 
            name,
            address,
            skills,
            handleText,
            "bannerImage" : bannerImage.asset->url,
            "handle": handle.current,
        }`
    )

}


// Getting HomeBanner
export async function getSkills(): Promise<HomeBanner[]> {

    return client.fetch(

        groq`*[_type == "skills"]{
            _id,
            heading,
            subHeading,
            skillsDetails[]->
             } | order(_createdAt desc)`
    )

}




