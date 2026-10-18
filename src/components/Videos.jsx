import { useRef, useState } from 'react';
import { videoGroups, youtubeChannel } from '../data';

const embedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;

const VideoCard = ({ id, title, duration, format }) => {
  const [playing, setPlaying] = useState(false);
  const tall = format === 'tall';

  // Los Shorts usan la miniatura vertical; si no existe (YouTube devuelve una imagen de 120px)
  // usamos la estándar.
  const handleLoad = (e) => {
    if (tall && e.currentTarget.naturalWidth <= 120) {
      e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    }
  };

  return (
    <li className={`video video--${format}`}>
      <div className="video__frame">
        {playing ? (
          <iframe
            src={embedUrl(id)}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button className="video__play" onClick={() => setPlaying(true)} aria-label={`Reproducir: ${title}`}>
            <img
              src={`https://i.ytimg.com/vi/${id}/${tall ? 'oar2' : 'hqdefault'}.jpg`}
              alt=""
              loading="lazy"
              onLoad={handleLoad}
            />
            <span className="video__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            </span>
            {duration && <span className="video__duration">{duration}</span>}
          </button>
        )}
      </div>
      <h3 className="video__title">{title}</h3>
    </li>
  );
};

const Videos = () => {
  const [active, setActive] = useState(videoGroups[0].id);
  const trackRef = useRef(null);
  const group = videoGroups.find((g) => g.id === active);
  const isCarousel = group.format === 'tall';

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (track) track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className="section" id="videos">
      <div className="container">
        <header className="section__head section__head--row">
          <div>
            <h2>Videos</h2>
            <p>De mi canal de YouTube, DIXMATTO STUDIO.</p>
          </div>
          <a href={youtubeChannel} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
            Ver canal en YouTube
          </a>
        </header>

        <div className="videos__bar">
          <div className="tabs tabs--scroll" role="tablist" aria-label="Tipo de video">
            {videoGroups.map((g) => (
              <button
                key={g.id}
                role="tab"
                id={`vtab-${g.id}`}
                aria-selected={active === g.id}
                aria-controls="videos-panel"
                className="tabs__btn"
                onClick={() => setActive(g.id)}
              >
                {g.label} <span className="tabs__count">{g.videos.length}</span>
              </button>
            ))}
          </div>
          {isCarousel && (
            <div className="videos__arrows">
              <button className="round-btn" onClick={() => scrollBy(-1)} aria-label="Ver anteriores">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button className="round-btn" onClick={() => scrollBy(1)} aria-label="Ver siguientes">
                <svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          )}
        </div>
        <p className="videos__desc">{group.description}</p>
      </div>

      <div id="videos-panel" role="tabpanel" aria-labelledby={`vtab-${active}`} key={active} className="videos__panel">
        <ul
          ref={trackRef}
          className={isCarousel ? 'videos__track' : 'container videos__grid'}
        >
          {group.videos.map((v) => <VideoCard key={v.id} {...v} format={group.format} />)}
        </ul>
      </div>
    </section>
  );
};

export default Videos;
