// "use client";

import urlFor from "@/lib/urlFor";
import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "../ClientSideRoute";

import Link from "next/link";

import { motion } from "framer-motion";

import { BsEye } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import post from "@/schemas/post";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";


type Props = {
  params: {
    slug: string;
  };
};

  const postByCategory = groq`
*[_type == 'post' && slug.current == $slug][0]{
  ...,
 'relatedPosts': *[_type == 'post' &amp;&amp; ^.category._ref match category._ref]

}
// *[_type == 'category'] {
//   ...,
//   "posts": *[_type == 'post' && references(^._id)]
// }
   `;


const Categories = async ({ params: { slug } }: Props) => {

  const pByCat: Post = await client.fetch(postByCategory, { slug });

  return (
    <section className="  ">
      <div className=" ">
        <header className="px-5 py-16 bg-light-white ">
          <div className=" max-w-6xl mx-auto mt-24 lg:mt-16">
            <h2 className="uppercase font-extrabold font-Antonio text-6xl mb-1 ">
              Blog
            </h2>

            <div className="space-x-1">
              <Link href={"/"}>Home</Link>
              <span>/</span>
              <Link href={"#"}>Blog</Link>
            </div>
          </div>
        </header>

        <div className="bg-white px-5 py-16">
          <div className=" grid grid-cols-1 gap-10 text-center max-w-6xl mx-auto  ">
           { pByCat.relatedPosts.map( pt => (

            <div key={pt._id}>
               {pt.title}
            </div>
           ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
