import React from 'react'

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


// import { homeBanner } from '../../constants'

const ProjectList = ({ title, projectCount }) => {
    return (
        <>

            <Link className=" " >
                <motion.div
                    className=" mb-5 md:flex md:flex-col md:justify-center md:items-center "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 60 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >

                    <div className="flex flex-row ">
                        <span className="self-start mr-3 mt-3">{projectCount}</span>
                        <h4 className="font-Antonio font-bold text-7xl lg:text-8xl uppercase relative after:content-[''] after:absolute after:-bottom-4 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-light-white hover:after:w-full hover:after:h-1 ">{title}</h4>
                    </div>

                </motion.div  >
            </Link>

        </>
    )
}

export default ProjectList