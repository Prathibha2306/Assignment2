import React, { createContext, useContext, useState } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (cake) => {
    setCartItems((prevItems) => [...prevItems, cake]);
  };

  const getCartItems = () => {
    return cartItems;
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ addToCart, getCartItems, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
