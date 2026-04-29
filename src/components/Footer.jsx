import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <p>Desarrollado por <span className="text-gradient font-bold">Carlo Fabian Prado Ortiz</span></p>
          <p className="copyright">&copy; {new Date().getFullYear()} Dixmatto Studio. Todos los derechos reservados.</p>
        </div>
        <div className="footer-social">
          <a href="https://github.com/ZitroOlrac" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/carlo-fabian-prado-ortiz-170230121/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/pradoortiz_dev/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://sambogames.itch.io/" target="_blank" rel="noreferrer">Itch.io</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
