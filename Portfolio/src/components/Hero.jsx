import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import aviralImg from '../assets/cropped aviral.png';

const Hero = () => {
  const ROLES = ['Full Stack Web Developer', 'MERN Stack Developer', 'Competitive Programmer', 'DSA Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let typingTimer;

    if (!isDeleting && charIndex < currentRole.length) {
      typingTimer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 62);
    } else if (!isDeleting && charIndex === currentRole.length) {
      typingTimer = setTimeout(() => setIsDeleting(true), 1900);
    } else if (isDeleting && charIndex > 0) {
      typingTimer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 34);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, roleIndex]);

  const PARTICLES = [...Array(14)].map((_, i) => ({
    w: 2 + (i % 4),
    l: `${6 + i * 6.8}%`,
    t: `${14 + (i * 33) % 65}%`,
    dur: `${3 + i * 0.35}s`,
    delay: `${i * 0.22}s`,
    col: i % 3 === 0 ? '#00dcff' : (i % 3 === 1 ? '#7b5ff5' : '#00ffb3'),
  }));

  return (
    <section id="home" className="hero-section">
      {/* Background Decor */}
      <div className="hero-bg-grid" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      
      {/* Floating Particles Backdrop */}
      <div className="hero-particles-bg">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{ width: p.w, height: p.w, background: p.col, left: p.l, top: p.t, animationDuration: p.dur, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <motion.div 
            className="availability-badge-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="availability-dot" /> Open to new opportunities
          </motion.div>

          <motion.h1 
            className="hero-name-new"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Aviral <span className="text-gradient">Varshney</span>
          </motion.h1>

          <motion.div 
            className="hero-typing-new"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span>{displayText}</span>
            <span className="cursor-blink" />
          </motion.div>

          <motion.div 
            className="hero-bio-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              CSE undergraduate at <b>Lovely Professional University</b> (CGPA 8.64). 
              Crafting high-performance MERN applications with a core focus on <b>scalability and algorithmic efficiency</b>.
            </p>
            <p>
              I bridge the gap between complex backend logic and intuitive frontend experiences, shipping products that scale.
            </p>
          </motion.div>

          <motion.div 
            className="hero-socials-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="https://www.linkedin.com/in/avi7/" target="_blank" rel="noreferrer" className="social-tag-new linkedin">
              <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/avi-var07" target="_blank" rel="noreferrer" className="social-tag-new github">
              <svg className="social-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </motion.div>

          <motion.div 
            className="hero-actions-new"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link to="projects" smooth={true} className="btn-primary-new">Explores Projects</Link>
            <Link to="contact" smooth={true} className="btn-secondary-new">Get in Touch</Link>
          </motion.div>
        </div>

        {/* Right Column: Visual */}
        <div className="hero-visual">
          <motion.div 
            className="image-frame-wrapper"
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="image-frame">
              <img src={aviralImg} alt="Aviral Varshney" className="hero-img-professional" />
              <div className="image-overlay-gradient" />
            </div>
            {/* Decorative Elements around image */}
            <div className="frame-decoration-1" />
            <div className="frame-decoration-2" />
            <div className="frame-decoration-glow" />
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 6% 60px;
          position: relative;
          background: #04070f;
          overflow: hidden;
        }

        .hero-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1250px;
          gap: 60px;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        /* Profile Image Framing */
        .image-frame-wrapper {
          position: relative;
          width: 100%;
          max-width: 440px;
        }
        .image-frame {
          width: 100%;
          aspect-ratio: 0.85;
          background: #080c14;
          border-radius: 40px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          position: relative;
          z-index: 2;
        }
        .hero-img-professional {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transform: scale(1.2);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .image-frame:hover .hero-img-professional {
          transform: scale(1.28);
        }
        .image-overlay-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(4, 7, 15, 0.6) 0%, transparent 40%);
          z-index: 3;
        }

        /* Decoration Elements */
        .frame-decoration-1 {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          border-top: 4px solid var(--a1);
          border-right: 4px solid var(--a1);
          border-radius: 0 20px 0 0;
          z-index: 1;
          opacity: 0.5;
        }
        .frame-decoration-2 {
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 100px;
          height: 100px;
          border-bottom: 4px solid var(--a2);
          border-left: 4px solid var(--a2);
          border-radius: 0 0 0 20px;
          z-index: 1;
          opacity: 0.5;
        }
        .frame-decoration-glow {
          position: absolute;
          inset: -30px;
          background: radial-gradient(circle, rgba(0, 220, 255, 0.15) 0%, transparent 70%);
          z-index: 0;
          filter: blur(20px);
        }

        /* Typography & Content */
        .availability-badge-new {
          background: rgba(0, 255, 179, 0.08);
          border: 1px solid rgba(0, 255, 179, 0.2);
          color: #00ffb3;
          padding: 6px 14px;
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        .availability-dot {
          width: 8px;
          height: 8px;
          background: #00ffb3;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ffb3;
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .hero-name-new {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 12px;
          letter-spacing: -2px;
          color: #fff;
        }
        .text-gradient {
          background: linear-gradient(135deg, var(--a1) 0%, var(--a2) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-typing-new {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(1rem, 2vw, 1.4rem);
          color: var(--a1);
          margin-bottom: 24px;
          height: 1.5em;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .hero-bio-new {
          max-width: 600px;
          margin-bottom: 38px;
        }
        .hero-bio-new p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .hero-bio-new b { color: var(--text-primary); }

        .hero-socials-new {
          display: flex;
          gap: 12px;
          margin-bottom: 34px;
        }
        .social-tag-new {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 6px 0;
          background: transparent;
          border: none;
          border-radius: 0;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s;
        }
        .social-icon-svg {
          width: 20px;
          height: 20px;
        }
        .social-tag-new:hover {
          background: rgba(255, 255, 255, 0.06);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .linkedin:hover { color: #00a0dc; }

        .hero-actions-new {
          display: flex;
          gap: 20px;
        }
        .btn-primary-new {
          padding: 16px 36px;
          background: var(--a1);
          color: #000;
          border-radius: 14px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 15px 30px rgba(0, 220, 255, 0.2);
        }
        .btn-primary-new:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 220, 255, 0.3);
          filter: brightness(1.1);
        }
        .btn-secondary-new {
          padding: 16px 36px;
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.15);
          color: #fff;
          border-radius: 14px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s;
        }
        .btn-secondary-new:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #fff;
          transform: translateY(-5px);
        }
        .hero-particles-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatP ease-in-out infinite;
        }

        @keyframes floatP {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-15px); }
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Response Styles */
        @media (max-width: 1024px) {
          .hero-container { gap: 40px; }
          .hero-name-new { font-size: 3.5rem; }
        }

        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 50px;
          }
          .hero-content {
            align-items: center;
            text-align: center;
            flex: 1;
          }
          .hero-name-new { font-size: 3rem; }
          .hero-typing-new { justify-content: center; }
          .hero-socials-new { justify-content: center; }
          .hero-actions-new { justify-content: center; width: 100%; flex-wrap: wrap; }
          .hero-visual { width: 100%; max-width: 400px; }
        }

        @media (max-width: 480px) {
          .hero-actions-new .btn-primary-new, .hero-actions-new .btn-secondary-new { width: 100%; text-align: center; }
          .hero-socials-new { flex-direction: column; width: 100%; }
        }
      `}} />
    </section>
  );
};

export default Hero;
