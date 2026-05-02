import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="hero-content">
          <p className="hero-tagline">Welcome to</p>
          <h1 className="hero-title">Paradise Nursery</h1>
          <p className="hero-subtitle">
            Bring nature indoors. Discover our carefully curated collection of aromatic,
            medicinal, and air-purifying houseplants — handpicked for homes that breathe.
          </p>
          <button className="hero-btn" onClick={() => navigate('/products')}>
            Shop Our Plants
          </button>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&h=700&fit=crop"
            alt="Beautiful houseplants"
          />
        </div>
      </div>

      <section className="features">
        <div className="feature-card">
          <span className="feature-icon">🌱</span>
          <h3>Hand Selected</h3>
          <p>Every plant is personally chosen for health, beauty, and ease of care.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">📦</span>
          <h3>Safe Delivery</h3>
          <p>Plants arrive carefully packaged to ensure they thrive upon arrival.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">💚</span>
          <h3>Guaranteed Quality</h3>
          <p>Not happy? We'll replace or refund — no questions asked.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🌿</span>
          <h3>Expert Advice</h3>
          <p>Each plant comes with detailed care guides to help you succeed.</p>
        </div>
      </section>

      <section className="landing-cta">
        <h2>Find your perfect plant companion</h2>
        <p>Whether you're a seasoned gardener or a first-time plant parent, we have the perfect green friend for you.</p>
        <button className="hero-btn secondary" onClick={() => navigate('/products')}>
          Browse All Plants →
        </button>
      </section>
    </div>
  );
}

export default Landing;
