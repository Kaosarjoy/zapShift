import React from "react";
import { NavLink } from "react-router";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12">
      
      {/* Page Header */}
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. <br />
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <NavLink 
          to="/story" 
         
        >
          Story
        </NavLink>
        <NavLink 
          to="/mission" 
         
        >
          Mission
        </NavLink>
        <NavLink 
          to="/team" 
         
        >
          Team & Others
        </NavLink>
        <NavLink 
          to="/success" 
        
        >
          Success
        </NavLink>
      </div>

      {/* About Content */}
      <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
        <p>
          We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.
        </p>
        <p>
          Our team is dedicated to constant improvement and innovation, using advanced technology to ensure seamless delivery experiences for our customers. From automated notifications to route optimization, we aim to make shipping easy and stress-free.
        </p>
        <p>
          Trust, transparency, and timeliness are the pillars of our service. We are committed to building lasting relationships with our clients by delivering excellence in every package — no matter how big or small.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
