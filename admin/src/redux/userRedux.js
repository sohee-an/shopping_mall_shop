import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersAllAction } from "./actions/userActon";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // logoutAction: (state) => {
    //   state.currentUser = null;
    // },
  },
  extraReducers: (builder) =>
    builder
      //all get user
      .addCase(getAllUsersAllAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(getAllUsersAllAction.fulfilled, (state, action) => {
        state.isFetching = true;
        state.users = action.payload.data;
      })
      .addCase(getAllUsersAllAction.rejected, (state, action) => {
        state.isFetching = true;
        state.error = action.error;
      }),
});
export const { logoutAction } = userSlice.actions;

export default userSlice.reducer;
