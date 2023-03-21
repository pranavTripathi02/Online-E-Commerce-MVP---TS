import React from 'react';
import { ProductType } from '../types';

export default function ProductCard({ product }: { product: ProductType }) {
  const { image_links, product_rating, title, selling_price, mrp } = product;
  return (
    <div className='relative bg-white h-[30rem] w-72 my-5 border-2 border-slate-200 hover:shadow-lg hover:shadow-slate-600 transition-shadow ease-in-out duration-200 cursor-pointer'>
      <div className='img-container h-3/5'>
        <img src={image_links} alt='' className='h-full p-2 m-auto' />
      </div>
      <span className='absolute right-0 top-0 text-xl'>
        {product_rating}
        <span className='fa fa-star text-yellow-400' />
      </span>
      <div className='h-2/5 absolute text-center border-t-2 border-slate-200 p-1 pt-2 overflow-hidden hover:text-orange-600 cursor'>
        <p>{title}</p>
        <div className='flex justify-center items-end'>
          <p className='text-2xl font-bold pr-2'>{selling_price}</p>
          <span className='text-sm font-light'>
            MRP <s>{mrp}</s>
          </span>
        </div>
      </div>
    </div>
  );
}
