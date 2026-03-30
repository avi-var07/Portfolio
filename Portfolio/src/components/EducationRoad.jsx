import React from 'react';

const EducationRoad = () => {
  const EDUCATION = [
    {yr:'Aug 2023–Present',inst:'Lovely Professional University',loc:'Punjab, India',deg:'B.Tech — Computer Science & Engineering',score:'CGPA: 8.64',i:'🎓',col:'#00dcff'},
    {yr:'Apr 2022–Mar 2023',inst:"St. Mary's Convent School",loc:'Mughalsarai',deg:'Intermediate (Class XII)',score:'91.75%',i:'🏫',col:'#7b5ff5'},
    {yr:'Apr 2020–Mar 2021',inst:"St. Mary's Convent School",loc:'Mughalsarai',deg:'Matriculation (Class X)',score:'95%',i:'🏫',col:'#7b5ff5'},
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-intro rv">
        <div className="section-eyebrow">Education</div>
        <h2 className="section-title">Academic Road</h2>
        <p className="section-subtitle">Foundations that shaped my technical thinking and problem-solving mindset.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line" />
        {EDUCATION.map((e, i) => (
          <div key={i} className="timeline-item rv">
            <div className="timeline-dot-wrapper">
              <div className="timeline-dot-inner" style={{ background: e.col }} />
            </div>
            <div className="glass-card timeline-card" style={{ '--accent': e.col }}>
              <div className="timeline-year" style={{ color: e.col }}>{e.yr}</div>
              <div className="timeline-header">
                <span className="inst-title">{e.i} {e.inst}</span>
                <span className="inst-loc">— {e.loc}</span>
              </div>
              <div className="timeline-degree">{e.deg}</div>
              <div className="timeline-score">{e.score}</div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .education-section { padding: 88px 6%; background: var(--bg2); }
        .timeline-container { position: relative; padding-left: 32px; maxWidth: 740px; margin: 0 auto; }
        .timeline-line {
          position: absolute; left: 7px; top: 10px; bottom: 10px;
          width: 2px; background: linear-gradient(180deg, var(--a1) 0%, var(--a2) 60%, transparent 100%);
          borderRadius: 2px;
        }
        .timeline-item { position: relative; marginBottom: 22px; }
        .timeline-dot-wrapper {
          position: absolute; left: -32px; top: 20px;
          width: 16px; height: 16px; borderRadius: 50%;
          background: var(--bg); border: 2px solid var(--a1);
          display: flex; alignItems: center; justifyContent: center;
        }
        .timeline-dot-inner { width: 6px; height: 6px; borderRadius: 50%; }
        
        .timeline-card { padding: 20px 24px; transition: var(--transition-smooth); }
        .timeline-card:hover { transform: translateX(5px); border-color: var(--accent); }

        .timeline-year { fontFamily: 'JetBrains Mono', monospace; fontSize: .7rem; fontWeight: 600; letterSpacing: .8px; marginBottom: 5px; }
        .timeline-header { marginBottom: 4px; }
        .inst-title { fontFamily: 'Syne', sans-serif; fontWeight: 700; fontSize: 1rem; color: var(--text-primary); }
        .inst-loc { fontSize: .78rem; color: var(--text-dim); marginLeft: 5px; }
        .timeline-degree { fontSize: .87rem; color: var(--text-secondary); margin-bottom: 9px; }
        .timeline-score {
          display: inline-block; fontFamily: 'JetBrains Mono', monospace;
          fontSize: .76rem; padding: 3px 11px; borderRadius: 20px;
          background: rgba(0,255,179,.08); border: 1px solid rgba(0,255,179,.22);
          color: var(--a3); fontWeight: 600;
        }
      `}} />
    </section>
  );
};

export default EducationRoad;
