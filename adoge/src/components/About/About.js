import React from 'react';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <h2>Sobre Nosotros</h2>
    <p className="about-intro">
      Somos un equipo freelance junior especializado en soluciones digitales para emprendedores, profesionales y pequeñas empresas. Creamos herramientas simples, funcionales y con acompañamiento real.
    </p>
    <div className="about-cards">
      <div className="about-card">
        <div className="about-icon">💻</div>
        <h3>Servicios</h3>
        <ul>
          <li><b>Webs a medida:</b> Landing Pages, sitios institucionales y portfolios profesionales.</li>
          <li><b>Gestión digital:</b> Sistemas CRUD para administrar turnos, clientes, productos o datos.</li>
          <li><b>Mantenimiento:</b> Actualización, optimización y soporte para sitios existentes.</li>
          <li><b>Bases de datos:</b> Diseño, migración y organización de información.</li>
          <li><b>Asesoría digital:</b> Integración de redes, SEO básico y campañas promocionales.</li>
        </ul>
      </div>
      <div className="about-card">
        <div className="about-icon">🎯</div>
        <h3>Para quién</h3>
        <ul>
          <li>Emprendedores que recién empiezan.</li>
          <li>Profesionales que buscan presencia digital simple.</li>
          <li>Negocios locales que quieren vender más u organizar mejor sus datos.</li>
          <li>Personas que necesitan mostrar su trabajo (portfolio).</li>
          <li>Equipos que necesitan automatizar tareas o gestionar información.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About; 