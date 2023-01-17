// import { createSlice } from "@reduxjs/toolkit";
// import { signUpAction } from "./actions/signup";

// const signupSlice = createSlice({
//   name: "signUp",
//   initialState: {
//     currentUser: null,

//     error: false,
//   },
//   reducers: {},
//   extraReducers: (builder) =>
//     builder

//       .addCase(signUpAction.pending, (state, action) => {})
//       .addCase(signUpAction.fulfilled, (state, action) => {
//         state.currentUser = action.payload;
//       })
//       .addCase(signUpAction.rejected, (state, action) => {
//         state.currentUser = null;

//         state.error = action.error;
//       })
//       .addMatcher((action) => {})
//       .addDefaultCase((state, action) => {
//         //default
//       }),
// });
// export const { signUpLoading, signUpDone, signUpError } = signupSlice.actions;
// export default signupSlice.reducer;
