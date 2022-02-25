import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UserService from './UserService';

const PrivateRoute = () => {
  const auth = UserService.hasRole(['admin']);

  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
