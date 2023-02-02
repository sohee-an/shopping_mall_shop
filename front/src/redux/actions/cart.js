const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethod");

const addCartAction = createAsyncThunk("/carts/add", async (data, thunkAPI) => {
  console.log("datata", data);
  const res = await userRequest.post("/carts", {
    userId: data.userId,
    products: [
      {
        product: data._id,
        color: data.color,
        size: data.size,
        price: data.price,
      },
    ],
  });

  return res;
});

const getAllCartAction = createAsyncThunk(
  "/carts/getAll",
  async (userId, thunkAPI) => {
    const res = await userRequest.get(`carts/find/${userId}`);

    return res;
  }
);
const updateCartAction = createAsyncThunk(
  "/carts/update",
  async (data, thunkAPI) => {
    const res = await userRequest.put(
      `carts/${data.userId}`,
      data.updateproduct
    );

    return res;
  }
);

module.exports = { addCartAction, getAllCartAction, updateCartAction };
