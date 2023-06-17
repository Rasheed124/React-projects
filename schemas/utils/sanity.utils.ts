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
              ...,
           
             } | order(_createdAt desc)`
    )

}


// Getting Each Project
export async function getProject(slug: string): Promise<Projects> {

    return client.fetch(

    groq`*[_type == "projects" && slug.current == $slug][0]{
            _id,
              ...,

      
             } `,
             {slug}
    )

}


// Getting Skills
export async function getTestimonials(): Promise<Testimonial[]> {

    return client.fetch(

    groq`*[_type == "testimonial"]{
            _id,
            title,
            description,
            author

             } | order(_createdAt desc)`
    )

}


export async function getBlogList(): Promise<Post[]> {

    return client.fetch(

        groq`
        *[_type == "post"]{
            ...,
            author->,
            categories[]->
        } | order(_createdAt desc) `

            )


}
