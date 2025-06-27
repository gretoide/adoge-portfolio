import React from 'react';
import { FaBullseye, FaLaptopCode, FaGlobe } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <h2>Sobre Nosotros</h2>

    <p className="about-intro">
      Somos un equipo freelance en crecimiento, estudiantes de la Facultad de Informática de la UNLP. Combinamos formación académica con experiencia práctica en desarrollo web, UX/UI y soluciones digitales pensadas para personas reales.
    </p>

    <div className="about-cards">
      <div className="about-card">
        <div className="about-icon"><FaBullseye /></div>
        <h3>¿A quién acompañamos?</h3>
          <div><strong>Emprendedores</strong> que están empezando y necesitan visibilidad.</div>
          <div><strong>Profesionales</strong> que buscan mostrar su trabajo online.</div>
          <div><strong>Negocios locales</strong> que quieren vender más o digitalizar su gestión.</div>
          <div><strong>Equipos</strong> que necesitan organizar tareas, turnos o datos.</div>
      </div>

      <div className="about-card">
        <div className="about-icon"><FaLaptopCode /></div>
        <h3>Cómo trabajamos</h3>
        <p>
          Usamos <strong>herramientas actuales</strong> y <strong>buenas prácticas</strong> para crear sitios rápidos, claros y fáciles de mantener.<br/>
          Nos enfocamos en que tengas una <strong>solución útil</strong>, sin enredos técnicos, y adaptada a tus <strong>objetivos reales</strong>.
        </p>
      </div>

      <div className="about-card">
        <div className="about-icon"><FaGlobe /></div>
        <h3>Conocenos un poco más</h3>
        <p>
          Te invitamos a ver algunos de nuestros <strong>proyectos</strong>, <strong>pruebas</strong> y <strong>colaboraciones</strong> en GitHub:
        </p>
        <div className="profile-links">
          <div className="profile-card">
            <img src="https://avatars.githubusercontent.com/gretoide" alt="Greta Piacentini" />
            <a href="https://github.com/gretoide" target="_blank" rel="noopener noreferrer">Greta Piacentini</a>
          </div>
          <div className="profile-card">
            <img src="https://avatars.githubusercontent.com/AdrianASambido" alt="Adrián Sambido" />
            <a href="https://github.com/AdrianASambido" target="_blank" rel="noopener noreferrer">Adrián Sambido</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
