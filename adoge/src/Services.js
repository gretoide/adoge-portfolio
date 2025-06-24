import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services" id="services">
    <h2>Nuestros Servicios</h2>
    <div className="services-list">
      <div className="service-card">
        <h3>Desarrollo Web</h3>
        <p>Webs modernas, rápidas y seguras para tu negocio.</p>
      </div>
      <div className="service-card">
        <h3>Diseño UX/UI</h3>
        <p>Experiencias digitales atractivas y funcionales.</p>
      </div>
      <div className="service-card">
        <h3>Consultoría</h3>
        <p>Te ayudamos a definir y potenciar tu estrategia digital.</p>
      </div>
    </div>
  </section>
);

export default Services; 