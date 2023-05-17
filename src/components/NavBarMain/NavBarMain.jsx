import React from 'react'
import { useState } from 'react'

import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion';
import useMediaQuery from '../UseMediaQuery'





const Navbar = () => {

    const [MenuIsToggle, setMenuIstoggle] = useState(false)

    const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

    return (

        <>
            <nav className="bg-deep-black  text-light-white" >
                <div className="py-6 px-5">

                    <div className=" flex justify-between items-center">

                        <Link to={"/"} className="block text-2xl hover:transition-colors hover:duration-500 hover:text-header-dark-overlay font-semibold font-Sohne-Bold ">
                            <h2>Durodola Abdulhad</h2>
                        </Link>
                        {/* DESKTOP NAV */}
                        {isAboveSmallScreens ? (

                            <div className="">
                                <ul className="space-x-12">
                                    {['About', 'Portfolio', 'Contact'].map(item => (
                                        <li className="inline-block">
                                            <Link to={item} className="font-bold font-Antonio text-lg ">
                                                <div className="relative overflow-y-hidden link-swipe">
                                                    <span className=" transform transition-transform translate-y-0 duration-300">
                                                        {item}
                                                    </span>
                                                    <span className='absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                        {item}
                                                    </span>

                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        ) : (

                            <div className="   ">
                                {!MenuIsToggle ? (
                                    // Open Menu
                                    <div className="">
                                        <button className="outline-none " onClick={() => setMenuIstoggle(!MenuIsToggle)}>
                                            <HiMenu className="text-white text-2xl " />
                                        </button>
                                    </div>

                                ) : (
                                    // Close Menu
                                    <div className=" ">
                                        <button
                                            className="outline-none "
                                            // initial="hidden"
                                            // whileInView="visible"
                                            // viewport={{ once: false, amount: 0.5 }}
                                            // transition={{ duration: 0.8 }}
                                            // variants={{
                                            //     hidden: { opacity: 0, y: 0 },
                                            //     visible: { opacity: 1, y: 0 },
                                            // }}
                                            onClick={() => setMenuIstoggle(!MenuIsToggle)}

                                        >
                                            <HiX className="text-white text-2xl" />
                                        </button>
                                    </div>
                                )}

                            </div>

                        )}


                    </div>


                    {/* MOBILE NAV */}
                    {!isAboveSmallScreens && MenuIsToggle && (
                        <motion.div
                            className="  relative "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.9 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, y: 0 },
                                visible: { opacity: 1, y: 0 },
                            }}

                        >
                            <ul className='flex flex-col justify-between items-start absolute top-8 bg-white left-0 w-full p-5 z-10 space-y-3'>
                                {['About', 'Portfolio', 'Contact'].map(item => (
                                    <li>
                                        <Link to={item} className="font-bold font-Antonio text-light-white">
                                            <div className="relative overflow-y-hidden link-swipe">
                                                <span className=" transform transition-transform translate-y-0 duration-300">
                                                    {item}
                                                </span>
                                                <span className='absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                    {item}
                                                </span>

                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div >
                    )}
                </div>
            </nav>
        </>

    )
}

export default Navbar