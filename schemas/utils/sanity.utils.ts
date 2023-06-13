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


// Getting Skills
export async function getSkills(): Promise<Skills[]> {

    return client.fetch(

    groq`*[_type == "skills"]{
            _id,
            heading,
            subHeading,
             skillsDetails[]->{
               ...,
             "image" : image.asset->url,
            }
             } | order(_createdAt desc)`
    )

}


// Getting All Project
export async function getProjects(): Promise<Projects[]> {

    return client.fetch(

    groq`*[_type == "projects"]{
            _id,
            heading,
             projectsDetails[]->{
              subHeading,
            }
             } | order(_createdAt desc)`
    )

}


// Getting Each Project
// export async function getProject(): Promise<Project> {

//     return client.fetch(

//     groq`*[_type == "projects"]{
//             _id,
            // projectsDetails[]->{
            //   ...,
            //   subHeading,
             //   shortdescription,
            //   description,
            //   skillsTitle,
            //   projectImage
            // }
//              } | order(_createdAt desc)`
//     )

// }


