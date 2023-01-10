import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1; //cart 수량
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      //제품 가격 *제품자체 수량
    },
  },
});
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
