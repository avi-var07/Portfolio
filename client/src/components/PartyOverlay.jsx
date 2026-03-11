import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import './PartyOverlay.css';

const COLORS = ['#00e5ff','#00ff9d','#ffd700','#ff6b35','#ff2d78','#fff'];

export default function PartyOverlay() {
  const { partyActive, setPartyActive, totalXP } = useGame();

  useEffect(() => {
    if (!partyActive) return;
    for (let i = 0; i < 130; i++) {
      setTimeout(() => {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.cssText = `
          left:${Math.random()*100}vw; top:-10px;
          background:${COLORS[Math.floor(Math.random()*COLORS.length)]};
          width:${6+Math.random()*9}px; height:${6+Math.random()*9}px;
          animation-duration:${2+Math.random()*3}s;
          border-radius:${Math.random()>0.5?'50%':'2px'};
        `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 6000);
      }, i * 38);
    }
  }, [partyActive]);

  if (!partyActive) return null;

  return (
    <div className="party-overlay">
      <div className="party-stars">🎉🏆🎊</div>
      <h1 className="party-title">CONGRATULATIONS, EXPLORER!</h1>
      <p className="party-sub">
        You've discovered all <strong>10 hidden secrets</strong> of Aviral's Portfolio!<br />
        You're officially a <span className="party-rank">Master Explorer</span> —
        Thank you for visiting!
      </p>
      <div className="party-score">🎮 FINAL SCORE: <strong>{totalXP} XP</strong></div>
      <button className="party-close" onClick={() => setPartyActive(false)}>
        CONTINUE EXPLORING ›
      </button>
    </div>
  );
}
