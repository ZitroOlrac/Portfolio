import { asset, badges, profile } from '../data';

const About = () => (
  <section className="section" id="sobre-mi">
    <div className="container about">
      <div className="about__text">
        <h2>Sobre mí</h2>
        <p>
          Soy bachiller en Ingeniería de Sistemas e Informática. Empecé haciendo prácticas en la
          Gerencia Regional de Transportes y Comunicaciones de Arequipa y desde entonces he trabajado
          desarrollando simuladores de realidad aumentada para minería, asistentes con IA y experiencias
          de realidad virtual. Hoy vivo en Madrid.
        </p>
        <p>
          En paralelo creo videojuegos 2D, 3D y de realidad aumentada con mi estudio,{' '}
          <strong>{profile.studio}</strong>. Completé el programa <strong>ONE (Oracle Next Education)</strong>,
          donde me formé en desarrollo web, y hoy sumo la automatización de procesos con IA a lo que
          ofrezco.
        </p>
        <p>
          Me gusta resolver problemas y no le tengo miedo a salir de mi zona de confort: siempre
          estoy aprendiendo algo nuevo.
        </p>
      </div>
      <div className="about__badges">
        <h3>Insignias Alura ONE</h3>
        <ul>
          {badges.map((b) => (
            <li key={b.src}><img src={asset(b.src)} alt={b.alt} width="200" height="200" loading="lazy" /></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
