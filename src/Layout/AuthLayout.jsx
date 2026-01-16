import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../components/Logo/Logo';
import authImg from '../assets/auth.png';
const AuthLayout = () => {
    return (
        <div>
        <Logo></Logo>
           <div>
            <div className='flex items-center border-accent mt-4 mx-4 md:mx-20 rounded-xl shadow-lg overflow-hidden bg-accent'>
                <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1 bg-accent p-5 hidden md:block'>
                <img src={authImg} alt="" />
            </div>
            </div> 
            </div>
        </div>
    );
};

export default AuthLayout;