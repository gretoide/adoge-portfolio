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
      'YOUR_SERVICE_ID', // Reemplazar con tu Service ID de EmailJS
      'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
      form.current,
      'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key de EmailJS
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
        <input 
          type="text" 
          name="user_name"
          placeholder="Nombre" 
          required 
        />
        <input 
          type="email" 
          name="user_email"
          placeholder="Email" 
          required 
        />
        <textarea 
          name="message"
          placeholder="Tu mensaje" 
          required
        ></textarea>
        <button 
          type="submit" 
          disabled={status === 'sending'}
          className={status}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
        {status === 'success' && (
          <p className="success-message">¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="error-message">Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.</p>
        )}
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