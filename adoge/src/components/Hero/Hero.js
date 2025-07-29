import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import logoAdoge from '../../images/logo_adoge.png';

const Hero = () => {
  // Animaciones de entrada con stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Animación del botón con hover
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 25px rgba(227, 94, 94, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Partículas flotantes
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <section className="hero">
      {/* Partículas flotantes animadas */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Fondo animado con gradiente */}
      <motion.div
        className="hero-background"
        animate={{
          background: [
            "linear-gradient(45deg, #1e3c72, #2a5298)",
            "linear-gradient(45deg, #2a5298, #1e3c72)",
            "linear-gradient(45deg, #1e3c72, #2a5298)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <img 
          src={logoAdoge}
          alt="Logo Adoge"
          className="hero-logo"
        />
        <motion.h1 
          variants={itemVariants}
          whileHover={{ scaleX: 1.2}}
          transition={{ type: "spring", stiffness: 300 }}
        >
          AdoGe
        </motion.h1>

        <motion.div 
          className="hero-underline"
          variants={itemVariants}
          whileHover={{ scaleX: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        />

        <motion.p 
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            color: "#7E3992"
          }}
        >
          Impulsamos tu presencia digital
        </motion.p>
      </motion.div>

      {/* Elementos decorativos flotantes */}
      <motion.div
        className="floating-shape shape-1"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="floating-shape shape-2"
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
};

export default Hero; 