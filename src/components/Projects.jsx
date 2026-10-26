import { useState } from 'react';
import { projects } from '../data';

const tabs = [
  { id: 'games', label: 'Videojuegos' },
  { id: 'web', label: 'Web' },
];

const Projects = () => {
  const [active, setActive] = useState('games');

  return (
    <section className="section section--tinted" id="proyectos">
      <div className="container">
        <header className="section__head section__head--row">
          <div>
            <h2>Proyectos</h2>
            <p>Los juegos se pueden jugar en el navegador desde itch.io.</p>
          </div>
          <div className="tabs" role="tablist" aria-label="Tipo de proyecto">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={active === t.id}
                aria-controls="projects-panel"
                className="tabs__btn"
                onClick={() => setActive(t.id)}
              >
                {t.label} <span className="tabs__count">{projects[t.id].length}</span>
              </button>
            ))}
          </div>
        </header>

        <div id="projects-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="projects" key={active}>
          {projects[active].map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="project">
              <div className="project__img">
                <img src={p.image} alt="" loading="lazy" />
              </div>
              <div className="project__info">
                <h3>{p.title}</h3>
                {p.subtitle && <p>{p.subtitle}</p>}
                <span className="project__cta">{active === 'games' ? 'Jugar' : p.link.includes('github.com') ? 'Ver código' : 'Ver sitio'}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
