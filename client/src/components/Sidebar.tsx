import React from 'react';

export default function Sidebar() {
  return (
    <div className='mx-0 h-1/2 w-1/6 mt-0 mb-10 bg-white float-left border-2 border-slate-300 hidden lg:flex flex-col text-center'>
      <div className='my-2 border'>Avg. Reviews</div>
      <div className='my-2 border'>Price</div>
      <div className='my-2 border'>Seller</div>
    </div>
  );
}
