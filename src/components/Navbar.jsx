import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <h2><span className="text-gradient">Carlo</span> Prado</h2>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">Sobre mi</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
