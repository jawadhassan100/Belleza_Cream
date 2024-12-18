import { createSlice } from '@reduxjs/toolkit';

// Function to load the cart from localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { items: [] }; // Initialize with empty array if no cart data
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.productId === action.payload.productId);
      
      if (itemIndex === -1) {
        state.items.push(action.payload); // Add new item to cart
      } else {
        state.items[itemIndex].quantity += action.payload.quantity; // Update quantity if item already exists
      }

      localStorage.setItem('cart', JSON.stringify(state)); // Persist cart to localStorage
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.productId !== productId); // Remove item from cart
      localStorage.setItem('cart', JSON.stringify(state)); // Persist cart to localStorage
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart'); // Remove cart from localStorage
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
