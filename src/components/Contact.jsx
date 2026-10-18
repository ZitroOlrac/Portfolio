import { useState } from 'react';
import { socials } from '../data';

const FORM_ENDPOINT = 'https://formspree.io/f/mdabnddw';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('send failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <div className="contact__grid">
        <div className="contact__intro">
          <h2>Hablemos</h2>
          <p>
            ¿Tienes un juego, una web o un proceso que quieras automatizar? Escríbeme y te
            respondo lo antes posible.
          </p>
          <ul className="contact__links">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form__row">
            <label>
              Nombre
              <input type="text" name="nombre" autoComplete="name" required />
            </label>
            <label>
              Correo
              <input type="email" name="email" autoComplete="email" required />
            </label>
          </div>
          <label>
            Asunto
            <input type="text" name="asunto" required />
          </label>
          <label>
            Mensaje
            <textarea name="mensaje" rows="5" required />
          </label>
          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
          </button>
          <p className={`form__status form__status--${status}`} role="status" aria-live="polite">
            {status === 'sent' && 'Mensaje enviado. Te responderé pronto.'}
            {status === 'error' && 'No se pudo enviar el mensaje. Revisa tu conexión o escríbeme por LinkedIn.'}
          </p>
        </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
