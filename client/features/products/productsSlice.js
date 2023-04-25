import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        try {
            const { data } = await axios.get("/api/products");
            return data;
        } catch (err) {
            console.log(err);
        }
    }
);

export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                console.log("loading");
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state = action.payload;
                return state;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                console.log("failed");
                state.error = action.error.message;
            });
    },
});

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
