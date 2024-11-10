import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const CakeDetails = ({ cakes }) => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [cake, setCake] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedCake = cakes.find((cake) => cake.id === parseInt(id));
    setCake(selectedCake);
  }, [id, cakes]);

  if (!cake) {
    return <div>Cake not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...cake, quantity });
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value, 10) || 1);
    setQuantity(value);
  };

  return (
    <div className="cake-details">
      <h2>{cake.name}</h2>
      <img src={cake.image} alt={cake.name} width="300" height="200" />
      <p>Price: {cake.price}</p>
      <p>Weight: {cake.weight}</p>
      <p>Shape: {cake.shape}</p>
      <p>
        Ingredients:{" "}
        {Array.isArray(cake.ingredients)
          ? cake.ingredients.join(', ')
          : cake.ingredients}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
          style={{ width: '50px', padding: '5px' }}
        />
        <button onClick={handleAddToCart} style={{ padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CakeDetails;
