import { createSlice } from "@reduxjs/toolkit";
import { CartProductType } from "../../../types";

const initialState: CartProductType[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const { _id } = action.payload.productInfo;
            // console.log(_id);
            const productExists = state.find(item => {
                if (item._id === _id) {
                    item.quantity += 1;
                    return item;
                }
            });

            // console.log(!productExists, productExists);
            if (productExists) {
                // productExists.quantity += 1;
                [...state, productExists];
                return;
            }
            // const productRet = 
            // productRet.quantity = 1;
            return [...state, action.payload.productInfo];
        },
        removeFromCart: (state, action) => {
        },
        decreaseQuantity: (state, action) => {
        },
        increaseQuantity: (state, action) => {
            const { product } = action.payload;

        }
    }
})

export const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
