import React, { useEffect } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useNavigate, useSearchParams } from 'react-router';
import useAxios from '../../../hooks/useAxios';

const PaymentSuccess = ({ orderId }) => {
  const [searchParams]=useSearchParams();
  const axiosSecure = useAxios();
  const sessionId = searchParams.get('session_id')
 // console.log(sessionId)

useEffect(() => {
  if (sessionId) {
    axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
      .then(res => console.log(res.data)) // {success: true} আসবে
      .catch(err => console.error("Payment patch error:", err));
  }
}, [sessionId, axiosSecure]);



  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-6" />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-4">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>

        {/* Order Info */}
        {orderId && (
          <p className="text-gray-700 font-medium mb-6">
            Order ID: <span className="text-gray-900">{orderId}</span>
          </p>
        )}

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/')}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Go to Homepage
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
