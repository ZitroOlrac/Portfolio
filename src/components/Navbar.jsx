import { useEffect, useState } from 'react';
import { asset, profile } from '../data';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#automatizacion', label: 'IA' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#sobre-mi', label: 'Sobre mí' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#inicio" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={asset('assets/logo.webp')} alt="" width="36" height="43" />
          <span>{profile.name}</span>
        </a>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen(!open)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>

        <nav id="nav-menu" className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href="#contacto" className="btn btn--primary btn--sm" onClick={() => setOpen(false)}>
            Contáctame
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
