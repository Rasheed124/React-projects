   "use client";


   import Image from "next/image";
    import Link from "next/link";
import { motion } from 'framer-motion';
import urlFor from "@/lib/urlFor";




    type Props = {
        abouts: About[];
    };


    const AboutContainer = ({ abouts }: Props) => {

  
        return(

                <section className="">

                    {abouts.map( about => (

                        <div>

                            {/* ABOUT HERO   */}
                              <div className="  relative min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-20">

                       

                                <div className=" absolute top-0 w-full h-full left-0 ">
                                    <motion.div
                                        className=""
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.8 }}
                                        transition={{ duration: 0.5, }}
                                        variants={{
                                            hidden: { opacity: 0,  },
                                            visible: { opacity: 1, },
                                        }}

                                    >
                                        <Image
                                            className=" object-cover object-center "
                                            src={urlFor(about.image).url()}
                                            alt={about.title}
                                            fill
                                                />
                                    </motion.div>


                                </div>

                             </div>

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


                        </div>



                    ))}
               
                </section>

        )


    }

    export default AboutContainer