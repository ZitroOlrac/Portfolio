import { asset, profile, projects, socials } from '../data';

const yearsCoding = new Date().getFullYear() - 2020;

const Hero = () => (
  <section className="hero" id="inicio">
    <div className="container hero__grid">
      <div className="hero__copy">
        <p className="hero__kicker">Hola, soy</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__lead">
          Hago videojuegos, experiencias de realidad aumentada y virtual, aplicaciones web
          y, ahora, automatizaciones con IA que le ahorran horas de trabajo a las empresas.
        </p>
        <div className="hero__actions">
          <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
          <a href={asset(profile.cv)} download className="btn btn--ghost">Descargar CV</a>
        </div>
        <ul className="hero__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <aside className="card-player" aria-label="Resumen de perfil">
        <div className="card-player__photo">
          <img src={asset(profile.photo)} alt={`Foto de ${profile.fullName}`} width="720" height="1092" />
        </div>
        <div className="card-player__body">
          <div className="card-player__id">
            <strong>{profile.fullName}</strong>
            <span>Bachiller en Ingeniería de Sistemas e Informática</span>
            <span>Fundador de {profile.studio} · {profile.location}</span>
          </div>
          <dl className="card-player__stats">
            <div><dt>Juegos publicados</dt><dd>{projects.games.length}</dd></div>
            <div><dt>Proyectos web</dt><dd>{projects.web.length}</dd></div>
            <div><dt>Años programando</dt><dd>{yearsCoding}</dd></div>
          </dl>
        </div>
        <p className="card-player__unlock">
          <span className="card-player__unlock-icon" aria-hidden="true">★</span>
          <span>Nueva habilidad desbloqueada: <strong>automatización con IA</strong></span>
        </p>
      </aside>
    </div>
  </section>
);

export default Hero;
