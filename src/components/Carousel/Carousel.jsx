import { useEffect, useRef } from "react";


import { EffectFade } from 'swiper';

// import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'


import { register } from "swiper/element/bundle";
register();

const MySwiper = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            modules: [EffectFade],
            speed: [500],
            fadeEffect: {
                crossFade: true
            },
            navigation: true,
            grabCursor: true,
            effect: "fade",


            injectStyles: [
                `
                  .swiper-button-next,
                  .swiper-button-prev {
                    background-position: center;
                    background-size: 40px;
                    background-repeat: no-repeat;
                    padding: 10px;
                    display:none;
                    align-self: start;
                  }

                  .swiper-button-next::after,
                  .swiper-button-prev::after {
                    content: "";
                  }
        
                  .swiper-button-prev {
                    background-image: url("${require("../../assets/left.png")}");
                  }
        
                  .swiper-button-next {
                    background-image: url("${require("../../assets/right.png")}");

                  }

                  @media screen and (min-width: 1240px){
                    .swiper-button-next,
                    .swiper-button-prev {
                      display: block;
                    }
                  }
              `

                ,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <swiper-container ref={swiperRef} init="false"


        >
            <swiper-slide className="">
                <div className=" text-center">

                    <h3 className="text-2xl font-bold font-Antonio">Terra Hale Fitness</h3>
                    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center my-7">
                        <span className="block"><FaQuoteLeft /></span>
                        <p className="font-libre-baskerville  my-10 text-2xl">Sylvia was recommended to me by a colleague and since we started, I feel blessed to be working with her. She is a professional without a doubt, responsive and responsible, and always doing an outstanding job. I'm looking forward to many more collaborations with Sylvia and definitely highly recommend her if you are looking for a top-notch copywriter</p>

                        <span className="block"><FaQuoteLeft /></span>

                    </div>
                    <h4>Michal Joa, Director</h4>



                </div >
            </swiper-slide>
            <swiper-slide className="">
                <div className=" text-center">

                    <h3 className="text-2xl font-bold font-Antonio">Terra Hale Fitness</h3>

                    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center my-7">
                        <span className="block"><FaQuoteLeft /></span>

                        <p className="font-libre-baskerville  my-10 text-2xl">Sylvia was recommended to me by a colleague and since we started, I feel blessed to be working with her. She is a professional without a doubt, responsive and responsible, and always doing an outstanding job. I'm looking forward to many more collaborations with Sylvia and definitely highly recommend her if you are looking for a top-notch copywriter</p>


                        <span className="block"><FaQuoteLeft /></span>

                    </div>
                    <h4>Michal Joa, Manager</h4>

                </div >
            </swiper-slide>
            <swiper-slide className="">
                <div className=" text-center">

                    <h3 className="text-2xl font-bold font-Antonio">Terra Hale Fitness</h3>
                    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center my-7">
                        <span className="block"><FaQuoteLeft /></span>

                        <p className="font-libre-baskerville  my-10 text-2xl">A natural leader, Sylvia took hold of all marketing initiatives at Terra Hale with confidence, ease and passion.Always on top of industry and marketing trends, she aims to deliver world - class campaigns that lead and inspire copycats.She is an essential part of our team, which is why I continue to work with her remotely.I cannot imagine proceeding without her invaluable input, her drive for results and enthusiasm for getting the details just right</p>


                        <span className="block"><FaQuoteLeft /></span>
                    </div>
                    <h4>Michal Joa, Founder</h4>

                </div >
            </swiper-slide>
            <swiper-slide className="">
                <div className=" text-center">

                    <h3 className="text-2xl font-bold font-Antonio">Terra Hale Fitness</h3>
                    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center my-7">
                        <span className="block"><FaQuoteLeft /></span>

                        <p className="font-libre-baskerville  my-10 text-2xl">Sylvia is, quite simply, a one-stop-shop marketing master. Whether she's working on social media, blogs, Her custom digital strategies are sympathetic to our specific needs and resources, and make every attempt to maximize results. She's also an endless source of creative ideas and we always look forward to working together.</p>


                        <span className="block"><FaQuoteLeft /></span>
                    </div>
                    <h4>Michal Joa, Founder</h4>

                </div >
            </swiper-slide>

        </swiper-container>
    );
};

export default MySwiper;