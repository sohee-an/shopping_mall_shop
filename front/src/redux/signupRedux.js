import { createSlice } from "@reduxjs/toolkit";
import { signUpAction } from "./actions/signup";

const signupSlice = createSlice({
  name: "signUp",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) =>
    builder

      .addCase(signUpAction.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(signUpAction.fulfilled, (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
      })
      .addCase(signUpAction.rejected, (state, action) => {
        state.currentUser = null;
        state.isFetching = false;
        state.error = action.error;
      })
      .addMatcher((action) => {})
      .addDefaultCase((state, action) => {
        //default
      }),
});
export const { signUpLoading, signUpDone, signUpError } = signupSlice.actions;
export default signupSlice.reducer;
