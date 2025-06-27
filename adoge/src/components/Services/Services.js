import React from 'react';
import './Services.css';

const Services = () => (
  <section className="services" id="services">
  <h2>Nuestros Servicios</h2>
  <div className="services-list">

    <div className="service-card">
      <h3>Webs a Medida</h3>
      <p>Diseñamos sitios únicos: landing pages, portfolios y páginas institucionales que comunican y convierten.</p>
    </div>

    <div className="service-card">
      <h3>Sistemas a Medida</h3>
      <p>Desarrollamos plataformas CRUD para que puedas gestionar turnos, productos, clientes o cualquier tipo de dato desde un panel simple y seguro.</p>
    </div>

    <div className="service-card">
      <h3>Mantenimiento Web</h3>
      <p>Actualizamos, optimizamos y damos soporte a sitios ya existentes para que sigan rindiendo al 100%.</p>
    </div>

    <div className="service-card">
      <h3>Bases de Datos</h3>
      <p>Diseño, organización y migración de bases de datos. Convertimos tu información en algo útil y bien estructurado.</p>
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