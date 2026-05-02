import React from 'react';
import plants from '../data/plants.js';
import './ProductListing.css';

const categories = [...new Set(plants.map(p => p.category))];

function PlantCard({ plant, onAddToCart, inCart }) {
  return (
    <div className="plant-card">
      <div className="plant-img-wrap">
        <img
          src={plant.image}
          alt={plant.name}
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&h=300&fit=crop'; }}
        />
      </div>
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-desc">{plant.description}</p>
        <div className="plant-footer">
          <span className="plant-price">${plant.cost.toFixed(2)}</span>
          <button
            className={`add-btn ${inCart ? 'added' : ''}`}
            onClick={() => onAddToCart(plant)}
            disabled={inCart}
          >
            {inCart ? '✓ Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductListing({ cart, onAddToCart }) {
  const cartIds = cart.map(item => item.id);

  return (
    <div className="product-listing">
      <div className="listing-header">
        <h1>Our Plant Collection</h1>
        <p>Explore our handpicked selection of beautiful houseplants</p>
      </div>

      {categories.map(category => (
        <section key={category} className="category-section">
          <div className="category-header">
            <h2 className="category-title">{category}</h2>
            <div className="category-divider"></div>
          </div>
          <div className="plants-grid">
            {plants
              .filter(p => p.category === category)
              .map(plant => (
                <PlantCard
                  key={plant.id}
                  plant={plant}
                  onAddToCart={onAddToCart}
                  inCart={cartIds.includes(plant.id)}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductListing;
