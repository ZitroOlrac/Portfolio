import { profile, socials } from '../data';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <p>© {new Date().getFullYear()} {profile.fullName}. Hecho en {profile.studio}.</p>
      <ul>
        {socials.map((s) => (
          <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
