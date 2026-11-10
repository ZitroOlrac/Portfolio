import { useEffect, useRef } from "react";
import { asset, profile, projects, socials } from "../data";

const yearsCoding = new Date().getFullYear() - 2020;

// Inclina la tarjeta en 3D siguiendo el mouse (solo con mouse y sin "reducir movimiento").
function useTilt() {
  const sectionRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const tilt = tiltRef.current;
    const canTilt =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!section || !tilt || !canTilt) return;

    let frame = 0;
    const set = (rx, ry) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        tilt.style.setProperty("--rx", `${rx}deg`);
        tilt.style.setProperty("--ry", `${ry}deg`);
      });
    };
    const onMove = (e) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      set(
        Math.max(-1, Math.min(1, -y * 2)) * 7,
        Math.max(-1, Math.min(1, x * 2)) * 9,
      );
    };
    const onLeave = () => set(0, 0);

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return { sectionRef, tiltRef };
}

const Hero = () => {
  const { sectionRef, tiltRef } = useTilt();

  return (
    <section className="hero" id="inicio" ref={sectionRef}>
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">Hola, soy</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__lead">
            Hago videojuegos, experiencias de realidad aumentada y virtual,
            aplicaciones web y, ahora, automatizaciones con IA que le ahorran
            horas de trabajo a las empresas.
          </p>
          <div className="hero__actions">
            <a href="#proyectos" className="btn btn--primary">
              Ver proyectos
            </a>
            <a href={asset(profile.cv)} download className="btn btn--ghost">
              Descargar CV
            </a>
          </div>
          <ul className="hero__socials">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__stage">
          <div className="hero__tilt" ref={tiltRef}>
            <img
              className="hero__mascot"
              src={asset("assets/dog.webp")}
              alt={`Logo de ${profile.studio}`}
              width="420"
              height="398"
            />
            <aside className="card-player" aria-label="Resumen de perfil">
              <div className="card-player__photo">
                <img
                  src={asset(profile.photo)}
                  alt={`Foto de ${profile.fullName}`}
                  width="720"
                  height="1092"
                />
              </div>
              <div className="card-player__body">
                <div className="card-player__id">
                  <strong>{profile.fullName}</strong>
                  <span>Bachiller en Ingeniería de Sistemas e Informática</span>
                  <span>
                    Fundador de {profile.studio} · {profile.location}
                  </span>
                </div>
                <dl className="card-player__stats">
                  <div>
                    <dt>Juegos publicados</dt>
                    <dd>{projects.games.length}</dd>
                  </div>
                  <div>
                    <dt>Proyectos web</dt>
                    <dd>{projects.web.length}</dd>
                  </div>
                  <div>
                    <dt>Años programando</dt>
                    <dd>{yearsCoding}</dd>
                  </div>
                </dl>
              </div>
              <p className="card-player__unlock">
                <span className="card-player__unlock-icon" aria-hidden="true">
                  ★
                </span>
                <span>
                  Nueva habilidad desbloqueada:{" "}
                  <strong>automatización con IA</strong>
                </span>
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
