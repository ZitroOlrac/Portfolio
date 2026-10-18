// Contenido del portafolio. Edita aquí textos, proyectos y enlaces sin tocar los componentes.

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Carlo Prado',
  fullName: 'Carlo Fabian Prado Ortiz',
  role: 'Desarrollador de videojuegos, web y automatización con IA',
  location: 'Arequipa, Perú',
  studio: 'Dixmatto Studio',
  cv: 'media/ResumeCV_Es_CarloGameDev.pdf',
  photo: 'assets/carlo.webp',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ZitroOlrac' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlo-fabian-prado-ortiz-170230121/' },
  { label: 'Itch.io', href: 'https://sambogames.itch.io/' },
  { label: 'Instagram', href: 'https://www.instagram.com/pradoortiz_dev/' },
];

export const services = [
  {
    id: 'games',
    title: 'Videojuegos y realidad extendida',
    text: 'Juegos 2D y 3D, simuladores educativos con realidad aumentada y experiencias de realidad virtual en Unity.',
    tools: ['Unity', 'C#', 'C++', 'Vuforia (AR)', 'Realidad virtual', 'Android'],
  },
  {
    id: 'web',
    title: 'Desarrollo web',
    text: 'Sitios y aplicaciones web responsivas, desde la maqueta hasta el despliegue.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'],
  },
  {
    id: 'ai',
    title: 'Automatización de procesos con IA',
    text: 'Flujos que hacen solas las tareas repetitivas de una empresa: leer correos y documentos, clasificar, responder y llevar los datos a donde se necesitan.',
    tools: ['APIs de modelos de IA', 'n8n', 'Python', 'Integración con correo y hojas de cálculo', 'Prompt engineering'],
  },
];

export const automationSteps = [
  {
    title: 'Entender el proceso',
    text: 'Reviso contigo cómo se hace hoy la tarea, cuánto tiempo toma y dónde se cometen errores.',
  },
  {
    title: 'Diseñar el flujo',
    text: 'Defino qué pasos hace la IA, cuáles siguen siendo manuales y qué sistemas hay que conectar.',
  },
  {
    title: 'Construir y conectar',
    text: 'Armo la automatización uniendo tus herramientas actuales con modelos de IA, sin cambiar tu forma de trabajar.',
  },
  {
    title: 'Medir y ajustar',
    text: 'Pruebo con casos reales, mido las horas ahorradas y ajusto hasta que el resultado sea confiable.',
  },
];

export const automationIdeas = [
  'Responder consultas frecuentes de clientes con la información de tu negocio',
  'Extraer datos de facturas, PDFs o formularios y pasarlos a una hoja de cálculo',
  'Clasificar correos y avisar al responsable de cada caso',
  'Generar reportes semanales a partir de tus datos',
];

export const experiences = [
  {
    company: 'CETEMIN',
    role: 'Unity Developer (AR)',
    period: '2024 – 2025',
    tags: ['Unity', 'C#', 'Vuforia', 'AR'],
    description:
      'Desarrollo de simuladores educativos con realidad aumentada para el sector minero. Escenas interactivas con Vuforia para capacitación industrial.',
  },
  {
    company: 'Sysbay',
    role: 'Unity Developer (VR)',
    period: '2022',
    tags: ['Unity', 'C#', 'VR', '360°'],
    description:
      'Experiencias de realidad virtual interactivas, incluyendo tiendas virtuales y tours 360° para mostrar productos y espacios.',
  },
  {
    company: 'I.E. La Salle',
    role: 'Desarrollador, proyecto de tesis',
    period: '2021',
    tags: ['Unity', 'C#', 'Android', 'Educación'],
    description:
      'Aplicación educativa de matemáticas para Android, orientada a estudiantes de primaria, como proyecto de tesis universitaria.',
  },
  {
    company: 'MTC Arequipa',
    role: 'Practicante de sistemas',
    period: '2020',
    tags: ['Sistemas', 'Soporte TI'],
    description:
      'Prácticas profesionales en el Ministerio de Transportes y Comunicaciones, sede Arequipa. Primera experiencia laboral.',
  },
];

const itch = (id) => `https://img.itch.zone/${id}`;

export const projects = {
  games: [
    { title: 'Bubble Boom', image: itch('aW1nLzE4MTI4MTIyLmpwZw==/original/5dXzAX.jpg'), link: 'https://sambogames.itch.io/bubble-boom' },
    { title: 'Grillas', subtitle: 'Puzzle tipo Tetris', image: itch('aW1nLzE4MTI3Mzc5LnBuZw==/original/BCXrMC.png'), link: 'https://sambogames.itch.io/tetris' },
    { title: 'MathBuffet', image: itch('aW1nLzE4MDU3NDIxLmpwZw==/original/4rlyEi.jpg'), link: 'https://sambogames.itch.io/mathclient' },
    { title: 'Wizard Defender', image: itch('aW1nLzE4MDM4OTk2LnBuZw==/original/BXNMMz.png'), link: 'https://sambogames.itch.io/denfender' },
    { title: 'Space Attack', image: asset('assets/GalacticInvasion.webp'), link: 'https://sambogames.itch.io/space' },
    { title: 'Tic Tac Toe', image: itch('aW1nLzEyMjY4NDk4LnBuZw==/original/mARiHl.png'), link: 'https://sambogames.itch.io/tic-tac-toe' },
    { title: 'Harvest Rush', image: itch('aW1nLzEyMjY2ODQzLnBuZw==/original/5XCR6f.png'), link: 'https://sambogames.itch.io/harvest-rush' },
    { title: 'Fantasy Math', image: itch('aW1nLzEyMTUzOTI2LnBuZw==/original/tZ4UBM.png'), link: 'https://sambogames.itch.io/fantasy-math' },
    { title: 'Floating Islands Runner', image: itch('aW1nLzEyMTUzODE5LnBuZw==/original/Aiqw0f.png'), link: 'https://sambogames.itch.io/floating-islandsr-runner' },
    { title: 'Magic Math Defender', subtitle: 'Proyecto de tesis', image: itch('aW1nLzEwMzMzNTc2LnBuZw==/original/IjDPym.png'), link: 'https://sambogames.itch.io/magic-math-defender' },
    { title: 'CERV Defense', image: itch('aW1nLzEzMTk0MjM1LnBuZw==/original/GwDkgo.png'), link: 'https://sambogames.itch.io/cervdefense' },
    { title: 'You Are Alive', image: itch('aW1nLzEwMjg1NTMwLnBuZw==/original/kBUD9%2F.png'), link: 'https://sambogames.itch.io/you-are-alive' },
  ],
  web: [
    { title: 'E-Commerce', subtitle: 'Tienda AluraGeek', image: asset('assets/aluraGeek.webp'), link: 'https://dixmattostudio.com/E-Comerce/index.html' },
    { title: 'Encriptador de texto', subtitle: 'Reto Alura ONE', image: asset('assets/retoencriptado.webp'), link: 'https://dixmattostudio.com/RetoEncriptado/' },
    { title: 'Fruta & Fruto', image: asset('assets/FrutaFruto.webp'), link: 'https://dixmattostudio.com/Fruta%26Fruto/' },
    { title: 'Mini Alura', image: asset('assets/miniAlura.webp'), link: 'https://dixmattostudio.com/MiniAlura/' },
    { title: 'PetShop', image: asset('assets/PetShop.webp'), link: 'https://dixmattostudio.com/PetShop/registro.html' },
    { title: 'Portafolio anterior', image: asset('assets/Portfolio.webp'), link: 'https://dixmattostudio.com/' },
  ],
};

export const badges = [
  { src: 'assets/insignia1.webp', alt: 'Insignia Alura ONE, reto 1' },
  { src: 'assets/InsignieaReto2.webp', alt: 'Insignia Alura ONE, reto 2' },
  { src: 'assets/InsignieaReto3.webp', alt: 'Insignia Alura ONE, reto 3' },
  { src: 'assets/InsignieaReto4.webp', alt: 'Insignia Alura ONE, reto 4' },
];
