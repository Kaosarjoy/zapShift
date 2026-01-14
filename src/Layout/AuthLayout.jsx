import React from 'react';
import { Outlet } from 'react-router';
import Logo from '../components/Logo/Logo';
import authImg from '../assets/auth.png';
const AuthLayout = () => {
    return (
        <div>
        <Logo></Logo>
           <div>
            <div className='flex items-center'>
                <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div className='flex-1'>
                <img src={authImg} alt="" />
            </div>
            </div> 
            </div>
        </div>
    );
};

export default AuthLayout;