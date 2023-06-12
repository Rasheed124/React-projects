
import { groq } from "next-sanity";

export default  function getServerSideQueries() {

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


 return ({ BannerQuery, SkillQuery} )
}