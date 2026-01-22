import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FcFullTrash } from "react-icons/fc";
import { IoPersonRemove } from "react-icons/io5";
import { MdPersonAddAlt } from "react-icons/md";
import { FaStreetView, FaUserMinus, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const UsersManagment = () => {
  const axiosSecure = useAxios();

  const {refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //admin user create 
  const handleMakeUser = (user)=>{
    const roleInfo ={role : 'admin'}
    axiosSecure.patch(`/users/${user._id}`,roleInfo)
    .then((res)=>{
        if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  text: `${user.displayName} Make A Admin `,
                  icon: "success",
                });
              }
    }) 
  }
//  Remove User Admin Access
 const handleRemoveUser = (user)=>{
    const roleInfo ={role : 'user'}
    axiosSecure.patch(`/users/${user._id}`,roleInfo)
    .then((res)=>{
        if (res.data.modifiedCount) {
                refetch();
                Swal.fire({
                  text: `${user.displayName} Make A User `,
                  icon: "success",
                });
              }
    }) 
  }
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Total Users : {users.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table  w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>User Info</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                {/* User Info */}
                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={user.photoURL}
                      alt="user"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{user.displayName}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="capitalize">{user.role}</td>

                <td className="flex gap-2">
                    {
                        user.role ==='admin'?<button
                        onClick={()=>handleRemoveUser(user)}
                        className="btn btn-sm bg-red-400 rounded-xl border-accent">
                    <FaUserMinus />
                  </button> : <button 
                  onClick={()=>handleMakeUser(user)}
                  className="btn bg-green-300 rounded-xl border-accent btn-sm">
                    <FaUserShield />
                  </button>
                    }
                  
                  
                </td>

                <td>
                  <div className="flex gap-2 text-lg">
                    <button>
                      <FaStreetView />
                    </button>
                    <button>
                      <MdPersonAddAlt />
                    </button>
                    <button>
                      <IoPersonRemove />
                    </button>
                    <button>
                      <FcFullTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagment;
