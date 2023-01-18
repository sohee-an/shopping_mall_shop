const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const getProductsAllAction = createAsyncThunk(
  "/product/getAll",
  async (thunkAPI) => {
    const res = await publicRequest.get("/products");

    return res;
  }
);
//add
const addProductAction = createAsyncThunk(
  "/product/add",
  async (updateProduct, thunkAPI) => {
    const res = await userRequest.post(`/products`, updateProduct);
    return res;
  }
);

const deleteProductAction = createAsyncThunk(
  "/product/deleteProduct",
  async (productId, thunkAPI) => {
    const res = await userRequest.delete(`/products/${productId}`);
    // const res = { _id: `${productId}` };
    return res;
  }
);
// update
const updateProductAction = createAsyncThunk(
  "/product/updateProduct",
  async ({ productId, ...updateProduct }, thunkAPI) => {
    const res = await userRequest.put(`/products/${productId}`, updateProduct);
    console.log(res.data);
    return res;
  }
);

module.exports = {
  getProductsAllAction,
  deleteProductAction,
  updateProductAction,
  addProductAction,
};
