import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { MdPersonAddAlt } from "react-icons/md";
import { FcFullTrash } from "react-icons/fc";
import { IoPersonRemove } from "react-icons/io5";
import Swal from "sweetalert2";
import { FaStreetView } from "react-icons/fa";

const ApproveRider = () => {
  const axiosSecure = useAxios();

  // ✅ state always top level
  const [selectedRider, setSelectedRider] = useState(null);

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // ✅ status update
  const updateStatusAction = (rider, status) => {
    const updateInfo = { status, email: rider.email };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          text: `Your Request has been ${status}`,
          icon: "success",
        });
      }
    });
  };

  // View
  const handleView = (rider) => {
    setSelectedRider(rider);
  };

  // Approve
  const handleApproveAdd = (rider) => {
    updateStatusAction(rider, "approved");
  };

  // Reject
  const handleApproveReject = (rider) => {
    updateStatusAction(rider, "rejected");
  };

  // Delete
  const handleApproveDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire("Deleted!", "Rider has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div>
      <h2>Approve the Rider : {riders.length}</h2>

      <div className="overflow-x-auto rounded-xl shadow-md border">
        <table className="table">
          <thead className="bg-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Region</th>
              <th>Status</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((rider, index) => (
              <tr key={rider._id}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.Riderregion}</td>
                <td>
                  {rider.status === "approved" && (
                    <span className="text-green-600">Approved</span>
                  )}
                  {rider.status === "rejected" && (
                    <span className="text-red-600">Rejected</span>
                  )}
                  {rider.status === "pending" && (
                    <span className="text-orange-600">Pending</span>
                  )}
                </td>
                <td>{rider.phone}</td>
                <td>
                  <div className="flex gap-2">
                    <button onClick={() => handleView(rider)}>
                      <FaStreetView />
                    </button>
                    <button onClick={() => handleApproveAdd(rider)}>
                      <MdPersonAddAlt />
                    </button>
                    <button onClick={() => handleApproveReject(rider)}>
                      <IoPersonRemove />
                    </button>
                    <button onClick={() => handleApproveDelete(rider._id)}>
                      <FcFullTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal */}
      {selectedRider && (
        <div className="fixed inset-0 bg-accent bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg w-96 relative">
            <h2 className="text-lg font-bold mb-2">Rider Details</h2>
            <p>Name: {selectedRider.name}</p>
            <p>Email: {selectedRider.email}</p>
            <p>Region: {selectedRider.Riderregion}</p>
            <p>Status: {selectedRider.status}</p>
            <p>Phone: {selectedRider.phone}</p>
            <p>NID No : {selectedRider.nid}</p>
            <button
              className="absolute top-2 right-3 text-xl"
              onClick={() => setSelectedRider(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApproveRider;
