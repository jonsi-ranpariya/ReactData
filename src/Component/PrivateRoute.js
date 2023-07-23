import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let isAuth = sessionStorage.getItem('name');

  return <>{isAuth ? <Outlet/> : <Navigate to='/' />}</>
}

export default PrivateRoute
