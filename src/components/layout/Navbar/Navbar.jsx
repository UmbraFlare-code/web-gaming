import { useState, useEffect } from 'react';
import { FaGamepad, FaTrophy, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import { handleUIAction } from '../../common/uiActions';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    handleUIAction('scroll', { sectionId });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Navegación principal">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/acm-logo.webp" alt="Logo de ACM" className="acm-logo" />
          <span>ACM</span>
        </div>
        
        <div className="navbar-links">
          <a href="#home" className="navbar-link" aria-label="Ir a inicio" onClick={(e) => handleNavClick('home', e)}>
            <FaGamepad /> Inicio
          </a>
          <a href="#games" className="navbar-link" aria-label="Ver juegos" onClick={(e) => handleNavClick('games', e)}>
            <FaGamepad /> Eventos
          </a>
          <a href="#schedule" className="navbar-link" aria-label="Ver cronograma" onClick={(e) => handleNavClick('schedule', e)}>
            <FaCalendarAlt /> Cronograma
          </a>
          <a href="#prizes" className="navbar-link" aria-label="Ver premios" onClick={(e) => handleNavClick('prizes', e)}>
            <FaTrophy /> Premios
          </a>
          <a href="#about" className="navbar-link" aria-label="Sobre nosotros" onClick={(e) => handleNavClick('about', e)}>
            <FaInfoCircle /> Nosotros
          </a>
        </div>
        
        <button className="btn btn-primary navbar-cta" aria-label="Registrarse ahora">
          Colaborar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;