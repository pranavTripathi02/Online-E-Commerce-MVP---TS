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
            const { productInfo } = action.payload;
            return state.filter(item =>
                item._id !== productInfo._id
            )

        },
        decreaseQuantity: (state, action) => {
            const { productInfo } = action.payload;
            if (productInfo.quantity === 1) {
                return state.filter(item =>
                    item._id !== productInfo._id
                )
            }
            else {
                state.find(item => {
                    if (item._id === productInfo._id) {
                        item.quantity -= 1;
                    }
                })
            }
        },
        increaseQuantity: (state, action) => {
            const { productInfo } = action.payload;
            // console.log(productInfo);
            state.find(item => {
                if (item._id === productInfo._id) {
                    item.quantity += 1;
                }
            })
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
