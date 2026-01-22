import React from "react";
import RiderImg from "../../assets/rider.png";
import Swal from "sweetalert2";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useLoaderData, useNavigate } from "react-router";


const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();
  const axiosSecure = useAxios();
  const serviceCenter = useLoaderData();
  const navigate = useNavigate();




  // unique regions
  const regions = [...new Set(serviceCenter.map((c) => c.region))];
  // watch selected region
  const senderRegion = useWatch({
    control,
    name: "Riderregion",
  });

  // districts by region
  const districtByRegion = (region) => {
    if (!region) return [];
    return serviceCenter
      .filter((c) => c.region === region)
      .map((c) => c.district);
  };

  const handleRiderSubmit = (data) => {

    
        axiosSecure.post("/riders", data).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Rider application submitted",
              showConfirmButton: false,
              timer: 2000,
            });
            navigate("/dashboard/approve-rider");
          }
        });
      };
    


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-white rounded-2xl shadow-lg p-10">
        
        {/* LEFT FORM */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Be a Rider
          </h1>

          <p className="text-secondary mb-8">
            Fast delivery, real tracking, no drama. Old-school reliability.
          </p>

          <form
            onSubmit={handleSubmit(handleRiderSubmit)}
            className="space-y-4"
          >
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              placeholder="Your Name"
            />

            <input
              {...register("license", { required: true })}
              className="input input-bordered w-full"
              placeholder="Driving License Number"
            />

            <input
              {...register("email")}
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full"
            />

            {/* REGION */}
            <div className="mx-auto text-start">
              <select
                {...register("Riderregion", {
                  required: "Region লাগবেই",
                })}
                className="select select-neutral bg-accent "
              >
                <option value="">Select Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              {errors.Riderregion && (
                <p className="text-red-500 text-sm">
                  {errors.Region.message}
                </p>
              )}
            </div>

            {/* DISTRICT */}
            <div className="mx-auto text-start">
              <select
                {...register("RiderDistrict", {
                  required: "District লাগবেই",
                })}
                className="select select-neutral bg-accent"
              >
                <option value="">Select District</option>
                {districtByRegion(senderRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              {errors.RiderDistrict && (
                <p className="text-red-500 text-sm">
                  {errors.RiderDistrict.message}
                </p>
              )}
            </div>

            <input
              {...register("nid", { required: true })}
              className="input input-bordered w-full"
              placeholder="NID Number"
            />

            <input
              {...register("phone", { required: true })}
              className="input input-bordered w-full"
              placeholder="Phone Number"
            />

            <input
              {...register("bikeInfo", { required: true })}
              className="input input-bordered w-full"
              placeholder="Bike Brand, Model & Year"
            />

            <input
              {...register("bikeReg", { required: true })}
              className="input input-bordered w-full"
              placeholder="Bike Registration Number"
            />

            <textarea
              {...register("about")}
              className="textarea textarea-bordered w-full"
              placeholder="Tell us about yourself"
            />

            <button className="btn btn-primary rounded-xl p-2 border-accent w-full text-lg">
              Submit 
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={RiderImg}
            alt="Rider"
            className="max-w-sm w-full drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;
