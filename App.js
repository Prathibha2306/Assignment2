import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Homepage from './components/homepage';
import CakeDetails from './components/CakeDetails';
import Cart from './components/Cart';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import { cakes } from './data/cakesData';

function App() {
  return (
    <CartProvider> 
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cake-details/:id" element={<CakeDetails cakes={cakes} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
