const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const loginAdminAllAction = createAsyncThunk(
  "/auth/login",
  async (adminUser, thunkAPI) => {
    const res = await publicRequest.post("auth/login", adminUser);
    console.log("res", res);

    return res;
  }
);

module.exports = {
  loginAdminAllAction,
};
