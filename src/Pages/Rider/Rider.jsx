import React, { useState } from 'react';
import RiderImg from '../../assets/rider.png';

const Rider = () => {
  const [region, setRegion] = useState('');
  const [district, setDistrict] = useState('');

  const regions = ['Dhaka', 'Chattogram', 'Rajshahi', 'Khulna'];
  
  const districts = [
    'Dhaka', 'Gazipur', 'Narayanganj', 'Tangail', 'Faridpur',
    'Chattogram', 'Cox’s Bazar', 'Rangamati', 'Bandarban', 'Khagrachhari',
    'Rajshahi', 'Bogra', 'Pabna', 'Naogaon', 'Natore',
    'Khulna', 'Jessore', 'Satkhira', 'Bagerhat', 'Kushtia'
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white rounded-2xl shadow-lg p-10">
        
        {/* LEFT FORM */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Be a Rider</h1>
          <p className="text-secondary mb-8">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
          <h2 className='text-2xl text-secondary m-3 text-start'>Tell us about yourself</h2>
          
          <form className="space-y-4">
            <input className="input input-bordered w-full" placeholder="Your Name" />
            <input className="input input-bordered w-full" placeholder="Driving License Number" />
            <input className="input input-bordered w-full" placeholder="Your Email" />

            {/* REGION */}
            <button
              type="button"
              className="input input-bordered w-full text-left text-gray-500"
              onClick={() => document.getElementById('regionModal').showModal()}
            >
              {region || 'Your Region'}
            </button>

            {/* DISTRICT */}
            <button
              type="button"
              className="input input-bordered w-full text-left text-gray-500"
              onClick={() => document.getElementById('districtModal').showModal()}
            >
              {district || 'Your District'}
            </button>

            <input className="input input-bordered w-full" placeholder="NID No" />
            <input className="input input-bordered w-full" placeholder="Phone Number" />
            <input className="input input-bordered w-full" placeholder="Bike Brand, Model & Year" />
            <input className="input input-bordered w-full" placeholder="Bike Registration Number" />

            <textarea className="textarea textarea-bordered w-full" placeholder="Tell us about yourself"></textarea>

            <button className="btn btn-primary border-white rounded py-4 w-full text-lg">Submit Application</button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img src={RiderImg} alt="Rider" className="max-w-sm w-full drop-shadow-md" />
        </div>
      </div>

      {/* REGION MODAL */}
      <dialog id="regionModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Select Region</h3>
          <div className="space-y-2">
            {regions.map((item) => (
              <button
                key={item}
                className="btn btn-outline w-full text-left"
                onClick={() => {
                  setRegion(item);
                  document.getElementById('regionModal').close();
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </dialog>

      {/* DISTRICT MODAL */}
      <dialog id="districtModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Select District</h3>
          <div className="space-y-2">
            {districts.map((item) => (
              <button
                key={item}
                className="btn btn-outline w-full text-left pl-4"
                onClick={() => {
                  setDistrict(item);
                  document.getElementById('districtModal').close();
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Rider;
