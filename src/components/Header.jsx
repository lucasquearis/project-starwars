import React from 'react';
import hero from '../media/star-wars-logo.png';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-hero">
      <img className="hero" src={ hero } alt="star-wars-logo" />
    </div>
    <div className="header-text">
      <p>Find your destination, search your planet, all planets in one place.</p>
    </div>
  </div>
);

export default Header;
