import React, { useState, useEffect } from 'react';
import './ChallengePopup.css';

export default function ChallengePopup({ onStart }) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const hasShownRef = React.useRef(false);

  useEffect(() => {
    if (hasShownRef.current) return;

    let scrollListener = null;
    let timeoutId = null;

    const showPopup = () => {
      hasShownRef.current = true;
      setVisible(true);
      
      // Clean up listeners
      if (scrollListener) window.removeEventListener('scroll', scrollListener);
      if (timeoutId) clearTimeout(timeoutId);
    };

    // Show after first scroll
    scrollListener = () => {
      showPopup();
    };

    // Show after 5 seconds
    timeoutId = setTimeout(showPopup, 5000);

    window.addEventListener('scroll', scrollListener, { once: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleStart = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      onStart();
    }, 600);
  };

  if (!visible) return null;

  return (
    <div className={`challenge-overlay ${closing ? 'closing' : 'opening'}`}>
      <div className={`challenge-popup ${closing ? 'closing' : 'opening'}`}>
        {/* Decorative elements */}
        <div className="popup-stars">
          <span className="star">✨</span>
          <span className="star">⭐</span>
          <span className="star">✨</span>
        </div>

        {/* Content */}
        <h2 className="popup-title">Welcome, Explorer 👋</h2>
        
        <div className="popup-content">
          <p className="popup-intro">Thanks for visiting my portfolio.</p>
          
          <p className="popup-challenge">
            Before you leave, here's a small <span className="highlight">challenge:</span>
          </p>

          <div className="challenge-description">
            <p>There are <span className="highlight">10 hidden features</span> scattered across this website.</p>
            
            <div className="challenge-hints">
              <div className="hint">
                <span className="hint-icon">🔍</span>
                <span>Some appear on hover</span>
              </div>
              <div className="hint">
                <span className="hint-icon">🎮</span>
                <span>Some unlock after interactions</span>
              </div>
              <div className="hint">
                <span className="hint-icon">🎁</span>
                <span>And a few are very well hidden</span>
              </div>
            </div>

            <p className="popup-question">Think you can find them all?</p>
          </div>

          <p className="popup-encouragement">Good luck. 🚀</p>
        </div>

        {/* Button */}
        <button 
          className="start-button"
          onClick={handleStart}
        >
          Start <span className="button-arrow">→</span>
        </button>

        {/* Bottom accent */}
        <div className="popup-accent"></div>
      </div>
    </div>
  );
}
