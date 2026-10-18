import { experiences } from '../data';

const Experience = () => (
  <section className="section" id="experiencia">
    <div className="container">
      <header className="section__head">
        <h2>Experiencia</h2>
        <p>De las prácticas en sistemas al desarrollo de simuladores con realidad aumentada.</p>
      </header>
      <ol className="timeline">
        {experiences.map((exp) => (
          <li className="timeline__item" key={exp.company}>
            <span className="timeline__period">{exp.period}</span>
            <div className="timeline__body">
              <h3>{exp.role}</h3>
              <p className="timeline__company">{exp.company}</p>
              <p>{exp.description}</p>
              <ul className="chips chips--quiet">
                {exp.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
