import React from 'react';
import { useForm, useWatch} from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const{user}=useAuth()
    const axiosSecure = useAxios();
    const serviceCenter=useLoaderData();
   // console.log(serviceCenter)


    //region section
   const regions = [...new Set(serviceCenter.map(c => c.region))];
  //  console.log(regions)
    const senderRegion = useWatch({control, name:'senderRegion'})
    const receiverRegion = useWatch({ control, name: 'receiverRegion' })


    //distric section 
        const districtByRegion = (region) => {
        if (!region) return [];
        return serviceCenter
            .filter(c => c.region === region)
            .map(c => c.district);
        };

  
    const handleSendParcel = (data) => {
       console.log('Parcel Data:', data);
     //   alert('Parcel submitted successfully! Check console for data.');

        const isDocument = data.parcelType === 'Document';
        const isSameDistric=data.senderDistrict===data.reciverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost=0;


        if(isDocument){
          cost=  isSameDistric?60:80
        }

        else{
            if(parcelWeight < 3){
                cost = isSameDistric ?110:150
            }
            else{
                const mincharge=isSameDistric ?110:150
               const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistric ? extraWeight * 40  : extraWeight * 40 + 40;
                cost = mincharge + extraCharge
            }
            
        }
      //  console.log('total cost ', cost)
        data.cost=cost ; 

        //sweetAlert2

        Swal.fire({
  title: "Agree With the cost?",
  text: `You will be charge!${cost}`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#CAEB66",
  cancelButtonColor: "#03373D",
  confirmButtonText: "i agree"
}).then((result) => {
  if (result.isConfirmed) {
    //Save the info for the database 

    axiosSecure.post('/parcels',data)
    .then((res)=>{
        console.log("after save the data",res.data)
    })

    // Swal.fire({
    //   title: "Success your confirmation",
    //   text: "thanks for conform it ",
    //   icon: "success"
    // });
  }
});
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-[#003d3d] mb-6">Send A Parcel</h1>

                <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-6">
                    {/* Parcel Type */}
                    <div className="flex gap-8 mb-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" {...register('parcelType', { required: true })} value="Document" className="w-4 h-4 accent-green-600" />
                            <span className="text-sm font-medium text-[#003d3d]">Document</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" {...register('parcelType', { required: true })} value="Not-Document" className="w-4 h-4 accent-green-600" />
                            <span className="text-sm font-medium text-[#003d3d]">Not-Document</span>
                        </label>
                    </div>
                    {errors.parcelType && <p className="text-red-500 text-sm">Please select parcel type.</p>}

                    {/* Parcel Basics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-[#003d3d]">Parcel Name</label>
                            <input
                                type="text"
                                {...register('parcelName', { required: 'Parcel Name is required' })}
                                placeholder="Parcel Name"
                                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-300"
                            />
                            {errors.parcelName && <p className="text-red-500 text-sm">{errors.parcelName.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-[#003d3d]">Parcel Weight (KG)</label>
                            <input
                                type="number"
                                {...register('parcelWeight', { 
                                    required: 'Parcel Weight is required', 
                                    min: { value: 0.1, message: 'Weight must be positive' } 
                                })}
                                placeholder="Parcel Weight (KG)"
                                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder:text-gray-300"
                            />
                            {errors.parcelWeight && <p className="text-red-500 text-sm">{errors.parcelWeight.message}</p>}
                        </div>
                    </div>

                    {/* Sender Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h2 className="font-bold text-[#003d3d] mb-2">Sender Details</h2>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Sender Name</label>
                                <input
                                    type="text"
                                    {...register('senderName', { required: 'Sender Name is required' })}
                                    placeholder="Sender Name"
                                    defaultValue={user?.displayName}
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.senderName && <p className="text-red-500 text-sm">{errors.senderName.message}</p>}
                            </div>

                                    <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Sender Email</label>
                                <input
                                    type="text"
                                    {...register('senderEmail', { required: 'Sender Email is required' })}
                                    placeholder="senderEmail"
                                    defaultValue={user?.email}
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.senderEmail && <p className="text-red-500 text-sm">{errors.senderEmail.message}</p>}
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Address</label>
                                <input
                                    type="text"
                                    {...register('senderAddress', { required: 'Sender Address is required' })}
                                    placeholder="Address"
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.senderAddress && <p className="text-red-500 text-sm">{errors.senderAddress.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Sender Phone No</label>
                                <input
                                    type="text"
                                    {...register('senderPhoneNo', { 
                                        required: 'Phone number is required',
                                        pattern: { value: /^[0-9]{10,15}$/, message: 'Invalid phone number' }
                                    })}
                                    placeholder="Sender Phone No"
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.senderPhoneNo && <p className="text-red-500 text-sm">{errors.senderPhoneNo.message}</p>}
                            </div>
                                    {/* Region Section */}
                            <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">
                            Select your region
                        </label>

                        <select
                            {...register('senderRegion', { required: 'Region লাগবেই' })}
                            className="select select-ghost w-full p-2 border border-gray-200 rounded-md bg-white"
                        >
                            <option value="">region</option>

                            {
                            regions.map((r, i) => (
                                <option key={i} value={r}>{r}</option>
                            ))
                            }
                        </select>

                            {errors.senderRegion && (
                                <p className="text-red-500 text-sm">{errors.senderRegion.message}</p>
                            )}
                            </div>
                                 {/* Distric Section */}
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-secondary">Your District</label>
                               <select
                                    {...register('senderDistrict', { required: 'Select a district' })}
                                    className="select  w-full p-2 border  rounded-md  bg-white"
                                    >
                                    <option value="" className='text-secondary'>Select your District</option>
                                    {
                                        districtByRegion(senderRegion).map((d, i) => (
                                        <option key={i} value={d}>{d}</option>
                                        ))
                                    }
                                    </select>

                                {errors.senderDistrict && <p className="text-red-500 text-sm">{errors.senderDistrict.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Pickup Instruction</label>
                                <textarea
                                    {...register('pickupInstruction')}
                                    placeholder="Pickup Instruction"
                                    className="w-full p-2 border border-gray-200 rounded-md h-24 placeholder:text-gray-300 resize-none"
                                />
                            </div>
                        </div>

                        {/* Receiver Details */}
                        <div className="space-y-4">
                            <h2 className="font-bold text-[#003d3d] mb-2">Receiver Details</h2>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Receiver Name</label>
                                <input
                                    type="text"
                                    {...register('receiverName', { required: 'Receiver Name is required' })}
                                    placeholder="Receiver Name"
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.receiverName && <p className="text-red-500 text-sm">{errors.receiverName.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Receiver Address</label>
                                <input
                                    type="text"
                                    {...register('receiverAddress', { required: 'Receiver Address is required' })}
                                    placeholder="Receiver Address"
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.receiverAddress && <p className="text-red-500 text-sm">{errors.receiverAddress.message}</p>}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Receiver Contact No</label>
                                <input
                                    type="text"
                                    {...register('receiverPhoneNo', { 
                                        required: 'Receiver Phone number is required',
                                        pattern: { value: /^[0-9]{10,15}$/, message: 'Invalid phone number' }
                                    })}
                                    placeholder="Receiver Contact No"
                                    className="w-full p-2 border border-gray-200 rounded-md placeholder:text-gray-300"
                                />
                                {errors.receiverPhoneNo && <p className="text-red-500 text-sm">{errors.receiverPhoneNo.message}</p>}
                            </div>
                            {/* reciver Region*/}
                             <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-600">
                            Select Reciver region
                        </label>

                        <select
                            {...register('receiverRegion', { required: 'Region লাগবেই' })}
                            className="select select-ghost w-full p-2 border border-gray-200 rounded-md bg-white"
                        >
                            <option value="">region</option>

                            {
                            regions.map((r, i) => (
                                <option key={i} value={r}>{r}</option>
                            ))
                            }
                        </select>

                            {errors.receiverRegion && (
                            <p className="text-red-500 text-sm">{errors.receiverRegion.message}</p>
                            )}

                            </div>
                            {/* reciver Distric*/}
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-secondary">Reciver District</label>
                               <select
                                 {...register('reciverDistrict', { required: 'Select a district' })}
                                    className="select  w-full p-2 border  rounded-md  bg-white"
                                    >
                                    <option value="" className='text-secondary'>Select Reciver District</option>
                                    {
                                       districtByRegion(receiverRegion).map((d, i) => (
                                        <option key={i} value={d}>{d}</option>
                                        ))
                                    }
                                    </select>

                              {errors.reciverDistrict && (
                 <p className="text-red-500 text-sm">{errors.reciverDistrict.message}</p>
                          )}
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-600">Delivery Instruction</label>
                                <textarea
                                    {...register('deliveryInstruction')}
                                    placeholder="Delivery Instruction"
                                    className="w-full p-2 border border-gray-200 rounded-md h-24 placeholder:text-gray-300 resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <p className="text-sm font-semibold text-gray-700 mb-4">* PickUp Time 4pm-7pm Approx.</p>
                        <button
                            type="submit"
                            className="bg-[#c5e76d] text-[#003d3d] font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-[#b5d65d] transition-colors"
                        >
                            Proceed to Confirm Booking
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SendParcel;
