import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useGame } from '../context/GameContext'
import { ACHIEVEMENTS, XP_ACTIONS } from '../utils/gamification'

const externalAchievements = [
  {
    id: 'leetcode',
    name: 'LeetCode Biweekly Contest',
    description: 'Rank 2487',
    icon: '💻',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'codolio',
    name: 'Codolio Global Rank',
    description: 'Rank 1313',
    icon: '🌍',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'codechef',
    name: 'CodeChef Problem Solver',
    description: 'Bronze Badge',
    icon: '🥉',
    color: 'from-yellow-600 to-orange-600'
  }
]

const AchievementHall = () => {
  const { achievements, addXP } = useGame()

  useEffect(() => {
    addXP(XP_ACTIONS.VISIT_ZONE)
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
            🏆 Achievement Hall
          </h1>
          <p className="text-gray-400">Unlocked badges and accomplishments</p>
        </motion.div>

        {/* Portfolio Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Portfolio Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(ACHIEVEMENTS).map((achievement, index) => {
              const isUnlocked = achievements.includes(achievement.id)
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: isUnlocked ? 1.05 : 1 }}
                  className={`relative rounded-xl p-6 text-center ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary'
                      : 'bg-dark/50 border border-gray-700 opacity-50'
                  }`}
                >
                  {isUnlocked && (
                    <motion.div
                      className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold mb-2">{achievement.name}</h3>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                  {!isUnlocked && (
                    <p className="text-xs text-gray-500 mt-2">🔒 {achievement.condition}</p>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* External Achievements */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-secondary">Competitive Programming</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {externalAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${achievement.color} p-1 rounded-xl`}
              >
                <div className="bg-dark rounded-xl p-6 text-center">
                  <div className="text-5xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold mb-2">{achievement.name}</h3>
                  <p className="text-sm text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementHall
