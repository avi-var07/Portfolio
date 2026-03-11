import { useState, useEffect, useRef } from 'react';
import './IntroScreen.css';

const WELCOME = "Welcome to Aviral Varshney's Portfolio!";

export default function IntroScreen({ onDone }) {
  const [typed, setTyped] = useState('');
  const [showBtn, setShowBtn] = useState(false);
  const audioCtx = useRef(null);

  const initAudio = () => {
    if (!audioCtx.current) {
      try { audioCtx.current = new (window.AudioContext || window.webkitAudioContext)(); } catch { }
    }
  };

  const playTypeSound = () => {
    if (!audioCtx.current) return;
    try {
      if (audioCtx.current.state === 'suspended') {
        audioCtx.current.resume();
      }
      const o = audioCtx.current.createOscillator();
      const g = audioCtx.current.createGain();
      o.connect(g); g.connect(audioCtx.current.destination);
      o.frequency.value = 450 + Math.random() * 100;
      o.type = 'triangle';
      g.gain.setValueAtTime(0.08, audioCtx.current.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.05);
      o.start(); o.stop(audioCtx.current.currentTime + 0.05);
    } catch { }
  };

  useEffect(() => {
    const handleInteract = () => { initAudio(); };
    document.addEventListener('click', handleInteract, { once: true });
    document.addEventListener('mousemove', handleInteract, { once: true });
    document.addEventListener('keydown', handleInteract, { once: true });
    document.addEventListener('touchstart', handleInteract, { once: true });

    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTyped(WELCOME.slice(0, i));
        playTypeSound();
        if (i >= WELCOME.length) {
          clearInterval(interval);
          setTimeout(() => setShowBtn(true), 250);
        }
      }, i === 0 ? 150 : 15); // Extreme speed
      return () => clearInterval(interval);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const launch = () => {
    const el = document.getElementById('intro-screen');
    if (el) {
      el.style.transition = 'opacity 0.8s, transform 0.8s';
      el.style.opacity = '0';
      el.style.transform = 'scale(1.04)';
    }
    setTimeout(onDone, 820);
  };

  return (
    <div id="intro-screen" className="intro-screen">
      <div className="intro-bg" />
      <div className="intro-radial" />

      <div className="intro-text">
        {typed}
        <span className="intro-cursor">|</span>
      </div>

      <button
        className={`intro-explore-btn ${showBtn ? 'show' : ''}`}
        onClick={launch}
      >
        ▶&nbsp; LET'S EXPLORE
      </button>

      <button className="intro-skip" onClick={launch}>SKIP INTRO ›</button>
    </div>
  );
}
