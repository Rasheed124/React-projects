import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react"

import urlFor from "@/lib/urlFor";
import Navbar from "@/components/site/Navbars/Navbar";
import Link from "next/link";
import { RichTextComponents } from "@/components/studio/RichComponentText";
import Layout from "@/components/site/Navbars/NavbarLayout";

// import {Porta}

type Props = {
    params: {
        slug: string;
    };
};


async function Post({ params: { slug } }: Props) {

    const query = groq`
  *[_type == 'post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
   }
   `;

    const post: Post = await client.fetch(query, { slug })

 
    


    return (

        
        <Layout route="/contact">

             <article className="px-10 pb-20">

        
            <section className="py-14  ">
                       <div className="  ">
                            <div className=" pb-5 max-w-5xl  mx-auto  ">

                                <div className="py-10  ">

                                    <div className="flex justify-between ">

                                        <div className="max-w-2xl ">
                                            <ul className="flex  space-x-5">

                                             
                                                <li className="text-lg hover:text-light-white transition-colors duration-700 ">
                                                    <Link href={'/blog'} >
                                                        All Posts
                                                    </Link>
                                                </li>

                                            {post && post.categories.map(category => (
                                                 <li className="text-lg  " key={category._id}>
                                                    <Link href={'/'} >
                                                       {category.title}
                                                    </Link>
                                                </li>
                                         ))}

                                         {/* {post.categories.map()} */}
                                               
                                        
                                            </ul>
                                        </div>

                                        <div>
                                            <form action="/">
                                                <div>
                                                    <input type="search" name="" id="" />
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                                {/* <div className="mt-10 grid grid-cols-1 max-w-4xl min-h-screen w-full border mx-auto gap-10 text-center  px-5 "></div> */}
                                <div className="mt-10  max-w-3xl  shadow-sm mx-auto   p-5 ">

                                    <div className="flex justify-between items-center ">
                                        <div className="flex space-x-2 justify-center items-center">

                                            <div className="mr-5">
                                                {/* {post.author.image && } */}
                                                  <Image
                                                    className="rounded-full"
                                                    src={urlFor(post.author.image).url()}
                                                    alt={post.author.name}
                                                    height={40}
                                                    width={40}
                                                   />
                                            </div>
                                             <h3 className="text-lg font-bold hover:text-light-white transition-colors duration-700 ">{post.author.name}</h3>
                                               <p>
                                                {new Date(post._createdAt).toLocaleDateString(
                                                    "en-Us", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                                )}
                                            </p>
                                             <h4>8 min Read</h4>
                                        </div>

                                        <div>
                                            <Link href={'/'}>
                                               <h5>share</h5>
                                               
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="my-2 p-2 ">

                                        <h3 className="font-semibold text-xl font-Sohne-Bold mb-3">{post.title}</h3>

                                            <p> <span className="mr-2">Updated at: </span> 
                                                {new Date(post._updatedAt).toLocaleDateString(
                                                    "en-Us", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                                )}
                                            </p>
                                    </div>

                                
                                    
                               </div>

                                   <div className="py-3 mt-5 max-w-3xl  mx-auto   ">
                                          <PortableText value={post.body}
                                          components={RichTextComponents}  />
                                    </div>

                            </div>


                         </div>
                  </section>

          
        </article>


            
        </Layout>
    
      
    )
}

export default Post


