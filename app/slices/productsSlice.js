// productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload; // Set all products fetched from Firebase
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
