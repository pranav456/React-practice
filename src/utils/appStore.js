import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //This is the app reducer
    reducer: {
    cart: cartReducer,

    }
});

export default appStore;