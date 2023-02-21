import { createSlice } from "@reduxjs/toolkit";
import {
  addCartAction,
  updateCartAction,
  SuccessCartAction,
  getAllCartAction as getAllCartAction,
} from "./actions/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
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
        if (action.payload.data.length === 0) {
          state.products = action.payload.data;
        } else {
          //state.currentUserId = action.payload.data.userId;
          state.products = action.payload.data.products;
          state.quantity = state.products.length;
          state.total = state.products.reduce((total, el) => {
            return total + el.price;
          }, 0);
        }
      })
      .addCase(getAllCartAction.rejected, (state, action) => {})

      //add
      .addCase(addCartAction.pending, (state, action) => {})
      .addCase(addCartAction.fulfilled, (state, action) => {
        state.products.push(action.payload.data.products);
        state.quantity += 1;
      })
      .addCase(addCartAction.rejected, (state, action) => {})

      //update
      .addCase(updateCartAction.pending, (state, action) => {})
      .addCase(updateCartAction.fulfilled, (state, action) => {
        state.quantity += 1;
      })
      .addCase(updateCartAction.rejected, (state, action) => {})
      //SuccessCartAction
      .addCase(SuccessCartAction.pending, (state, action) => {})
      .addCase(SuccessCartAction.fulfilled, (state, action) => {
        state.quantity = 0;
        state.products = [];
        state.total = 0;
      })
      .addCase(SuccessCartAction.rejected, (state, action) => {}),
});
export const { logOutCartAction } = cartSlice.actions;
export default cartSlice.reducer;
