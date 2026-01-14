import React from "react";

import brand1 from "../../assets/brands/amazon.png";
import brand2 from "../../assets/brands/casio.png";
import brand3 from "../../assets/brands/moonstar.png";
import brand4 from "../../assets/brands/randstad.png";
import brand5 from "../../assets/brands/star.png";
import brand6 from "../../assets/brands/start_people.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Logo = () => {
  return (
    <div className="my-16">
      <h2 className="text-center font-bold text-2xl mb-8">
        We&apos;ve helped thousands of sales teams
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="py-4"
      >
        {[brand1, brand2, brand3, brand4, brand5, brand6].map(
          (brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={brand}
                  alt={`brand-${index}`}
                  className="
                    h-10
                    object-contain
                    opacity-80
                    hover:opacity-100
                    transition
                    duration-300
                  "
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
