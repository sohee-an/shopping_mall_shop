const { createAsyncThunk } = require("@reduxjs/toolkit");
const { publicRequest } = require("../../requestMethod");

export const signUpAction = createAsyncThunk(
  "/auth/register",
  async (data, thunkAPI) => {
    const res = await publicRequest.post("/auth/register", data);
    return res.data;
  }
);

export const loginAction = createAsyncThunk(
  "/auth/login",
  async (data, thunkAPI) => {
    const res = await publicRequest.post("/auth/login", data);
    console.log("res!!", res);
    return res.data;
  }
);

// module.exports = { signUpAction, loginAction };
