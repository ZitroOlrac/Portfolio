import { useRef, useState } from 'react';
import { shorts, youtubeChannel } from '../data';

const thumb = (id) => `https://i.ytimg.com/vi/${id}/oar2.jpg`;
const fallbackThumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const ShortCard = ({ id, title }) => {
  const [playing, setPlaying] = useState(false);

  // Algunos Shorts no tienen miniatura vertical (YouTube devuelve una imagen de 120px):
  // en ese caso usamos la miniatura estándar.
  const handleLoad = (e) => {
    if (e.currentTarget.naturalWidth <= 120) e.currentTarget.src = fallbackThumb(id);
  };

  return (
    <li className="short">
      <div className="short__frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button className="short__play" onClick={() => setPlaying(true)} aria-label={`Reproducir: ${title}`}>
            <img src={thumb(id)} alt="" loading="lazy" onLoad={handleLoad} />
            <span className="short__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
          </button>
        )}
      </div>
      <h3 className="short__title">{title}</h3>
    </li>
  );
};

const Videos = () => {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="section" id="videos">
      <div className="container">
        <header className="section__head section__head--row">
          <div>
            <h2>Tutoriales de Unity</h2>
            <p>Shorts de mi canal de YouTube sobre animación, cámaras e inteligencia artificial en juegos.</p>
          </div>
          <div className="videos__actions">
            <button className="round-btn" onClick={() => scrollBy(-1)} aria-label="Ver anteriores">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button className="round-btn" onClick={() => scrollBy(1)} aria-label="Ver siguientes">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <a href={youtubeChannel} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
              Ver canal en YouTube
            </a>
          </div>
        </header>
      </div>

      <ul className="shorts" ref={trackRef} aria-label="Shorts de YouTube">
        {shorts.map((s) => <ShortCard key={s.id} {...s} />)}
      </ul>
    </section>
  );
};

export default Videos;
