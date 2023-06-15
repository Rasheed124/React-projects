   "use client";
import Link from "next/link";
   
import { motion } from 'framer-motion';



// import Swiper core and required modules
import { Navigation, Scrollbar, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Styles must use direct files imports
import 'swiper/css';

import 'swiper/css/effect-fade';




import Image from 'next/image';


import { FaQuoteLeft } from 'react-icons/fa'

import { register } from "swiper/element/bundle";
register();


    type Props = {
        testimonials: Testimonial[];
    };





const Testimonial =({testimonials}: Props) => {


    return (

               <section className="py-14 ">
                    <div className="flex flex-col max-w-6xl mx-auto  ">
                        <div className=" pb-5 px-5">

                               <Swiper
                                        modules={[Navigation, Scrollbar, EffectFade]}
                                        effect="fade"
                                        speed={1000}
                             // fadeEffect={true}
                                          scrollbar={{ draggable: true }}
                                        //   navigation
                                           
                                        spaceBetween={100}
                                        slidesPerView={1}
                                  
                                    >

                                     <div className=" text-center">
                                           {testimonials.map( testimonial => (

                                             <SwiperSlide>

                                                <div className=" text-center">
                                                    <h3 className="text-2xl font-bold font-Antonio">{testimonial.title}</h3>
                                                       <div className="max-w-4xl mx-auto flex flex-col justify-center items-center my-7">
                                                            <span className="block"><FaQuoteLeft /></span>
                                                            <p className="font-libre-baskerville  my-10 text-2xl">{testimonial.description}</p>

                                                            <span className="block"><FaQuoteLeft /></span>

                                                       </div>
                                                     <h4>{testimonial.author}</h4>
                                                </div>
                                              </SwiperSlide>
                                          ))}
                                       </div>
                               </Swiper>
                        </div>

                    </div>
                </section>

 
    )
}
export default Testimonial

