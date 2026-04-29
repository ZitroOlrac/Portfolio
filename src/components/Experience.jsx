import './Experience.css';

const experiences = [
  {
    company: 'CETEMIN',
    role: 'Unity Developer (AR)',
    period: '2024 - 2025',
    tags: ['Unity', 'C#', 'Vuforia', 'AR'],
    color: '#fff0f5',
    description:
      'Desarrollo de simuladores educativos con Realidad Aumentada para el sector minero. Implementación de escenas interactivas con Vuforia para capacitación industrial.',
  },
  {
    company: 'Sysbay',
    role: 'Unity Developer (VR)',
    period: '2022',
    tags: ['Unity', 'C#', 'VR', '360°'],
    color: '#f0f8ff',
    description:
      'Creación de experiencias de Realidad Virtual interactivas, incluyendo tiendas virtuales y tours 360°, para visualización de productos y espacios.',
  },
  {
    company: 'I.E. La Salle',
    role: 'Desarrollador — Proyecto de Tesis',
    period: '2021',
    tags: ['Unity', 'C#', 'Android', 'Educación'],
    color: '#f5fffa',
    description:
      'Desarrollo de aplicación educativa de matemáticas para Android como proyecto de tesis universitaria. Orientada a estudiantes de nivel primario.',
  },
  {
    company: 'MTC Arequipa',
    role: 'Practicante de Sistemas',
    period: '2020',
    tags: ['Sistemas', 'IT', 'Soporte'],
    color: '#fffacd',
    description:
      'Prácticas profesionales en el Ministerio de Transportes y Comunicaciones sede Arequipa. Primera experiencia laboral en entorno gubernamental.',
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">
          Experiencia <span className="text-accent">Profesional</span>
        </h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-dot"></div>
              <div
                className="bento-box experience-card"
                style={{ backgroundColor: exp.color }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <h4 className="experience-role">{exp.role}</h4>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="experience-tags">
                  {exp.tags.map((tag, i) => (
                    <span className="experience-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
