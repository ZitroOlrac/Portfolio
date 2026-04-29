import './Projects.css';

const Projects = () => {
  const webProjects = [
    { title: 'E-Commerce', image: 'assets/aluraGeek.png', link: 'https://dixmattostudio.com/E-Comerce/index.html' },
    { title: 'Reto Encriptador', image: 'assets/retoencriptado.png', link: 'https://dixmattostudio.com/RetoEncriptado/' },
    { title: 'Portfolio', image: 'assets/Portfolio.png', link: 'https://dixmattostudio.com/' },
    { title: 'PetShop', image: 'assets/PetShop.png', link: 'https://dixmattostudio.com/PetShop/registro.html' },
    { title: 'Mini Alura', image: 'assets/miniAlura.png', link: 'https://dixmattostudio.com/MiniAlura/' },
    { title: 'Fruta & Fruto', image: 'assets/Fruta%26Fruto.png', link: 'https://dixmattostudio.com/Fruta%26Fruto/' },
  ];

  const unityProjects = [
    { title: 'Bubble Boom', image: 'https://img.itch.zone/aW1nLzE4MTI4MTIyLmpwZw==/original/5dXzAX.jpg', link: 'https://sambogames.itch.io/bubble-boom' },
    { title: 'Grillas (Tetris)', image: 'https://img.itch.zone/aW1nLzE4MTI3Mzc5LnBuZw==/original/BCXrMC.png', link: 'https://sambogames.itch.io/tetris' },
    { title: 'MathBuffet', image: 'https://img.itch.zone/aW1nLzE4MDU3NDIxLmpwZw==/original/4rlyEi.jpg', link: 'https://sambogames.itch.io/mathclient' },
    { title: 'Wizard Defender', image: 'https://img.itch.zone/aW1nLzE4MDM4OTk2LnBuZw==/original/BXNMMz.png', link: 'https://sambogames.itch.io/denfender' },
    { title: 'Space Attack', image: 'assets/Galactic Invasion.png', link: 'https://sambogames.itch.io/space' },
    { title: 'Tic Tac Toe', image: 'https://img.itch.zone/aW1nLzEyMjY4NDk4LnBuZw==/original/mARiHl.png', link: 'https://sambogames.itch.io/tic-tac-toe' },
    { title: 'Harvest Rush', image: 'https://img.itch.zone/aW1nLzEyMjY2ODQzLnBuZw==/original/5XCR6f.png', link: 'https://sambogames.itch.io/harvest-rush' },
    { title: 'Fantasy Math', image: 'https://img.itch.zone/aW1nLzEyMTUzOTI2LnBuZw==/original/tZ4UBM.png', link: 'https://sambogames.itch.io/fantasy-math' },
    { title: 'Floating Islands Runner', image: 'https://img.itch.zone/aW1nLzEyMTUzODE5LnBuZw==/original/Aiqw0f.png', link: 'https://sambogames.itch.io/floating-islandsr-runner' },
    { title: 'Magic Math Defender', image: 'https://img.itch.zone/aW1nLzEwMzMzNTc2LnBuZw==/original/IjDPym.png', link: 'https://sambogames.itch.io/magic-math-defender' },
    { title: 'CERV Defense', image: 'https://img.itch.zone/aW1nLzEzMTk0MjM1LnBuZw==/original/GwDkgo.png', link: 'https://sambogames.itch.io/cervdefense' },
    { title: 'You Are Alive', image: 'https://img.itch.zone/aW1nLzEwMjg1NTMwLnBuZw==/original/kBUD9%2F.png', link: 'https://sambogames.itch.io/you-are-alive' },
  ];

  const renderProjectCard = (project, index) => (
    <div className="bento-box project-card" key={index}>
      <div className="project-img">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-info">
        <h4>{project.title}</h4>
        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline">Ver Proyecto</a>
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Mis <span className="text-accent">Proyectos</span></h2>

        <div className="projects-category">
          <h3>Desarrollo Web</h3>
          <div className="projects-grid">
            {webProjects.map(renderProjectCard)}
          </div>
        </div>

        <div className="projects-category">
          <h3>Juegos (Unity)</h3>
          <div className="projects-grid">
            {unityProjects.map(renderProjectCard)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
