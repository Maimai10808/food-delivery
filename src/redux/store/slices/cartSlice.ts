import { createSlice, createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FoodItem } from "../../../interface/Food";

export type CartItem = {
  id: number;
  food_name: string;
  price: number;
  food_image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

type AddPayload = Pick<
  FoodItem,
  "id" | "food_name" | "price" | "food_image"
> & {
  qty?: number;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<AddPayload>) {
      const qtyToAdd = action.payload.qty ?? 1;
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        existing.qty += qtyToAdd;
      } else {
        state.items.push({
          id: action.payload.id,
          food_name: action.payload.food_name,
          price: action.payload.price,
          food_image: action.payload.food_image,
          qty: qtyToAdd,
        });
      }
    },

    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    },

    setQty(state, action: PayloadAction<{ id: number; qty: number }>) {
      const { id, qty } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;

      if (qty <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
        return;
      }

      item.qty = qty;
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, setQty, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// selectors
export const selectCartItems = (s: RootState) => s.cart.items;

export const selectCartTotalQty = createSelector([selectCartItems], (items) =>
  items.reduce((sum, i) => sum + i.qty, 0),
);

export const selectCartSubtotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, i) => sum + i.price * i.qty, 0),
);
