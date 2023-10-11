import { FilterType, ProductType } from '../types';
import { useAppSelector } from '../hooks';
import filters from '../utils/filters';
import ProductCard from '../components/ProductCard';

export default function Products() {
    const productList: ProductType[] = useAppSelector((state) => state.products);
    const filterList: FilterType = useAppSelector((state) => state.filters);

    const filteredProducts: ProductType[] = filters(productList, filterList);

    return (
        <div
            className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-4 
        lg:grid-cols-3 md:grid-cols-2 gap-4 lg:ms-8 justify-items-center'>
            {filteredProducts.length >= 1 &&
                filteredProducts.map((item: ProductType) => {
                    return (
                        <div key={item._id}>
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
    );
}
