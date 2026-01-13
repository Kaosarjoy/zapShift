import React from 'react';
import bookImg from '../../../assets/book.png';
import heroImg from '../../../assets/hero.png'
const Hero = () => {
  return (
    // ১. মেইন কন্টেইনার: রিলেটিভ পজিশন দেয়া হয়েছে যাতে ব্যাকগ্রাউন্ড ডিজাইনগুলো ঠিক থাকে
    <div className='relative bg-[#003d32] max-w-7xl rounded-[40px] mx-auto overflow-hidden p-10 md:p-16 flex flex-col md:flex-row items-center justify-between text-white'>
      
      {/* ২. বাম পাশের কন্টেন্ট সেকশন */}
      <div className='z-10 md:w-1/2 space-y-6'>
        <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
          Merchant and Customer Satisfaction <br /> 
          <span className='text-white'>is Our First Priority</span>
        </h2>
        
        <p className='text-gray-300 text-lg max-w-lg'>
          We offer the lowest delivery charge with the highest value along with 
          100% safety of your product. Pathao courier delivers your parcels 
          in every corner of Bangladesh right on time.
        </p>

        {/* ৩. বাটন সেকশন */}
        <div className='flex flex-wrap gap-4 pt-4'>
          <button className='bg-[#c4e86b] text-black px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all'>
            Become a Merchant
          </button>
          
          <button className='border-2 border-[#c4e86b] text-[#c4e86b] px-8 py-3 rounded-full font-bold hover:bg-[#c4e86b] hover:text-black transition-all'>
            Earn with ZapShift Courier
          </button>
        </div>
      </div>

      {/* ৪. ডান পাশের ইমেজ সেকশন */}
      <div className='md:w-1/2 flex justify-end mt-10 md:mt-0'>
        <img 
          src={bookImg} 
          alt="Delivery Boxes Illustration" 
          className='w-full max-w-md object-contain'
        />
      </div>

      {/* ব্যাকগ্রাউন্ড ওয়েভ ইফেক্ট (ঐচ্ছিক - যদি আপনার ইমেজে না থাকে) */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
         {/* এখানে আপনার ব্যাকগ্রাউন্ডের ওয়েভ ডিজাইনটি দিতে পারেন */}
         <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;