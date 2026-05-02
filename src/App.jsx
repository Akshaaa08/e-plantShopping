import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Landing from './pages/Landing.jsx';
import ProductListing from './pages/ProductListing.jsx';
import Cart from './pages/Cart.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === plant.id);
      if (existing) return prev;
      return [...prev, { ...plant, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const deleteItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/products"
          element={
            <ProductListing
              cart={cart}
              onAddToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onIncrease={increaseQty}
              onDecrease={decreaseQty}
              onDelete={deleteItem}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
