
import { groq } from "next-sanity";

export default  function getServerSideQueries() {


  // Home Banner
 const BannerQuery =  
      groq`*[_type == "homeBanner"]{
                _id, 
                name,
                address,
                skills,
                handleText,
                "bannerImage" : bannerImage.asset->url,
                "handle": handle.current,
        
            }`


// Skills
const SkillQuery =  
    groq`*[_type == "skills"]{
            _id,
            heading,
            subHeading,
             skillsDetails[]->{
               ...,
             "image" : image.asset->url,
            }
             } | order(_createdAt desc)`



const ProjectsQuery = 

    groq`*[_type == "projects"]{
            _id,
              ...,
           
             } | order(_createdAt desc)`


const TestimonialsQuery = 

    groq`*[_type == "testimonial"]{
            _id,
            title,
            description,
            author

             } | order(_createdAt desc)`


const PostQuery =   groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->
   } | order(_createdAt desc)
   `;



const AboutQuery = groq`
        
        *[_type == "about"]{
          ...,
           "image" : image.asset->url,
             companys[]->{
               ...,
             "image" : image.asset->url,
            }
             } | order(_createdAt desc)

        `;



 return ({ BannerQuery, SkillQuery, ProjectsQuery, TestimonialsQuery, PostQuery, AboutQuery} )


}