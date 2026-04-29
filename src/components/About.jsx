import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">Sobre <span className="text-accent">Mí!</span></h2>
        
        <div className="about-grid">
          <div className="bento-box about-text">
            <h3 className="bento-title">Mi Historia</h3>
            <p>
              Empecé mi trayectoria laboral haciendo prácticas en el MTC de Arequipa. Actualmente, trabajo para una contratista en Seal y en mi tiempo libre hago pequeños proyectos de desarrollo y modelado de videojuegos en 2D, 3D y RA bajo el nombre de <strong>DixmattoStudio</strong>.
            </p>
            <p>
              Soy una persona apasionada, curiosa y me gusta resolver problemas. No le tengo miedo al cambio ni a salir de mi zona de confort, por lo que siempre estoy aprendiendo algo nuevo. Recientemente, completé exitosamente el programa <strong>ONE Oracle Next Education</strong>, donde profundicé en programación web.
            </p>
          </div>
          
          <div className="bento-box badges-panel">
            <h3 className="bento-title">Logros</h3>
            <div className="badges-grid">
              <img src="assets/insignia1.png" alt="Insignia 1" className="badge" />
              <img src="assets/InsignieaReto2.png" alt="Insignia 2" className="badge" />
              <img src="assets/InsignieaReto3.png" alt="Insignia 3" className="badge" />
              <img src="assets/InsignieaReto4.png" alt="Insignia 4" className="badge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
