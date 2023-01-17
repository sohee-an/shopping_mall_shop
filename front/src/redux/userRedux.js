import { createSlice } from "@reduxjs/toolkit";
import { signUpAction } from "./actions/signup";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    errorMessage: null,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.errorMessage = null;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload;
    },
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
      .addMatcher((action) => {})
      .addDefaultCase((state, action) => {
        //default
      }),
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
