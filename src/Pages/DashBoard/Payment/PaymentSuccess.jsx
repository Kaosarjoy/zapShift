import React, { useEffect, useState } from 'react';
import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate, useSearchParams } from 'react-router';
import useAxios from '../../../hooks/useAxios';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const [paymentData, setPaymentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxios();
    const sessionId = searchParams.get('session_id');
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionId) {
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
                .then(res => {
                    if (res.data.success) {
                        setPaymentData(res.data);
                    }
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Payment patch error:", err);
                    setLoading(false);
                });
        }
    }, [sessionId, axiosSecure]);

    if (loading) return <div className="text-center mt-20 text-xl font-semibold">Processing Payment Info...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                
                {/* Header Section */}
                <div className="bg-green-500 p-8 text-center text-white">
                    <CheckCircleIcon className="mx-auto h-16 w-16 text-white mb-4 animate-bounce" />
                    <h1 className="text-3xl font-extrabold">Payment Successful!</h1>
                    <p className="mt-2 opacity-90 text-lg">Your parcel is now being processed.</p>
                </div>

                {/* Data Table Section */}
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Transaction Details</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                <tr className="border-b">
                                    <th className="py-3 text-gray-500 font-medium">Transaction ID</th>
                                    <td className="py-3 font-mono text-sm text-blue-600 font-bold">{paymentData?.transactionId}</td>
                                </tr>

                                <tr className="border-b">
                                    <th className="py-3 text-gray-500 font-medium">Tracking ID</th>
                                    <td className="py-3 font-mono text-sm text-blue-600 font-bold">{paymentData?.trackingId}</td>
                                </tr>

                                <tr className="border-b">
                                    <th className="py-3 text-gray-500 font-medium">Customer Email</th>
                                    <td className="py-3 text-gray-800">{paymentData?.paymentDetails?.customerEmail}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="py-3 text-gray-500 font-medium">Parcel Name</th>
                                    <td className="py-3 text-gray-800">{paymentData?.paymentDetails?.parcelName || "N/A"}</td>
                                </tr>
                                <tr className="border-b">
                                    <th className="py-3 text-gray-500 font-medium">Amount Paid</th>
                                    <td className="py-3 text-green-600 font-bold">${paymentData?.paymentDetails?.amount}</td>
                                </tr>
                                <tr>
                                    <th className="py-3 text-gray-500 font-medium">Payment Status</th>
                                    <td className="py-3">
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                            {paymentData?.paymentDetails?.paymentStatus}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => navigate('/dashboard/my-parcels')}
                            className="flex-1 flex items-center justify-center gap-2 bg-gray-800 hover:bg-black text-white font-bold py-3 px-6 rounded-xl transition-all"
                        >
                            View My Parcels
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 px-6 rounded-xl transition-all"
                        >
                            <ArrowLeftIcon className="h-4 w-4" /> Go Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;