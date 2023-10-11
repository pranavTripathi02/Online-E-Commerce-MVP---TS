import { useState, useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { updateFilter } from '../reducer/features/filters/filterSlice';

export default function Sidebar() {
    const [stars, setStars] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(updateFilter({ key: 'review', value: stars }));
        dispatch(
            updateFilter({ key: 'price', value: { min: minPrice, max: maxPrice } })
        );
    }, [stars, maxPrice, minPrice]);

    return (
        <div className='my-5 mx-2 h-1/2 w-1/6 bg-transparent float-left hidden lg:flex flex-col text-center'>
            <div className='p-2 pl-4 bg-transparent shadow-md border border-[var(--secondary)] text-left'>
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
            <div className='bg-transparent border-[var(--secondary)] shadow-md my-2 border w-full'>
                <h5>Price</h5>
                <div className='flex items-center'>
                    <input
                        placeholder='min'
                        type='number'
                        min={0}
                        name='minPrice'
                        className='w-1/4 m-auto my-2 text-left bg-transparent [-moz-appearance:textfield]'
                        value={minPrice}
                        onChange={(e) => setMinPrice(parseInt(e.target.value))}
                    />
                    <span>-</span>
                    <input
                        placeholder='max'
                        type='number'
                        min={0}
                        name='maxPrice'
                        className='w-1/4 m-auto my-2 text-right bg-transparent [-moz-appearance:textfield]'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    />
                </div>
                <div className='price-slider relative h-[20px]'>
                    <input
                        className='absolute [-moz-appearance:none] [-webkit-appearance:none] pointer-events-none bg-[var(--secondary)] w-full h-[5px] left-0'
                        type='range'
                        value={minPrice}
                        min={0}
                        max={1000}
                        onChange={(e) => setMinPrice(parseInt(e.target.value))}
                    />
                    <input
                        className='absolute [-moz-appearance:none] [-webkit-appearance:none] pointer-events-none bg-transparent w-full h-[5px] left-0'
                        type='range'
                        value={maxPrice}
                        min={0}
                        max={1000}
                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    />
                </div>
            </div>
            <div className='bg-transparent border-[var(--secondary)] shadow-md my-2 border'>
                <h5>Seller</h5>
            </div>
        </div>
    );
}
