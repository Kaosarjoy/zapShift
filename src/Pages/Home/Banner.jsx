import React from 'react';
import bannerImg from '../../assets/big.png'
import smallBanner from '../../assets/small.png'
import { MdArrowOutward } from 'react-icons/md';
const Banner = () => {
    return (
        <div className='flex justify-center items-center gap-4'>
            <div >
                <img src={smallBanner} alt="" />
                <div className='flex flex-col gap-4 mt-4'>
                    <h2 className='text-2xl font-bold text-black'>We Make Sure Your   
                        <span className='text-base-200 gap-1'>Parcel Arrives </span>
                         On Time – No Fuss.</h2>

                         <p>
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
         From personal packages to business shipments — we deliver on time, every time.
                         </p>

                         <div className='flex justify-baseline items-center gap-2 '>
                            <button className='btn btn-primary rounded-2xl p-2'>Track Your Parcel</button>
                            <button className="btn bg-black text-white rounded-full w-10 h-10 p-0 flex items-center justify-center">
                                <MdArrowOutward className="text-lg" />
                              </button>
                            <button className='btn bg-white p-2 rounded-xl'>Be A Rider</button>
                         </div>
                </div>
            </div>
            <div className='flex'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;