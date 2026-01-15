import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
  const { registerUser, googleSignIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 md:px-8">
  <form
    onSubmit={handleSubmit(handleRegister)}
    className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md space-y-4"
  >
    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
      Create an Account
    </h2>

    {/* Name */}
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600 font-medium">Name</label>
      <input
        type="text"
        {...register('name', { required: true })}
        className="input input-bordered w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
        placeholder="Your name"
      />
      {errors.name && (
        <span className="text-red-600 text-sm mt-1">Name is required</span>
      )}
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600 font-medium">Email</label>
      <input
        type="email"
        {...register('email', { required: true })}
        className="input input-bordered w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-600 text-sm mt-1">Email is required</span>
      )}
    </div>

    {/* Photo URL */}
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600 font-medium">Photo URL</label>
      <input
        type="text"
        {...register('photo', { required: true })}
        className="input input-bordered w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
        placeholder="Photo URL"
      />
      {errors.photo && (
        <span className="text-red-600 text-sm mt-1">Photo URL is required</span>
      )}
    </div>

    {/* Password */}
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600 font-medium">Password</label>
      <input
        type="password"
        {...register('password', {
          required: true,
          minLength: 6,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        })}
        className="input input-bordered w-full px-4 py-3 rounded-xl border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
        placeholder="Password"
      />
      {errors.password?.type === 'required' && (
        <span className="text-red-600 text-sm mt-1">Password is required</span>
      )}
      {errors.password?.type === 'minLength' && (
        <span className="text-red-600 text-sm mt-1">
          Password must be at least 6 characters
        </span>
      )}
      {errors.password?.type === 'pattern' && (
        <span className="text-red-600 text-sm mt-1">
          Must include uppercase, lowercase, number & special character
        </span>
      )}
    </div>

    {/* Register Button */}
    <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-xl transition-colors">
      Register
    </button>

    {/* Divider */}
    <div className="flex items-center justify-center space-x-2 text-gray-400 my-2">
      <span className="border-b w-1/4"></span>
      <span className="text-sm">or</span>
      <span className="border-b w-1/4"></span>
    </div>

    {/* Google Sign-In */}
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-xl py-3 text-gray-700 hover:bg-gray-100 transition"
    >
      <svg
        aria-label="Google logo"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
      </svg>
      <span>Sign up with Google</span>
    </button>

    {/* Login Link */}
    <p className="text-center text-gray-500 mt-2">
      Already have an account?{' '}
      <NavLink to="/login" className="text-secondary font-medium hover:underline">
        Login Now
      </NavLink>
    </p>
  </form>
</div>

  );
};

export default Register;
