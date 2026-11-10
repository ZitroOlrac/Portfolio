import { services } from '../data';

const Services = () => (
  <section className="section" id="servicios">
    <div className="container">
      <header className="section__head">
        <h2>Qué puedo hacer por ti</h2>
        <p>Tres áreas en las que trabajo, con las herramientas que uso en cada una.</p>
      </header>
      <div className="services">
        {services.map((s) => (
          <article key={s.id} className={`service service--${s.id}`}>
            {s.id === 'ai' && <span className="tag-new">Nuevo</span>}
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ul className="chips" aria-label={`Herramientas de ${s.title}`}>
              {s.tools.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
