import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content animated-fade-in">
        <h1 className="animated-slide-in">AdoGe</h1>
        <p className="animated-slide-in" style={{ animationDelay: '0.3s' }}>Impulsamos tu presencia digital</p>
        <a href="#contact" className="cta-button animated-fade-in" style={{ animationDelay: '0.6s' }}>¡Trabajemos juntos!</a>
      </div>
    </section>
  );
};

export default Hero; 