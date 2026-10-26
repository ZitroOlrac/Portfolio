// Contenido del portafolio. Edita aquí textos, proyectos y enlaces sin tocar los componentes.

export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: 'Carlo Prado',
  fullName: 'Carlo Fabian Prado Ortiz',
  role: 'Desarrollador de videojuegos, web y automatización con IA',
  location: 'Madrid, España',
  studio: 'Dixmatto Studio',
  cv: 'media/ResumeCV_Es_CarloGameDev.pdf',
  photo: 'assets/carlo.webp',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ZitroOlrac' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlo-fabian-prado-ortiz-170230121/' },
  { label: 'Itch.io', href: 'https://sambogames.itch.io/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@dixmattostudio' },
  { label: 'Instagram', href: 'https://www.instagram.com/pradoortiz_dev/' },
];

export const youtubeChannel = 'https://www.youtube.com/@dixmattostudio';

// Videos del canal. Para agregar uno nuevo, copia el ID del link
// (youtube.com/watch?v=<ID> o youtube.com/shorts/<ID>) y añádelo al inicio de su lista.
export const videoGroups = [
  {
    id: 'n8n',
    label: 'Automatización con n8n',
    description: 'Serie "Aprende conmigo": bots de Telegram con IA, paso a paso con n8n y Docker.',
    format: 'wide',
    videos: [
      { id: 'N-UFBhJbYZU', title: 'Cómo hacer que tu bot de Telegram lea documentos de Google Sheets', duration: '28:20' },
      { id: 'jxuzxy9CaMY', title: 'Cómo hacer que tu bot de Telegram entienda mensajes de voz con n8n, Ngrok y Docker', duration: '11:27' },
      { id: 'IEmTeZYiAk8', title: 'Cómo conecté Telegram a n8n usando Ngrok y Docker', duration: '22:51' },
      { id: 'MMpdj4zXCZk', title: 'Mi primer chat con IA en n8n (Docker + Hugging Face)', duration: '19:51' },
    ],
  },
  {
    id: 'trailers',
    label: 'Tráileres',
    description: 'Tráileres de mis juegos publicados en itch.io.',
    format: 'wide',
    videos: [
      { id: 'hCB7QYAPHI4', title: 'Fantasy Math', duration: '0:31' },
      { id: 'XBKmM3Vr4ao', title: 'Floating Islands Runner', duration: '0:32' },
    ],
  },
  {
    id: 'shorts',
    label: 'Tutoriales de Unity',
    description: 'Shorts sobre animación, cámaras e inteligencia artificial en juegos.',
    format: 'tall',
    videos: [
      { id: 'R5xg-qAck_M', title: 'Field of view' },
      { id: 'vKllIsU2snE', title: 'Cinemachine track & dolly' },
      { id: 'kfaGxlYkS-4', title: 'Cinemáticas épicas' },
      { id: 'njc3nP2tvPI', title: 'Storytime' },
      { id: 'ER6HB_3ZQAQ', title: 'Animation events' },
      { id: 'L2sYUzlswqA', title: 'Recreando la IA de Hello Neighbor' },
      { id: 'Mo3WNVqg414', title: 'Anima tu personaje en Unity' },
      { id: 'hgijVrFLYxw', title: 'Animaciones con Mixamo' },
      { id: 'TukuNd4tPo8', title: 'Personalizar personaje en Unity' },
      { id: '7m7az3IUHbg', title: 'Configurar personaje en Unity' },
    ],
  },
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
    tools: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'TanStack Query', 'Node.js', 'Git'],
  },
  {
    id: 'ai',
    title: 'Automatización de procesos con IA',
    text: 'Flujos que hacen solas las tareas repetitivas de una empresa: leer correos y documentos, clasificar, responder y llevar los datos a donde se necesitan.',
    tools: ['n8n', 'Docker', 'Bots de Telegram', 'Hugging Face', 'Google Sheets', 'Ngrok'],
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
    tags: ['Unity', 'C#', 'Vuforia', 'AR', 'IA'],
    description:
      'Dos simuladores educativos con realidad aumentada para capacitar operadores mineros: 6 vehículos simulados, patrones de perforación e inspecciones. También desarrollé «Sofía», un asistente con IA que guía y explica normas de seguridad.',
  },
  {
    company: 'INGENIUM',
    role: 'Analista de soporte web',
    period: '2023',
    tags: ['Moodle', 'HTML', 'CSS'],
    description:
      'Soporte y mantenimiento de la plataforma Moodle y maquetación de contenidos con HTML y CSS.',
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
    company: 'GRTC Arequipa',
    role: 'Practicante de sistemas',
    period: '2018',
    tags: ['HTML', 'CSS', 'JavaScript', 'Soporte TI'],
    description:
      'Prácticas en la Gerencia Regional de Transportes y Comunicaciones de Arequipa: mejoras y mantenimiento del frontend del sitio web. Primera experiencia laboral.',
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
    { title: 'Pixel Market', subtitle: 'Tienda online · React + TypeScript', image: asset('assets/PixelMarket.webp'), link: 'https://zitroolrac.github.io/tienda-react/' },
    { title: 'Pokédex', subtitle: 'PokeAPI · TanStack Query', image: asset('assets/Pokedex.webp'), link: 'https://zitroolrac.github.io/pokedex-react/' },
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
