# Portafolio de Carlo Prado

Portafolio personal: videojuegos en Unity, experiencias de realidad aumentada y virtual, desarrollo web y automatización de procesos con IA.

**En vivo:** https://zitroolrac.github.io/Portfolio/

## Stack

- React 19 + Vite
- CSS propio (sin frameworks), con modo oscuro automático y diseño responsive
- Formulario de contacto con [Formspree](https://formspree.io/)
- Despliegue en GitHub Pages con `gh-pages`

## Desarrollo

```bash
npm install
npm run dev      # servidor local
npm run lint     # revisar el código
npm run deploy   # compilar y publicar en GitHub Pages
```

## Editar el contenido

Todos los textos, proyectos, experiencia y enlaces están en [`src/data.js`](src/data.js). Para agregar un juego o una web, añade un objeto al arreglo correspondiente de `projects`; las tarjetas y los contadores se actualizan solos.

Las imágenes van en `public/assets/` (preferiblemente en `.webp`).
