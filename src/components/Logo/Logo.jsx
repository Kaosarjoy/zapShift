import React from 'react';
import logoImg from '../../assets/logo.png'
const Logo = () => {
    return (
       <div className="flex items-end">
  {/* Logo Image */}
  <img 
    src={logoImg} 
    alt="ZapShift Logo" 
   
  />

  {/* App Name */}
  <h1 className="text-3xl -ms-2.5 font-bold text-gray-800 select-none">
    ZapShift
  </h1>
</div>

    );
};

export default Logo;