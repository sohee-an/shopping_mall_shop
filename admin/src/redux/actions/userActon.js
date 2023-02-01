const { createAsyncThunk } = require("@reduxjs/toolkit");
const { userRequest, publicRequest } = require("../../requestMethods");

const getAllUsersAllAction = createAsyncThunk(
  "/user/allUsers",
  async (thunkAPI) => {
    const res = await userRequest.get("/users");
    return res;
  }
);

//delete user
const deleteUserAction = createAsyncThunk(
  "/user/delete",
  async (id, thunkAPI) => {
    const res = await userRequest.delete(`/users/${id}`);
    console.log("res", res);
    return res;
  }
);
module.exports = {
  getAllUsersAllAction,
  deleteUserAction,
};
