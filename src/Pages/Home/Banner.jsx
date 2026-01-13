import React from 'react';
import bannerImg1 from '../../assets/banner/banner1.png';
import bannerImg2 from '../../assets/banner/banner2.png';
import bannerImg3 from '../../assets/banner/banner3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MdArrowOutward } from 'react-icons/md';

const Banner = () => {
    return (
<Carousel
  infiniteLoop
  autoPlay
  showThumbs={false}
  showStatus={false}
  showIndicators={true}
>
  <div className="relative bg-white">
    {/* Image */}
    <img
      src={bannerImg1}
      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 flex items-center">
      <div className="
        max-w-xl
        px-6 sm:px-10 lg:ml-20
        space-y-4
        text-left
      ">
        <p className="text-gray-700 text-sm sm:text-base">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="btn btn-primary rounded-full px-5 text-sm sm:text-base">
            Track Your Parcel
          </button>

          <button className="btn bg-black text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
            <MdArrowOutward className="text-lg" />
          </button>

          <button className="btn btn-outline rounded-full px-5 text-sm sm:text-base">
            Be A Rider
          </button>
        </div>
      </div>
    </div>
  </div>

  <div>
    <img
      src={bannerImg2}
      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
    />
  </div>

  <div>
    <img
      src={bannerImg3}
      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
    />
  </div>
</Carousel>


    );
};

export default Banner;
