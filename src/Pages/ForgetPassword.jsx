import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';


const ForgetPassword = () => {
  const { forgetPassword } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   forgetPassword(data.email)
      .then(() => {
        alert('cheack your email to reset password');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center text-black bg-gray-100 px-4 sm:px-6 md:px-8">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold mb-4">Forget Password</h2>

        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Enter your email"
          className="input input-bordered w-full mb-4"
        />

        <button className="btn btn-primary w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
