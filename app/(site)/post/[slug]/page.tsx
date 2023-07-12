"use client";
import React from "react";
import { motion } from "framer-motion";

import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { HiOutlineShare } from "react-icons/hi";

import { MdOutlineCancel } from "react-icons/md";

import urlFor from "@/lib/urlFor";
import Navbar from "@/components/site/Navbars/Navbar";
import Link from "next/link";
import { RichTextComponents } from "@/components/studio/RichComponentText";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { draftMode } from "next/headers";
import { PreviewSuspense } from "next-sanity/preview";
import { usePreview } from "@/lib/sanity.preview";
import ShareButtons from "@/components/site/ShareButtons";
import { BiDotsVerticalRounded } from "react-icons/bi";

// import {Porta}

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; // revalidate every 30 seconds

export async function generateStaticParams() {
  const query = groq`
  *[_type == 'post' ]
  {
    slug
   }
   `;

  const slugs: Post[] = await client.fetch(query);

  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({ slug }));
}

async function Post({ params: { slug } }: Props) {
  const [IsShowShareIcons, setIsShowShareIcons] = React.useState(false);

  const [ClickedIndex, setClickedIndex] = React.useState(false);

  const handleClick = () => () => {
    setClickedIndex(ClickedIndex);
  };

  // const title = `Read ${posts.map((post ) => post.title)} `;
  // const url = window.location.href;
  const query = groq`
  *[_type == 'post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
   }
   `;

  const singlePostTitleQuery = groq`
  *[_type == 'post'][0]
  {
    title
   }
   `;

  const single: Post = await client.fetch(singlePostTitleQuery, { slug });

  const post: Post = await client.fetch(query, { slug });

  return (
    <Layout route="/contact">
      <article className="px-10 pb-20 border relative">
        <section className="py-14  ">
          <div className="  ">
            <div className=" pb-5 max-w-5xl  mx-auto  ">
              <div className="py-10  ">
                <div className="pt-10 flex flex-col md:flex-row  space-y-5 md:space-y-0 justify-between ">
                  <div className=" ">
                    <ul className="flex flex-col md:flex-row  space-x-5 ">
                      <li className="text-lg font-bold hover:text-light-white transition-colors duration-700 ">
                        <Link href={"/blog"}>All Posts</Link>
                      </li>

                      {post &&
                        post.categories.map((category) => (
                          <li
                            className="text-lg  hover:text-light-white transition-colors duration-700"
                            key={category._id}
                          >
                            <Link href={"/"}>{category.title}</Link>
                          </li>
                        ))}

                      {/* {post.categories.map()} */}
                    </ul>
                  </div>

                  <div className=" w-full md:max-w-[200px]  ">
                    <form action="/">
                      <div>
                        <input
                          className="border w-full outline-none px-3 py-1.5"
                          type="search"
                          placeholder="Search"
                          name=""
                          id=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* <div className="mt-10 grid grid-cols-1 max-w-4xl min-h-screen w-full border mx-auto gap-10 text-center  px-5 "></div> */}
              <div className="mt-10  max-w-3xl  shadow-sm mx-auto   p-5 ">
                <div className="flex justify-between items-center ">
                  <div className="flex flex-wrap max-w-lg space-x-2 justify-center items-start md:items-center">
                    <div className="mr-1 md:mr-4">
                      {/* {post.author.image && } */}
                      <Image
                        className="rounded-full"
                        src={urlFor(post.author.image).url()}
                        alt={post.author.name}
                        height={40}
                        width={40}
                      />
                    </div>
                    <h3 className="text-lg font-bold   ">{post.author.name}</h3>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-Us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h4>8 min Read</h4>
                  </div>

                  <div className="flex flex-wrap max-w-md">
                    <span className="block cursor-pointer relative">
                      <BiDotsVerticalRounded onClick={handleClick()} />

                      {!ClickedIndex ? (
                        <div
                          className="absolute top-3 right-6 shadow-lg py-3 px-5 w-[200px] bg-white border flex justify-center items-center space-x-3"
                          onClick={() => setIsShowShareIcons(!IsShowShareIcons)}
                        >
                          <HiOutlineShare />
                          <p className="text-lg font-semibold">Share Post</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                </div>

                <div className="my-2 p-2 ">
                  <h3 className="font-semibold text-xl font-Sohne-Bold mb-3">
                    {post.title}
                  </h3>

                  <p>
                    {" "}
                    <span className="mr-2">Updated at: </span>
                    {new Date(post._updatedAt).toLocaleDateString("en-Us", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="py-3 mt-5 max-w-3xl  mx-auto   ">
                <PortableText
                  value={post.body}
                  components={RichTextComponents}
                />
              </div>
            </div>
          </div>
        </section>

        {IsShowShareIcons && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            className="min-h-screen  fixed top-0 left-0  bg-black bg-opacity-60 bg-blend-overlay w-full flex justify-center items-center z-[60]"
          >
            <div className="">
              <div className="flex flex-col ">
                <span className="block  absolute top-3  right-3">
                  <MdOutlineCancel
                    className="w-14 cursor-pointer h-14 font-bold text-white"
                    onClick={() => setIsShowShareIcons(!IsShowShareIcons)}
                  />
                </span>
                <div
                  onClick={() => setIsShowShareIcons(IsShowShareIcons)}
                  className="flex justify-center flex-col text-center max-w-3xl items-center py-10 px-6 space-x-3 bg-white  "
                >
                  <h4>Share Post</h4>
                  <div className="w-full flex  py-5 ">
                    <div>
                      <ShareButtons
                        title={post.title}
                        url={post.slug.current}
                        // tags={}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </article>
    </Layout>
  );
}

export default Post;
