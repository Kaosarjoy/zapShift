import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL:'http://localhost:3000'
})
const useAxios = () => {
    const {user} = useAuth();
    useEffect(()=>{
        axiosSecure.interceptors.request.use(function (config) {
        config.headers.Authorization = `Joy ${user?.accessToken}`
    return config;
  })
    },[user])
    return axiosSecure ;
    
};

export default useAxios;