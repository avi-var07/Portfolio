import { useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { useTheme } from '../context/ThemeContext';
import CVDropdown from './CVDropdown';
import './Navbar.css';

const NAV_LINKS = [
  { href: '#about',           label: 'About'     },
  { href: '#education',       label: 'Education' },
  { href: '#skills',          label: 'Skills'    },
  { href: '#projects',        label: 'Projects'  },
  { href: '#training',        label: 'Training'  },
  { href: '#testimonials',    label: 'Testimonials' },
  { href: '#achievements',    label: 'Awards'    },
  { href: '#extracurricular', label: 'Extra'     },
  { href: '#contact',         label: 'Contact'   },
];

export default function Navbar({ visible }) {
  const { totalXP, xpPct } = useGame();
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 82) cur = s.id; });
      setActive(cur);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav className={`navbar ${visible ? 'visible' : ''}`}>
        <a className="nav-brand" href="#hero">AV<em>.</em>DEV</a>

        <div className="nav-links">
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >{l.label}</a>
          ))}
        </div>

        <div className="nav-right">
          <div className="nav-xp" title="Your exploration XP">
            <span>{totalXP} XP</span>
            <div className="nav-xp-bar" style={{ width: xpPct() + '%' }} />
          </div>
          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
          </button>
          <CVDropdown />
          <button className={`ham ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <CVDropdown mobile />
      </div>
    </>
  );
}
