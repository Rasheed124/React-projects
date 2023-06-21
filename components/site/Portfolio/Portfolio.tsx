

import Link from "next/link";
import ClientSideRoute from "../ClientSideRoute";
import { motion } from "framer-motion";

    type Props = {
        projects: Projects[];
    };


const PortfolioProject = ({projects} : Props) => {

    return (

        <>
           {projects.map( project => (

               <div className="bg-light-white py-20">

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
                        <motion.div

                       key={project._id}
                            className={`min-h-screen bg-cover bg-no-repeat bg-center bg-deep-black bg-blend-overlay bg-opacity-10 `} style={{ backgroundImage: `url(${project.heading})` }} 
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
                                
                                  <h1>Hello</h1>
                      </ClientSideRoute>
                    </motion.div>
                  
                </div>
                   
               </div>
           ))}
        </>
    )

}

export default PortfolioProject