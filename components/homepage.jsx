import React from 'react';
import { Link } from 'react-router-dom';
import { cakes } from '../data/cakesData';

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>🎂🧁 Welcome to Cake Junction – The Sweetest Place on Earth! ❤️🍰</h1>
      <h2>At Cake Junction, we don't just bake cakes – we create moments of joy, love, and happiness. Every cake is a masterpiece, crafted with the finest ingredients, passion, and creativity.
        Whether you’re celebrating a milestone or simply treating yourself to a delightful dessert, we promise our cakes will make your day extra special.
        Because life is short, and you deserve a slice of happiness! 🍰✨🧁
      </h2>

      <h2>Select a Cake</h2>

      <div className="cake-list">
        {cakes.map((cake) => (
          <div key={cake.id} className="cake-card">
            <img src={cake.image} alt={cake.name} width="200" height="150" />
            <h3>{cake.name}</h3>
            <Link to={`/cake-details/${cake.id}`} className="cake-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
