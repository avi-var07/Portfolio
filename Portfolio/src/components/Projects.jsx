import React from 'react';
import driveSutraImg from '../assets/driveSutra.png';
import javaImg from '../assets/java.png';
import kahanChaleImg from '../assets/kahanChale.png';
import ngoImg from '../assets/ngo.png';
import portfolioImg from '../assets/portfolio.png';

const Projects = () => {
  const PROJECTS = [
    {
      id: 1, 
      title: 'driveSutraGo', 
      sub: 'Eco-Driving Gamification Platform', 
      emoji: '🚗',
      bgImage: driveSutraImg, 
      grad: 'linear-gradient(135deg,#0c2340 0%,#073622 100%)', 
      accent: '#00ffb3', 
      date: 'Sep–Dec 2025',
      desc: 'Built a gamified eco-driving MERN platform aimed at encouraging sustainable travel behavior through real-time trip mode recommendation, tracking, rewards, and community-driven engagement.',
      hl: ['Enhanced user engagement through gamification elements including points, levels, achievements, and community challenges', 'Real-time trip monitoring with low-latency location updates'],
      tech: ['ReactJS', 'NodeJS', 'Express', 'MongoDB'],
      github: 'https://github.com/avi-var07/driveSutra.com', 
      live: 'https://drivesutrago.vercel.app', 
      feat: true
    },
    {
      id: 2, 
      title: 'Skill-Based Candidate Shortlisting System', 
      sub: 'Java DSA Recruitment System', 
      emoji: null,
      bgImage: javaImg,
      grad: 'linear-gradient(135deg,#1a0c2e 0%,#0a1a3d 100%)', 
      accent: '#7b5ff5', 
      date: 'Jun–Jul 2025',
      desc: 'Developed a command-line based application in Java that evaluates and shortlists candidates based on their problem-solving and technical skills. The project emphasizes core programming, data structures, and algorithmic thinking while simulating a real-world hiring workflow in a simplified CLI environment.',
      hl: ['Java based CLI system', 'Modular OOP with separate parsing classes'],
      tech: ['Java', 'DSA', 'OOP'],
      github: 'https://github.com/avi-var07/Skill-Based-Candidate-Shortlisting', 
      live: null, 
      feat: false
    },
    {
      id: 3, 
      title: 'Kahan Chale', 
      sub: 'Tour Operator Website', 
      emoji: null,
      bgImage: kahanChaleImg,
      grad: 'linear-gradient(135deg,#1a2010 0%,#0d1f2d 100%)', 
      accent: '#f59e0b', 
      date: 'Mar–May 2025',
      desc: 'Built a responsive tour operator website, “Kahan Chale,” to simplify tour planning and package selection, featuring modules like booking system, guide assignment, user authentication, and advanced search/filter options by budget, destination, and duration, while enabling users to explore destinations, view itineraries, and customize trips for a seamless experience.',
      hl: ['Customised Booking System', 'Discover must-visit places, cultural highlights, and itinerary details '],
      tech: ['HTML', 'Tailwind', 'JS', 'PHP'],
      github: 'https://github.com/avi-var07/Tour-Guide-Management-System', 
      live: null, 
      feat: false
    },
    {
      id: 4, 
      title: 'Khaana Bank Trust Website', 
      sub: 'Cloud-Based Archiving', 
      emoji: null,
      bgImage: ngoImg,
      grad: 'linear-gradient(135deg,#0d1a2b 0%,#1a2a3a 100%)', 
      accent: '#38bdf8', 
      date: 'Future',
      desc: 'Planned personal project focusing on high-speed data archival and retrieval using AWS and distributed systems architecture.',
      hl: ['Scalable storage logic', 'End-to-end encryption'],
      tech: ['Express', 'Node', 'React'],
      github: 'https://github.com/avi-var07/NGO-Project', 
      live: null, 
      feat: false
    },
    {
      id: 5, 
      title: 'Gamified Portfolio', 
      sub: 'Gamified version of my Portfolio', 
      emoji: '✨',
      bgImage: portfolioImg,
      grad: 'linear-gradient(135deg,#04070f 0%,#0b1422 100%)', 
      accent: '#00dcff', 
      date: 'Present',
      desc: 'Built a gamified personal portfolio platform where users explore projects and features to earn XP, unlock levels, and discover 10 hidden elements across the site, with each level progressively becoming more challenging, encouraging deeper interaction and engagement through an interactive and reward-driven experience.',
      hl: ['10 hidden features to explore', 'Each level progressively becomes more challenging'],
      tech: ['React', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/avi-var07/Portfolio', 
      live: null, 
      feat: false
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-intro rv">
        <div className="section-eyebrow">Projects</div>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-subtitle">A collection of real-world applications and engineering experiments, now expanding.</p>
      </div>

      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <div key={p.id} className="project-card glass-card rv" style={{ '--accent': p.accent }}>
            <div className="project-visual">
              {/* Background Layer (Image or Gradient) */}
              <div 
                className="visual-bg" 
                style={{ 
                  background: p.bgImage ? `#0a111e url(${p.bgImage}) center/contain no-repeat` : p.grad 
                }} 
              />
              
              {/* Overlay Gradient (Ensures readability even with images) */}
              <div className="visual-overlay" />
              
              {/* Content on top of background */}
              <div className="visual-grid" />
              <span className={`project-emoji ${p.bgImage ? 'hidden' : ''}`}>{p.emoji}</span>
              {p.feat && <div className="feat-badge">★ Featured</div>}
            </div>
            
            <div className="project-content">
              <div className="project-meta">{p.date}</div>
              <h3 className="project-title">{p.title}</h3>
              <div className="project-sub" style={{ color: p.accent }}>{p.sub}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-highlights">
                {p.hl.map((h, j) => (
                  <div key={j} className="hl-item"><span>✓</span> {h}</div>
                ))}
              </div>
              <div className="project-tech-stack">
                {p.tech.map((t, j) => (
                  <span key={j} className="tech-chip">{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link github">⑂ GitHub</a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link live" style={{ background: `${p.accent}13`, borderColor: `${p.accent}44`, color: p.accent }}>↗ Live</a>
                ) : (
                  <span className="proj-link disabled">↗ N/A</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .projects-section { padding: 70px 6%; background: var(--bg2); }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 26px; }
        
        .project-card { padding: 0; overflow: hidden; display: flex; flex-direction: column; transition: all .3s; }
        .project-card:hover { transform: translateY(-5px); border-color: var(--accent); box-shadow: 0 24px 60px rgba(0,0,0,.4); }
        
        .project-visual { 
          height: 180px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          position: relative; 
          overflow: hidden; 
        }
        
        .visual-bg {
          position: absolute;
          inset: 0;
          transition: transform .5s ease;
          z-index: 1;
        }
        .project-card:hover .visual-bg {
          transform: scale(1.1);
        }
        
        .visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(4, 7, 15, 0.7) 100%);
          z-index: 2;
        }

        .visual-grid { 
          position: absolute; 
          inset: 0; 
          background-image: linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px); 
          background-size: 22px 22px; 
          opacity: 0.15; 
          z-index: 3;
          transition: opacity .3s; 
        }
        .project-card:hover .visual-grid { opacity: 0.3; }
        
        .project-emoji { 
          font-size: 3.8rem; 
          position: relative; 
          z-index: 4; 
          transition: transform .3s; 
        }
        .project-emoji.hidden {
          opacity: 0;
          transform: scale(0.5);
        }
        .project-card:hover .project-emoji:not(.hidden) { transform: scale(1.15) rotate(5deg); }
        
        .feat-badge { 
          position: absolute; 
          top: 12px; 
          right: 12px; 
          background: rgba(4, 7, 15, 0.8); 
          border: 1px solid rgba(255,255,255,.1); 
          border-radius: 6px; 
          padding: 3px 10px; 
          font-family: 'JetBrains Mono', monospace; 
          font-size: .68rem; 
          color: var(--a3); 
          backdrop-filter: blur(8px); 
          z-index: 5;
        }

        .project-content { padding: 24px; display: flex; flex-direction: column; flex: 1; z-index: 6; background: var(--card); }
        .project-meta { font-family: 'JetBrains Mono', monospace; font-size: .7rem; color: var(--text-dim); margin-bottom: 5px; }
        .project-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 1.1rem; color: var(--text-primary); margin-bottom: 3px; }
        .project-sub { font-size: .8rem; font-weight: 600; margin-bottom: 12px; }
        .project-desc { font-size: .85rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 15px; flex: 1; }
        
        .hl-item { display: flex; align-items: center; gap: 7px; font-size: .8rem; color: var(--a3); margin-bottom: 4px; }
        .project-tech-stack { display: flex; flex-wrap: wrap; gap: 6px; margin: 15px 0 20px; }
        .tech-chip { font-family: 'JetBrains Mono', monospace; font-size: .7rem; font-weight: 500; padding: 4px 10px; border-radius: 5px; background: rgba(0,220,255,.06); border: 1px solid rgba(0,220,255,.15); color: var(--a1); }

        .project-links { display: flex; gap: 10px; margin-top: auto; }
        .proj-link { flex: 1; text-align: center; padding: 10px 0; border-radius: 8px; font-family: 'Syne', sans-serif; font-weight: 700; font-size: .85rem; text-decoration: none; transition: all .22s; }
        .proj-link.github { background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.055); color: var(--text-secondary); }
        .proj-link.github:hover { border-color: rgba(255,255,255,.22); color: var(--text-primary); }
        .proj-link.disabled { background: rgba(255,255,255,.02); border: 1px solid rgba(255,255,255,.055); color: var(--text-dim); opacity: .5; cursor: default; }
      `}} />
    </section>
  );
};

export default Projects;
