// export functions to get data from sanity

import { groq } from 'next-sanity'
import { Project } from '../types/Project';
import { Page } from '../types/Page';

import { client } from './config/client-config';




// Getting All Project
export async function getProjects(): Promise<Project[]> {



    return client.fetch(

        groq`*[_type == "project"]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )


}


// Getting Each Project
export async function getProject(slug: string): Promise<Project> {


    return client.fetch(

        groq`*[_type == "project" && slug.current == $slug][0]{
            _id, 
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        { slug }
    )
}




// Getting All Pages
export async function getPages(): Promise<Page[]> {

    return client.fetch(

        groq`*[_type == "page"]{
            _id, 
            _createdAt,
            title,
            "slug": slug.current,
        }`
    )

}


// Getting Each Page
export async function getPage(slug: string): Promise<Page> {


    return client.fetch(

        groq`*[_type == "page" && slug.current == $slug][0]{
            _id, 
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug }
    )

}