/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = useSelector(state => state.userData.user?.data.token);
    return token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;