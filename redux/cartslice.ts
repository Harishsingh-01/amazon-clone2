import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface cartsate {
    cart: any,
}

const initialState: cartsate = {
    cart: []
}

const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //multiple action
        addtocart: (state, action) => {
            const ispresent = state.cart.find((item: any) => {
                return item.id === action.payload.id
            })
            if (ispresent) {
                //update quantity
                state.cart = state.cart.map((item: any) => {
                    return item.id == action.payload.id ? { ...item, quantity: item.quantity + 1 } : item;
                })
            }
            else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }

        },
        removefromthecart: (state, action) => {
            state.cart = state.cart.filter((item: any) => {
                return item.id !== action.payload;
            })
        },
        incrementquantity: (state, action) => {
            state.cart = state.cart.map((item: any) => {
                return item.id == action.payload.id ? { ...item, quantity: item.quantity + 1 } : item;
            })
        },
        decrementquantity: (state, action) => {
            state.cart = state.cart.map((item: any) => {
                return item.id == action.payload.id ? { ...item, quantity: item.quantity - 1 } : item;

            })
        }
    }
});
export const { addtocart, removefromthecart,incrementquantity,decrementquantity } = cartslice.actions;
export const getcart = (state: RootState) => state.cart.cart

export default cartslice.reducer;