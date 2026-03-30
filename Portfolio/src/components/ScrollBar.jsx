import React, { useState, useEffect } from 'react';

const ScrollBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      <style dangerouslySetInnerHTML={{ __html: `
        .scroll-progress-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          z-index: 3000;
        }
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--a1), var(--a2));
          transition: width .08s;
        }
      `}} />
    </div>
  );
};

export default ScrollBar;
