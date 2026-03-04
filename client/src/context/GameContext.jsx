import { createContext, useContext, useState, useEffect } from 'react'

const GameContext = createContext()

export const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within GameProvider')
  }
  return context
}

export const GameProvider = ({ children }) => {
  const [xp, setXp] = useState(0)
  const [level, setLevel] = useState(1)
  const [achievements, setAchievements] = useState([])
  const [visitedZones, setVisitedZones] = useState([])

  // Load from localStorage on mount
  useEffect(() => {
    const savedXP = localStorage.getItem('xp')
    const savedAchievements = localStorage.getItem('achievements')
    const savedVisitedZones = localStorage.getItem('visitedZones')
    
    if (savedXP) setXp(parseInt(savedXP))
    if (savedAchievements) setAchievements(JSON.parse(savedAchievements))
    if (savedVisitedZones) setVisitedZones(JSON.parse(savedVisitedZones))
  }, [])

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('xp', xp.toString())
    localStorage.setItem('achievements', JSON.stringify(achievements))
    localStorage.setItem('visitedZones', JSON.stringify(visitedZones))
    
    // Update level based on XP
    const newLevel = getLevel(xp)
    setLevel(newLevel)
  }, [xp, achievements, visitedZones])

  const addXP = (points) => {
    setXp(prev => prev + points)
  }

  const getLevel = (currentXP) => {
    if (currentXP >= 500) return 4
    if (currentXP >= 250) return 3
    if (currentXP >= 100) return 2
    return 1
  }

  const getLevelName = (lvl) => {
    const levels = {
      1: 'Visitor',
      2: 'Explorer',
      3: 'Developer Insider',
      4: 'Code Master'
    }
    return levels[lvl] || 'Visitor'
  }

  const unlockAchievement = (achievementId) => {
    if (!achievements.includes(achievementId)) {
      setAchievements(prev => [...prev, achievementId])
      return true
    }
    return false
  }

  const visitZone = (zoneName) => {
    if (!visitedZones.includes(zoneName)) {
      setVisitedZones(prev => [...prev, zoneName])
      
      // Check for Portfolio Master achievement and Complete Tour XP
      const allZones = ['skills', 'projects', 'achievements', 'ai', 'resume', 'contact']
      const newVisited = [...visitedZones, zoneName]
      if (allZones.every(zone => newVisited.includes(zone))) {
        const hasCompletedTour = localStorage.getItem('hasCompletedTour')
        if (!hasCompletedTour) {
          unlockAchievement('portfolio-master')
          // Import XP_ACTIONS dynamically to avoid circular dependency
          addXP(100) // COMPLETE_TOUR XP
          localStorage.setItem('hasCompletedTour', 'true')
        }
      }
    }
  }

  const value = {
    xp,
    level,
    achievements,
    visitedZones,
    addXP,
    getLevel,
    getLevelName,
    unlockAchievement,
    visitZone
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
