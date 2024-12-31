import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload; // Destructure plant details from the action payload
      const existingItem = state.items.find(item => item.name === name); // Check if the item is already in the cart
      if (existingItem) {
        existingItem.quantity++; // If item exists, increment its quantity
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      // Remove item from the cart based on its name
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure item name and new quantity
      const itemToUpdate = state.items.find(item => item.name === name); // Find the item in the cart
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export action creators for use in other components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer for use in store.js
export default CartSlice.reducer;