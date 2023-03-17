const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const loginAdminAllAction = createAsyncThunk(
  "/auth/login",
  async (adminUser, thunkAPI) => {
    const res = await publicRequest.post("auth/login", adminUser);

    return res.data;
  }
);

module.exports = {
  loginAdminAllAction,
};
