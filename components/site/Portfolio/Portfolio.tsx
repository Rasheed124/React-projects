
"use client";

import {  useState } from "react";

import Blurry from '../../../app/assets/bbblurry.svg'


import ClientSideRoute from "../ClientSideRoute";
import { motion } from "framer-motion";
import Image from "next/image";

    type Props = {
        projects: Projects[];
    };


const PortfolioProject = ({projects} : Props) => {

    const [isHover, setIsHover] = useState(false)

    const blurBg = Blurry;

   

    return (

        <>
         

               <div className="bg-light-white py-6 px-4">

                  <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 ">
                      {projects.map( project => (

                        <motion.div
                        
                            key={project._id}
                            className={`min-h-screen z-10 cursor-pointer overflow-hidden  relative bg-cover  transition duration-700 bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-20 hover:bg-opacity-25`} style={{ backgroundImage: `url(${project.projectImage})` }} 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, }}
                            variants={{
                                hidden: { opacity: 0,  },
                                visible: { opacity: 1, },
                            }}
                           >

                         
                        

                             
                            <ClientSideRoute route={`/portfolio/${project.slug.current}`}>
                                <div className="absolute z-10 left-10 bottom-10 ">
                                   <h1 className="font-Antonio text-2xl transition-all duration-500 hover:underline font-bold">{project.title}</h1>

                                </div>
                                
                            </ClientSideRoute>
                    </motion.div>

                        ))}
                  
                </div>
                   
               </div>
       
        </>
    )

}

export default PortfolioProject