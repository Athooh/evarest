// src/pages/Home/Home.js
import React from 'react';
import './Home.css';
import '../../Button/Button.css';

function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1>"Empowering Businesses, Elevating Innovation."</h1>
          <p>We build cutting-edge applications for your business.</p>
          <button className='button'>Get Started</button>
        </div>
        <div className="hero-image">
          <img src="./assets/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Home;