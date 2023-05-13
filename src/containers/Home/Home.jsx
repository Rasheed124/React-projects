import React from 'react'


import { motion } from 'framer-motion';


import { Button, ProjectList, Skill, Header } from '../../components';

// import Swiper styles
import "swiper/swiper.scss";
import 'swiper/css/navigation';
import "swiper/components/effect-coverflow/effect-coverflow.scss";


// we will use Pagination and Coverflow
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// configure Swiper to use modules
SwiperCore.use([Navigation, EffectCoverflow]);













const Home = () => {
    return (

        <div className="">
            <div>
                <Header />
            </div>

            {/* SKILLS */}
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

            {/* PROJECTS */}
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


            {/* CLIENT REVIEWS */}
            <section className="py-14 ">
                <div className="flex flex-col max-w-6xl mx-auto  ">
                    <div className=" pb-5 px-5">
                        <Swiper
                            className="max-w-4xl "
                            effect="coverflow"
                            // install Swiper modules
                            modules={[Navigation, EffectCoverflow]}
                            spaceBetween={50}

                            slidesPerView={1}
                            grabCursor="true"
                            loop="true"
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >

                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center text-center">

                                    <h3>Terra Hale Fitness</h3>
                                    <div>
                                        <p className="font-libre-baskerville">Sylvia is, quite simply, a one-stop-shop marketing master. Whether she's working on social media, blogs, or emails, Sylvia produces high-quality, highly engaging content that speaks to our customers, while very much embracing our unique brand spirit. Her custom digital strategies are sympathetic to our specific needs and resources, and make every attempt to maximize results. She's also an endless source of creative ideas and we always look forward to working together.</p>
                                        <h4>Michal Joa, Founder</h4>
                                    </div>
                                </div >
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center text-center">

                                    <h3>Terra Hale Fitness</h3>
                                    <div>
                                        <p className="font-libre-baskerville">Sylvia is, quite simply, a one-stop-shop marketing master. Whether she's working on social media, blogs, or emails, Sylvia produces high-quality, highly engaging content that speaks to our customers, while very much embracing our unique brand spirit. Her custom digital strategies are sympathetic to our specific needs and resources, and make every attempt to maximize results. She's also an endless source of creative ideas and we always look forward to working together.</p>
                                        <h4>Michal Joa, Founder</h4>
                                    </div>
                                </div >
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col justify-center items-center text-center">

                                    <h3>Terra Hale Fitness</h3>
                                    <div>
                                        <p className="font-libre-baskerville">Sylvia is, quite simply, a one-stop-shop marketing master. Whether she's working on social media, blogs, or emails, Sylvia produces high-quality, highly engaging content that speaks to our customers, while very much embracing our unique brand spirit. Her custom digital strategies are sympathetic to our specific needs and resources, and make every attempt to maximize results. She's also an endless source of creative ideas and we always look forward to working together.</p>
                                        <h4>Michal Joa, Founder</h4>
                                    </div>
                                </div >
                            </SwiperSlide>

                        </Swiper>
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