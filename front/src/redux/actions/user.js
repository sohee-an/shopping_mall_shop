const { createAsyncThunk } = require("@reduxjs/toolkit");
const { publicRequest } = require("../../requestMethod");

const signUpAction = createAsyncThunk(
  "/auth/register",
  async (data, thunkAPI) => {
    const res = await publicRequest.post("/auth/register", data);
    return res;
  }
);

const loginAction = createAsyncThunk("/auth/login", async (data, thunkAPI) => {
  const res = await publicRequest.post("/auth/login", data);
  console.log("res!!", res);
  return res;
});
module.exports = { signUpAction, loginAction };
