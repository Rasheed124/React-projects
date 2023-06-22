"use client"


import { motion } from 'framer-motion';

import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

    type Props = {
        contactPage: Contact[];
    };

const ContactPage = ({ contactPage} :Props) => {

    return (

        <>
        
          { contactPage &&  contactPage.map(   contact => (
              <div className="   xl:px-0">

              <section className="pt-24 bg-light-white">
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

                        <div className="max-w-6xl px-4 mx-auto text-left  grid grid-cols-1 md:grid-cols-2 gap-10 pb-24 ">

                            <div className=" ">

                                <h2 className="font-Antonio text-5xl font-bold mb-10 lg:mb-16 max-w-[455px] md:text-7xl uppercase leading-[3.4rem]">
                                    {contact.title}
                                </h2>

                                <Link href={`mailto:${contact.mail}`} className="block mb-2" >
                                    {contact.mail}
                                </Link >
                                <Link href={'/'}  className="block " >
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
                                        <textarea className="w-full pt-4 pb-3 outline-none placeholder:text-lg  placeholder:text-deep-black bg-inherit border-b border-deep-black resize-y" name="" id=""  placeholder="Message"></textarea>
                                    </div>

                                    <div className="flex justify-end mt-3">
                                    
                                            <Link className={`block hover:transition-colors duration-500 hover:text-header-dark-overlay`} id="btn-link" href="">
                                                <div className="flex justify-center items-center gap-3 text-lg font-Antonio">
                                                    <div className="uppercase font-bold text-lg">
                                                     send message
                                                    </div>
                                                    <div className="relative btn overflow-x-hidden">
                                                        <span>
                                                            <HiArrowNarrowRight className="text-3xl hover:transform hover:-translate-x-full hover:transition-transform hover:duration-500" />
                                                        </span>
                                                        <span className="absolute top-0 left-0 transform -translate-x-full transition-transform duration-500">
                                                            <HiArrowNarrowRight className="text-3xl" />
                                                        </span>
                                                    </div>
                                                </div>

                                            </Link>
                                    </div>


                                </form>
                            </div>

                        </div>

                        <div className=" py-2  bg-white w-full ">
                            <div  className="text-lg font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate possimus dolorum vitae est placeat totam, eligendi rem, explicabo sint libero cum voluptas quidem doloremque optio ipsum, natus tempora nesciunt! </div>

                            
                        </div>
                        
                    </motion.div>


                </div>
            </section>

            </div>

          ))}
        
        </>


     
    )

}
export default ContactPage