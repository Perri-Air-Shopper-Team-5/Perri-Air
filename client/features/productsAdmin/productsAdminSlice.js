import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addProductAsync = createAsyncThunk(
  "products/addProduct",
  async (dataObject) => {
    try {
    const { data } = await axios.post(`/api/products`, dataObject);
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
  }
);

export const productsAdminSlice = createSlice({
  name: "productsAdmin",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      console.log("Added to DB successfully");
    });
  },
});

export const selectProducts = (state) => state.productsAdmin;

export default productsAdminSlice.reducer;
