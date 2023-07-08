"use client";

import urlFor from "@/lib/urlFor";

import { BiDotsVerticalRounded } from "react-icons/bi";
import Image from "next/image";
import ClientSideRoute from "../ClientSideRoute";

import Link from "next/link";

import { motion } from "framer-motion";

import { BsEye } from "react-icons/bs";
import { BiMessageAlt } from "react-icons/bi";
import { SlLike } from "react-icons/sl";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <section className="py-14  bg-light-white">
      <div className="flex flex-col   ">
        <div className=" pb-5  ">
          <div className="pt-10  ">
            <div className=" w-full max-w-2xl mt-14 md:mt-0 ">
              <h4 className=" font-extrabold text-7xl text-deep-black z-30 pl-10 ">
                {" "}
                Blog
              </h4>
              <span className="relative w-full block -z-10 bg-light-white -top-[35px] left-0 h-[150px] "></span>
            </div>
          </div>

          <div className=" md:mt-6 grid grid-cols-1 gap-10 text-center max-w-6xl mx-auto px-5 ">
            {posts.map((post) => (
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
                          <span className="cursor-pointer">
                            <BiDotsVerticalRounded />
                          </span>
                        </div>

                        <ClientSideRoute route={`/post/${post.slug.current}`}>
                          <h3 className="text-2xl block font-semibold  transition-colors hover:duration-700 hover:text-white font-Antonio">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
