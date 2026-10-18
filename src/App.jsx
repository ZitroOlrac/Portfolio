import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Automation from './components/Automation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Videos from './components/Videos';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Automation />
        <Experience />
        <Projects />
        <Videos />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
