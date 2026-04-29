import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content bento-box">
          <div className="hero-badge">Dixmatto</div>
          <h1>Hola, soy <br /><span className="text-accent">Carlo Prado</span></h1>
          <h3>Indie Developer & Web Programmer</h3>
          <p>
            Bachiller en Ingeniería de Sistemas e Informática, CEO & Founder de Dixmatto Studio.
            Transformando ideas en experiencias digitales interactivas, desde videojuegos hasta aplicaciones web.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">Ver Proyectos</a>
            <a href="media/ResumeCV_Es_CarloGameDev.pdf" download="ResumeCV_Es_CarloGameDev" className="btn btn-outline">Descargar CV</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/ZitroOlrac" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/carlo-fabian-prado-ortiz-170230121/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com/pradoortiz_dev/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://sambogames.itch.io/" target="_blank" rel="noreferrer">Itch.io</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="assets/fotoperfil.png" alt="Carlo Fabian" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
