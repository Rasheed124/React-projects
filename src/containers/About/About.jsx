import React from 'react'

// import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom'




import { Button, Footer } from '../../components';
import { images } from '../../constants'



const Contact = () => {
    return (
        <div className="   ">

            {/* ABOUT HERO   */}
            <section className=" ">
                <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-20 `} style={{ backgroundImage: `url(${images.about})` }} >

                    <div className=" ">
                        <motion.div
                            className=""
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}

                        >


                        </motion.div>


                    </div>

                </div>
            </section>

            {/* ABOUT ME DETAILS */}
            <section className=" py-14  px-4 bg-white">

                <div className=" ">
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
                            <h2 className="font-Antonio font-bold text-xl uppercase">My Story</h2>

                            <div className=" pr-10 md:pr-0 font-libre-baskerville text-lg mt-5">
                                <p className="">As a seasoned digital strategist, copywriter, and entrepreneur with more than a decade of experience, I specialize in creating impactful content and digital campaigns that drive business growth. My expertise spans various industries, including B2C, B2B, e-commerce, SaaS, and editorial environments.</p>

                                <p>As a seasoned digital strategist, copywriter, and entrepreneur with more than a decade of experience, I specialize in creating impactful content and digital campaigns that drive business growth. My expertise spans various industries, including B2C, B2B, e-commerce, SaaS, and editorial environments.</p>

                                <p>As a seasoned digital strategist, copywriter, and entrepreneur with more than a decade of experience, I specialize in creating impactful content and digital campaigns that drive business growth. My expertise spans various industries, including B2C, B2B, e-commerce, SaaS, and editorial environments.</p>
                            </div>

                        </div>

                        <div className=" ">
                            <h2 className="font-Antonio font-bold text-xl uppercase">Contact </h2>

                            <div className="mt-5">
                                <Link className="font-libre-baskerville text-lg" to={"mailto:dmediaplux@gmail.com"}> dmediaplux@gmail.com</Link>
                            </div>

                        </div>


                    </motion.div>

                </div>

            </section>


            {/* ABOUT */}
            <section className=" py-14  px-4 ">

                <div className=" max-w-6xl px-4 mx-auto text-center ">
                    <motion.div
                        className="  "
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
                            <h2 className="font-Antonio font-bold text-5xl uppercase leading-[3.5rem]">CRAFTING CONTENT FOR WORLD-CLASS LEADERS</h2>

                        </div>

                        <div className=" ">
                            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">

                                <div className="">
                                    <div className="py-3 border-t border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>

                                </div>

                                <div className=" ">
                                    <div className="py-3 md:border-t border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>

                                </div>

                                <div className=" ">
                                    <div className="py-3 md:border-t border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>
                                    <div className="py-3  border-b text-left border-deep-black">
                                        <Link className="inline-block">
                                            <p className="text-xl">Maybelline</p>
                                        </Link>
                                    </div>

                                </div>



                            </div>

                        </div>


                    </motion.div>

                </div>

            </section>


            {/* FOOTER DETAILS */}
            <Footer />

        </div>
    )
}

export default Contact