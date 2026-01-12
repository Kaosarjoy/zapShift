import React from 'react';
import serviceImg from '../../assets/service.png'
const Service = ({s}) => {
    return (
        <div className="card bg-base-100 w-64 p-3 shadow-md hover:bg-lime-100">
        <img src={serviceImg} className="w-16 h-16 mb-3 mx-auto"></img>
         <div className="card-body items-center text-center p-0">
           <h2 className="text-base font-semibold">
             {s.title}
           </h2>
           <p className="text-sm text-gray-500">
             {s.description}
           </p>
         </div>
       </div>
    );
};

export default Service;