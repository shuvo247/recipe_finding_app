import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AuthMiddleware = () => {
    const user = useSelector((state) => state.user.user);
      return (
        <>
          { user?.displayName  ? <Outlet /> : <Navigate to="/login" /> }
        </>
      )
}

export default AuthMiddleware