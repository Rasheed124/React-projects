import React from 'react'

import { Link } from 'react-router-dom'


import { motion } from 'framer-motion';

import { Button, Footer } from '../../components';
import { images } from '../../constants'



const Contact = () => {
    return (
        <div className=" pt-10 ">

            {/* CONTACT DETAILS */}
            <section className="pt-14 px-4">
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

                            <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-90 `} style={{ backgroundImage: `url(${images.about})` }} >

                                <div className="absolute bottom-6 left-6"><p>Entertainment</p> </div>
                            </div>

                            <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-90 `} style={{ backgroundImage: `url(${images.about})` }} >

                                <div className="absolute bottom-6 left-6"><p>Entertainment</p> </div>
                            </div>

                            <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-90 `} style={{ backgroundImage: `url(${images.about})` }} >

                                <div className="absolute bottom-6 left-6"><p>Entertainment</p> </div>
                            </div>

                            <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-90 `} style={{ backgroundImage: `url(${images.about})` }} >

                                <div className="absolute bottom-6 left-6"><p>Entertainment</p> </div>
                            </div>

                            <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-90 `} style={{ backgroundImage: `url(${images.about})` }} >

                                <div className="absolute bottom-6 left-6"><p>Entertainment</p> </div>
                            </div>
                            <div className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-90 `} style={{ backgroundImage: `url(${images.about})` }} >

                                <div className="absolute bottom-6 left-6"><p>Entertainment</p> </div>
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