import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
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
          <FaEnvelope className="contact-icon email" />
          <a href="mailto:adogeinnovations@gmail.com" className="contact-email">
            adogeinnovations@gmail.com
          </a>
        </p>
      </div>
      <a
        href="https://wa.me/542214762150"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </section>
  );
};

export default Contact; 