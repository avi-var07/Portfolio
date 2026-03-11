import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGame } from '../context/GameContext';
import CVDropdown from './CVDropdown';
import axios from 'axios';
import './Sections.css';

/* ─── REVEAL WRAPPER ─── */
function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true });
  return (
    <div ref={ref} className={`reveal ${inView ? 'visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ─── STATS STRIP ─── */
export function StatsStrip() {
  const { discoverSecret } = useGame();
  const stats = [
    { v: '8.64', l: 'CGPA', secret: 2 },
    { v: '3+', l: 'Projects' },
    { v: '1700+', l: 'LeetCode Rating' },
    { v: 'Top 50 in College', l: 'Codolio Rank' },
    { v: '6+', l: 'Certifications' },
  ];
  return (
    <div className="stats-strip">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className="sc"
              onMouseEnter={() => s.secret && discoverSecret(s.secret)}
            >
              <div className="sv">{s.v}</div>
              <div className="sl">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ─── ABOUT ─── */
export function About() {
  const { discoverSecret } = useGame();

  return (
    <section
      id="about"
      className="section"
      style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)" }}
    >
      <div className="container">

        <Reveal>
          <div className="sec-head">
            <span className="sec-num">01 //</span>
            <h2 className="sec-title">
              ABOUT <span>ME</span>
            </h2>
            <div className="sec-line" />
          </div>
        </Reveal>

        <div className="about-grid">

          <Reveal>
            <div className="about-text">

              <p>
                I'm <span className="hl">Aviral Varshney</span>, a pre-final year{" "}
                <span className="hl2">B.Tech CSE student</span> at{" "}
                <span className="hl2">Lovely Professional University</span> with a{" "}
                <span className="hl3">CGPA of 8.64</span>, focused on building{" "}
                <span className="hl">scalable full-stack systems</span> that solve
                real-world problems.
              </p>

              <p>
                My stack revolves around the{" "}
                <span className="hl">MERN ecosystem</span>. I built a{" "}
                <span className="hl2">gamified eco-driving platform</span> improving{" "}
                <span className="hl3">transport efficiency by 30%</span>, and a{" "}
                <span className="hlr">Java-based recruitment engine</span> that reduced{" "}
                <span className="hl3">candidate shortlisting time by 70%</span>.
              </p>

              <p>
                Passionate about{" "}
                <span className="hl">Data Structures & Algorithms</span>, holding a{" "}
                <span className="hl3">1700+ LeetCode rating</span> and ranked among the{" "}
                <span className="hl2">Top 50 Coders at Lovely Professional University</span>.
                I enjoy solving complex problems and building{" "}
                <span className="hl">clean, efficient software</span>.
              </p>

              <p>
                <span className="hl">Tech Stack:</span>{" "}
                React · Node.js · Express · MongoDB · Java · REST APIs
              </p>

              <p>
                Currently{" "}
                <span className="hl3">open to Software Engineering internships and
                full-stack developer opportunities</span>.
              </p>

              <div style={{ marginTop: "22px" }}>
                <CVDropdown />
              </div>

            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="about-attrs">

              {[
                ["🎓", "EDUCATION", "B.Tech CSE — LPU (2023–Present)"],
                ["📍", "LOCATION", "Punjab, India"],
                ["💻", "ROLE", "Software Engineer | Full Stack Developer"],
                ["🔥", "FOCUS", "Full Stack · DSA · Scalable Systems"],
                ["🏆", "ACHIEVEMENT", "Top 50 Coders @ LPU"],
              ].map(([ico, lbl, val], i) => (
                <li key={i} className="about-attr">
                  <span>{ico}</span>
                  <div>
                    <span className="aa-lbl">{lbl}</span>
                    <span className="aa-val">{val}</span>
                  </div>
                </li>
              ))}

              <li className="about-attr" onMouseEnter={() => discoverSecret(4)}>
                <span>⚡</span>
                <div>
                  <span className="aa-lbl">COMPETITIVE CODING</span>
                  <span className="aa-val">LeetCode · CodeChef · Codolio</span>
                </div>
              </li>

              {[
                ["✉️", "EMAIL", "aviralvarshney07@gmail.com"],
                ["📱", "PHONE", "+91 8687883676"],
              ].map(([ico, lbl, val], i) => (
                <li key={`b${i}`} className="about-attr">
                  <span>{ico}</span>
                  <div>
                    <span className="aa-lbl">{lbl}</span>
                    <span className="aa-val">{val}</span>
                  </div>
                </li>
              ))}

            </ul>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ─── SKILLS ─── */
const LANG_DATA = [
  { n: 'Java', ico: <i className="fab fa-java"></i>, c: '#f89820', p: 85 },
  { n: 'JavaScript', ico: <i className="fab fa-js"></i>, c: '#f7df1e', p: 82 },
  { n: 'Python', ico: <i className="fab fa-python"></i>, c: '#4b8bbe', p: 72 },
  { n: 'C++', ico: <i className="fas fa-file-code"></i>, c: '#00599c', p: 70 },
  { n: 'PHP', ico: <i className="fab fa-php"></i>, c: '#8892bf', p: 68 },
];
const FW_DATA = [
  { n: 'React JS', ico: <i className="fab fa-react"></i>, c: '#61dafb', p: 84 },
  { n: 'Node JS', ico: <i className="fab fa-node-js"></i>, c: '#68a063', p: 80 },
  { n: 'Express', ico: <i className="fas fa-server"></i>, c: '#aaa', p: 78 },
  { n: 'Tailwind', ico: <i className="fas fa-wind"></i>, c: '#38bdf8', p: 86 },
  { n: 'Socket.io', ico: <i className="fas fa-plug"></i>, c: '#e8f0ff', p: 72 },
  { n: 'HTML5', ico: <i className="fab fa-html5"></i>, c: '#e34f26', p: 91 },
];
const DB_DATA = [
  { n: 'MongoDB', ico: <i className="fas fa-database"></i>, c: '#47a248', p: 78 },
  { n: 'MySQL', ico: <i className="fas fa-database"></i>, c: '#4479a1', p: 75 },
  { n: 'Git', ico: <i className="fab fa-git-alt"></i>, c: '#f05032', p: 82 },
  { n: 'GitHub', ico: <i className="fab fa-github"></i>, c: '#ccc', p: 84 },
  { n: 'VS Code', ico: <i className="fas fa-code"></i>, c: '#007acc', p: 90 },
];
const SOFT_DATA = [
  { n: 'Problem Solving', p: 92, c: '#00e5ff' },
  { n: 'Adaptability', p: 88, c: '#00ff9d' },
  { n: 'Communication', p: 85, c: '#ffd700' },
  { n: 'Leadership', p: 82, c: '#ff6b35' },
];

function SkillRing({ p, color, animate }) {
  const r = 15, circ = 2 * Math.PI * r;
  return (
    <div className="sr">
      <svg width="38" height="38" viewBox="0 0 38 38" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="19" cy="19" r={r} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="3" />
        <circle cx="19" cy="19" r={r} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circ}
          strokeDashoffset={animate ? circ * (1 - p / 100) : circ}
          style={{ transition: animate ? 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)' : 'none', transformOrigin: 'center' }}
        />
      </svg>
      <div className="rnum" style={{ color }}>{p}%</div>
    </div>
  );
}

function SkillCard({ skill, animate }) {
  return (
    <div className="skill-icon-card">
      <SkillRing p={skill.p} color={skill.c} animate={animate} />
      <div className="si" style={skill.mono ? { fontFamily: "'JetBrains Mono', monospace", fontWeight: 900, fontSize: '1rem', color: skill.c } : {}}>
        {skill.ico}
      </div>
      <div className="sn">{skill.n}</div>
    </div>
  );
}

export function Skills() {
  const { discoverSecret } = useGame();
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  useEffect(() => { if (inView) setTimeout(() => setAnimate(true), 300); }, [inView]);

  return (
    <section id="skills" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container" ref={ref}>
        <Reveal><div className="sec-head"><span className="sec-num">02 //</span><h2 className="sec-title">TECH <span>STACK</span></h2><div className="sec-line" /></div></Reveal>
        <div className="skill-cats">
          {[['Languages', LANG_DATA], ['Frameworks & Libraries', FW_DATA], ['Databases & Tools', DB_DATA]].map(([label, data]) => (
            <Reveal key={label}>
              <div className="skill-cat">
                <div className="skill-cat-lbl">{label}</div>
                <div className="skill-grid">
                  {data.map(s => <SkillCard key={s.n} skill={s} animate={animate} />)}
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="skill-cat" onMouseEnter={() => discoverSecret(5)}>
              <div className="skill-cat-lbl">Soft Skills</div>
              <div className="soft-bars">
                {SOFT_DATA.map(s => (
                  <div key={s.n} className="sbi">
                    <span className="sbn">{s.n}</span>
                    <div className="sbt"><div className="sbf" style={{ width: animate ? s.p + '%' : '0%', background: `linear-gradient(90deg,${s.c},${s.c}66)`, boxShadow: `0 0 8px ${s.c}33`, transition: 'width 1.6s cubic-bezier(.4,0,.2,1)' }} /></div>
                    <span className="sbpct" style={{ color: s.c }}>{s.p}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECTS ─── */
const PROJECTS = [
  {
    num: 'PROJECT_01', name: 'driveSutraGo.com', period: 'Sep 2025 – Dec 2025',
    github: 'https://github.com/avi-var07/driveSutra.com', live: 'https://drivesutrago.vercel.app/',
    desc: 'A gamified eco-driving MERN platform promoting sustainable driving habits through real-time transport recommendation and community engagement through reward system.',
    bullets: ['Built an <strong>gamified eco-drive platform</strong> with eco-score analytics, leaderboards, challenges, and virtual community forests', 'Achieved <strong>30% improvement</strong> in driving efficiency with real-time accuracy &lt;5s via Socket.io', 'Increased user engagement by <strong>50%</strong> through gamified XP, levels, and achievements'],
    stack: ['ReactJS', 'NodeJS', 'Express', 'MongoDB', 'Socket.io', 'Tailwind', 'Geolocation API'],
    secret: 6,
  },
  {
    num: 'PROJECT_02', name: 'Skill-Based Candidate Shortlisting', period: 'Jun 2025 – Jul 2025',
    github: 'https://github.com/avi-var07/Skill-Based-Candidate-Shortlisting',
    desc: 'A Java DSA system for automated, objective candidate shortlisting — eliminating bias and accelerating the hiring pipeline through algorithmic scoring.',
    bullets: ['Modular <strong>OOP design</strong> with separate classes for candidate input, skill mapping, and job-requirement parsing', 'Custom <strong>weightage rules</strong> for dynamic job-fit scoring across different profiles', '<strong>70% faster</strong> shortlisting compared to manual evaluation'],
    stack: ['Java', 'DSA', 'OOP', 'Custom Algorithms'],
  },
  {
    num: 'PROJECT_03', name: 'Kahan Chale — Tour Management System', period: 'Mar 2025 – May 2025',
    github: 'https://github.com/avi-var07/Tour-Guide-Management-System',
    desc: 'A fully responsive tourism website simplifying tour planning, package selection, and user interaction — backed by a PHP/MySQL backend.',
    bullets: ['Built <strong>tour package management, booking system, guide assignment</strong>, login, and feedback modules', 'Smart <strong>search, sorting & filtering</strong> by budget, destination, and duration', '<strong>50% nav improvement</strong> and <strong>90% user satisfaction</strong> via feedback-driven UX'],
    stack: ['HTML5', 'Tailwind', 'JavaScript', 'PHP', 'MySQL'],
    secret: 7,
  },
];

export function Projects() {
  const { discoverSecret } = useGame();
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal><div className="sec-head"><span className="sec-num">03 //</span><h2 className="sec-title">PROJECTS</h2><div className="sec-line" /></div></Reveal>
        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <div className="proj-card">
                <div className="proj-inner">
                  <div className="proj-header">
                    <div>
                      <span className="proj-num">{p.num}</span>
                      <div
                        className="proj-name"
                        onDoubleClick={() => p.secret && discoverSecret(p.secret)}
                        title={p.secret ? 'Try double-clicking!' : ''}
                      >{p.name}</div>
                      <div className="proj-period">📅 {p.period}</div>
                    </div>
                    <div className="proj-links">
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="pl pl-gh"><i className="fab fa-github" /> GitHub</a>
                      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="pl pl-lv" onClick={() => p.secret && discoverSecret(p.secret)}><i className="fas fa-external-link-alt" /> Live</a>}
                    </div>
                  </div>
                  <p className="proj-desc">{p.desc}</p>
                  <ul className="proj-bullets">
                    {p.bullets.map((b, bi) => <li key={bi} dangerouslySetInnerHTML={{ __html: b }} />)}
                  </ul>
                  <div className="proj-tech-lbl">// STACK</div>
                  <div className="proj-techs">{p.stack.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TRAINING ─── */
export function Training() {
  const { discoverSecret } = useGame();
  return (
    <section id="training" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal><div className="sec-head"><span className="sec-num">04 //</span><h2 className="sec-title">TRAINING</h2><div className="sec-line" /></div></Reveal>
        <Reveal>
          <div className="training-card" onMouseEnter={() => discoverSecret(8)}>
            <div className="training-hdr">
              <div>
                <div className="training-title">Basics of Data Structures & Algorithms</div>
                <div className="training-org">🏛 Lovely Professional University</div>
                <div className="training-period">📅 May 2025 – Jun 2025</div>
              </div>
              <a href="#" className="training-cert-btn"><i className="fas fa-certificate" /> View Certificate</a>
            </div>
            <ul className="training-bullets">
              <li>Core structures: <strong style={{ color: 'var(--cyan)' }}>Arrays, Linked Lists, Stacks, Queues, HashMaps, Heaps, Trees, Graphs</strong>, and Dynamic Programming</li>
              <li>Applied <strong style={{ color: 'var(--green)' }}>time–space complexity analysis</strong>, searching/sorting techniques, and code optimisation</li>
              <li>Hands-on coding bridging DSA to real-world and <strong style={{ color: 'var(--gold)' }}>competitive programming</strong></li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── ACHIEVEMENTS ─── */
export function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        <Reveal><div className="sec-head"><span className="sec-num">05 //</span><h2 className="sec-title">ACHIEVEMENTS</h2><div className="sec-line" /></div></Reveal>
        <div className="ach-grid">
          {[
            { ico: '🏆', title: 'Global Rank #2487 — LeetCode', detail: 'Biweekly Contest 172 · Dec 2025' },
            { ico: '🥇', title: 'Top 50 — Codolio', detail: 'Competitive Programming · Dec 2025' },
            { ico: '🥉', title: 'Problem Solver Bronze — CodeChef', detail: 'Badge · Sep 2025' },
          ].map((a, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="ach-card"><div className="ach-icon">{a.ico}</div><div><div className="ach-title">{a.title}</div><div className="ach-detail">{a.detail}</div></div></div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 40 }}>
          <Reveal><div className="sec-head" style={{ marginBottom: 20 }}><span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '.58rem', color: 'var(--green)', letterSpacing: '2px' }}>CERTIFICATIONS //</span><div className="sec-line" style={{ background: 'linear-gradient(90deg,var(--green),transparent)' }} /></div></Reveal>
          <div className="certs-grid">
            {[
              { n: 'Software Engineer', i: 'HackerRank', d: 'Feb 2026' },
              { n: 'Java (Basic)', i: 'HackerRank', d: 'Sep 2025' },
              { n: 'Generative AI Apps (No-Code)', i: 'Udemy', d: 'Aug 2025' },
              { n: 'Social Networks', i: 'NPTEL', d: 'May 2025' },
              { n: 'Object Oriented Programming', i: 'NeoColab', d: 'Dec 2024' },
              { n: 'Data Structures & Algorithms', i: 'NeoColab', d: 'Dec 2024' },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="cert-card"><div className="cert-dot" /><div><div className="cert-name">{c.n}</div><div className="cert-iss">{c.i} · {c.d}</div></div></div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── EXTRA-CURRICULAR ─── */
export function ExtraCurricular() {
  const { discoverSecret } = useGame();
  const items = [
    { ico: '🏋️', title: 'Fitness & Discipline', desc: 'Regular gym training — builds the same discipline applied to coding: consistency and progressive overload.' },
    { ico: '🎮', title: 'Competitive Gaming', desc: 'Strategy games sharpen analytical thinking and rapid decision-making under pressure.', secret: 9 },
    { ico: '📚', title: 'Tech Blogging & Learning', desc: 'Constantly consuming tech content, tutorials, and research papers. Believes in sharing knowledge.' },
    { ico: '🌍', title: 'Open Source', desc: 'Actively exploring open-source projects to learn from real-world codebases and give back.' },
  ];
  return (
    <section id="extracurricular" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <Reveal><div className="sec-head"><span className="sec-num">06 //</span><h2 className="sec-title">EXTRA-<span>CURRICULAR</span></h2><div className="sec-line" /></div></Reveal>
        <div className="ec-grid">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 70}>
              <div className="ec-card" onMouseEnter={() => item.secret && discoverSecret(item.secret)}>
                <span className="ec-icon">{item.ico}</span>
                <div className="ec-title">{item.title}</div>
                <div className="ec-desc">{item.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
export function Contact() {
  const { discoverSecret } = useGame();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) { alert('Please fill all fields.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { alert('Enter a valid email.'); return; }
    setSending(true);
    setTimeout(() => { setSent(true); setSending(false); }, 1400);
  };

  return (
    <section id="contact" className="section" style={{ background: 'linear-gradient(180deg, var(--bg), var(--bg2))' }}>
      <div className="container">
        <Reveal><div className="sec-head"><span className="sec-num">07 //</span><h2 className="sec-title">GET IN <span>TOUCH</span></h2><div className="sec-line" /></div></Reveal>
        <div className="contact-layout">
          <Reveal>
            <p className="contact-intro">Open to <strong style={{ color: 'var(--cyan)' }}>internships</strong>, <strong style={{ color: 'var(--green)' }}>collaborations</strong>, and exciting projects. My inbox is always open.</p>
            <div className="contact-links">
              {[
                { href: 'mailto:aviralvarshney07@gmail.com', ico: 'fas fa-envelope', icoClr: 'var(--cyan)', lbl: 'EMAIL', val: 'aviralvarshney07@gmail.com' },
                { href: 'https://www.linkedin.com/in/avi7/', ico: 'fab fa-linkedin-in', icoClr: '#0a7dc2', lbl: 'LINKEDIN', val: 'linkedin.com/in/avi7', secret: 10, target: '_blank' },
                { href: 'https://github.com/avi-var07', ico: 'fab fa-github', icoClr: 'var(--text)', lbl: 'GITHUB', val: 'github.com/avi-var07', target: '_blank' },
                { href: '#', ico: 'fab fa-instagram', icoClr: '#e1306c', lbl: 'INSTAGRAM', val: 'instagram.com/avi_var07', target: '_blank' },
                { href: 'tel:+918687883676', ico: 'fas fa-phone', icoClr: 'var(--green)', lbl: 'PHONE', val: '+91 8687883676' },
              ].map((l, i) => (
                <a key={i} href={l.href} className="clink-card" target={l.target} rel="noopener noreferrer"
                  onClick={() => l.secret && discoverSecret(l.secret)}>
                  <div className="clink-ico"><i className={l.ico} style={{ color: l.icoClr }} /></div>
                  <div><span className="clink-lbl">{l.lbl}</span><span className="clink-val">{l.val}</span></div>
                </a>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--green)', letterSpacing: '2px', fontFamily: "'JetBrains Mono', monospace" }}>
              CODING PLATFORMS //
            </div>
            <div className="contact-links">
              {[
                { href: 'https://leetcode.com/u/ae_jethiyaaaa/', ico: 'fas fa-code', icoClr: '#ffa116', lbl: 'LEETCODE', val: 'LeetCode Profile' },
                { href: 'https://www.geeksforgeeks.org/profile/aviral_var07', ico: 'fas fa-laptop-code', icoClr: '#2f8d46', lbl: 'GEEKSFORGEEKS', val: 'GFG Profile' },
                { href: 'https://codolio.com/profile/ae_jethiyaaaa', ico: 'fas fa-trophy', icoClr: '#ff4b4b', lbl: 'CODOLIO', val: 'Codolio Profile' },
              ].map((l, i) => (
                <a key={`cp${i}`} href={l.href} className="clink-card" target="_blank" rel="noopener noreferrer">
                  <div className="clink-ico"><i className={l.ico} style={{ color: l.icoClr }} /></div>
                  <div><span className="clink-lbl">{l.lbl}</span><span className="clink-val">{l.val}</span></div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="contact-form">
              <div className="form-title">SEND A MESSAGE</div>
              {sent ? (
                <div className="form-success">✔ &nbsp;MESSAGE SENT! I'll reply soon.</div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="f-row">
                    <div className="fg"><label>Your Name</label><input type="text" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} /></div>
                    <div className="fg"><label>Email</label><input type="email" placeholder="john@email.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} /></div>
                  </div>
                  <div className="fg">
                    <label>Subject</label>
                    <select value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                      <option value="">Choose a topic…</option>
                      <option>Internship Opportunity</option>
                      <option>Project Collaboration</option>
                      <option>Freelance Work</option>
                      <option>Just Saying Hi!</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="fg"><label>Message</label><textarea placeholder="Write your message…" rows={4} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} /></div>
                  <button type="submit" className="btn-send">
                    {sending ? <><i className="fas fa-spinner fa-spin" /> SENDING…</> : <><i className="fas fa-paper-plane" /> SEND MESSAGE</>}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* FOOTER */}
        <Reveal>
          <div className="footer">
            <div className="footer-logo">AVIRAL VARSHNEY</div>
            <div className="footer-soc">
              {[
                { href: 'https://github.com/avi-var07', ico: 'fab fa-github', hc: 'var(--cyan)' },
                { href: 'https://www.linkedin.com/in/avi7/', ico: 'fab fa-linkedin', hc: '#0a7dc2' },
                { href: '#', ico: 'fab fa-instagram', hc: '#e1306c' },
                { href: 'mailto:aviralvarshney07@gmail.com', ico: 'fas fa-envelope', hc: 'var(--green)' },
              ].map((s, i) => <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="footer-soc-link"><i className={s.ico} /></a>)}
            </div>
            <div className="footer-txt">© 2025 · Crafted with code, coffee &amp; ambition</div>
            <div className="footer-txt" style={{ color: 'var(--cyan)', opacity: .4 }}>[&nbsp;B.TECH CSE · LPU · INDIA&nbsp;]</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
