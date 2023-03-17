const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethod");

export const addCartAction = createAsyncThunk(
  "/carts/add",
  async (data, thunkAPI) => {
    // console.log("datata", data);
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

    return res.data;
  }
);

export const getAllCartAction = createAsyncThunk(
  "/carts/getAll",
  async (userId, thunkAPI) => {
    const res = await userRequest.get(`carts/find/${userId}`);
    // console.log("되나", res.data);
    return res.data;
  }
);
export const updateCartAction = createAsyncThunk(
  "/carts/update",
  async (data, thunkAPI) => {
    const res = await userRequest.put(
      `carts/${data.userId}`,
      data.updateproduct
    );

    return res.data;
  }
);

export const SuccessCartAction = createAsyncThunk(
  "/carts/success",
  async (userId, thunkAPI) => {
    const res = await userRequest.delete(`carts/${userId}`);
    return res.data;
  }
);

// module.exports = {
//   addCartAction,
//   getAllCartAction,
//   updateCartAction,
//   SuccessCartAction,
// };
