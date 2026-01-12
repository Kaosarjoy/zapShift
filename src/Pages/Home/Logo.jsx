import React from 'react';
import brand1 from '../../assets/brands/amazon.png';
import brand2 from '../../assets/brands/casio.png';
import brand3 from '../../assets/brands/moonstar.png';
import brand4 from '../../assets/brands/randstad.png';
import brand5 from '../../assets/brands/star.png';
import brand6 from '../../assets/brands/start_people.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Logo = () => {
  return (
    <div className="my-16">
      <h2 className="text-center font-bold text-2xl mb-8">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {[brand1, brand2, brand3, brand4, brand5, brand6].map(
          (brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={brand}
                  className="h-10 object-contain opacity-70 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Logo;
