import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { getCartItems, removeFromCart } = useCart(); 
  const cartItems = getCartItems(); 

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p> 
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
