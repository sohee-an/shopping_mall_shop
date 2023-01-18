import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsAllAction,
  deleteProductAction,
  updateProductAction,
  addProductAction,
} from "./actions/productAction";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],

    isFetching: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder
      //get all
      .addCase(getProductsAllAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getProductsAllAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products = action.payload.data;
      })
      .addCase(getProductsAllAction.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      })
      //delete
      .addCase(deleteProductAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(deleteProductAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products.splice(
          state.products.findIndex(
            (item) => item._id === action.payload.data._id
          ),
          1
        );
      })
      .addCase(deleteProductAction.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      })
      //update
      .addCase(updateProductAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(updateProductAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.products[
          state.products.findIndex(
            (item) => item._id === action.payload.data._id
          )
        ] = action.payload.data;
      })
      .addCase(updateProductAction.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      })
      //add
      .addCase(addProductAction.pending, (state, action) => {})
      .addCase(addProductAction.fulfilled, (state, action) => {
        state.products.push(action.payload.data);
      })
      .addCase(addProductAction.rejected, (state, action) => {
        state.error = action.error;
      })

      .addDefaultCase((state, action) => {
        //default
      }),
});

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
