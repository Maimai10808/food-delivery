import { createSlice } from "@reduxjs/toolkit";

type UIState = {
  showCart: boolean;
};

const initialState: UIState = {
  showCart: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { openCart, closeCart, toggleCart } = uiSlice.actions;
export default uiSlice.reducer;
