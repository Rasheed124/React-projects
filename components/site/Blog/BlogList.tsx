"use client";

import { useState } from "react";

import urlFor from "@/lib/urlFor";

import { BiDotsVerticalRounded } from "react-icons/bi";
import Image from "next/image";
import ClientSideRoute from "../ClientSideRoute";

import Link from "next/link";

import { motion } from "framer-motion";

import { BsEye } from "react-icons/bs";

import { HiOutlineShare } from "react-icons/hi";

import { MdOutlineCancel } from "react-icons/md";

import { BiMessageAlt } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import ShareButtons from "../ShareButtons";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

// type Props = {
//   posts: Post[];
// };

type Props = {
  // params: {
  //   slug: string;
  // };

  posts: Post[];
};


// async function Post({ params: { slug } }: Props) {
 



// }

const BlogList = ({ posts }: Props) => {
  const [IsShowShareIcons, setIsShowShareIcons] = useState(false);

  const [ClickedIndex, setClickedIndex] = useState([]);

  const handleClick = (index: any) => () => {
    setClickedIndex((state: any) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const title = `Read ${posts.map((post ) => post.title)} `;
  // const url = window.location.href;

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
            {posts.map((post, index) => (
              <div key={post._id}>
                <div className="flex flex-col justify-center text-left">
                  <motion.div
                    className="grid grid-cols-1 gap-5 lg:gap-0 sm:grid-cols-2 lg:-space-x-5 "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className=" w-full ">
                      <ClientSideRoute route={`/post/${post.slug.current}`}>
                        <div className="relative lg:max-w-md lg:mx-auto  h-[250px] ">
                          <Image
                            className="object-cover max-w-full"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            fill
                          />
                        </div>
                      </ClientSideRoute>
                    </div>

                    <div className=" lg:max-w-md  font-normal ">
                      <div className="border-b pb-5 ">
                        <div className="flex justify-between gap-2 mb-5">
                          <span className="block ">
                            <span className="mr-5">
                              {new Date(post._createdAt).toLocaleDateString(
                                "en-Us",
                                {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                },
                              )}
                            </span>
                            <span>8 min.</span>
                          </span>
                          <span className="block cursor-pointer relative">
                            <BiDotsVerticalRounded
                              onClick={handleClick(index)}
                            />

                            {ClickedIndex[index] ? (
                              <div
                                className="absolute top-3 right-6 shadow-lg py-3 px-5 w-[200px] bg-white border flex justify-center items-center space-x-3"
                                onClick={() =>
                                  setIsShowShareIcons(!IsShowShareIcons)
                                }
                              >
                                <HiOutlineShare />
                                <p className="text-lg font-semibold">
                                  Share Post
                                </p>
                              </div>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>

                        <ClientSideRoute route={`/post/${post.slug.current}`}>
                          <h3 className="text-2xl block font-semibold  transition-colors hover:duration-700 hover:text-slate-400 font-Antonio">
                            {post.title}
                          </h3>

                          <p className="text-lg ">{post.description}</p>
                        </ClientSideRoute>
                      </div>

                      <div className="flex w-full  mt-5">
                        <p className="flex justify-center items-center mr-5">
                          <BsEye className="mr-2" />
                          <span>470</span>
                        </p>
                        <div className="flex justify-center items-center mr-5">
                          <BiMessageAlt className="mr-2" />
                          <span>470</span>
                        </div>
                        <div className="flex cursor-pointer ">
                          <div className="flex justify-center items-center self-end">
                            <SlLike className="mr-2" />
                            <span>470</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

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
                            onClick={() =>
                              setIsShowShareIcons(!IsShowShareIcons)
                            }
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
                                title={title}
                                // url={url}
                                // tags={}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
