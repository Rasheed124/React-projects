import React from 'react'

import { Link } from 'react-router-dom'


import { motion } from 'framer-motion';

import { Button, Footer } from '../../components';


const Contact = () => {
    return (
        <div className=" pt-10   xl:px-0">

            {/* CONTACT DETAILS */}
            <section className="pt-14 ">
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

                        <div className="max-w-6xl px-4 mx-auto text-left  grid grid-cols-1 md:grid-cols-2 gap-10 pb-14 ">

                            <div className=" ">

                                <h2 className="font-Antonio text-5xl font-bold mb-10 max-w-md md:text-6xl uppercase leading-[3.4rem]">THINK WE'RE A GOOD FIT <span>?</span>  GET IN TOUCH</h2>

                                <Link className="block mb-2" to={""}>
                                    sylvia@sylviaogweng.com
                                </Link >
                                <Link className="block " to={""}>
                                    LINKEDIN
                                </Link >



                            </div>

                            <div className=" ">
                                <form action="">
                                    <div>
                                        <input className="w-full  pt-4 pb-3 outline-none placeholder:text-lg  placeholder:text-deep-black bg-inherit border-b border-deep-black" type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input className="w-full pt-4 pb-3 outline-none placeholder:text-lg  placeholder:text-deep-black bg-inherit border-b border-deep-black" type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <textarea className="w-full pt-4 pb-3 outline-none placeholder:text-lg  placeholder:text-deep-black bg-inherit border-b border-deep-black resize-y" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>

                                    <div className="flex justify-end mt-3">
                                        <Button title={"Send Message"} hoverColor="hover:text-deep-black" />
                                    </div>


                                </form>
                            </div>

                        </div>

                        <div className=" py-2  bg-white w-full ">
                            <marquee behavior="" direction="" className="text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate possimus dolorum vitae est placeat totam, eligendi rem, explicabo sint libero cum voluptas quidem doloremque optio ipsum, natus tempora nesciunt! </marquee>
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