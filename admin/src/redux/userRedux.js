import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersAllAction, deleteUserAction } from "./actions/userActon";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    logoutUserAction: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) =>
    builder
      //all get user
      .addCase(getAllUsersAllAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getAllUsersAllAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.users = action.payload.data;
      })
      .addCase(getAllUsersAllAction.rejected, (state, action) => {
        state.isFetching = true;
        state.error = action.error;
      })
      //delete
      .addCase(deleteUserAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(deleteUserAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.users.splice(
          state.users.findIndex((item) => item._id === action.payload.data._id),
          1
        );
      })
      .addCase(deleteUserAction.rejected, (state, action) => {
        state.isFetching = true;
        state.error = action.error;
      }),
});
export const { logoutUserAction } = userSlice.actions;

export default userSlice.reducer;
