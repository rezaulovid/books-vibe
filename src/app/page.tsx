import Banner from '@/components/homepage/Banner';
import Books from '@/components/homepage/Books';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const page = () => {
  return (
    <div>
      <ToastContainer/>
    <Banner/> 
    <Books/>         
    </div>
  );
};

export default page;