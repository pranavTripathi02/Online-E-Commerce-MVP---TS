import { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { updateFilter } from '../reducer/features/filters/filterSlice';

export default function Sidebar() {
  const [stars, setStars] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateFilter({ key: 'review', value: stars }));
  }, [stars]);

  return (
    <div className='my-5 mx-2 h-1/2 w-1/6 bg-transparent float-left hidden lg:flex flex-col text-center'>
      <div className='p-2 pl-4 bg-white shadow-md border text-left'>
        <h5>Avg. Reviews</h5>
        <ul className='m-auto text-yellow-500 cursor-pointer'>
          {[1, 2, 3, 4].map((i) => {
            return (
              <li onClick={() => setStars(i)} key={i} className='my-1'>
                <span className={`stars-${i}`} />
                <span> & up</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='bg-white shadow-md my-2 border'>Price</div>
      <div className='bg-white shadow-md my-2 border'>Seller</div>
    </div>
  );
}
