import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxios from '../../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import dayjs from 'dayjs';

const PaymentHistory = () => {
    const {user} =useAuth()
    const axiosSecure = useAxios();
    const {data : payment = []} = useQuery({
        queryKey : ['payment',user.email], 
        queryFn : async()=>{
            const res = await axiosSecure.get(`payment?email=${user.email}`)
            return res.data
        }
    })
    return (
       <div className="p-6">
  {/* Header */}
  <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
    <h2 className="text-3xl font-bold text-gray-400">
      Payment History
    </h2>
    <div className="badge text-2xl  font-bold badge-lg">
      Total Payments: {payment.length}
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto rounded-xl shadow-md border border-base-300">
    <table className="table table-zebra">
      <thead className="bg-primary text-base font-semibold">
        <tr>
          <th>#</th>
          <th>Customer Email</th>
          <th>Transaction ID</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Tracking ID</th>
        </tr>
      </thead>

      <tbody>
        {payment.map((p, index) => (
          <tr key={p._id} className="hover">
            <th>{index + 1}</th>
            <td className="font-medium">{p.customerEmail}</td>
            <td className="text-xs text-black break-all">
              {p.transactionId}
            </td>
            <td className="font-semibold text-black">
              {p.amount} TK
            </td>
            <td className="text-gray-700">
                {p.paidAt
                  ? dayjs(p.paidAt).format("YYYY-MM-DD HH:mm:ss")
                  : "N/A"}
              </td>
            <td className="text-xs text-black break-all">
              {p.trackingId}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
};

export default PaymentHistory;