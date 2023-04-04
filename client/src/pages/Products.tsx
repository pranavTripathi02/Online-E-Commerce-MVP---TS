import { FilterType, ProductType } from '../types';
import { useAppSelector } from '../hooks';
import filters from '../utils/filters';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';

export default function Products() {
  const productList: ProductType[] = useAppSelector((state) => state.products);
  const filterList: FilterType = useAppSelector((state) => state.filters);

  const filteredProducts: ProductType[] = filters(productList, filterList);

  return (
    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto lg:ml-8'>
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
