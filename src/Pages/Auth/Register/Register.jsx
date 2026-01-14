import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full max-w-sm"
      >
        <fieldset className="fieldset">
          {/* Name */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register('name', { required: true })}
            className="input bg-gray-300"
            
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-red-600">Name is required</p>
          )}

          {/* Email */}
          <label className="label mt-2">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="input    bg-gray-300 "
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-600">Email is required</p>
          )}

          {/* Photo URL */}
          <label className="label mt-2">Photo URL</label>
          <input
            type="text"
            {...register('photo', { required: true })}
            className="input    bg-gray-300"
            placeholder="Photo URL"
          />
          {errors.photo && (
            <p className="text-red-600">Photo URL is required</p>
          )}

          {/* Password */}
          <label className="label mt-2">Password</label>
          <input
            type="password"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
            className="input    bg-gray-300"
            placeholder="Password"
          />
          {errors.password?.type === 'required' && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === 'minLength' && (
            <p className="text-red-600">
              Password must be at least 6 characters
            </p>
          )}

          <button className="btn btn-primary mt-4 w-full">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
