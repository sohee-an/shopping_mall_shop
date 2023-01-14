import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsAllAction,
  deleteProductAction,
} from "./actions/productAction";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
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
