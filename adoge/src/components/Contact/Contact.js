import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import './Contact.css';
import ReactDOM from 'react-dom';

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
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

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
        setShowSuccessToast(true);
        setTimeout(() => setShowSuccessToast(false), 4000);
        form.current.reset();
      }, (error) => {
        setStatus('error');
        setShowErrorToast(true);
        setTimeout(() => setShowErrorToast(false), 4000);
      });
  };

  // Renderiza el toast en un portal para que esté en la capa más exterior
  const toastPortal = (showSuccessToast || showErrorToast) ? ReactDOM.createPortal(
    <div style={{ position: 'fixed', top: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999, width: '100%', display: 'flex', justifyContent: 'center', pointerEvents: 'none' }}>
      <div
        className={`toast-custom ${showSuccessToast ? 'toast-success' : 'toast-error'} ${showSuccessToast || showErrorToast ? 'toast-animate-in' : 'toast-animate-out'}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          minWidth: window.innerWidth < 500 ? '90vw' : '340px',
          maxWidth: '90vw',
          fontWeight: 700,
          background: '#fff',
          color: showSuccessToast ? '#3CB371' : '#b00020',
          border: `2.5px solid ${showSuccessToast ? '#3CB371' : '#b00020'}`,
          borderRadius: '1.5em',
          boxShadow: '0 8px 32px rgba(126,57,146,0.13)',
          padding: window.innerWidth < 500 ? '0.7em 0.7em' : '1.2em 2em',
          textAlign: 'center',
          fontSize: window.innerWidth < 500 ? '1em' : '1.18em',
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.7em',
          transition: 'opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          opacity: (showSuccessToast || showErrorToast) ? 1 : 0,
          transform: (showSuccessToast || showErrorToast) ? 'translateY(0)' : 'translateY(-40px)',
        }}
      >
        {showSuccessToast && (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M9 15.5L13 19L19 11" stroke="#3CB371" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {showErrorToast && (
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="14" cy="14" r="14" fill="#b00020" />
            <path d="M10 10L18 18M18 10L10 18" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        )}
        <div className="toast-body w-100" style={{ textAlign: 'center', width: '100%' }}>
          {showSuccessToast ? '¡Tu mensaje fue enviado con éxito!' : 'Ocurrió un error al enviar el mensaje. Intenta nuevamente más tarde.'}
        </div>
      </div>
    </div>,
    document.body
  ) : null;

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
      {toastPortal}
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