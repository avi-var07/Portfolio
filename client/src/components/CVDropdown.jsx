import { useState, useRef, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import './CVDropdown.css';

const FORMATS = [
  { key: 'txt',  label: 'Plain Text (.txt)',   icon: '📄' },
  { key: 'html', label: 'Styled HTML (.html)', icon: '🌐' },
  { key: 'json', label: 'JSON Resume (.json)', icon: '{ }' },
  { key: 'md',   label: 'Markdown (.md)',       icon: '✍️' },
];

export default function CVDropdown({ mobile }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const { discoverSecret } = useGame();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(o => !o);
    discoverSecret(3);
  };

  const download = (format) => {
    setOpen(false);
    // Triggers server download
    window.open(`/api/cv/download/${format}`, '_blank');
  };

  if (mobile) {
    return (
      <div className="cv-mobile" ref={ref}>
        <button className="cv-mobile-btn" onClick={handleOpen}>⬇ Download CV</button>
        {open && (
          <div className="cv-formats-mob">
            {FORMATS.map(f => (
              <button key={f.key} onClick={() => download(f.key)}>{f.icon} {f.label}</button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="cv-dropdown-wrap" ref={ref}>
      <button className="btn-cv-nav" onClick={handleOpen}>
        ⬇ CV
      </button>
      {open && (
        <div className="cv-formats-popup">
          {FORMATS.map(f => (
            <button key={f.key} className="cv-format-btn" onClick={() => download(f.key)}>
              <span>{f.icon}</span> {f.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
