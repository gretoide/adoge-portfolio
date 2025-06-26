import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_m4wwr3i', // Service ID
      'template_6380uaw', // Template ID
      form.current,
      'FvJ9iHKeHBixh9Vde' // Public Key
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="hidden" name="title" value="Contacto Web" />
        <input type="hidden" name="time" value= {new Date().toLocaleString()}/>
        <input type="text" name="name" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Tu mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info mt-4">
        <p>
          <i className="fas fa-envelope text-primary me-2"></i>
          <a href="mailto:adogeinnovations@gmail.com" className="text-decoration-none">
            adogeinnovations@gmail.com
          </a>
        </p>
        <div className="contact-wsp-line">
          <i className="fab fa-whatsapp text-success me-2"></i>
          <a href="https://wa.me/542214762150" target="_blank" rel="noopener noreferrer">
            Adrian +54 221 476 2150
          </a>
          <span className="wsp-sep"> | </span>
          <i className="fab fa-whatsapp text-success me-2"></i>
          <a href="https://wa.me/542213144468" target="_blank" rel="noopener noreferrer">
            Greta +54 221 314 4468
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 