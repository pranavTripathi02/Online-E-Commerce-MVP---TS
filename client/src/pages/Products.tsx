import { FilterType, ProductType } from '../types';
import { useAppSelector } from '../hooks';
import filters from '../utils/filters';
import ProductCard from '../components/ProductCard';
import { useMemo, useState } from 'react';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
// import Loading from '../components/Loading';

const PageSize = 6;

export default function Products() {
    let productList: ProductType[] = useAppSelector((state) => state.products);
    let filterList: FilterType = useAppSelector((state) => state.filters);


    let filteredProducts: ProductType[] = filters(productList, filterList);

    const [currentPage, setCurrentPage] = useState(1);

    const currentData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredProducts.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, filteredProducts])

    return (
        <>
            <Sidebar />
            <div
                className='grid grid-cols-1  
                lg:grid-cols-3 md:grid-cols-2 gap-4 lg:ms-8 justify-items-center'>
                {/* className='flex flex-wrap mx-auto justify-evenly' */}
                {/* > */}
                {/* {filteredProducts.length >= 1 && */}
                {currentData.map((item: ProductType) => {
                    return (
                        <div className='m-5' key={item._id}>
                            <ProductCard product={item} />
                        </div>
                    );
                })}
                {filteredProducts.length < 1 && (
                    <div className='m-auto p-56 row-span-5 col-span-3 text-2xl'>
                        <h2>Sorry could not find anything. Please try different filters.</h2>
                    </div>
                )}
            </div>
            <div className='flex justify-center mb-10'>
                <Pagination
                    siblingCount={1}
                    currentPage={currentPage}
                    totalCount={filteredProducts.length}
                    pageSize={PageSize}
                    onPageChange={(page: number) => setCurrentPage(page)}

                />
            </div>
        </>
    );
}
