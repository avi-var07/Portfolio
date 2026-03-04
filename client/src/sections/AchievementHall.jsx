import { useEffect } from 'react'
import { motion } from 'framer-motion'
import AchievementCard from '../components/AchievementCard'
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
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
          🏆 Achievement Hall
        </h1>
        <p className="text-gray-400">
          Unlocked {achievements.length} of {Object.keys(ACHIEVEMENTS).length} portfolio achievements
        </p>
      </motion.div>

      {/* Portfolio Achievements */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
          <span>🎮</span> Portfolio Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(ACHIEVEMENTS).map((achievement, index) => {
            const isUnlocked = achievements.includes(achievement.id)
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <AchievementCard achievement={achievement} isUnlocked={isUnlocked} />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* External Achievements */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-2">
          <span>⚡</span> Competitive Programming
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {externalAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-30 blur group-hover:opacity-50 transition-opacity`}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${achievement.color} p-1 rounded-2xl`}>
                <div className="bg-dark rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">{achievement.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{achievement.name}</h3>
                  <p className="text-sm text-gray-300">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AchievementHall
