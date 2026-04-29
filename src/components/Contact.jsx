import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">¿Quieres <span className="text-gradient">Contactarme?</span></h2>
        
        <div className="contact-grid">
          <div className="contact-image">
            <img src="assets/contact-us.png" alt="Contacto" />
          </div>
          
          <div className="bento-box contact-form-wrapper">
            <h3>Complete el formulario</h3>
            <form className="contact-form" action="https://formspree.io/f/mdabnddw" method="POST">
              <div className="form-group">
                <input type="text" name="nombre" placeholder="Nombre" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="E-mail" required />
              </div>
              <div className="form-group">
                <input type="text" name="asunto" placeholder="Asunto" required />
              </div>
              <div className="form-group">
                <textarea rows="5" name="mensaje" placeholder="Mensaje" required></textarea>
              </div>
              <button type="submit" className="btn">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
