import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCartById = createAsyncThunk(
  "cart/fetchCartById",
  async (cartId) => {
    const { data } = await axios.get(`/api/cart/${cartId}`);
    return data;
  }
);

export const updateCartById = createAsyncThunk(
  "cart/updateCartById",
  async ({ cartId, cartItems }) => {
    const { data } = await axios.put(`/api/cart/${cartId}`, cartItems);
    return data;
  }
);

export const createCart = createAsyncThunk(
  "cart/createCart",
  async (cartData) => {
    const { data } = await axios.post("/api/cart", cartData);
    return data;
  }
);

export const updateCart = createAsyncThunk(
  "cart/updateCart",
  async (cartItems) => {
    const { data } = await axios.put("/api/cart", cartItems);
    return data;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId }) => {
    const { data } = await axios.post('/api/cart', { productId });
    return data
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartById.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(updateCartById.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(createCart.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(updateCart.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.push(action.payload);
    })
  },
});

export const selectCart = (state) => {
  return state.cart;
};

export default cartSlice.reducer;
