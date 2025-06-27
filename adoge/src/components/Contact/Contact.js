import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';

const WHATSAPP_CONTACTS = [
  {
    name: 'Adrian',
    number: '542214762150',
    href: 'https://wa.me/542214762150',
  },
  {
    name: 'Greta',
    number: '542213144468',
    href: 'https://wa.me/542213144468',
  },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [showWspMenu, setShowWspMenu] = useState(false);
  const wspMenuRef = useRef(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wspMenuRef.current && !wspMenuRef.current.contains(event.target)) {
        setShowWspMenu(false);
      }
    }
    if (showWspMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showWspMenu]);

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
        setShowSuccess(true);
        form.current.reset();
        setTimeout(() => {
          setShowSuccess(false);
          setTimeout(() => setStatus(''), 700);
        }, 4300);
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
      {status === 'success' && (
        <div className={`success-message animated-success${!showSuccess ? ' fade-out' : ''}`}>
          <FaCheckCircle className="success-tick" />
          ¡Tu mensaje fue enviado con éxito! Pronto nos pondremos en contacto.
        </div>
      )}
      {status === 'error' && (
        <div className="error-message">
          Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde.
        </div>
      )}
      <div className="contact-info mt-4">
        <p>
          <FaEnvelope className="contact-icon email" />
          <a href="mailto:adogeinnovations@gmail.com" className="contact-email">
            adogeinnovations@gmail.com
          </a>
        </p>
      </div>
      <div className="whatsapp-float" onClick={() => setShowWspMenu((v) => !v)} tabIndex={0} aria-label="Contactar por WhatsApp">
        <FaWhatsapp />
        {showWspMenu && (
          <div className="wsp-menu" ref={wspMenuRef}>
            <span className="wsp-menu-title">Contactar por WhatsApp:</span>
            {WHATSAPP_CONTACTS.map((c) => (
              <a
                key={c.number}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="wsp-menu-btn"
                onClick={() => setShowWspMenu(false)}
              >
                <FaWhatsapp className="wsp-menu-icon" /> {c.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact; 