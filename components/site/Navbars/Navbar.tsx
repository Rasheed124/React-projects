import React from 'react'
import { useState } from 'react'

import { HiMenu, HiX } from "react-icons/hi";
import Link  from 'next/link'

import { motion } from 'framer-motion';
import useMediaQuery from '../UseMediaQuery'





const Navbar = () => {

    const [MenuIsToggle, setMenuIstoggle] = useState(false)

    const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

    return (

        <>
            <nav className="bg-deep-black text-light-white">
                <div className=" pt-6 px-5">

                    {/* DESKTOP NAV */}
                    {!isAboveSmallScreens ? (

                        // Mobile  Nav

                       <div className="pb-6  ">
                            <div className="flex justify-between items-center   ">
                                <Link href={"/"} className="block text-2xl font-semibold font-Sohne-Bold ">
                                    <h2>Durodola Abdulhad</h2>
                                </Link>

                                <div className='flex justify-center items-center'>

                                    {!MenuIsToggle ? (
                                        // Open Menu
                                        <div className="">
                                            <button className="outline-none " onClick={() => setMenuIstoggle(!MenuIsToggle)}>
                                                <HiMenu className=" text-2xl " />
                                            </button>
                                        </div>

                                    ) : (

                                        // Close Menu
                                        <div className=" ">
                                            <motion.button
                                                className="outline-none "
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: false, amount: 0.5 }}
                                                transition={{ duration: 0.8 }}
                                                variants={{
                                                    hidden: { opacity: 0, y: 0 },
                                                    visible: { opacity: 1, y: 0 },
                                                }}
                                                onClick={() => setMenuIstoggle(!MenuIsToggle)}>
                                                <HiX className="text-2xl" />
                                            </motion.button>
                                        </div>

                                    )}

                                </div>

                            </div>
                        </div>


                       
                    ) : (

                        // Desktop Nav
                         <div>
                            <div className="lg:border-t lg:pt-2">
                                <ul className='flex justify-between items-start  '>
                                   
                                         <li className=" ">

                                                <Link href={'/portfolio'} className="font-bold font-Antonio block">
                                                   <div className="relative overflow-y-hidden link-swipe">
                                                      <span className="block  transform transition-transform translate-y-0 duration-300">
                                                          About
                                                      </span>
                                                       <span className='block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                          About
                                                      </span>
                                              
                                                    </div>
                                                </Link>

                                         
                                                 <ul className=" mt-3   p-5 w-full border  bg-deep-black">
                                                      <li>
                                                       <Link href={'/blog'} className="font-bold font-Antonio block">
                                                         <div className="">
                                                              <span className="block ">
                                                                 Blog
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                 <li>
                                                       <Link href={'/about'} className="font-bold font-Antonio block">
                                                         <div className="">
                                                              <span className="block ">
                                                                Resume
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                </ul>
                                          
                                          
                                           
                                           </li>



                                        <li className=" ">

                                                <Link href={'/portfolio'} className="font-bold font-Antonio block">
                                                   <div className="relative overflow-y-hidden link-swipe">
                                                      <span className="block  transform transition-transform translate-y-0 duration-300">
                                                          Portfolio
                                                      </span>
                                                       <span className='block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                          Portfolio
                                                      </span>
                                              
                                                    </div>
                                                </Link>

                                         
                                                 <ul className=" mt-3   p-5 w-full border  bg-deep-black">
                                                      <li>
                                                       <Link href={'/about'} className="font-bold font-Antonio block">
                                                         <div className="">
                                                              <span className="block ">
                                                                 Social Media & Strategy
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                 <li>
                                                       <Link href={'/about'} className="font-bold font-Antonio block">
                                                         <div className="">
                                                              <span className="block ">
                                                                 Content Writing
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                </ul>
                                          
                                          
                                           
                                           </li>


                                        <li>
                                            <Link href={'/contact'} className="font-bold font-Antonio block">
                                                <div className="relative overflow-y-hidden link-swipe">
                                                    <span className=" transform transition-transform translate-y-0 duration-300 block">
                                                        Contact
                                                    </span>
                                                    <span className='block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                       Contact
                                                    </span>
                                              
                                                </div>
                                            </Link>
                                        </li>
                                  
                                </ul>
                            </div>
                        </div>
                   

                    )}

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
                            <ul className='flex flex-col justify-between items-start absolute top-0 left-0 w-full bg-white p-5 z-10 space-y-3'>
                                                           <li>
                                            <Link href={'/about'} className="font-bold font-Antonio">
                                                <div className="relative overflow-y-hidden link-swipe">
                                                    <span className=" transform transition-transform translate-y-0 duration-300">
                                                        About
                                                    </span>
                                                    <span className='absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                       About
                                                    </span>
                                              
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/portfolio'} className="font-bold font-Antonio">
                                                <div className="relative overflow-y-hidden link-swipe">
                                                    <span className=" transform transition-transform translate-y-0 duration-300">
                                                        Portfolio
                                                    </span>
                                                    <span className='absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                       Portfolio
                                                    </span>
                                              
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={'/contact'} className="font-bold font-Antonio">
                                                <div className="relative overflow-y-hidden link-swipe">
                                                    <span className=" transform transition-transform translate-y-0 duration-300">
                                                        Contact
                                                    </span>
                                                    <span className='absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                       Contact
                                                    </span>
                                              
                                                </div>
                                            </Link>
                                        </li>
                            </ul>
                        </motion.div >
                    )}
                </div>
            </nav>
        </>

    )
}

export default Navbar