   "use client";
   
   import Image from "next/image";
    import Link from "next/link";
    import { HiArrowNarrowRight } from 'react-icons/hi'

import { motion } from 'framer-motion';




    type Props = {
        skills: Skills[];
    };


    const Skills = ({ skills }: Props) => {

       

        return(

             
               <section className="py-14 ">

                {skills.map( skill => (

                      <div id={skill._id} className="flex flex-col max-w-6xl mx-auto  ">
                        <div className="  text-center py-7 px-5 ">
                    

                                <h2 className="font-Sohne-Bold text-lg pb-3 mb-5 xl:mb-0">{skill.heading}</h2>
                                <div className="   hidden xl:block xl:mb-16 xl:px-2">
                                    <h3 className="font-migra-light italic font-thin text-3xl xl:text-6xl">

                                        {skill.subHeading.split(" ").slice(0, 1)}

                                         <span className="text-light-overlay"> {skill.subHeading.split(" ").slice(1, 2)}</span> {" "}
                                       
                                        {skill.subHeading.split(" ").slice(2, 7).join(" ")} {" "}

                                       <span className="text-light-overlay">{skill.subHeading.split(" ").slice(7, 8).join(" ")}</span> {" "}
                                        
                                                  {skill.subHeading.split(" ").slice(8)}
                                        {/* Creating  
                                        <span className="text-light-overlay">data-driven</span> 
                                         strategies and immersive content for
                                         <span className="text-light-overlay">meaningful</span> 
                                          communities. */}

                                          </h3>


                                </div>
                         

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5  w-full px-5 ">
                                  {
                                    skill.skillsDetails.map((skillDetail) => (

                                                <motion.div
                                                    id={skillDetail._id}
                                                    className=" mb-5 md:mb-0  text-left "
                                                    initial="hidden"
                                                    whileInView="visible"
                                                    viewport={{ once: true, amount: 0.8 }}
                                                    transition={{ duration: 0.6, delay: 0 }}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 60 },
                                                        visible: { opacity: 1, y: 0 },
                                                    }}


                                                >

                                                <div className="mb-5 relative w-[150px] h-[100px]">
                                                    <Image
                                                        src={skillDetail.image}
                                                        alt={skillDetail.title}
                                                         fill
                                                        className="w-full absolute top-0 left-0 max-w-full"
                                                    
                                                    />
                                                {/* <img className="w-36" src={} alt="" /> */}
                                                  </div>
                                                <div className="space-y-5 ">
                                                  <h4 className="font-Antonio font-bold uppercase">{skillDetail.title}</h4>

                                                   <p className="text-lg">{skillDetail.description}</p>
                                               </div>

                                         </motion.div>
                                    ))
                                  }
                            </div>
                        </div>

                            <Link className="block hover:transition-colors duration-500 self-center mt-10 " id="btn-link" href={'/'}>
                                    <div className="flex justify-center items-center gap-3 text-lg font-Antonio">
                                        <div className="uppercase">
                                            Get in touch
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
                ))}
                  
                </section>

           

        
        
        )


    }

    export default Skills