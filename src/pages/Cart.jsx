import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  const itemTotal = (item.cost * item.quantity).toFixed(2);

  return (
    <div className="cart-card">
      <div className="cart-img-wrap">
        <img
          src={item.image}
          alt={item.name}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=150&h=150&fit=crop'; }}
        />
      </div>
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-category">{item.category}</p>
        <p className="cart-unit-price">Unit Price: <strong>${item.cost.toFixed(2)}</strong></p>
      </div>
      <div className="cart-controls">
        <div className="qty-controls">
          <button className="qty-btn" onClick={() => onDecrease(item.id)}>−</button>
          <span className="qty-value">{item.quantity}</span>
          <button className="qty-btn" onClick={() => onIncrease(item.id)}>+</button>
        </div>
        <p className="cart-item-total">${itemTotal}</p>
        <button className="delete-btn" onClick={() => onDelete(item.id)}>🗑 Delete</button>
      </div>
    </div>
  );
}

function Cart({ cart, onIncrease, onDecrease, onDelete }) {
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <span className="empty-icon">🌿</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <button className="continue-btn" onClick={() => navigate('/products')}>
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <p>{totalItems} item{totalItems !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onDelete={onDelete}
            />
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-rows">
            {cart.map(item => (
              <div key={item.id} className="summary-row">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.cost * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Total</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" onClick={() => alert('Thank you for your order! 🌿')}>
            Checkout
          </button>
          <button className="continue-btn" onClick={() => navigate('/products')}>
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
