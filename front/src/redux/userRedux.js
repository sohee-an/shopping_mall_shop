import { createSlice } from "@reduxjs/toolkit";
import { signUpAction, loginAction } from "./actions/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMessage: null,
  },
  reducers: {
    logOut: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) =>
    builder

      .addCase(signUpAction.pending, (state, action) => {})
      .addCase(signUpAction.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(signUpAction.rejected, (state, action) => {
        state.currentUser = null;
        state.error = action.error;
      })
      //login
      .addCase(loginAction.pending, (state, action) => {})
      .addCase(loginAction.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.currentUser = null;
        state.error = action.error;
      })
      .addMatcher((action) => {})
      .addDefaultCase((state, action) => {
        //default
      }),
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
