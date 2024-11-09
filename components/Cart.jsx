import React from 'react';
import { useCart } from './CartContext'; // Make sure the CartContext is providing the correct data

const Cart = () => {
  const { getCartItems, removeFromCart } = useCart(); // Get cart items and remove functionality
  const cartItems = getCartItems(); // Get the list of items from the cart

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p> // Display message when cart is empty
      ) : (
        <ul>
          {cartItems.map((cake, index) => (
            <li key={index}>
              <img src={cake.image} alt={cake.name} width="200" />
              <h3>{cake.name}</h3>
              <p>Price: {cake.price}</p>
              <p>Quantity: {cake.quantity || 1}</p>
              <button onClick={() => removeFromCart(cake.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
