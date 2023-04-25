import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import SingleProductSlice from "../features/singleProduct/SingleProductSlice";
import productsSlice from "../features/products/productsSlice";
import productsAdminReducer from "../features/productsAdmin/productsAdminSlice";
import cartslice from '../features/cart/cartslice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        singleProduct: SingleProductSlice,
        products: productsSlice,
        productsAdmin: productsAdminReducer,
        cart: cartslice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
