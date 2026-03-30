import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Training = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const TRAININGS = [
    {
      title: 'Computer Science Trainee',
      org: 'East Central Railway',
      date: 'June 2024 - July 2024',
      desc: 'Gained hands-on experience in railway computing systems, networking, and software maintenance. Focused on understanding large-scale infrastructure and industrial applications of computer science.',
      col: '#3b82f6',
      certUrl: 'https://drive.google.com/file/d/1HR49v4R9Udjjv2yltXvOEfTLJZq3iNqx/view?usp=sharing',
    },
    {
      title: 'Basics Of DSA',
      org: 'Center for Professional Enhancement, LPU',
      date: 'May 2025 - June 2025',
      desc: 'Intensive training on Data Structures and Algorithms. Covered advanced problem-solving techniques, complexity analysis, and implementation of core data structures in Java.',
      col: '#10b981',
      certUrl: 'https://drive.google.com/file/d/197d7TfKowOgnsybL6F-TB7dy_BVKywaP/view?usp=sharing',
    }
  ];

  return (
    <section id="training" className="training-section" ref={containerRef}>
      <div className="section-intro rv">
        <div className="section-eyebrow">Professional Growth</div>
        <h2 className="section-title">Training <span className="text-gradient"></span></h2>
        <p className="section-subtitle">Specialized programs that refined my technical expertise and industry knowledge.</p>
      </div>

      <div className="timeline-wrapper">
        {/* Central Animated Line */}
        <div className="timeline-line-bg" />
        <motion.div 
          className="timeline-line-progress" 
          style={{ scaleY }}
        />

        {TRAININGS.map((t, i) => (
          <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            {/* The Node/Marker */}
            <motion.div 
              className="timeline-node"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              style={{ '--accent': t.col }}
            >
              <div className="node-inner" />
              <div className="node-glow" />
            </motion.div>

            {/* The Content Card */}
            <motion.div 
              className="timeline-content-wrapper"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glass-card timeline-card" style={{ '--accent': t.col }}>
                <div className="card-accent-line" />
                <div className="training-header">
                  <span className="training-date">{t.date}</span>
                  <h3 className="training-title">{t.title}</h3>
                  <div className="training-org">{t.org}</div>
                </div>
                
                <p className="training-desc">{t.desc}</p>
                
                <div className="training-actions">
                  <a href={t.certUrl} target="_blank" rel="noreferrer" className="train-btn view-btn" style={{ '--btn-col': t.col }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View Certificate
                  </a>
                  <a href={t.certUrl} download className="train-btn download-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .training-section { 
          padding: 120px 6%; 
          position: relative; 
          background: var(--bg); 
          overflow: hidden;
        }
        
        .timeline-wrapper {
          position: relative;
          max-width: 1200px;
          margin: 100px auto 40px;
          display: flex;
          flex-direction: column;
          gap: 60px;
        }

        /* Essential Timeline Line */
        .timeline-line-bg {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(-50%);
          z-index: 1;
        }
        .timeline-line-progress {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--a1), var(--a2), var(--a3));
          transform: translateX(-50%);
          transform-origin: top;
          z-index: 2;
          box-shadow: 0 0 15px var(--a1);
        }

        .timeline-item {
          display: flex;
          width: 100%;
          position: relative;
          z-index: 5;
        }
        .timeline-item.left { justify-content: flex-start; }
        .timeline-item.right { justify-content: flex-end; }

        .timeline-content-wrapper {
          width: 45%;
        }

        /* Minimalist Nodes */
        .timeline-node {
          position: absolute;
          left: 50%;
          top: 40px;
          width: 16px;
          height: 16px;
          transform: translate(-50%, -50%);
          z-index: 10;
        }
        .node-inner {
          width: 100%;
          height: 100%;
          background: var(--bg);
          border: 3px solid var(--accent);
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }
        .node-glow {
          position: absolute;
          inset: -6px;
          background: var(--accent);
          border-radius: 50%;
          filter: blur(8px);
          opacity: 0.4;
          z-index: 1;
        }

        /* Professional Cards */
        .timeline-card {
          padding: 40px;
          position: relative;
          background: rgba(14, 21, 37, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          overflow: hidden;
        }
        .timeline-card:hover {
          background: rgba(14, 21, 37, 0.7);
          border-color: var(--accent);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .card-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), transparent);
          opacity: 0.6;
        }

        .training-header { margin-bottom: 24px; }
        .training-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          display: block;
          margin-bottom: 12px;
        }
        .training-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 4px;
          line-height: 1.2;
        }
        .training-org {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-secondary);
          opacity: 0.8;
        }
        .training-desc {
          font-size: 0.95rem;
          color: var(--text-dim);
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .training-actions {
          display: flex;
          gap: 16px;
        }
        .train-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 8px;
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          transition: all 0.3s ease;
          flex: 1;
          justify-content: center;
          text-decoration: none;
        }

        .view-btn {
          background: var(--btn-col);
          color: #000;
        }
        .view-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px color-mix(in srgb, var(--btn-col) 40%, transparent);
          filter: brightness(1.1);
        }

        .download-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }
        .download-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
        }

        /* Connectors for visual polish */
        .timeline-item::after {
          content: '';
          position: absolute;
          top: 40px;
          width: 5%;
          height: 1px;
          background: rgba(255,255,255,0.1);
          z-index: 1;
        }
        .timeline-item.left::after { right: 50%; }
        .timeline-item.right::after { left: 50%; }

        @media (max-width: 850px) {
          .timeline-line-bg, .timeline-line-progress, .timeline-node { left: 0; transform: none; }
          .timeline-item { padding-left: 35px; justify-content: flex-start !important; }
          .timeline-content-wrapper { width: 100%; }
          .timeline-item::after { display: none; }
          .timeline-node { left: -8px; }
        }
      `}} />
    </section>
  );
};

export default Training;
