const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const getProductsAllAction = createAsyncThunk(
  "/product/getAll",
  async (thunkAPI) => {
    const res = await publicRequest.get("/products");

    return res;
  }
);

const deleteProductAction = createAsyncThunk(
  "/product/deleteProduct",
  async (productId, thunkAPI) => {
    // const res = await userRequest.delete(`/products/${prdouctId}`);
    const res = { _id: `${productId}` };
    return res;
  }
);
// update
const updateProductAction = createAsyncThunk(
  "/product/updateProduct",
  async (id, product, thunkAPI) => {
    const res = await userRequest.put(`/products/${id}`);
    console.log(res.data);
    return res;
  }
);

module.exports = {
  getProductsAllAction,
  deleteProductAction,
  updateProductAction,
};
