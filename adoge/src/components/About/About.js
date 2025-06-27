import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <h2>Sobre Nosotros</h2>

    <p className="about-intro">
      Somos un equipo freelance en crecimiento, estudiantes de la Facultad de Informática de la UNLP. Combinamos formación académica con experiencia práctica en desarrollo web, UX/UI y soluciones digitales pensadas para personas reales.
    </p>

    <p className="about-intro">
      Diseñamos sitios y sistemas simples, funcionales y listos para usar, acompañando a nuestros clientes en cada paso del proceso.
    </p>

    <div className="about-cards">
      
      <div className="about-card">
        <div className="about-icon">🎯</div>
        <h3>¿A quién acompañamos?</h3>
        <ul>
          <li>Emprendedores que están empezando y necesitan visibilidad.</li>
          <li>Profesionales que buscan mostrar su trabajo online.</li>
          <li>Negocios locales que quieren vender más o digitalizar su gestión.</li>
          <li>Equipos que necesitan organizar tareas, turnos o datos.</li>
        </ul>
      </div>

      <div className="about-card">
        <div className="about-icon">💻</div>
        <h3>Cómo trabajamos</h3>
        <p>
          Usamos herramientas actuales y buenas prácticas para crear sitios rápidos, claros y fáciles de mantener.
        </p>
        <p>
          Nos enfocamos en que tengas una solución útil, sin enredos técnicos, y adaptada a tus objetivos reales.
        </p>
      </div>

      <div className="about-card">
        <div className="about-icon">🌐</div>
        <h3>Conocenos un poco más</h3>
        <p>
          Te invitamos a ver algunos de nuestros proyectos, pruebas y colaboraciones en GitHub:
        </p>
        <ul className="github-links">
          <li>
            <FaGithub /> <a href="https://github.com/gretoide" target="_blank" rel="noopener noreferrer">Greta Piacentini</a>
          </li>
          <li>
            <FaGithub /> <a href="https://github.com/AdrianASambido" target="_blank" rel="noopener noreferrer">Adrián Sambido</a>
          </li>
        </ul>
      </div>

    </div>
  </section>
);

export default About;
