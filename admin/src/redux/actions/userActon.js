const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const getAllUsersAllAction = createAsyncThunk(
  "/user/allUsers",
  async (thunkAPI) => {
    const res = await userRequest.get("/users");
    console.log("res", res);

    return res;
  }
);
module.exports = {
  getAllUsersAllAction,
};
