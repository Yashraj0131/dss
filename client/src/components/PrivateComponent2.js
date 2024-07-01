import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent2 = () => {
  const auth2 = localStorage.getItem('admin');
  return auth2 ? <Outlet /> : <Navigate to='/Register' />

}

export default PrivateComponent2;