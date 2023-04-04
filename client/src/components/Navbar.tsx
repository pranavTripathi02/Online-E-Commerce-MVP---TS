import React, { useState } from 'react';
import Logo from '../assets/Logo1.png';
import { updateFilter } from '../reducer/features/filters/filterSlice';
import { useAppDispatch } from '../hooks';
// import logo from '../assets/react.svg';

export default function Navbar() {
  const [searchVal, setSearchVal] = useState('');
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const delaySearch = setTimeout(() => {
      dispatch(updateFilter({ key: 'title', value: searchVal }));

      return () => {
        clearTimeout(delaySearch);
      };
    }, 2000);
  }, [searchVal]);

  return (
    <nav>
      <div className='flex px-5 justify-between py-3 bg-gray-700 items-center'>
        <img src={Logo} alt='logo' className='w-8 h-8 m-0' />
        <div className='flex flex-wrap items-stretch w-full relative mx-20'>
          <input
            type='search'
            placeholder='Search'
            name='search'
            // ref={searchVal}
            value={searchVal}
            // className='p-2 rounded-lg w-1/2'
            className='relative flex-auto bg-transparent border rounded-l border-r-0 border-solid focus:border-neutral-300 border-neutral-400 px-3 py-1.5 text-base transition duration-300 ease-in-out focus:text-neutral-200 focus:shadow-te-primary focus:outline-none text-neutral-400 placeholder:text-neutral-400'
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            className={`relative border px-3 py-2.5 text-neutral-300 hover:text-neutral-200 rounded-r border-neutral-400 hover:border-neutral-300 bg-amber-900 transition duration-300 ease-in-out w-11 fa-solid ${
              searchVal.length < 1 ? 'fa-magnifying-glass' : 'fa-xmark'
            }`}
            onClick={() => setSearchVal('')}
          />
        </div>
        <div className='py-2 px-3'>🛒</div>
      </div>
    </nav>
  );
}
