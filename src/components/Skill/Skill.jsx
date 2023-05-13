import React from 'react'

import { motion } from 'framer-motion';


// import { homeBanner } from '../../constants'

const Skill = ({ image, title, description }) => {
    return (
        <>
            <motion.div

                className=" mb-5 md:mb-0  "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0 },
                }}


            >
                <div className="mb-10">
                    <img className="w-36" src={image} alt="" />
                </div>
                <div className="space-y-5 ">
                    <h4 className="font-Antonio font-bold uppercase">{title}</h4>

                    <p className="text-lg">{description}</p>
                </div>

            </motion.div  >

        </>
    )
}

export default Skill