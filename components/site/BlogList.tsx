"use client"

import urlFor from "@/lib/urlFor";
import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";

import Link from "next/link";

import { motion } from 'framer-motion';

import { BsEye } from 'react-icons/bs';
import { BiMessageAlt } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';


type Props = {
    posts: Post[];
};


const BlogList = ({ posts }: Props) => {


    return (
                 <section className="py-14 ">
                       <div className="flex flex-col max-w-6xl mx-auto  ">
                            <div className=" pb-5 px-5 text-center">
                                 <h4 className="font-Antonio text-2xl ">Recent Blog Posts</h4>

                                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">

                                     {posts.map(post => (
                                        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`} >
                                                <div className="flex flex-col justify-center text-left">

                                                    <div className="">
                                                        <div className="relative h-[200px] w-full">

                                                        <Image
                                                        className="max-w-full w-full absolute top-0 left-0"
                                                        src={urlFor(post.mainImage).url()}
                                                        alt={post.author.name}
                                                        fill
                                                    />

                                                        </div>
                                               
                                                
                                                        <div className="border-b py-5 ">

                                                            <div className="flex gap-8 mb-5">
                                                                <span>Mar 8, 2021</span>
                                                                <span>8 min.</span>
                                                            </div>

                                                            <div   className="text-xl block  transition-colors hover:duration-700 hover:text-header-dark-overlay">
                                                                Major Content-Type: Words
                                                            </div>

                                                        </div>

                                                        <div className="flex w-full  mt-5">
                                                            <p className="flex justify-center items-center mr-5">
                                                                <BsEye className="mr-2" />
                                                                <span >470</span>
                                                            </p>
                                                            <div  className="flex justify-center items-center mr-5" >
                                                                <BiMessageAlt className="mr-2" />
                                                                <span >470</span>
                                                            </div>
                                                            <div className="flex ">
                                                                <div  className="flex justify-center items-center self-end" >
                                                                    <SlLike className="mr-2" />
                                                                    <span >470</span>
                                                                </div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                 </div>
                                        </ClientSideRoute>
                                      ))}

                               </div>
                            </div>


                         </div>
                  </section>
    )
}

export default BlogList