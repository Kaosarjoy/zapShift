import React, { useEffect, useState } from 'react';
import Service from '../Home/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='bg-secondary py-16 px-4 '>
            <h2 className="text-2xl text-white font-bold text-center mb-2">
        Our Services
        </h2>

    <div className="text-center text-white max-w-2xl mx-auto mt-2 mb-10">
  <p>
    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
  </p>
    <p className="mt-1">
    From personal packages to business shipments — we deliver on time, every time.
     </p>
    </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">

            {
             services.map(s=>(
                <Service key={s.id} s={s}></Service>
             )
                
             )
            }
        </div> 
        </div>
    );
};

export default Services;