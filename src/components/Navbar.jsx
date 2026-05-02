import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">🌿</span>
        <span className="brand-name">Paradise Nursery</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
          Home
        </Link>
        <Link to="/products" className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}>
          Plants
        </Link>
        <Link to="/cart" className={location.pathname === '/cart' ? 'nav-link active cart-link' : 'nav-link cart-link'}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
