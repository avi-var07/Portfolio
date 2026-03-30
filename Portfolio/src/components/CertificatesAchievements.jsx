import React, { useState } from 'react';
import javaImg from '../assets/certificates/java_basic certificate_hackerrank_page-0001.jpg';
import softwareEngineerImg from '../assets/certificates/software_engineer certificate_page-0001.jpg';
import generativeAIImg from '../assets/certificates/udemy build gen AI certificate.jpg';
import socialNetworks from '../assets/certificates/Social Networks_page-0001.jpg';
import dsa from '../assets/certificates/dsa.jpg';
import oops from '../assets/certificates/OOPS NEOCOLAB.png';
import leet from '../assets/LeetCode_logo_black.png';
import codolio from '../assets/codolio.png';
import codechef from '../assets/codechef.jpg';
const CertificatesAchievements = () => {
  const [previewCert, setPreviewCert] = useState(null);

  const CERTS = [
    {n:'Software Engineer',by:'HackerRank',d:'Feb 2026',col:'#22c55e',desc:'Comprehensive certification validating software engineering competencies including algorithmic problem-solving, coding efficiency, and system design principles.',url:'https://www.hackerrank.com/certificates/2b2ad5075c90', grad: 'linear-gradient(135deg,#0d2b18 0%,#06170d 100%)', bgImage: softwareEngineerImg},
    {n:'Java (Basic)',by:'HackerRank',d:'Sep 2025',col:'#f59e0b',desc:'Core Java certification covering OOP concepts, data types, control flow, exception handling, and collections framework with practical coding assessments.',url:'https://www.hackerrank.com/certificates/fc1c8bf4589c', grad: 'linear-gradient(135deg,#2e1a05 0%,#170c02 100%)', bgImage: javaImg},
    {n:'Build Generative AI Apps (No-Code)',by:'Udemy',d:'Aug 2025',col:'#a855f7',desc:'Hands-on course covering generative AI application building using no-code platforms, bridging AI capabilities with rapid product development workflows.',url:'https://springboard.udemy.com/certificate/UC-7a763e46-eccd-43b1-bd05-5f4b9c10ae2e/', grad: 'linear-gradient(135deg,#1f0c2e 0%,#0f0517 100%)', bgImage: generativeAIImg},
    {n:'Social Networks',by:'NPTEL',d:'May 2025',col:'#38bdf8',desc:'Academic NPTEL course on graph theory, network analysis, community detection, and social network dynamics, taught by IIT faculty.',url:'https://drive.google.com/file/d/18rOaJS8lvHUZC0cARY_CH6pCREbBeTu6/view?usp=sharing', grad: 'linear-gradient(135deg,#0c2233 0%,#05111a 100%)', bgImage: socialNetworks},
    {n:'Object Oriented Programming',by:'NeoColab',d:'Dec 2024',col:'#fb923c',desc:'Industry-focused OOP certification covering encapsulation, inheritance, polymorphism, and design patterns with Java-based implementation tasks.',url:'https://drive.google.com/file/d/1PoF4AOVU-bC4Vx1CWvo3OfZbPMy4MvZu/view?usp=sharing', grad: 'linear-gradient(135deg,#2e1605 0%,#170a02 100%)', bgImage: oops},
    {n:'Data Structures & Algorithms',by:'NeoColab',d:'Dec 2024',col:'#f43f5e',desc:'Structured course on arrays, linked lists, stacks, queues, trees, graphs, searching, sorting, and complexity analysis through hands-on exercises.',url:'https://drive.google.com/file/d/1I15QVGyOD6FgiOdJI0ENcb1GRczcoX5P/view?usp=sharing', grad: 'linear-gradient(135deg,#2e0c15 0%,#17050a 100%)', bgImage: dsa},
  ];

  const ACHIEVEMENTS = [
    {m: <img src={leet} alt="LeetCode" className="cp-tab-icon" height={30} width={30}/>,t:'1700+ Rating LeetCode',pl:'LeetCode',d:'Dec 2025',col:'#f59e0b',desc:'Secured Global Rank 2487th in LeetCode Biweekly Contest 172, competing among thousands of programmers on advanced algorithmic challenges under time pressure.'},
    {m: <img src={codolio} alt="Codolio" className="cp-tab-icon" height={30} width={30}/>,t:'Top 50 Coders in College as on Codolio',pl:'Codolio',d:'Dec 2025',col:'#00dcff',desc:'Attained Global Rank 1313 on Codolio, reflecting consistent cross-platform coding performance and strong problem-solving track record.'},
    {m:<img src={codechef} alt="CodeChef" className="cp-tab-icon" height={30} width={30}/>,t:'CodeChef Problem Solver Bronze',pl:'CodeChef',d:'Sep 2025',col:'#cd7f32',desc:'Earned Problem Solver Bronze Badge from CodeChef, recognizing dedication to solving competitive programming challenges across multiple difficulty tiers.'},
  ];



  return (
    <>
      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <div className="section-intro rv">
          <div className="section-eyebrow">Certifications</div>
          <h2 className="section-title">Credentials & Learning</h2>
          <p className="section-subtitle">Continuous learning validated through industry-recognized certifications and online courses.</p>
        </div>
        <div className="certs-grid">
          {CERTS.map((c, i) => (
            <div key={i} className="cert-card glass-card rv" style={{ '--accent': c.col }}>
              
              {/* Project-style background visual block for Certificates */}
              <div className="cert-visual">
                <div 
                  className="visual-bg" 
                  style={{ background: c.bgImage ? `#0a111e url(${c.bgImage}) center/contain no-repeat` : c.grad }} 
                />
                <div className="visual-overlay" />
                <div className="visual-grid" />
                <span className={`cert-emoji ${c.bgImage ? 'hidden' : ''}`}>{c.i}</span>
              </div>

              <div className="cert-content">
                <div className="cert-details">
                  <div className="cert-title">{c.n}</div>
                  <div className="cert-issuer" style={{ color: c.col }}>{c.by} · {c.d}</div>
                  <p className="cert-desc">{c.desc}</p>
                </div>
                <div className="cert-actions">
                  <a href={c.url} target="_blank" rel="noreferrer" className="cert-btn cert-btn-view" style={{ '--btn-col': c.col }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    View Certificate
                  </a>
                  <a href={c.url} download className="cert-btn cert-btn-download" style={{ '--btn-col': c.col }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="section-intro rv">
          <div className="section-eyebrow">Achievements</div>
          <h2 className="section-title">Milestones & Wins</h2>
          <p className="section-subtitle">Recognition earned through competitive programming and consistent dedication to excellence.</p>
        </div>
        <div className="achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="achieve-card glass-card rv" style={{ '--accent': a.col }}>
              <div className="achieve-icon-box" style={{ background: `${a.col}12`, border: `1px solid ${a.col}28` }}>{a.m}</div>
              <div className="achieve-info">
                <div className="achieve-title">{a.t}</div>
                <div className="achieve-meta" style={{ color: a.col }}>{a.pl} · {a.d}</div>
                <p className="achieve-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Preview Modal */}
      {previewCert && (
        <div className="cert-modal-overlay" onClick={() => setPreviewCert(null)}>
          <div className="cert-modal" onClick={e => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setPreviewCert(null)}>✕</button>
            <iframe src={previewCert} title="Certificate Preview" className="cert-modal-frame" />
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .certificates-section, .achievements-section { padding: 70px 6%; }
        .certificates-section { background: var(--bg2); }



        /* Modified Certificate Grid & Cards to match Projects */
        .certs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 26px; }
        
        .cert-card {
          padding: 0;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all .3s;
          cursor: default;
        }
        .cert-card:hover { border-color: var(--accent); box-shadow: 0 24px 60px rgba(0,0,0,.4); transform: translateY(-5px); }

        .cert-visual {
          height: 160px;
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
        .cert-card:hover .visual-bg { transform: scale(1.1); }
        
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
        .cert-card:hover .visual-grid { opacity: 0.3; }

        .cert-emoji {
          font-size: 3.5rem;
          position: relative;
          z-index: 4;
          transition: transform .3s;
        }
        .cert-card:hover .cert-emoji { transform: scale(1.15) rotate(5deg); }

        .cert-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          z-index: 6;
          background: var(--card);
        }

        .cert-title { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 1.05rem; color: var(--text-primary); margin-bottom: 4px; }
        .cert-issuer { font-family: 'JetBrains Mono', monospace; font-size: .75rem; font-weight: 600; margin-bottom: 12px; }
        .cert-desc { font-size: .85rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; flex: 1; }
        
        .cert-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cert-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 16px;
          border-radius: 8px;
          font-family: 'Syne', sans-serif;
          font-size: .82rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
          flex: 1;
        }
        .cert-btn-view {
          background: color-mix(in srgb, var(--btn-col) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--btn-col) 25%, transparent);
          color: var(--btn-col);
        }
        .cert-btn-view:hover {
          background: color-mix(in srgb, var(--btn-col) 22%, transparent);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px color-mix(in srgb, var(--btn-col) 20%, transparent);
        }
        .cert-btn-download {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          color: var(--text-secondary);
        }
        .cert-btn-download:hover {
          background: color-mix(in srgb, var(--btn-col) 15%, transparent);
          border-color: color-mix(in srgb, var(--btn-col) 30%, transparent);
          color: var(--text-primary);
          transform: translateY(-2px);
        }

        .achieve-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 15px; }
        .achieve-card { display: flex; align-items: flex-start; gap: 16px; padding: 24px; cursor: default; }
        .achieve-card:hover { border-color: var(--accent); }
        .achieve-icon-box { width: 52px; height: 52px; border-radius: 13px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
        .achieve-title { font-family: 'Syne', sans-serif; font-weight: 800; font-size: .97rem; color: var(--text-primary); margin-bottom: 3px; }
        .achieve-meta { font-family: 'JetBrains Mono', monospace; font-size: .72rem; font-weight: 600; margin-bottom: 8px; }
        .achieve-desc { font-size: .82rem; color: var(--text-secondary); line-height: 1.58; }

        /* Certificate Modal */
        .cert-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.2s ease;
        }
        .cert-modal {
          width: 90vw;
          max-width: 900px;
          height: 80vh;
          background: var(--card);
          border: 1px solid rgba(0,220,255,0.15);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
        }
        .cert-modal-close {
          position: absolute;
          top: 14px;
          right: 16px;
          background: var(--bg2);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 1rem;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .cert-modal-close:hover { background: var(--a1); color: var(--bg); }
        .cert-modal-frame {
          width: 100%;
          height: 100%;
          border: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr; }
          .cert-actions { flex-direction: column; }
          .cert-btn { justify-content: center; }
        }
      `}} />
    </>
  );
};

export default CertificatesAchievements;
