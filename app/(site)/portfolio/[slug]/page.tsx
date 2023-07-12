import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import GrFormCheckmark from "react-icons/gr";

import urlFor from "@/lib/urlFor";

import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/site/Navbars/NavbarLayout";

type Props = {
  params: {
    slug: string;
  };
};

async function Projects({ params: { slug } }: Props) {
  const query = groq`*[_type == "projects" && slug.current == $slug][0]{
            _id,
              ...,
                text[]{
                _type == "muxVideo" => {
            ...,
            asset->{
                ...,
                "video": "https://stream.mux.com/" + playbackId
                }
            },


        projectContent[]->{
               ...,
             "image" : image.asset->url,
            }
                }
           
             } `;

  const project: Projects = await client.fetch(query, { slug });

  return (
    <Layout route="/contact">
      <div className="bg-white ">
        <div className="max-w-6xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5 py-10 px-4 mt-16">
          {/* IMAGES & VIDEOS */}

          <div>
            <div>
              {project.projectContent &&
                project.projectContent.map((project) => (
                  <div key={project._id}>
                    <div className="space-y-5">
                      {project.image && (
                        <Image
                          src={urlFor(project.image).url()}
                          width={400}
                          height={600}
                          alt={project.title}
                        />
                      )}

                      {project.video && (
                        <video
                          src={`${project.video}`}
                          width={600}
                          height={600}
                          controls
                        ></video>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="space-y-5 ">
              {/* Title */}
              <h2 className="text-6xl font-Antonio text-deep-black font-bold ">
                {project.title}
              </h2>
              <div className="space-y-3">
                <h4 className="text-xl text-deep-black font-bold font-Antonio">
                  {project.shortdescription}
                </h4>
                <p>{project.description}</p>
              </div>
              <div className=" grid grid-cols-2 place-items-start  max-w-[350px] mb-5  ">
                {project.skillsTitle &&
                  Array.from(project.skillsTitle).map((skill, index) => (
                    <p key={index} className="text-lg ">
                      {" "}
                      <span className="text-black">✔</span> {skill}
                    </p>
                  ))}
              </div>

              {/* KEY RESULT */}

              {project.keyResult && (
                <div>
                  <h3 className="text-2xl text-deep-black font-bold font-Antonio mb-3">
                    KEY RESULTS
                  </h3>

                  <div className=" grid grid-cols-1 space-y-5   place-items-start  max-w-md  ">
                    {Array.from(project.keyResult).map((result, index) => (
                      <p key={index} className="text-lg border-b border-dotted border-light-overlay pb-3 ">
                        {" "}
                        <span></span> {result}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* TESTIMONIAL */}

              {project.testimonials && (
                <div>
                  <h3 className="text-2xl text-deep-black font-bold font-Antonio mb-3">
                    CLIENT TESTIMONIAL
                  </h3>
                  <p className="text-lg pb-3 "> {project.testimonials}</p>
                  {/* <div className=" grid grid-cols-1 space-y-5   place-items-start  max-w-md  ">
                                            { project.testimonials &&   Array.from(project.testimonials).splice(1 ) }
                                        </div> */}
                </div>
              )}

              {/* TESTIMONIAL INFO */}

              <div className="font-Antonio">
                {project.projectlink && (
                  <div>
                    <h4 className="text-md font-bold pb-3 ">
                      {" "}
                      CLIENT:
                      <span className="ml-2">
                        <Link
                          href={`
                                                     ${
                                                       !project.projectlink
                                                         ? "#/" + ""
                                                         : project.projectlink
                                                     }
                                                
                                                `}
                          className="underline"
                        >
                          <span>{project.title}</span>
                        </Link>
                      </span>
                    </h4>
                  </div>
                )}

                <div>
                  <h4 className="text-md font-bold pb-3 ">
                    {" "}
                    DATE:
                    <span className="ml-2">
                      {new Date(project._createdAt).toLocaleDateString(
                        "en-Us",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        },
                      )}
                    </span>
                  </h4>
                </div>

                {project.shareProject && (
                  <div>
                    <h4 className="text-md font-bold pb-3 font-Antonio ">
                      {" "}
                      SHARE:
                      {Array.from(project.shareProject).map((share, id) => (
                        <span key={id} className="font-Sohne-Bold text-xs ml-2 space-x-1">
                          {share.length > 1 && share.includes("twitter") && (
                            <Link href={`${share}`} className="underline">
                              <span>Twitter</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("facebook") && (
                            <Link href={`${share}`} className="underline">
                              <span>Facebook</span>
                            </Link>
                          )}
                          {share.length > 1 && share.includes("linkedin") && (
                            <Link href={`${share}`} className="underline">
                              <span>Linkedin</span>
                            </Link>
                          )}
                        </span>
                      ))}
                    </h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
