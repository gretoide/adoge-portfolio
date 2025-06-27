import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} AdoGe. Todos los derechos reservados.</p>
    <div className="footer-links">
      <a href="#about">Sobre Nosotros</a>
      <span className="wsp-sep"> | </span>
      <a href="#services">Servicios</a>
      <span className="wsp-sep"> | </span>
      <a href="#contact">Contacto</a>
    </div>
  </footer>
);

export default Footer; 