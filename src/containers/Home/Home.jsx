import React from 'react'

import Header from '../../components/Header/Header'

import Skill from '../../components/Skill/Skill'

import { motion } from 'framer-motion';
import { Button } from '../../components';
import ProjectList from '../../components/ProjectList/ProjectList';




const Home = () => {
    return (

        <div className="">
            <div>
                <Header />
            </div>

            {/* Skills */}
            <section className="py-14 ">
                <div className="flex flex-col max-w-6xl mx-auto  ">
                    <div className=" pb-5">
                        <motion.div
                            className="text-center "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}

                        >


                            <h2 className="font-Sohne-Bold text-lg pb-3 mb-5 xl:mb-0">MORE THAN FULL-STACK INBOUND MARKETING</h2>
                            <div className=" xl:px-5  hidden xl:block xl:mb-16">
                                <h3 className="font-migra-light font-thin text-3xl xl:text-6xl">Creating  <span className="text-light-overlay">data-driven</span>  strategies and immersive content for <span className="text-light-overlay">meaningful</span>  communities.</h3>


                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5  w-full px-5 ">
                            <Skill
                                image={require("../../assets/home-custom-icon-1.png")}
                                title={"Digital Strategy"}
                                description={"Holistic digital strategies that maximize the capabilities of new or existing channels. Make your communities and channels work together."}
                            />
                            <Skill
                                image={require("../../assets/home-custom-icon-2.png")}
                                title={"social media"}
                                description={"Custom social media strategies that help your business grow brand awareness, build trust and convert followers."}
                            />
                            <Skill
                                image={require("../../assets/home-custom-icon-3.png")}
                                title={"content"}
                                description={"Data-driven content that doesn't skimp on creativity. Stand out with content your community will remember, talk about and share."}
                            />
                            <Skill
                                image={require("../../assets/home-custom-icon-4.png")}
                                title={"copywriting"}
                                description={"SEO-focused copywriting that speaks to the concerns and interests of your community, and mobilizes them to take action."}
                            />
                        </div>
                    </div>

                    <div className="self-center mt-10">
                        <Button title={"Get in touch"} />
                    </div>

                </div>
            </section>

            {/* Projects */}
            <section className="py-14 ">
                <div className="flex flex-col max-w-6xl mx-auto  ">
                    <div className=" pb-5">
                        <motion.div
                            className="text-center py-7 px-5"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{ duration: 0.5, }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}

                        >
                            <h2 className=" text-lg pb-3 mb-5 xl:mb-0">SELECT PROJECTS</h2>

                        </motion.div>

                        <div className="grid grid-cols-1  w-full px-5 ">
                            <ProjectList
                                projectCount={"01"}
                                title={"DEW IQ"}
                            />
                            <ProjectList
                                projectCount={"02"}

                                title={"EDENROWE"}
                            />
                            <ProjectList
                                projectCount={"03"}

                                title={"SAUL GOOD GIFTS"}
                            />
                            <ProjectList
                                projectCount={"04"}

                                title={"COURTQUARTERS"}
                            />
                            <ProjectList
                                projectCount={"05"}

                                title={"TERRA HALE"}
                            />
                        </div>
                    </div>

                    <div className="self-center mt-10">
                        <Button title={"View more"} />
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Home