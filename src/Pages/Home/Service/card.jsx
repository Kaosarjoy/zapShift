import React from 'react';

const Card = ({c }) => {
  // item prop-e thakbe: icon, title, ebong description
  return (
    <div className="flex items-center bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-4xl mx-auto mb-6 transition-all hover:shadow-md">
      
      {/* 1. Left Section: Icon/Illustration */}
      <div className=" w-32 md:w-40 flex justify-center items-center">
        <img 
          src={c.image} 
          alt={c.title} 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 2. Middle Section: Vertical Dotted Line */}
      <div className="h-30 mx-6 border-l-2 border-dotted border-gray-300"></div>

      {/* 3. Right Section: Text Content */}
      <div className="items-start ">
        <h3 className="text-xl   font-bold  mb-2">
          {c.title}
        </h3>
        <p className=" leading-relaxed text-sm md:text-base">
          {c.description}
        </p>
      </div>
      
    </div>
  );
};

export default Card;