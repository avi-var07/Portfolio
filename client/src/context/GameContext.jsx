import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

const MISSIONS = [
  { id: 1,  title: 'The First Gaze',      desc: 'Hovered the profile photo',           xp: 50  },
  { id: 2,  title: 'Academic Sleuth',     desc: 'Hovered the CGPA stat',               xp: 75  },
  { id: 3,  title: 'Career Hunter',       desc: 'Opened the CV download menu',         xp: 80  },
  { id: 4,  title: 'Network Ninja',       desc: 'Found the competitive links',         xp: 90  },
  { id: 5,  title: 'Soft Skill Scout',    desc: 'Discovered soft skills section',      xp: 100 },
  { id: 6,  title: 'Product Launch',      desc: 'Visited a live project',              xp: 120 },
  { id: 7,  title: 'Easter Egg Hunter',   desc: 'Double-clicked a project title',      xp: 140 },
  { id: 8,  title: 'Knowledge Seeker',    desc: 'Explored the training section',       xp: 110 },
  { id: 9,  title: 'Gamer Spotted',       desc: 'Found the gaming activity',           xp: 130 },
  { id: 10, title: 'The Final Connection',desc: 'Clicked the LinkedIn link',           xp: 150 },
];

const MAX_XP = 1000;
const GameContext = createContext();

export function GameProvider({ children }) {
  const [missions, setMissions] = useState(MISSIONS.map(m => ({ ...m, found: false })));
  const [totalXP, setTotalXP] = useState(0);
  const [toast, setToast] = useState({ show: false, title: '', msg: '', xp: 0 });
  const [partyActive, setPartyActive] = useState(false);
  const toastTimer = useRef(null);

  const xpPct = useCallback(() => Math.min(100, (totalXP / MAX_XP) * 100), [totalXP]);
  const level = useCallback(() => {
    if (totalXP < 200) return { num: 1, name: 'Novice' };
    if (totalXP < 400) return { num: 2, name: 'Explorer' };
    if (totalXP < 600) return { num: 3, name: 'Adventurer' };
    if (totalXP < 800) return { num: 4, name: 'Veteran' };
    return { num: 5, name: 'Master' };
  }, [totalXP]);

  const showToast = useCallback((title, msg, xp) => {
    setToast({ show: true, title, msg, xp });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(t => ({ ...t, show: false })), 3500);
  }, []);

  const discoverSecret = useCallback((id) => {
    setMissions(prev => {
      const mission = prev.find(m => m.id === id);
      if (!mission || mission.found) return prev;
      const updated = prev.map(m => m.id === id ? { ...m, found: true } : m);
      setTotalXP(xp => {
        const newXP = xp + mission.xp;
        showToast('🔓 MISSION UNLOCKED!', `${mission.title} — ${mission.desc}`, mission.xp);
        if (updated.every(m => m.found)) setTimeout(() => setPartyActive(true), 800);
        return newXP;
      });
      return updated;
    });
  }, [showToast]);

  return (
    <GameContext.Provider value={{
      missions, totalXP, toast, partyActive, setPartyActive,
      xpPct, level, discoverSecret, MAX_XP
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);
