import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartById = createAsyncThunk(
  "cart/fetchCartById",
  async (cartId) => {
    const response = await axios.get(`/api/carts/${cartId}`);
    return response.data;
  }
);

export const updateCartById = createAsyncThunk(
  "cart/updateCartById",
  async ({ cartId, cartItems }) => {
    const response = await axios.put(`/api/carts/${cartId}`, cartItems);
    return response.data;
  }
);

export const createCart = createAsyncThunk(
  "cart/createCart",
  async (cartData) => {
    const response = await axios.post("/api/cart", cartData);
    return response.data;
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (cartItems) => {
    const response = await axios.put("/api/cart", cartItems);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartById.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(updateCartById.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const seleCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
