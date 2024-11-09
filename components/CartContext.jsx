// src/components/CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Create CartContext to hold cart-related data
const CartContext = createContext();

// CartProvider component to wrap the app and provide cart data
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (cake) => {
    setCartItems((prevItems) => [...prevItems, cake]);
  };

  // Get all cart items
  const getCartItems = () => {
    return cartItems;
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ addToCart, getCartItems, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access cart context values
export const useCart = () => {
  return useContext(CartContext);
};
