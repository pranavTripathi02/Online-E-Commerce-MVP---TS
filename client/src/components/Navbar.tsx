import React, { useState } from 'react';
import Logo from '../assets/Logo1.png';
import { updateFilter } from '../reducer/features/filters/filterSlice';
import { useAppDispatch } from '../hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleHalfStroke, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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

    function handleTheme() {
        // const currTheme = document.documentElement.getAttribute('data-theme');
        // console.log(localStorage.getItem("theme"))
        const currTheme: string = localStorage.getItem("theme") || "light";
        console.log(currTheme)
        if (currTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        // console.log(document.documentElement.getAttribute('data-theme'), currTheme)
    }


    return (
        <nav>
            <div className='flex px-5 justify-between py-3 border-box border-b-2 border-b-[var(--primary)] items-center'>

                <img src={Logo} alt='logo' className='w-8 h-8 m-0' />
                <div className='flex flex-wrap justify-between items-stretch w-full 
                relative mx-20 border border-[var(--primary)] 
                rounded-lg'>
                    <input
                        type='search'
                        placeholder='Search'
                        name='search'
                        // ref={searchVal}
                        value={searchVal}
                        // className='p-2 rounded-lg w-1/2'
                        className='bg-transparent px-3 py-1.5 text-base transition duration-300 ease-in-out focus:border focus:border-[var(--accent)] w-full focus:shadow-te-primary focus:outline-none placeholder:text-[var(--primary)]'
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                </div>
                <div
                    className="flex cursor-pointer"
                    onClick={() => { handleTheme() }}
                >
                    <FontAwesomeIcon
                        icon={faCircleHalfStroke}
                        size='xl'
                    />
                    <span className='mx-2'>theme</span>
                </div>
                <div className='flex justify-between py-2 px-3 cursor-pointer bg-[var(--primary)]'>
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        size='xl'
                    />
                    <span className='mx-2'>cart</span>
                </div>
            </div>
        </nav>
    );
}
