import React from 'react'
import { useState } from 'react'

import { HiMenu, HiX } from "react-icons/hi";
import Link  from 'next/link'


import { motion } from 'framer-motion';
import useMediaQuery from '../UseMediaQuery'





const NavbarMain = () => {

    const [MenuIsToggle, setMenuIstoggle] = useState(false);

    const [IsChecked, setIsChecked] = useState(false)

    const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

    return (

        <>
            <nav className="bg-deep-black  text-light-white"   >
                <div className="py-6 px-5">

                    <div className=" flex justify-between items-center">

                        <Link href={"/"} className="block text-2xl hover:transition-colors hover:duration-500 hover:text-header-dark-overlay font-semibold font-Antonio">
                            <h2>Durodola Abdulhad</h2>
                        </Link>
                        {/* DESKTOP NAV */}
                        {isAboveSmallScreens ? (

                            <div className="">
                              
                                         <ul className='space-x-12  '>

                                         <li className=" inline-block p-1 group transition-all duration-500">
                                                <Link href={'/about'} className="font-extrabold  text-xl font-Antonio block">
                                                   <div className="relative uppercase overflow-y-hidden link-swipe">
                                                      <span className="block   transform transition-transform translate-y-0 duration-300">
                                                          About
                                                      </span>
                                                       <span className='block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                          About
                                                      </span>
                                              
                                                    </div>
                                                </Link>
                                                <div className="z-20 relative font-Sohne-Bold hidden transition-all duration-500 group-hover:block hover:block ">
                                                     <ul className=" [direction:rtl]  absolute flex flex-col flex-grow top-0 left-0  py-5 px-5 bg-deep-overlay-black ">
                                                      <li>
                                                       <Link href={'/blog'} className=" whitespace-nowrap [text-orientation:sideways] block">
                                                         <div className="">
                                                              <span className="block text-lg whitespace-nowrap   [direction:rtl] ">
                                                                 Blog
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                 <li>
                                                       <Link href={'#'} className=" whitespace-nowrap block ">
                                                         <div className="">
                                                              <span className="block  whitespace-nowrap text-lg  [direction:rtl]">
                                                                Resume  
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                </ul>
                                                </div>
                                              
                                          
                                          
                                           
                                           </li>

                                    
                                         <li className="inline-block  p-1 group transition-all duration-500">
                                                <Link href={'#'} className="font-extrabold  text-xl font-Antonio block">
                                                   <div className="relative uppercase overflow-y-hidden link-swipe">
                                                      <span className="block   transform transition-transform translate-y-0 duration-300">
                                                          Porfolio
                                                      </span>
                                                       <span className='block absolute delay-75 transition-transform duration-300 top-0 transform -translate-y-full left-0 '>
                                                          Porfolio
                                                      </span>
                                              
                                                    </div>
                                                </Link>
                                                <div className="z-20 relative font-Sohne-Bold hidden transition-all duration-500 group-hover:block hover:block ">
                                                     <ul className="  absolute flex flex-col flex-grow top-0 -left-24   py-5 px-5 bg-deep-overlay-black ">
                                                      <li>
                                                       <Link href={'/portfolio'} className=" whitespace-nowrap   block">
                                                         <div className="">
                                                              <span className="block text-lg   [direction:rtl] ">
                                                                 Social Media & Strategy
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                 <li>
                                                       <Link href={'/content-writing'} className=" whitespace-nowrap  block ">
                                                         <div className="">
                                                              <span className="block   text-lg [direction:rtl] ">
                                                                Content Writing
                                                               </span>
                                                           </div>
                                                        </Link>
                                                 </li>
                                                </ul>
                                                </div>
                                              
                                          
                                          
                                           
                                           </li>

                                    
                                         <li className=" inline-block p-1 group transition-all duration-500">
                                                <Link href={'/contact'} className="font-extrabold  text-xl font-Antonio block">
                                                   <div className="relative uppercase overflow-y-hidden link-swipe">
                                                      <span className="block   transform transition-transform translate-y-0 duration-300">
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

export default NavbarMain