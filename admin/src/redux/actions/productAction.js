const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const getProductsAllAction = createAsyncThunk(
  "/product/getAll",
  async (thunkAPI) => {
    const res = await userRequest.get("/products");
    console.log("res", res);
    return res.data;
  }
);
//add
const addProductAction = createAsyncThunk(
  "/product/add",
  async (updateProduct, thunkAPI) => {
    const res = await userRequest.post(`/products`, updateProduct);
    return res.data;
  }
);

const deleteProductAction = createAsyncThunk(
  "/product/deleteProduct",
  async (productId, thunkAPI) => {
    const res = await userRequest.delete(`/products/${productId}`);
    // const res = { _id: `${productId}` };
    return res.data;
  }
);
// update
const updateProductAction = createAsyncThunk(
  "/product/updateProduct",
  async ({ productId, ...updateProduct }, thunkAPI) => {
    const res = await userRequest.put(`/products/${productId}`, updateProduct);

    return res.data;
  }
);

module.exports = {
  getProductsAllAction,
  deleteProductAction,
  updateProductAction,
  addProductAction,
};
