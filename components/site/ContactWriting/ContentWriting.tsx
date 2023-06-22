"use client"


import { motion } from 'framer-motion';

import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';

    // type Props = {
    //     contactPage: Contact[];
    // };

const ContentWriting = () => {

    return (

        <>

        <div className="  ">

            <div className="bg-slate-50  ">
                <header className='  max-w-6xl mx-auto  py-10 px-4'>
                    <div className="py-14">
                        <h3 className=" font-extrabold text-6xl font-Antonio mb-2 ">CONTENT WRITING</h3>

                        <div className="text-sm uppercase space-x-2">
                            <Link href={'/'}>
                                CONTENT WRITING
                            </Link>
                            <span>/</span>
                            <Link href={'/'}>     
                                 Writing
                            </Link>
                        </div>


                    </div>
                </header>

                <div className="bg-light-white px-4 py-16">

                    <div className="grid grid-cols-1 sm:grid-cols-2  max-w-6xl mx-auto">

                        <div>
                            <h3 className="font-bold text-2xl pb-2 ">SAAS & B2B</h3>
                            <h4 className="font-semibold text-lg">Select work</h4>
                        </div> 

                        <div className="grid grid-cols-1 sm:grid-cols-2  ">

                            <div className="space-y-3">

                                <div>
                                    <img src="" alt="" />
                                </div>

                                <h3 className="font-bold text-xl">SKED SOCIAL / SAAS</h3>
                                 <p>How To Boost E-Commerce Revenue Using Instagram Product Tagging</p>

                                 <Link  href={'/'} >
                                     Read More
                                 </Link>

                            </div>

                            <div className="space-y-3">

                                <div>
                                    <img src="" alt="" />
                                </div>

                                <h3 className="font-bold text-xl">SKED SOCIAL / SAAS</h3>
                                 <p>How To Boost E-Commerce Revenue Using Instagram Product Tagging</p>

                                 <Link  href={'/'} >
                                     Read More
                                 </Link>

                            </div>

                           

                        </div>

                    </div>

                </div>
            </div>
        </div>
       
        
        </>


     
    )

}
export default ContentWriting