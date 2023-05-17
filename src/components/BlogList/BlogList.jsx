import React from 'react'

import { motion } from 'framer-motion';

import { images } from '../../constants'

import { Link } from 'react-router-dom';

import { BsEye } from 'react-icons/bs';
import { BiMessageAlt } from 'react-icons/bi';
import { SlLike } from 'react-icons/sl';


const BlogList = () => {
    return (
        <>

            <motion.div
                className=" "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                }}
            >

                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                    <div className="flex flex-col justify-center text-left">

                        <Link className="block">
                            <img className=" max-w-full w-full" src={images.blog1} alt="" />
                        </Link>
                        <div className="border-b py-5 ">

                            <div className="flex gap-8 mb-5">
                                <span>Mar 8, 2021</span>
                                <span>8 min.</span>
                            </div>

                            <Link to={"/"} className="text-xl block  transition-colors hover:duration-700 hover:text-header-dark-overlay">
                                Major Content-Type: Words
                            </Link>

                        </div>

                        <div className="flex w-full  mt-5">
                            <p className="flex justify-center items-center mr-5">
                                <BsEye className="mr-2" />
                                <span >470</span>
                            </p>
                            <Link className="flex justify-center items-center mr-5" to={"/"}>
                                <BiMessageAlt className="mr-2" />
                                <span >470</span>
                            </Link>
                            <div className="flex ">
                                <Link className="flex justify-center items-center self-end" to={"/"}>
                                    <SlLike className="mr-2" />
                                    <span >470</span>
                                </Link>
                            </div>


                        </div>

                    </div>

                    <div className="flex flex-col justify-center text-left">

                        <Link className="block">
                            <img className=" max-w-full w-full" src={images.blog1} alt="" />
                        </Link>
                        <div className="border-b py-5 ">

                            <div className="flex gap-8 mb-5">
                                <span>Mar 8, 2021</span>
                                <span>8 min.</span>
                            </div>

                            <Link to={"/"} className="text-xl block hover:transition-colors hover:duration-500 hover:text-header-dark-overlay">
                                Major Content-Type: Words
                            </Link>


                        </div>

                        <div className="flex w-full  mt-5">
                            <p className="flex justify-center items-center mr-5">
                                <BsEye className="mr-2" />
                                <span >470</span>
                            </p>
                            <Link className="flex justify-center items-center mr-5" to={"/"}>
                                <BiMessageAlt className="mr-2" />
                                <span >470</span>
                            </Link>
                            <div className="self-end">
                                <Link className="flex justify-center items-center " to={"/"}>
                                    <SlLike className="mr-2" />
                                    <span >470</span>
                                </Link>
                            </div>


                        </div>

                    </div>

                    <div className="flex flex-col justify-center text-left">

                        <Link className="block">
                            <img className=" max-w-full w-full" src={images.blog1} alt="" />
                        </Link>
                        <div className="border-b py-5 ">

                            <div className="flex gap-8 mb-5">
                                <span>Mar 8, 2021</span>
                                <span>8 min.</span>
                            </div>

                            <Link to={"/"} className="text-xl block hover:transition-colors hover:duration-500 hover:text-header-dark-overlay">
                                Major Content-Type: Words
                            </Link>


                        </div>

                        <div className="flex w-full  mt-5">
                            <p className="flex justify-center items-center mr-5">
                                <BsEye className="mr-2" />
                                <span >470</span>
                            </p>
                            <Link className="flex justify-center items-center mr-5" to={"/"}>
                                <BiMessageAlt className="mr-2" />
                                <span >470</span>
                            </Link>
                            <div className="self-end">
                                <Link className="flex justify-center items-center " to={"/"}>
                                    <SlLike className="mr-2" />
                                    <span >470</span>
                                </Link>
                            </div>


                        </div>

                    </div>


                </div>

            </motion.div  >

        </>
    )
}

export default BlogList