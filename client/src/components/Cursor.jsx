import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  let rx = 0, ry = 0;

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    let mx = 0, my = 0, raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      raf = requestAnimationFrame(animate);
    };

    const addHover = () => document.body.classList.add('hovered');
    const rmHover  = () => document.body.classList.remove('hovered');
    const targets  = 'a, button, .sic, .sc, .ec-card, .proj-card, .ach-card, .cert-card, .about-attr, .clink-card, .training-card, .skill-icon-card, input, textarea, select';

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll(targets).forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });
    animate();

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
