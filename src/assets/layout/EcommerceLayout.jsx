import React from 'react';
import Ad from '../components/ad/Ad';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router';

export const EcommerceLayout = () => {
  return (
    <>
      <Ad />
      <Navbar />
      <Outlet />
      {/* Footer goes here */}
    </>
  );
};
