import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let findIdx = state.cart.findIndex(
        (item) => item.cartItem.id === action.payload.cartItem.id
      );
      if (findIdx === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[findIdx].count += action.payload.count;
      }
    },
    increaseCount: (state, action) => {
      const findIdx = state.cart.findIndex(
        (item) => item.cartItem.id === action.payload.id
      );
      state.cart[findIdx].count += 1;
    },
    decreaseCount: (state, action) => {
      const findIdx = state.cart.findIndex(
        (item) => item.cartItem.id === action.payload.id
      );
      state.cart[findIdx].count -= 1;
    },
    removeItem: (state, action) => {
      const idx = state.cart.findIndex(
        (item) => item.cartItem.id === action.payload
      );
      state.cart.splice(idx, 1);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
