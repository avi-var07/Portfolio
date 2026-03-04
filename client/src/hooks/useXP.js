import { useGame } from '../context/GameContext'

export const useXP = () => {
  const { xp, level, addXP, getLevel, getLevelName } = useGame()

  const getXPForNextLevel = () => {
    const levels = [0, 100, 250, 500]
    return levels[level] || 500
  }

  const getXPProgress = () => {
    const currentLevelXP = level === 1 ? 0 : level === 2 ? 100 : level === 3 ? 250 : 500
    const nextLevelXP = getXPForNextLevel()
    const progress = ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100
    return Math.min(Math.max(progress, 0), 100)
  }

  return {
    xp,
    level,
    levelName: getLevelName(level),
    addXP,
    getXPProgress,
    getXPForNextLevel
  }
}
