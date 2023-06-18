import React from 'react'

import Link  from 'next/link'



import { motion } from 'framer-motion';




const Footer = () => {


    return (

        <>
            <footer className="pb-14  bg-contact-dark-overlay">
                <div className="flex flex-col w-full  ">
                    <div className=" pb-5">

                        <div className="px-4 pt-14 ">
                            <motion.div
                                className=" grid grid-cols-1 md:grid-cols-2 gap-10 pt-10  "
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                                transition={{ duration: 0.5, }}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 },
                                }}

                            >

                                <div className="md:order-2  max-w-2xl ">
                                    <form action="">
                                        <div className="mb-1">
                                            <input className="w-full max-w-md pt-4 pb-3 outline-none placeholder:text-lg placeholder:text-deep-black  bg-inherit border-b border-deep-black" type="email" placeholder="Email" />
                                        </div>

                                    </form>

                                    <div className="mb-6">
                                        <p>*Sign up to receive a monthly summary of my favourite marketing links, articles and tools.
                                            Coming soon to an inbox near you.</p>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-8">

                                        <div className="">
                                            <h4 className="font-Antonio font-bold mb-3 text-xl">INFO</h4>
                                            <p>Toronto-based. </p>
                                            <p>   Working worldwide.</p>

                                            <Link href={'/'} className="mt-2 block">dmediaplux@gmail.com</Link>
                                        </div>
                                        <div className="place-self-start">
                                            <h4 className="font-Antonio font-bold mb-3 text-xl">LINKS</h4>


                                            <Link href={'/'} className="block">INSTAGRAM</Link>
                                            <Link href={'/'} className="block ">LINKEDIN</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 place-content-end ">

                                    <h2 className="font-Antonio text-5xl font-bold mb-2 ">Durodola Abdulhad</h2>

                                    <p>© 2023 Durodola Abdulhad. All Rights Reserved.</p>

                                </div>


                            </motion.div>

                        </div>

                    </div>



                </div>
            </footer>
        </>


    );
}

export default Footer



