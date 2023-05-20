// import urlFor from "@/lib/urlFor"
// import Image from "next/image"


// type Props = {
//     posts: Post[]
// }

// const BlogList = ({ posts }: Props) => {

//     return (
//         <div>
//             <hr className="
//             border-[#F7AB0A] mb-10"/>

//             <div>
//                 {/* Posts */}

//                 {posts.map(post => (

//                     <div key={post._id} className="flex flex-col group cursor-pointer ">
//                         <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
//                             <Image
//                                 className="object-cover object-left lg:object-center"
//                                 src={urlFor(post.mainImage).url()}
//                                 alt={post.author.name}
//                                 fill
//                             />
//                         </div>


//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default BlogList



import urlFor from "@/lib/urlFor"
import Image from "next/image"
import type { SanityDocument } from "@sanity/client";

export default function BlogList({ posts }: { posts: SanityDocument[] }) {
    return (
        <>

            <div>
                <hr className="
           border-[#F7AB0A] mb-10"/>

                <div>
                    {/* Posts */}

                    {posts.map(post => (

                        <div key={post._id} className="flex flex-col group cursor-pointer ">
                            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                />
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}