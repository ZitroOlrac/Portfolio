import { useEffect } from 'react';
import { asset } from '../data';

// El perro de Dixmatto Studio se asoma en cada sección al hacer scroll.
// Cada vez que vuelves a una sección aparece en otro marco y en otra posición.
// - frames: tarjetas detrás de las que se asoma (por arriba).
// - edge: en secciones sin tarjetas, se asoma de lado desde el borde de la pantalla.
// - firstRowOnly: usa solo los marcos de la primera fila.
// Nunca se coloca donde taparía texto (ver coversText).
const SPOTS = [
  { section: '#servicios', frames: '.service' },
  { section: '#automatizacion', edge: 'right' },
  { section: '#experiencia', edge: 'left' },
  { section: '#proyectos', frames: '.project' },
  { section: '#videos', frames: '.video--wide .video__frame' },
  { section: '#sobre-mi', frames: '.about__badges' },
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
    if (spot.firstRowOnly && frames.length) {
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
    top: `${Math.floor(tr.top - sr.top) - wrapH}px`,
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

// ¿El perro taparía algún texto en esa posición?
function coversText(section, wrap) {
  const r = wrap.getBoundingClientRect();
  const box = { left: r.left + 4, right: r.right - 4, top: r.top + 4, bottom: r.bottom - 4 };
  const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) =>
      n.nodeValue.trim() && !wrap.contains(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
  });
  const range = document.createRange();
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    range.selectNodeContents(n);
    for (const t of range.getClientRects()) {
      if (t.width && t.left < box.right && t.right > box.left && t.top < box.bottom && t.bottom > box.top) {
        return true;
      }
    }
  }
  return false;
}

// Coloca al perro sin animación (para que no "gire" al cambiar de sitio) y luego lo hace asomarse.
function reveal(state) {
  const { wrap } = state;
  wrap.classList.add('is-placing');
  void wrap.offsetWidth;
  wrap.classList.remove('is-placing');
  requestAnimationFrame(() => requestAnimationFrame(() => wrap.classList.add('is-in')));
}

function show(spot, state) {
  const list = candidates(spot, state.section);
  state.wrap.classList.add('is-placing');
  state.wrap.classList.remove('is-in');
  if (!list.length) return;

  // Prueba varios marcos y posiciones hasta encontrar uno que no tape texto.
  const previous = state.target;
  for (let attempt = 0; attempt < 16; attempt++) {
    state.target = pick(list, attempt < 8 ? previous : null);
    state.fx = rand(0.1, 0.9);
    state.fy = rand(0.2, 0.75);
    state.tilt = rand(-7, 7);
    state.flip = Math.random() < 0.5;
    place(state);
    if (!coversText(state.section, state.wrap)) {
      reveal(state);
      return;
    }
  }
  // Si no hay ningún sitio libre, en esta visita no se asoma.
  state.target = null;
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

    // Mientras se ve, el perro sigue a su tarjeta si esta se mueve
    // (imágenes que terminan de cargar, animaciones, cambios de pestaña…).
    let follow = 0;
    const track = () => {
      states.forEach((s) => {
        if (!s.visible || !s.target || typeof s.target === 'string') return;
        const tr = s.target.getBoundingClientRect();
        const sr = s.section.getBoundingClientRect();
        const key = `${Math.round(tr.top - sr.top)},${Math.round(tr.left - sr.left)},${Math.round(tr.width)}`;
        if (key !== s.key) {
          s.key = key;
          place(s);
        }
      });
      follow = requestAnimationFrame(track);
    };
    follow = requestAnimationFrame(track);

    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        states.forEach((s) => {
          if (!s.target || !s.visible) return;
          place(s);
          if (coversText(s.section, s.wrap)) show(s.spot, s);
        })
      );
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(follow);
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
