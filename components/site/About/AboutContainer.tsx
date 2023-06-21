   "use client";



import { useState } from 'react'

import { HiMenu, HiX } from "react-icons/hi";
import Link  from 'next/link'


import useMediaQuery from '../UseMediaQuery'

   import Image from "next/image";
import { motion } from 'framer-motion';
import urlFor from "@/lib/urlFor";




    type Props = {
        abouts: About[];
    };


    const AboutContainer = ({ abouts }: Props) => {

     const [MenuIsToggle, setMenuIstoggle] = useState(false)

      const isAboveSmallScreens = useMediaQuery("(min-width: 1024px)");

  
        return(

                <section className="">
                     {abouts.map( about => (

                       <motion.div

                       key={about._id}
                            className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-10 `} style={{ backgroundImage: `url(${about.image})` }} 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, }}
                            variants={{
                                hidden: { opacity: 0,  },
                                visible: { opacity: 1, },
                            }}
                           >
                                <nav className="bg-transparent pt-5 mx-10  text-white " >
                                    <div className="  py-6 border-t border-white">

                                        <div className=" flex justify-between items-center">

                                            <Link href={"/"} className="block text-2xl hover:transition-colors hover:duration-500 hover:text-header-dark-overlay font-semibold font-Antonio ">
                                                <h2>Durodola Abdulhad</h2>
                                            </Link>
                                            {/* DESKTOP NAV */}
                                            {isAboveSmallScreens ? (

                                                <div className="">
                                                    <ul className="space-x-12">
                                                                    <li className="inline-block">
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
                                                            <li className="inline-block">
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
                                                            <li className="inline-block">
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
                                                </div>

                                            ) : (

                                                <div className="   ">
                                                    {!MenuIsToggle ? (
                                                        // Open Menu
                                                        <div className="">
                                                            <button className="outline-none " onClick={() => setMenuIstoggle(!MenuIsToggle)}>
                                                                <HiMenu className="text-light-white text-2xl " />
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
                                                                <HiX className="text-light-white text-2xl" />
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
                                                <ul className='flex flex-col text-deep-black justify-between items-start absolute top-8 bg-white left-0 w-full p-5 z-10 space-y-3'>
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

                            
                            
                            
                            
                         </motion.div>

                        ))}


                      {abouts.map( about => (
                        <div key={about._id}>

                            {/* ABOUT ME DETAILS */}
                            <div className=" py-14 bg-white text-deep-black">
                            <motion.div
                                className="max-w-6xl px-4 mx-auto text-left  grid grid-cols-1 md:grid-cols-3 gap-10 "
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.5, }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}

                        >

                            <div className=" md:col-start-1 md:col-end-3 ">
                                <h2 className="font-Antonio font-bold text-xl uppercase">{about.title}</h2>

                                <div className=" space-y-5 pr-10 md:pr-0 font-libre-baskerville text-lg mt-5">

                                    { Array.from(about.storyText).map(text => (
                                        <p>{text}</p>
                                    ) )}
                                    
                                </div>

                            </div>

                            <div className=" ">
                                <h2 className="font-Antonio font-bold text-xl uppercase">Contact </h2>

                                <div className="mt-5">

                                    
                                    <Link className="font-libre-baskerville text-lg" href={"mailto:dmediaplux@gmail.com"}> dmediaplux@gmail.com</Link>
                                </div>

                            </div>


                        </motion.div>

                            </div>



                            {/* ABOUT COMPANY */}
                               
                              <div className=" py-14 bg-light-white text-deep-black">
                                <motion.div
                                    className=" max-w-6xl px-4 mx-auto text-center "
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.8 }}
                                    transition={{ duration: 0.5, }}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >

                                <div className=" mb-10 py-2">
                                    <h2 className="font-Antonio font-bold text-5xl uppercase leading-[3.5rem]">
                                        {about.heading}
                                        </h2>

                                </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">

                                {about.companys.map( company => (
                                   <div className="">
                                    <div className="py-3 border-t border-b text-left border-deep-black">
                                        <Link href={'/'} className="inline-block">
                                            <p className="text-xl">{company.title}</p>
                                        </Link>
                                    </div>
                              

                                </div>

                                ))}

                           

                        </div>


                    </motion.div>

                             </div>


                        </div>
                      ))}
                </section>

        )


    }

    export default AboutContainer