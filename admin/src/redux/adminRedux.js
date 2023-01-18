import { createSlice } from "@reduxjs/toolkit";
import { loginAdminAllAction } from "./actions/adminAction";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    logoutAction: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) =>
    builder
      //login
      .addCase(loginAdminAllAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(loginAdminAllAction.fulfilled, (state, action) => {
        state.isFetching = true;
        state.currentUser = action.payload.data;
      })
      .addCase(loginAdminAllAction.rejected, (state, action) => {
        state.isFetching = true;
        state.error = action.error;
      }),
});

export const { logoutAction } = adminSlice.actions;
export default adminSlice.reducer;
