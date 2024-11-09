// src/components/CakeDetails.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext'; // Import useCart to access cart methods

const CakeDetails = ({ cakes }) => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Access addToCart function from context
  const [cake, setCake] = useState(null);

  useEffect(() => {
    const selectedCake = cakes.find((cake) => cake.id === parseInt(id));
    setCake(selectedCake); // Set the selected cake
  }, [id, cakes]);

  if (!cake) {
    return <div>Cake not found</div>; // Handle case where the cake is not found
  }

  const handleAddToCart = () => {
    addToCart(cake); // Add cake to the cart
  };

  return (
    <div className="cake-details">
      <h2>{cake.name}</h2>
      <img src={cake.image} alt={cake.name} width="300" height="200" />
      <p>Price: {cake.price}</p>
      <p>Weight: {cake.weight}</p>
      <p>Shape: {cake.shape}</p>
      <p>Ingredients: {cake.ingredients}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CakeDetails;
