import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const singleProductAsync = createAsyncThunk('singleProduct/fetch', async (id) => {
        const {data} = await axios.get(`/api/products/${id}`);
        return data;
});

const SingleProduct = createSlice({
    name: 'singleProduct',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(singleProductAsync.fulfilled, (state, action) => {
            state = action.payload;
            return state;
        })
    } 
});

export const singleProduct = (state) => {
    return state.singleProduct
}

export default singleProduct.reducer;
