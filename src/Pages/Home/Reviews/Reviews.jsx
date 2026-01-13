import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import ReviewCard from '../../../Pages/Home/Reviews/ReviewCard';
import bookImg from '../../../assets/book.png'
const Reviews = ({ reviewPromise }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewPromise.then((data) => setReviews(data));
  }, [reviewPromise]);

  if (!reviews.length) return <p>Loading...</p>;

  return (
    <div className="py-10">
        <div className='items-center mb-4 text-center space-y-2'>
            <img src={bookImg} alt=""  className='mx-auto'/>
            <h2 className='font-bold text-3xl mb-2'>
                What our customers are sayings
            </h2>
            <p className='font-semibold mb-2'>
                Enhance posture, mobility, and well-being effortlessly with Posture Pro.<br>
                </br> Achieve proper alignment, reduce pain, and strengthen your body with ease!
            </p>
        </div>
      <Swiper
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
        effect={'coverflow'}
        loop={true}
        spaceBetween={true}
        grabCursor={30}
        centeredSlides={true}
        slidesPerView={3} // ৩টা কার্ড দেখা যাবে
        coverflowEffect={{
          rotate: 50,    // কার্ড ঘোরাবে না
          stretch: 0,   // কার্ডের gap
          depth: 100,   // পিছনের কার্ডের depth
          modifier: 1,
          slideShadows: true, // চাইলে true করতে পারো
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="flex justify-center transition-transform duration-500"
          >
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
