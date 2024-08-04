import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const PromoMessage = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, A11y, EffectFade, Autoplay, EffectCoverflow]}
        effect="fade" 
        speed={1200}
        autoplay={{
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        slidesPerView={1}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="max-w-[400px] m-auto">
            <h2 className="text-white text-center">
              CALL TO ORDER: 08184370911
            </h2>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="max-w-[400px] m-auto">
            <h2 className="text-white text-center">
              REDEFINE THE WAY YOU CHARGE
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default PromoMessage;
