import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/axios';

const fetchProducts = createAsyncThunk('fetchProducts', () => {
    return axios.get('/products').then(res => res.data);
})

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts(_state, action) {
            const { productList } = action.payload;
            return productList;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state = action.payload.data.productList;
        });
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
