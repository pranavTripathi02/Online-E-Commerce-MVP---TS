import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../../../utils/fetchProducts';
import { ProductType } from '../../../types';

const res: ProductType[] = await fetchProducts()
    .then((list) => list)
    .catch(() => {
        console.log('cannot fetch products');
    });

const initialState: ProductType[] = res;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productSlice.reducer;
