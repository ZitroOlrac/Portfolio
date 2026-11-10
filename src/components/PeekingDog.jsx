import { useEffect } from 'react';
import { asset } from '../data';

// El perro de Dixmatto Studio se asoma en cada sección al hacer scroll.
// Cada vez que vuelves a una sección aparece en otro marco y en otra posición.
// - frames: marcos detrás de los que se asoma (por arriba).
// - edge: se asoma de lado desde el borde de la pantalla.
// - anyRow: permite marcos de cualquier fila (si no, solo la primera fila).
const SPOTS = [
  { section: '#servicios', frames: '.service' },
  { section: '#automatizacion', edge: 'right' },
  { section: '#experiencia', edge: 'left' },
  { section: '#proyectos', frames: '.project' },
  { section: '#videos', frames: '.video--wide .video__frame, #videos .tabs', anyRow: true },
  { section: '#sobre-mi', frames: '.about__badges', edge: 'right' },
  { section: '#contacto', frames: '.contact__grid' },
];

const DOG_RATIO = 398 / 420;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = (list, avoid) => {
  const options = list.length > 1 ? list.filter((o) => o !== avoid) : list;
  return options[Math.floor(Math.random() * options.length)];
};

function candidates(spot, section) {
  const list = [];
  if (spot.frames) {
    let frames = [...section.querySelectorAll(spot.frames)].filter((el) => el.offsetParent);
    if (!spot.anyRow && frames.length) {
      const top = Math.min(...frames.map((el) => el.getBoundingClientRect().top));
      frames = frames.filter((el) => Math.abs(el.getBoundingClientRect().top - top) < 4);
    }
    list.push(...frames);
  }
  // De lado solo cuando hay margen suficiente para no tapar el texto.
  if (spot.edge && window.innerWidth >= 1280) list.push(spot.edge);
  return list;
}

function place(state) {
  const { section, wrap, img, target } = state;
  const dogW = window.innerWidth < 640 ? 92 : 118;
  const dogH = dogW * DOG_RATIO;
  const sr = section.getBoundingClientRect();
  img.style.width = `${dogW}px`;
  img.style.setProperty('--sx', state.flip ? -1 : 1);

  if (typeof target === 'string') {
    // De lado, desde el borde izquierdo o derecho de la pantalla.
    const wrapW = Math.round(dogH * 0.6);
    const wrapH = dogW + 30;
    const top = state.fy * Math.max(0, section.offsetHeight - wrapH);
    Object.assign(wrap.style, { top: `${top}px`, width: `${wrapW}px`, height: `${wrapH}px` });
    const left = target === 'left';
    wrap.style.left = left ? `${-sr.left}px` : 'auto';
    wrap.style.right = left ? 'auto' : `${sr.right - document.documentElement.clientWidth}px`;
    const cx = left ? wrapW - dogH / 2 : dogH / 2;
    img.style.left = `${cx - dogW / 2}px`;
    img.style.top = `${wrapH / 2 - dogH / 2}px`;
    img.style.setProperty('--r', `${(left ? 90 : -90) + state.tilt}deg`);
    img.style.setProperty('--ox', `${left ? -wrapW : wrapW}px`);
    img.style.setProperty('--oy', '0px');
    return;
  }

  // Por arriba de un marco: el borde superior del marco "tapa" la parte de abajo del perro.
  const tr = target.getBoundingClientRect();
  const pad = 14;
  const wrapH = Math.round(dogH * 0.6) + pad;
  const minX = tr.left - sr.left + 12;
  const maxX = tr.right - sr.left - dogW - 12;
  const x = Math.max(minX, Math.min(maxX, minX + state.fx * (maxX - minX)));
  Object.assign(wrap.style, {
    top: `${tr.top - sr.top - wrapH}px`,
    left: `${x - pad}px`,
    right: 'auto',
    width: `${dogW + pad * 2}px`,
    height: `${wrapH}px`,
  });
  img.style.left = `${pad}px`;
  img.style.top = `${pad}px`;
  img.style.setProperty('--r', `${state.tilt}deg`);
  img.style.setProperty('--ox', '0px');
  img.style.setProperty('--oy', `${wrapH}px`);
}

function show(spot, state) {
  const list = candidates(spot, state.section);
  if (!list.length) return;
  state.target = pick(list, state.target);
  state.fx = rand(0.1, 0.9);
  state.fy = rand(0.2, 0.75);
  state.tilt = rand(-10, 10);
  state.flip = Math.random() < 0.5;
  state.wrap.classList.remove('is-in');
  place(state);
  requestAnimationFrame(() => requestAnimationFrame(() => state.wrap.classList.add('is-in')));
}

const PeekingDog = () => {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const states = [];

    SPOTS.forEach((spot) => {
      const section = document.querySelector(spot.section);
      if (!section) return;
      const wrap = document.createElement('div');
      wrap.className = 'peek-wrap';
      wrap.setAttribute('aria-hidden', 'true');
      const img = document.createElement('img');
      img.src = asset('assets/dog.webp');
      img.alt = '';
      img.className = 'peek-dog';
      img.decoding = 'async';
      wrap.appendChild(img);
      section.appendChild(wrap);

      const state = { spot, section, wrap, img, target: null, visible: false };
      states.push(state);

      state.io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !state.visible) {
            state.visible = true;
            show(spot, state);
          } else if (!entry.isIntersecting && state.visible) {
            state.visible = false;
            wrap.classList.remove('is-in');
          }
        },
        { threshold: 0.2 }
      );
      state.io.observe(section);

      // Si cambia el contenido (por ejemplo, al cambiar de pestaña) y el marco desaparece, se mueve a otro.
      state.mo = new MutationObserver(() => {
        if (!state.visible) return;
        if (state.target && typeof state.target !== 'string' && !state.target.isConnected) show(spot, state);
      });
      state.mo.observe(section, { childList: true, subtree: true });
    });

    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => states.forEach((s) => s.target && s.visible && place(s)));
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      states.forEach((s) => {
        s.io.disconnect();
        s.mo.disconnect();
        s.wrap.remove();
      });
    };
  }, []);

  return null;
};

export default PeekingDog;
