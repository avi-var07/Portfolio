import React, { useState, useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef();
  const ringRef = useRef();
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = `${mousePos.current.x}px`;
        dotRef.current.style.top = `${mousePos.current.y}px`;
      }
      
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.13;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.13;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <style dangerouslySetInnerHTML={{ __html: `
        .cursor-dot {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--a1);
          box-shadow: 0 0 10px var(--a1);
          transform: translate(-50%, -50%);
          transition: opacity .3s;
        }
        .cursor-ring {
          position: fixed;
          pointer-events: none;
          z-index: 9998;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 220, 255, .35);
          transform: translate(-50%, -50%);
        }
        @media (max-width: 960px) {
          .cursor-dot, .cursor-ring { display: none; }
        }
      `}} />
    </>
  );
};

export default Cursor;
