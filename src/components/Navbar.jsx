import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src="assets/LogoV.png" alt="Logo" className="navbar-logo" />
          <h2><span className="text-gradient">Carlo</span> Prado</h2>
        </div>
        
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Inicio</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>Sobre mi</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experiencia</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Proyectos</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
