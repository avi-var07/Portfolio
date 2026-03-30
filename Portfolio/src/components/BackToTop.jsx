import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button 
      className={`back-to-top ${visible ? 'visible' : ''}`} 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
      <style dangerouslySetInnerHTML={{ __html: `
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 990;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--a1);
          border: none;
          cursor: pointer;
          color: var(--bg);
          font-size: 1.1rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 22px rgba(0, 220, 255, .38);
          transition: all .22s;
          opacity: 0;
          pointer-events: none;
        }
        .back-to-top.visible {
          opacity: 1;
          pointer-events: auto;
        }
        .back-to-top:hover {
          transform: translateY(-3px);
        }
      `}} />
    </button>
  );
};

export default BackToTop;
