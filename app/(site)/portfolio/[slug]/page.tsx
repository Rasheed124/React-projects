import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import  GrFormCheckmark from 'react-icons/gr'

import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";



type Props = {
    params: {
        slug: string;
    };
};


async function Projects({ params: { slug } }: Props) {

    const query = 
    groq`*[_type == "projects" && slug.current == $slug][0]{
            _id,
              ...,
           
             } `
         

    const project: Projects = await client.fetch(query, { slug })


    // {console.log(project)}
    return (

        <div className="bg-light-white">

              <div className="max-w-6xl mx-auto border grid grid-cols-1 md:grid-cols-2 gap-5 py-10 bg-light-white">

                    {/* IMAGES & VIDEOS */}

                    <div>
                        <div>

                        </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                        <div className="space-y-5 ">
                            {/* Title */}
                            <h2 className="text-6xl text-deep-black font-bold ">
                              {project.title}
                            </h2>
                             <div className="space-y-3">
                                <h4 className="text-xl text-deep-black font-bold font-Antonio">{project.shortdescription}</h4>
                                <p>{project.description}</p>
                             </div>
                             
                            <div className=" grid grid-cols-2 place-items-start  max-w-md mb-5  ">
                                {Array.from(project.skillsTitle).map(skill => (

                                        <p className="text-lg"> <span></span> {skill}</p>
                                ))}
                             </div>

                             <div>

                                <h3 className="text-2xl text-deep-black font-bold font-Antonio mb-3">KEY RESULTS</h3>

                                <div className=" grid grid-cols-1 space-y-5   place-items-start  max-w-md  ">
                                    {Array.from(project.keyResult).map(result => (

                                            <p className="text-lg border-b border-dotted pb-3 "> <span></span> {result}</p>
                                      ))}
                                 </div>

                             </div>


                             <div>

                                <h3 className="text-2xl text-deep-black font-bold font-Antonio mb-3">CLIENT TESTIMONIAL</h3>

                                    <div>
                                        {project.testimonials}

                                    </div>

                             </div>




                        </div>
                    </div>
              </div>

        


           
        </div>
    )
}

export default Projects