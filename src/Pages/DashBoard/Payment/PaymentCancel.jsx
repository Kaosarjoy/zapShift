import React from 'react';
import { useNavigate } from 'react-router';

const PaymentCancel = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate('/dashboard/my-parcels'); // absolute path use korte hobe
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        {/* Cancel Icon */}
        <svg
          className="mx-auto h-16 w-16 text-red-500 mb-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Failed
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Oops! Something went wrong with your payment. Please try again.
        </p>

        {/* Try Again Button */}
        <button
          onClick={handleTryAgain}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentCancel;
