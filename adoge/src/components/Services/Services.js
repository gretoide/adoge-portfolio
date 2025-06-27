import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services" id="services">
    <h2 className="services-title">Nuestros Servicios</h2>
    <p className="services-intro">Descubrí cómo podemos ayudarte con soluciones a medida.</p>
    <div className="services-list">

      <div className="service-card">
        <h3 className="service-card-title"><strong>Webs a Medida</strong></h3>
        <p><strong>Diseñamos sitios únicos:</strong> landing pages, portfolios y páginas institucionales que comunican y convierten.</p>
      </div>

      <div className="service-card">
        <h3 className="service-card-title"><strong>Sistemas a Medida</strong></h3>
        <p><strong>Desarrollamos plataformas CRUD</strong> para que puedas gestionar turnos, productos, clientes o cualquier tipo de dato desde un panel simple y seguro.</p>
      </div>

      <div className="service-card">
        <h3 className="service-card-title"><strong>Mantenimiento Web</strong></h3>
        <p><strong>Actualizamos, optimizamos y damos soporte</strong> a tu web para que siempre esté online, rápida y segura.</p>
      </div>

      <div className="service-card">
        <h3 className="service-card-title"><strong>Bases de Datos</strong></h3>
        <p><strong>Diseño, organización y migración</strong> de bases de datos para que tu información esté siempre disponible y protegida.</p>
      </div>

      <div className="service-card">
        <h3>Diseño UX/UI</h3>
        <p>Interfaces modernas, intuitivas y pensadas para una experiencia de usuario fluida y efectiva.</p>
      </div>

      <div className="service-card">
        <h3>Asesoría Digital</h3>
        <p>Te ayudamos a conectar tu web con redes sociales, optimizar tu posicionamiento (SEO básico) y lanzar campañas promocionales.</p>
      </div>
    </div>
  </section>
);

export default Services; 