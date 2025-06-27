import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-copyright">
      <p>&copy; {new Date().getFullYear()} AdoGe. Todos los derechos reservados.</p>
    </div>
    <div className="footer-links">
      <a className="footer-link" href="#about">Sobre Nosotros</a>
      <span className="footer-sep">|</span>
      <a className="footer-link" href="#services">Servicios</a>
      <span className="footer-sep">|</span>
      <a className="footer-link" href="#contact">Contacto</a>
    </div>
  </footer>
);

export default Footer; 