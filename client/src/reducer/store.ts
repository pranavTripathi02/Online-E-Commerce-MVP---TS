import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/products/productSlice';
import filterReducer from './features/filters/filterSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        products: productReducer,
        filters: filterReducer,
        cart: cartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
