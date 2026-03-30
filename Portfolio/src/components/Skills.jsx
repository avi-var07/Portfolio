import React, { useState } from 'react';

const Skills = () => {
  const [activeCat, setActiveCat] = useState('All');
  const SCATS = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'DSA', 'Tools', 'Soft Skills'];
  const SKILLS_DATA = [
    {n:'Java',i:'java',c:'Programming'},{n:'JavaScript',i:'js',c:'Programming'},
    {n:'Python',i:'py',c:'Programming'},{n:'C++',i:'cpp',c:'Programming'},{n:'PHP',i:'php',c:'Programming'},
    {n:'React JS',i:'react',c:'Frontend'},{n:'HTML5',i:'html',c:'Frontend'},
    {n:'Tailwind CSS',i:'tailwind',c:'Frontend'},{n:'CSS3',i:'css',c:'Frontend'},
    {n:'Node.js',i:'nodejs',c:'Backend'},{n:'Express JS',i:'express',c:'Backend'},
    {n:'REST APIs',i:'postman',c:'Backend'},{n:'Socket.io',i:'socketio',c:'Backend'},
    {n:'MongoDB',i:'mongodb',c:'Database'},{n:'MySQL',i:'mysql',c:'Database'},
    {n:'Data Structures',i:'🗂️',c:'DSA'},{n:'Algorithms',i:'📊',c:'DSA'},
    {n:'OOP',i:'🧩',c:'DSA'},{n:'Dynamic Programming',i:'🔢',c:'DSA'},
    {n:'Git',i:'git',c:'Tools'},{n:'GitHub',i:'github',c:'Tools'},
    {n:'VS Code',i:'vscode',c:'Tools'},{n:'Postman',i:'postman',c:'Tools'},
    {n:'Leadership',i:'🎯',c:'Soft Skills'},{n:'Problem Solving',i:'🧠',c:'Soft Skills'},
    {n:'Adaptability',i:'🔄',c:'Soft Skills'},{n:'Communication',i:'💬',c:'Soft Skills'},
  ];

  const filtered = activeCat === 'All' ? SKILLS_DATA : SKILLS_DATA.filter(s => s.c === activeCat);

  const isEmoji = (str) => {
    return /\p{Emoji}/u.test(str) && str.length <= 2;
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-intro rv">
        <div className="section-eyebrow">Skills</div>
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="section-subtitle">Technologies and tools honed through projects, coursework, and competitive programming.</p>
      </div>

      <div className="filter-row rv">
        {SCATS.map(c => (
          <button 
            key={c} 
            onClick={() => setActiveCat(c)}
            className={`filter-tab ${activeCat === c ? 'active' : ''}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filtered.map((s, i) => (
          <div key={s.n} className="skill-card glass-card rv">
            {isEmoji(s.i) ? (
              <span className="skill-emoji">{s.i}</span>
            ) : (
              <img src={`https://skillicons.dev/icons?i=${s.i}`} alt={s.n} className="skill-icon-img" />
            )}
            <div className="skill-info">
              <div className="skill-name">{s.n}</div>
              <div className="skill-cat-label">{s.c}</div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .skills-section { padding: 70px 6%; }
        .filter-row { display: flex; flex-wrap: wrap; gap: 8px; marginBottom: 34px; justify-content: flex-start; }
        .filter-tab {
          padding: 6px 17px; borderRadius: 100px; fontSize: .83rem; fontWeight: 600;
          border: 1px solid rgba(255,255,255,.055); background: transparent; color: var(--text-secondary);
          cursor: pointer; transition: all .2s; font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .filter-tab.active {
          border-color: var(--a1); background: rgba(0,220,255,.09); color: var(--a1);
        }
        .skills-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 11px;
        }
        .skill-card {
          display: flex; align-items: center; gap: 12px; padding: 14px 18px; cursor: default;
        }
        .skill-emoji { fontSize: 1.4rem; flex-shrink: 0; }
        .skill-icon-img { width: 28px; height: 28px; object-fit: contain; flex-shrink: 0; }
        .skill-name { fontSize: .88rem; fontWeight: 700; color: var(--text-primary); }
        .skill-cat-label {
          font-family: 'JetBrains Mono', monospace; fontSize: .62rem; color: var(--text-dim);
          text-transform: uppercase; letter-spacing: .5px; margin-top: 1px;
        }
      `}} />
    </section>
  );
};

export default Skills;
