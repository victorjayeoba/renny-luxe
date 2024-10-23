// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload); // Add item to cart
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id); // Remove item from cart
    },
    clearCart: (state) => {
      return []; // Clear the cart
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
