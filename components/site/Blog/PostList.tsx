"use client";

import urlFor from "@/lib/urlFor";
import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
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

const PostList = ({ posts }: Props) => {
  return (
    <section className="py-14 ">
      <div className="flex flex-col max-w-6xl mx-auto  ">
        <div className=" pb-5 px-5 text-center">
          <h4 className="font-Antonio text-2xl ">Recent Blog Posts</h4>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            {posts.map((post) => (
              <div key={post._id}>
                <div className="flex flex-col justify-center text-left">
                  <motion.div
                    className=" "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                      hidden: { opacity: 0, y: 60 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <ClientSideRoute route={`/post/${post.slug.current}`}>
                      <div className="relative h-[200px] w-full">
                        <Image
                          className="object-cover object-left lg:object-center"
                          src={urlFor(post.mainImage).url()}
                          alt={post.author.name}
                          fill
                        />
                      </div>
                    </ClientSideRoute>

                    <div className="border-b py-5 ">
                      <div className="flex gap-8 mb-5">
                        <span>
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
                      </div>

                      <ClientSideRoute route={`/post/${post.slug.current}`}>
                        <h3 className="text-xl block  transition-colors hover:duration-700 hover:text-header-dark-overlay">
                          {post.title}
                        </h3>
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
                      <div className="flex ">
                        <div className="flex justify-center items-center self-end">
                          <SlLike className="mr-2" />
                          <span>470</span>
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

export default PostList;
