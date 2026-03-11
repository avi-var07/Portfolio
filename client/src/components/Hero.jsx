import { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import CVDropdown from './CVDropdown';
import './Hero.css';

const TAGLINES = [
  'Full Stack Developer',
  'Problem Solver',
  'MERN Enthusiast',
  'DSA Practitioner',
  'Code Architect',
  'LeetCode Grinder',
];

export default function Hero() {
  const { totalXP, xpPct, discoverSecret } = useGame();
  const [tagline, setTagline] = useState('');
  const [ti, setTi] = useState(0);
  const [tc, setTc] = useState(0);
  const [del, setDel] = useState(false);
  const [showPro, setShowPro] = useState(true);

  // Tagline typewriter
  useEffect(() => {
    const cur = TAGLINES[ti];
    const speed = del ? 22 : (tc === 0 ? 350 : 50);
    const timer = setTimeout(() => {
      if (!del) {
        setTagline(cur.slice(0, tc + 1));
        if (tc + 1 === cur.length) { setTimeout(() => setDel(true), 1800); }
        else setTc(c => c + 1);
      } else {
        setTagline(cur.slice(0, tc - 1));
        if (tc - 1 === 0) {
          setDel(false); setTi(i => (i + 1) % TAGLINES.length); setTc(0);
        } else setTc(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [ti, tc, del]);

  return (
    <section id="hero" className="section hero-section">
      <div className="hero-grid-lines" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      {/* PHOTO — secret #1 */}
      <div
        className="photo-area"
        onMouseEnter={() => { setShowPro(false); discoverSecret(1); }}
        onMouseLeave={() => setShowPro(true)}
      >
        <div className="photo-border-spin photo-border-anim" />
        <div className="photo-border-outer" />
        <div className="photo-inner">
          <div className={`photo-pro  ${showPro ? 'show' : ''}`}>
            {/* Ensure 'profile.jpg' is placed in your 'public' folder */}
            <img src="/profile.jpg" alt="Aviral Varshney" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
          </div>
          <div className={`photo-avatar ${!showPro ? 'show' : ''}`}><span>👨‍💻</span></div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="hero-xp-row">
        <span className="xpl">XP</span>
        <div className="hero-xp-bar">
          <div className="hero-xp-fill" style={{ width: xpPct() + '%' }} />
        </div>
        <span className="xpl muted">{totalXP} / 1000</span>
      </div>

      <div className="hero-desig">&lt; SOFTWARE ENGINEER / &gt;</div>
      <h1 className="hero-name">AVIRAL VARSHNEY</h1>

      <div className="hero-tagline">
        {tagline}<span className="blink-cur" />
      </div>

      <p className="hero-summary">
        Hi, I'm <span className="hl">Aviral Varshney</span>,
        <span className="hl"> Pre-Final year student</span> at&nbsp;
        <span className="hl2">Lovely Professional University</span> with a&nbsp;
        <span className="hl3">CGPA of 8.64</span>.

        I design and build <span className="hl">scalable MERN stack applications </span>
        that solve real-world problems — from
        <span className="hl2"> eco-driving platforms</span> to 
        <span className="hlr"> algorithm-driven recruitment systems</span>.

        Passionate about <span className="hl">Data Structures & Algorithms</span>, with a 
        <span className="hl3"> 1700+ LeetCode rating</span> and ranked among the 
        <span className="hl2">Top 50 Coders at LPU</span>, building clean, efficient
        software with real impact.
      </p>

      <div className="hero-ctas">
        <a href="#projects" className="btn-fill"><i className="fas fa-code" /> View Projects</a>
        <CVDropdown />
        <a href="#contact" className="btn-ghost green"><i className="fas fa-envelope" /> Contact Me</a>
      </div>

      <div className="scroll-cue">
        <div className="scroll-mouse" />
        <span>SCROLL</span>
      </div>
    </section>
  );
}
