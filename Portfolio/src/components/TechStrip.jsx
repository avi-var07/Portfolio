import React from 'react';

const TechStrip = () => {
  const STACK1 = [
    {n:'Java',i:'java',h:true},{n:'React JS',i:'react',h:true},{n:'Node.js',i:'nodejs',h:true},{n:'Express',i:'express',h:true},
    {n:'MongoDB',i:'mongodb',h:true},{n:'JavaScript',i:'js',h:false},{n:'Tailwind CSS',i:'tailwind',h:true},{n:'Git',i:'git',h:true}
  ];
  const STACK2 = [
    {n:'MySQL',i:'mysql',h:true},{n:'Postman',i:'postman'},{n:'HTML5',i:'html'},{n:'CSS3',i:'css'}
  ];
  
  const doubled1 = [...STACK1, ...STACK1, ...STACK1];
  const doubled2 = [...STACK2, ...STACK2, ...STACK2];

  return (
    <div className="tech-strip-wrapper">
      <div className="tech-section-header">
        <p className="tech-eyebrow">technical expertise</p>
        <h2 className="tech-title">Tools of the Trade</h2>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-content left">
          {doubled1.map((t, i) => (
            <div key={i} className={`tech-item-premium ${t.h ? 'highlight' : ''}`}>
              <img src={`https://skillicons.dev/icons?i=${t.i}`} alt={t.n} className="tech-img-p" />
              <span className="tech-name-p">{t.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-container mt-4">
        <div className="marquee-content right">
          {doubled2.map((t, i) => (
            <div key={i} className={`tech-item-premium alternate ${t.h ? 'highlight' : ''}`}>
              <img src={`https://skillicons.dev/icons?i=${t.i}`} alt={t.n} className="tech-img-p" />
              <span className="tech-name-p">{t.n}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .tech-strip-wrapper {
          padding: 80px 0;
          background: radial-gradient(circle at 50% 50%, rgba(0, 220, 255, 0.03) 0%, transparent 70%);
          border-top: 1px solid rgba(255, 255, 255, .055);
          overflow: hidden;
          position: relative;
        }
        .tech-section-header {
          text-align: center;
          margin-bottom: 50px;
          padding: 0 6%;
        }
        .tech-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          color: var(--a1);
          margin-bottom: 12px;
        }
        .tech-title {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.2rem;
          letter-spacing: -1px;
          color: var(--text-primary);
        }
        .marquee-container {
          display: flex;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .mt-4 { margin-top: 20px; }
        
        .marquee-content {
          display: flex;
          gap: 20px;
          width: max-content;
        }
        .marquee-content.left { animation: marquee 40s linear infinite; }
        .marquee-content.right { animation: marquee 45s linear infinite reverse; }

        .tech-item-premium {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 24px;
          border-radius: 16px;
          background: rgba(11, 20, 34, 0.6);
          border: 1px solid rgba(255, 255, 255, .06);
          transition: all .3s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: default;
          white-space: nowrap;
        }
        .tech-item-premium.alternate {
          background: rgba(14, 25, 45, 0.4);
        }
        .tech-item-premium.highlight {
          border-color: var(--a1);
          background: rgba(0, 220, 255, 0.08);
          box-shadow: 0 0 15px rgba(0, 220, 255, 0.1);
        }
        .tech-item-premium:hover {
          background: rgba(0, 220, 255, 0.12);
          border-color: var(--a1);
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0, 220, 255, 0.2);
        }
        .tech-img-p {
          width: 32px;
          height: 32px;
          object-fit: contain;
          filter: drop-shadow(0 0 4px rgba(0,0,0,0.4));
        }
        .tech-name-p {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }
        
        @media (max-width: 768px) {
          .tech-title { font-size: 1.8rem; }
          .tech-item-premium { padding: 10px 18px; }
          .tech-img-p { width: 24px; height: 24px; }
          .tech-name-p { font-size: 0.85rem; }
        }
      `}} />
    </div>
  );
};

export default TechStrip;
