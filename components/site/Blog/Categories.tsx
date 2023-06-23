"use client"

import urlFor from "@/lib/urlFor";
import { ArrowDownRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientSideRoute from "../ClientSideRoute";

import Link from "next/link";

import { motion } from 'framer-motion';

import { BsEye } from 'react-icons/bs';
import { BiMessageAlt } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';
import post from "@/schemas/post";


type Props = {
    posts: Post[];
};


const Categories = ({ posts }: Props) => {


    return (
                 <section className="py-14 ">
                       <div className="flex flex-col max-w-6xl mx-auto  ">
                            <div className=" pb-5 px-5 text-center">
                                 <h4 className="font-Antonio text-2xl ">Recent Blog Posts</h4>

                                <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">

                                    {posts.map( post => (
                                         post.categories.map( cat => (

                                            <div>
                                             
                                                
                                            </div>
                                         ))
                                    ))}

                               </div>
                            </div>


                         </div>
                  </section>
    )
}

export default Categories