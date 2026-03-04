import { motion } from 'framer-motion'
import { useGame } from '../context/GameContext'
import { useXP } from '../hooks/useXP'
import { XP_ACTIONS, ACHIEVEMENTS } from '../utils/gamification'

/**
 * Demo component to showcase and test the gamification system
 * This component demonstrates all gamification features
 */
const GamificationDemo = () => {
  const { xp, level, achievements, addXP, unlockAchievement } = useGame()
  const { levelName, getXPProgress, getXPForNextLevel } = useXP()

  const handleAddXP = (action) => {
    addXP(XP_ACTIONS[action])
  }

  const handleUnlockAchievement = (achievementId) => {
    const success = unlockAchievement(achievementId)
    if (success) {
      addXP(XP_ACTIONS.UNLOCK_ACHIEVEMENT)
    }
  }

  const handleReset = () => {
    if (confirm('Reset all progress?')) {
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🎮 Gamification System Demo
          </h1>
          <p className="text-gray-400">Test and explore the gamification features</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark border border-primary/30 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Current Stats</h2>
            <div className="space-y-4">
              <div className="bg-darker p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Total XP</p>
                <p className="text-3xl font-bold">{xp}</p>
              </div>
              <div className="bg-darker p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Level</p>
                <p className="text-3xl font-bold">
                  {level} - {levelName}
                </p>
              </div>
              <div className="bg-darker p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Progress to Next Level</p>
                <div className="mt-2 h-4 bg-dark rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: `${getXPProgress()}%` }}
                  />
                </div>
                <p className="text-sm mt-2">
                  {Math.round(getXPProgress())}% ({xp} / {getXPForNextLevel()} XP)
                </p>
              </div>
              <div className="bg-darker p-4 rounded-lg">
                <p className="text-gray-400 text-sm">Achievements Unlocked</p>
                <p className="text-3xl font-bold">
                  {achievements.length} / {Object.keys(ACHIEVEMENTS).length}
                </p>
              </div>
            </div>
          </motion.div>

          {/* XP Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-dark border border-secondary/30 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-secondary">Add XP</h2>
            <div className="space-y-3">
              {Object.entries(XP_ACTIONS).map(([action, points]) => (
                <button
                  key={action}
                  onClick={() => handleAddXP(action)}
                  className="w-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary/60 p-4 rounded-lg text-left transition-all hover:scale-105"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">
                      {action.replace(/_/g, ' ')}
                    </span>
                    <span className="text-primary font-bold">+{points} XP</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 bg-dark border border-accent/30 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-accent">Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.values(ACHIEVEMENTS).map((achievement) => {
                const isUnlocked = achievements.includes(achievement.id)
                return (
                  <div
                    key={achievement.id}
                    className={`relative p-4 rounded-xl text-center transition-all ${
                      isUnlocked
                        ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary'
                        : 'bg-darker border border-gray-700 opacity-60'
                    }`}
                  >
                    {isUnlocked && (
                      <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className="font-bold text-sm mb-1">{achievement.name}</h3>
                    <p className="text-xs text-gray-400">{achievement.description}</p>
                    {!isUnlocked && (
                      <button
                        onClick={() => handleUnlockAchievement(achievement.id)}
                        className="mt-3 text-xs bg-primary/20 hover:bg-primary/40 px-3 py-1 rounded transition-colors"
                      >
                        Unlock
                      </button>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-dark border border-red-500/30 rounded-2xl p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-400">Controls</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleReset}
                className="bg-red-500/20 hover:bg-red-500/40 border border-red-500 px-6 py-3 rounded-lg font-bold transition-colors"
              >
                🔄 Reset All Progress
              </button>
              <button
                onClick={() => {
                  console.log('Current State:', {
                    xp,
                    level,
                    levelName,
                    achievements,
                    localStorage: {
                      xp: localStorage.getItem('xp'),
                      achievements: localStorage.getItem('achievements'),
                      visitedZones: localStorage.getItem('visitedZones')
                    }
                  })
                }}
                className="bg-blue-500/20 hover:bg-blue-500/40 border border-blue-500 px-6 py-3 rounded-lg font-bold transition-colors"
              >
                📊 Log State to Console
              </button>
            </div>
          </motion.div>
        </div>

        {/* Documentation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-dark border border-gray-700 rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-bold text-primary mb-2">XP System</h3>
              <p className="text-sm">
                Earn XP by performing actions throughout the portfolio. XP is automatically saved to localStorage
                and persists across sessions.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-secondary mb-2">Levels</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Level 1: Visitor (0 XP)</li>
                <li>Level 2: Explorer (100 XP)</li>
                <li>Level 3: Developer Insider (250 XP)</li>
                <li>Level 4: Code Master (500 XP)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-accent mb-2">Achievements</h3>
              <p className="text-sm">
                Unlock achievements by completing specific actions. Each achievement awards bonus XP.
                Achievements are tracked and displayed in the Achievement Hall.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-400 mb-2">Implementation</h3>
              <p className="text-sm">
                The system uses React Context for state management, custom hooks for easy access,
                and localStorage for persistence. See GAMIFICATION_GUIDE.md for detailed documentation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GamificationDemo
