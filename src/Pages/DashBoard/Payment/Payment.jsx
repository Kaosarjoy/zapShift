import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router';
import useAxios from '../../../hooks/useAxios';

const Payment = () => {
  const axiosSecure = useAxios();
  const { parcelId } = useParams();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ['parcel', parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
        <span className="loading loading-spinner text-indigo-500 text-5xl"></span>
        <p className="text-gray-500 text-lg">Fetching parcel details…</p>
      </div>
    );
  }

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center transition-all duration-300 hover:scale-[1.02]">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Complete Your Payment
        </h1>
        <p className="text-gray-500 mb-6">
          Parcel: <span className="font-semibold text-indigo-600">{parcel.parcelName}</span>
        </p>

        {/* Cost Card */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mb-8">
          <p className="text-gray-600 text-lg">Total Amount</p>
          <p className="text-4xl font-bold text-indigo-600">${parcel.cost}</p>
        </div>

        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-primary text-black hover:bg-indigo-700  font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
        >
          Proceed to Payment
        </button>

        {/* Info */}
        <p className="mt-4 text-gray-400 text-sm">
          You will be redirected to a secure payment gateway.
        </p>
      </div>
    </div>
  );
};

export default Payment;
