import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const resumeRef = useRef();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 28);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const NAV_LINKS = [
    { label: 'Home', id: 'home' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Trainings', id: 'training' },
    { label: 'Coding Profiles', id: 'coding-profiles' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleResumeClick = (ext) => {
    setResumeOpen(false);
    if (ext === 'view') {
      window.open('/Aviral Generalised CV.pdf', '_blank');
      return;
    }
    const a = document.createElement('a');
    a.href = `/Aviral Generalised CV.pdf`; // Assuming PDF for now, user can adjust
    a.download = `Aviral_Varshney_Resume.${ext}`;
    a.click();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-dot" />
          AVIRAL VED VARSHNEY
        </div>

        <div className="desktop-links">
          {NAV_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              spy={true}
              offset={-70}
              activeClass="active"
              className="nav-btn"
              onSetActive={() => setActive(link.id)}
              duration={300}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="resume-dropdown-wrapper" ref={resumeRef}>
            <button 
              className="resume-btn" 
              onClick={() => setResumeOpen(!resumeOpen)}
            >
              Resume <span className={`chevron ${resumeOpen ? 'open' : ''}`}>▾</span>
            </button>
            {resumeOpen && (
              <div className="resume-dropdown">
                <div className="dropdown-item" onClick={() => handleResumeClick('pdf')}>📄 Download PDF</div>
                <div className="dropdown-item" onClick={() => handleResumeClick('docx')}>📝 Download DOCX</div>
                <div className="dropdown-item" onClick={() => handleResumeClick('view')}>👁️ View Online</div>
              </div>
            )}
          </div>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-drawer ${mobileMenu ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <Link
            key={link.id}
            to={link.id}
            smooth={true}
            offset={-70}
            duration={300}
            onClick={() => setMobileMenu(false)}
            className="mobile-nav-btn"
          >
            {link.label}
          </Link>
        ))}
      </div>
      {mobileMenu && <div className="mobile-overlay" onClick={() => setMobileMenu(false)} />}

      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1300;
          height: 66px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5.5%;
          transition: background .4s, border-color .4s;
          background: transparent;
        }
        .navbar.scrolled {
          background: rgba(4, 7, 15, .8);
          backdrop-filter: blur(12px) saturate(1.2);
          border-bottom: 1px solid rgba(255, 255, 255, .055);
        }
        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--a1);
          cursor: pointer;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .logo-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--a1);
          box-shadow: 0 0 12px var(--a1);
          display: inline-block;
        }
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 600;
          font-size: .85rem;
          color: var(--text-secondary);
          transition: all .2s;
        }
        .nav-btn:hover, .nav-btn.active {
          color: var(--a1);
          background: rgba(0, 220, 255, .08);
        }
        .resume-btn {
          background: var(--a1);
          color: var(--bg);
          border: none;
          cursor: pointer;
          border-radius: 9px;
          padding: 8px 18px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: .84rem;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all .2s;
          margin-left: 10px;
        }
        .chevron {
          display: inline-block;
          transition: transform .2s;
        }
        .chevron.open {
          transform: rotate(180deg);
        }
        .resume-dropdown-wrapper {
          position: relative;
        }
        .resume-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          background: var(--card2);
          border: 1px solid rgba(0, 220, 255, .22);
          border-radius: 12px;
          min-width: 210px;
          overflow: hidden;
          box-shadow: 0 24px 50px rgba(0,0,0,.6);
          animation: dropD .15s ease;
          z-index: 1210;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 17px;
          color: var(--text-primary);
          font-size: .87rem;
          cursor: pointer;
          transition: background .15s;
        }
        .dropdown-item:hover {
          background: rgba(0, 220, 255, .08);
          color: var(--a1);
        }
        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-primary);
          font-size: 1.4rem;
          padding: 4px 6px;
        }
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 72vw;
          max-width: 300px;
          background: var(--bg2);
          border-left: 1px solid rgba(255, 255, 255, .055);
          z-index: 1300;
          padding: 80px 24px 40px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transform: translateX(100%);
          transition: transform .32s cubic-bezier(.22, 1, .36, 1);
        }
        .mobile-drawer.open {
          transform: translateX(0);
        }
        .mobile-nav-btn {
          display: block;
          padding: 16px 20px;
          border-radius: 12px;
          text-align: left;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
          transition: background .2s;
        }
        .mobile-nav-btn:hover {
          background: rgba(0, 220, 255, .08);
          color: var(--a1);
        }
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.55);
          z-index: 1290;
        }

        @media (max-width: 960px) {
          .desktop-links { display: none; }
          .mobile-toggle { display: block; }
        }
      `}} />
    </>
  );
};

export default Navbar;
