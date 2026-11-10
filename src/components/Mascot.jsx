import { useEffect, useRef, useState } from 'react';
import { asset } from '../data';

// El perro de Dixmatto Studio asomándose por detrás de un marco.
// Sube cuando la sección entra en pantalla. Se coloca dentro del elemento
// enmarcado; el padre de ese elemento debe tener la clase "peek-scope".
const Mascot = ({ variant = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      src={asset('assets/dog.webp')}
      alt=""
      aria-hidden="true"
      width="420"
      height="398"
      loading="lazy"
      className={`peek ${variant} ${visible ? 'is-in' : ''}`}
    />
  );
};

export default Mascot;
