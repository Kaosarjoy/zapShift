import React from 'react';
import { LuCar } from 'react-icons/lu';

const Card = ({c}) => {
    return (
   <div className="
  card bg-base-100 w-64 p-3 shadow-md hover:bg-lime-100
  
">
  <LuCar className="text-3xl mb-1 " />

  <div className="card-body items-center text-center p-0">
    <h2 className="text-base font-semibold">
      {c.title}
    </h2>
    <p className="text-sm text-gray-500">
      {c.description}
    </p>
  </div>
</div>

    );
};

export default Card;