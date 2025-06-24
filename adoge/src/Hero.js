import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './Hero.css';

const particlesOptions = {
  background: {
    color: {
      value: '#1e3c72',
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: true, mode: 'push' },
      onHover: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 100, duration: 0.4 },
    },
  },
  particles: {
    color: { value: '#fff' },
    links: {
      color: '#fff',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    collisions: { enable: false },
    move: {
      direction: 'none',
      enable: true,
      outModes: { default: 'bounce' },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 50,
    },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 2, max: 6 } },
  },
  detectRetina: true,
};

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="hero">
      <Particles className="particles-bg" options={particlesOptions} init={particlesInit} />
      <div className="hero-content animated-fade-in">
        <h1 className="animated-slide-in">AdoGe</h1>
        <p className="animated-slide-in" style={{ animationDelay: '0.3s' }}>Impulsamos tu presencia digital</p>
        <a href="#contact" className="cta-button animated-fade-in" style={{ animationDelay: '0.6s' }}>¡Trabajemos juntos!</a>
      </div>
    </section>
  );
};

export default Hero; 