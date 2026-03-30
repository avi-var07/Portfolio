import React from 'react';

const AboutLayout = () => {
  const HOBBIES = ['📖 Tech Blogs', 'New Tech Trends', '🤖 AI/ML Exploration', '🎯 Hackathons', '📊 System Design', '⚡ Open Source', '🌐 Web Trends'];
  const APPROACH = [
    {i:'🏗️', t:'Architecture First', d:'Think in systems before writing code. Good architecture prevents 80% of future bugs.', col: '#00dcff'},
    {i:'👤', t:'User-First Mindset', d:"Every feature is justified by user need. Performance and UX aren't optional.", col: '#7b5ff5'},
    {i:'🧹', t:'Clean Code Culture', d:'Readable, modular code is the best documentation.', col: '#00ffb3'},
    {i:'🚀', t:'Ship & Iterate', d:'Perfection is the enemy of done. Ship early, gather feedback.', col: '#f59e0b'},
    {i:'📚', t:'Continuous Learning', d:'Daily time for DSA and new frameworks because tech never stops.', col: '#ef4444'},
  ];

  return (
    <section id="about" className="about-section">
      {/* Background Large Text Decor */}
      <div className="about-bg-text">AVIRAL</div>

      <div className="about-hero rv">
        <div className="section-eyebrow">The Developer</div>
        <h2 className="about-hero-title">About <span className="text-gradient">Me</span></h2>
      </div>

      <div className="about-main-grid">
        {/* Powerful Bio Box */}
        <div className="glass-card powerful-bio-card rv-l">
          <div className="bio-highlight">
            Full-stack developer focused on performance, scalability, and real-world impact.
          </div>
          <div className="bio-stanzas-powerful">
            <p>I'm <b>Aviral Varshney</b>, a Computer Science undergraduate at <b>Lovely Professional University</b> (CGPA 8.64) with a strong focus on <b>software development and problem solving</b>. My foundation comes from <b>data structures, algorithms, and competitive programming</b>, which trained me to think about efficiency, scalability, and clean logic in every solution I build.</p>
            <p>I work primarily with <b>Java and the MERN stack</b>, building full-stack applications using <b>React.js, Node.js, MongoDB, and Tailwind CSS</b>. I enjoy designing systems that are both scalable and user-friendly while maintaining performance and clean architecture.</p>
            <p>Along with development, I actively build real-world projects and continuously explore <b>system design, new web technologies, and open-source ideas</b> to grow as a developer.</p>
          </div>
          
          <div className="powerful-stats">
            <div className="p-stat">
              <span className="p-stat-val">8.64</span>
              <span className="p-stat-label">CGPA</span>
            </div>
            <div className="p-stat">
              <span className="p-stat-val">1700+</span>
              <span className="p-stat-label">LeetCode Rating</span>
            </div>
            <div className="p-stat">
              <span className="p-stat-val">Top 50</span>
              <span className="p-stat-label">Codolio</span>
            </div>
            <div className="p-stat">
              <span className="p-stat-val">5+</span>
              <span className="p-stat-label">Major Projects</span>
            </div>
          </div>
        </div>

        {/* Info Column */}
        <div className="about-side-col">
          <div className="glass-card facts-glass rv-r">
            <div className="card-header-p">
              <span className="header-icon">🧭</span>
              <h3>Quick Facts</h3>
            </div>
            <div className="fact-p-grid">
              {[
                {l:'Location', v:'Punjab, India', i:'📍'},
                {l:'Role', v:'Full Stack Developer', i:'💻'},
                {l:'Email', v:'aviralvarshney07@gmail.com', i:'📧'}
              ].map((f,i)=>(
                <div key={i} className="fact-p-item">
                  <div className="fact-p-label">{f.i} {f.l}</div>
                  <div className="fact-p-value">{f.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card hobbies-glass rv-r">
             <div className="card-header-p">
              <span className="header-icon">🕹️</span>
              <h3>When I am not Coding....</h3>
            </div>
            <div className="hobby-cloud">
              {HOBBIES.map((h,i)=>(
                <span key={i} className="hobby-p-tag">{h}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="approach-section rv">
        <h3 className="approach-section-title">My Approach</h3>
        <div className="approach-grid-p">
          {APPROACH.map((a,i)=>(
            <div key={i} className="approach-card-p glass-card" style={{'--accent': a.col}}>
               <div className="approach-icon-p">{a.i}</div>
               <div className="approach-title-p">{a.t}</div>
               <p className="approach-desc-p">{a.d}</p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-section { 
          padding: 80px 6%; 
          position: relative; 
          overflow: hidden; 
        }
        .about-bg-text {
          position: absolute;
          top: 0%;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Syne', sans-serif;
          font-size: clamp(10rem, 20vw, 25rem);
          font-weight: 900;
          color: rgba(255, 255, 255, 0.02);
          z-index: -1;
          pointer-events: none;
          letter-spacing: -20px;
        }

        .about-hero {
          text-align: center;
          margin-bottom: 60px;
        }
        .about-hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.1;
          max-width: 900px;
          margin: 0 auto;
          letter-spacing: -2px;
        }
        .text-gradient {
          background: linear-gradient(to right, var(--a1), var(--a2));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-main-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 30px;
          margin-bottom: 80px;
        }

        .powerful-bio-card {
          padding: 50px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          background: linear-gradient(135deg, rgba(11, 20, 34, 0.6) 0%, rgba(7, 12, 24, 0.8) 100%);
        }
        .bio-highlight {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--a1);
          line-height: 1.3;
          border-left: 4px solid var(--a1);
          padding-left: 24px;
        }
        .bio-stanzas-powerful p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .bio-stanzas-powerful b { color: var(--text-primary); }

        .powerful-stats {
          display: flex;
          gap: 40px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .p-stat { display: flex; flex-direction: column; gap: 4px; }
        .p-stat-val { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; color: var(--text-primary); }
        .p-stat-label { font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 2px; }

        .about-side-col {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .card-header-p { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .header-icon { font-size: 1.4rem; }
        .card-header-p h3 { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: var(--text-primary); }

        .facts-glass, .hobbies-glass { padding: 30px; }
        .fact-p-grid { display: flex; flex-direction: column; gap: 16px; }
        .fact-p-item { border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px; }
        .fact-p-item:last-child { border: none; }
        .fact-p-label { font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .fact-p-value { font-size: 0.95rem; font-weight: 600; color: var(--text-primary); }

        .hobby-cloud { display: flex; flex-wrap: wrap; gap: 10px; }
        .hobby-p-tag {
          padding: 8px 16px; border-radius: 12px; font-size: 0.82rem; font-weight: 600;
          background: rgba(123, 95, 245, 0.06); border: 1px solid rgba(123, 95, 245, 0.15);
          color: var(--a2); transition: all 0.25s; cursor: default;
        }
        .hobby-p-tag:hover { transform: translateY(-3px); background: rgba(123, 95, 245, 0.12); }

        .approach-section { text-align: center; }
        .approach-section-title { font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 40px; }
        .approach-grid-p {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .approach-card-p {
          padding: 34px 24px;
          text-align: left;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .approach-card-p:hover {
          border-color: var(--accent);
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }
        .approach-icon-p { font-size: 2.2rem; margin-bottom: 20px; }
        .approach-title-p { font-family: 'Syne', sans-serif; font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 12px; }
        .approach-desc-p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }

        @media (max-width: 1100px) {
          .about-main-grid { grid-template-columns: 1fr; }
          .powerful-bio-card { padding: 40px 30px; }
        }
        @media (max-width: 768px) {
          .bio-highlight { font-size: 1.3rem; }
          .about-bg-text { font-size: 6rem; letter-spacing: -5px; }
          .powerful-stats { gap: 20px; }
          .p-stat-val { font-size: 1.5rem; }
        }
      `}} />
    </section>
  );
};

export default AboutLayout;
