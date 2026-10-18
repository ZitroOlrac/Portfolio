import { automationIdeas, automationSteps } from '../data';

const Automation = () => (
  <section className="automation" id="automatizacion">
    <div className="container automation__grid">
      <div className="automation__intro">
        <h2>Automatizo procesos con inteligencia artificial</h2>
        <p>
          Muchas tareas del día a día se repiten igual cada vez: copiar datos, responder las
          mismas preguntas, armar el mismo reporte. Las convierto en flujos automáticos con IA
          para que tu equipo dedique ese tiempo a lo que sí necesita una persona.
        </p>
        <h3>Algunos ejemplos de lo que se puede automatizar</h3>
        <ul className="automation__ideas">
          {automationIdeas.map((idea) => <li key={idea}>{idea}</li>)}
        </ul>
        <div className="automation__actions">
          <a href="#contacto" className="btn btn--amber">Cuéntame tu proceso</a>
          <a href="#videos" className="automation__link">Mira mis videos de n8n</a>
        </div>
      </div>

      <ol className="steps" aria-label="Cómo trabajo una automatización">
        {automationSteps.map((step, i) => (
          <li key={step.title} className="step">
            <span className="step__num" aria-hidden="true">{i + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Automation;
