import React, { useState } from 'react';
// import Logo from '../assets/Logo1.png';
import { updateFilter } from '../reducer/features/filters/filterSlice';
import { useAppDispatch } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faStore } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
            <div className='flex px-5 justify-between py-3 border-box border-b border-b-[var(--primary)] items-center shadow-sm shadow-[var(--primary)]'>

                {/* <img src={Logo} alt='logo' className='w-8 h-8 m-0' /> */}
                <Link className='peer text-[var(--primary)]' to='/'>
                    <FontAwesomeIcon
                        size='xl'
                        icon={faStore} />
                </Link>
                <span className='peer-hover:visible invisible absolute left-0 
                    translate-y-7 bg-[var(--background)] text-[var(--text)] ease-in px-2 rounded-sm invert'>to home</span>
                <div className='flex flex-wrap justify-between items-stretch w-full 
                relative mx-20 border-b border-[var(--primary)] focus:outline-none 
                lg:w-1/2'>
                    <input
                        type='search'
                        placeholder='Search'
                        name='search'
                        // ref={searchVal}
                        value={searchVal}
                        // className='p-2 rounded-lg w-1/2'
                        className='bg-transparent w-full px-3 py-1.5 text-base duration-300 ease-in-out rounded-lg focus:shadow-md focus:shadow-[var(--primary)] focus:outline-none placeholder:text-[var(--primary)]'
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                </div>
                <div>
                    <Link
                        className='flex justify-between py-2 px-3 cursor-pointer peer text-[var(--primary)]'
                        to='/cart'
                    >
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            size='xl'
                        />
                        <span className='mx-2'>cart</span>
                    </Link>
                    <span className='peer-hover:visible invisible absolute
                    translate-y-7 bg-[var(--background)] text-[var(--text)] ease-in px-2 rounded-sm invert'>
                        to cart
                    </span>
                </div>
            </div>
        </nav>
    );
}
