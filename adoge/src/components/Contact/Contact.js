import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contacto</h2>
    <form className="contact-form">
      <input type="text" placeholder="Nombre" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Tu mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
    <div className="contact-info">
      <p>Email: contacto@adoge.com</p>
      <p>Tel: +54 9 11 1234-5678</p>
    </div>
  </section>
);

export default Contact; 