import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user,loading}=useAuth();
    if(loading){
        return   <div className="min-h-screen flex flex-col items-center justify-center gap-3">
            <span className="loading loading-spinner text-accent"></span>
    </div>
    }
    if(user){
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRouter;