import { createSlice } from "@reduxjs/toolkit";
import {
  addCartAction,
  getAllCartAction,
  updateCartAction,
} from "./actions/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    // addProduct: (state, action) => {
    //   state.quantity = state.products.length;
    //   state.products.push(action.payload);
    //   state.total = state.products.reduce((total, el) => {
    //     return total + el.total;
    //   }, 0);
    //   //제품 가격 *제품자체 수량
    // },
    logOutCartAction: (state, action) => {
      state.quantity = 0;
      state.products = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCartAction.pending, (state, action) => {})
      .addCase(getAllCartAction.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.quantity = state.products.length;
        state.total = state.products.reduce((total, el) => {
          return total + el.total;
        }, 0);
      })
      .addCase(getAllCartAction.rejected, (state, action) => {})
      //add
      .addCase(addCartAction.pending, (state, action) => {})
      .addCase(addCartAction.fulfilled, (state, action) => {
        state.products.push(action.payload.data);
        state.quantity += 1;
      })
      .addCase(addCartAction.rejected, (state, action) => {})
      //update
      .addCase(updateCartAction.pending, (state, action) => {})
      .addCase(updateCartAction.fulfilled, (state, action) => {
        state.products.push(action.payload.data);
        state.quantity = state.products.length;
        state.total = state.products.reduce((total, el) => {
          return total + el.total;
        }, 0);
      })
      .addCase(updateCartAction.rejected, (state, action) => {}),
});
export const { logOutCartAction } = cartSlice.actions;
export default cartSlice.reducer;
