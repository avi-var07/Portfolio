import { useState } from 'react';
import { useGame } from '../context/GameContext';
import './GameHUD.css';

export default function GameHUD({ visible }) {
  const { missions, totalXP, xpPct, level, MAX_XP } = useGame();
  const [collapsed, setCollapsed] = useState(false);
  const lv = level();
  const found = missions.filter(m => m.found).length;

  if (!visible) return null;

  return (
    <div className={`game-hud ${collapsed ? 'collapsed' : ''}`}>
      <button className="hud-toggle" onClick={() => setCollapsed(c => !c)}>
        {collapsed ? '▲ MISSIONS' : '▼ HIDE'}
      </button>
      <div className="hud-header">
        <span>🎮 EXPLORER HUD</span>
        <span className="hud-level">LVL {lv.num} · {lv.name}</span>
      </div>
      <div className="hud-xp-row">
        <span className="hud-xp-lbl">XP</span>
        <div className="hud-xp-track">
          <div className="hud-xp-fill" style={{ width: xpPct() + '%' }} />
        </div>
        <span className="hud-xp-num">{totalXP}/{MAX_XP}</span>
      </div>
      {!collapsed && (
        <div className="hud-missions">
          <div className="hud-progress">{found}/10 missions completed</div>
          {missions.map(m => (
            <div key={m.id} className={`hud-mission ${m.found ? 'found' : ''}`}>
              <div className="hud-mi">{m.found ? '✓' : ''}</div>
              <span>{m.found ? `${m.title}` : '??? [Hidden]'}</span>
              {m.found && <span className="hud-mi-xp">+{m.xp}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
