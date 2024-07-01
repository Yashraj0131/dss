import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
  const auth = localStorage.getItem('new');
  return auth ? <Outlet /> : <Navigate to='/Register' />

}

export default PrivateComponent